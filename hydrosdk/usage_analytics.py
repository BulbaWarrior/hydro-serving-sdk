import json
import logging
import os
import re
import subprocess
import sys
import time
import uuid

import requests

from hydrosdk import __version__ as HYDROSDK_VERSION, Cluster

logger = logging.getLogger(__name__)

process = subprocess.Popen(["pip", "show", "hydrosdk"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
out, err = process.communicate()
HYDROSDK_LOCATION = re.search(r"Location: (.*)\\nRequires", str(out)).group(1).strip()


def get_user_id() -> str:
    if os.path.exists(f"{HYDROSDK_LOCATION}/.user_uuid"):
        with open(f"{HYDROSDK_LOCATION}/.user_uuid", "r") as f:
            USER_ID = f.read()
    else:
        USER_ID = str(uuid.uuid4())
        with open(f"{HYDROSDK_LOCATION}/.user_uuid", "w+") as f:
            f.write(USER_ID)
    return USER_ID


USER_ID = get_user_id()

AMPLITUDE_URL = "https://api.amplitude.com/httpapi"

PY_VERSION = "{major}.{minor}.{micro}".format(
    major=sys.version_info.major,
    minor=sys.version_info.minor,
    micro=sys.version_info.micro,
)

SESSION_ID = int(round(time.time() * 1000))


def _is_stable_pip_version():
    # TODO check if module is distributed from pip and has a stable version
    return False


# Use dev amplitude key
API_KEY = 'DEV_AMPLITUDE_KEY'  # TODO get dev key
if _is_stable_pip_version():
    # Use prod amplitude key
    API_KEY = "STABLE_AMPLITUDE_KEY"  # TODO get new pip key


def _send_amplitude_event(event_type, event_properties):
    event = [
        {
            "event_type": event_type,
            "user_id": USER_ID,
            "session_id": SESSION_ID,
            "event_properties": event_properties,
            "ip": "$remote",
        }
    ]
    event_data = {"api_key": API_KEY,
                  "event": json.dumps(event)}

    try:
        return requests.post(AMPLITUDE_URL, data=event_data, timeout=1)
    except Exception as err:
        logger.debug(str(err))


def _is_tracking_disabled() -> bool:
    return os.path.exists(f"{HYDROSDK_LOCATION}/.notracking")


def set_up_tracking(enabled=True):
    if enabled:
        if _is_tracking_disabled:
            os.remove(f"{HYDROSDK_LOCATION}/.notracking")
    else:
        with open(f"{HYDROSDK_LOCATION}/.notracking", "w+") as f:
            f.write("@")


def track(event_type, event_properties=None):
    if _is_tracking_disabled():
        return  # Usage tracking disabled

    event_properties = event_properties or {}

    event_properties["py_version"] = PY_VERSION
    event_properties["hydrosdk_version"] = HYDROSDK_VERSION

    return _send_amplitude_event(event_type, event_properties)


def track_connect(cluster: Cluster):
    # TODO call this when a cluster created
    cluster_buildinfo = cluster.build_info()
    # TODO specify info about grpc params ?
    return track('cluster-connect', {"cluster_buildinfo": cluster_buildinfo})


def track_action(action_name):
    return track('action', {"name": action_name})


def track_exception(e: Exception):
    # TODO integrate this into hydrosdk baseException and call in each child exception created
    return track('exception', {"type": type(e),
                               "message": str(e)})

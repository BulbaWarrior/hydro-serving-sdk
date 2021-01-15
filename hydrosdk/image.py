from collections import namedtuple

# DockerImage = namedtuple('DockerImage', ['name', 'tag', 'sha256'])
from hydrosdk.exceptions import IncorrectDefinitionException


class DockerImage(namedtuple('DockerImage', ['name', 'tag', 'sha256'])):
    @staticmethod
    def parse_fullname(image):
        segments_with_sha = image.split('@sha256:')
        segments_with_tag = image.split(':')

        if len(segments_with_sha) == 2 and segments_with_sha[1]:
            return DockerImage(segments_with_sha[0], None, segments_with_sha[1])
        elif len(segments_with_tag) == 2 and segments_with_tag[1]:
            return DockerImage(segments_with_tag[0], segments_with_tag[1], None)
        else:
            raise IncorrectDefinitionException(
                f"Incorrect runtime image {image} (needs to be in format 'name:version' or 'name@sha256:digest')")
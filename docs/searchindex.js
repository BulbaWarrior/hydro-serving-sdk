Search.setIndex({docnames:["getting_help","hydrosdk/hydrosdk","hydrosdk/hydrosdk.application","hydrosdk/hydrosdk.cluster","hydrosdk/hydrosdk.contract","hydrosdk/hydrosdk.data","hydrosdk/hydrosdk.data.conversions","hydrosdk/hydrosdk.data.types","hydrosdk/hydrosdk.errors","hydrosdk/hydrosdk.exceptions","hydrosdk/hydrosdk.host_selector","hydrosdk/hydrosdk.image","hydrosdk/hydrosdk.model","hydrosdk/hydrosdk.monitoring","hydrosdk/hydrosdk.predictor","hydrosdk/hydrosdk.servable","index","quickstart","tutorial","whats_new"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["getting_help.md","hydrosdk/hydrosdk.rst","hydrosdk/hydrosdk.application.rst","hydrosdk/hydrosdk.cluster.rst","hydrosdk/hydrosdk.contract.rst","hydrosdk/hydrosdk.data.rst","hydrosdk/hydrosdk.data.conversions.rst","hydrosdk/hydrosdk.data.types.rst","hydrosdk/hydrosdk.errors.rst","hydrosdk/hydrosdk.exceptions.rst","hydrosdk/hydrosdk.host_selector.rst","hydrosdk/hydrosdk.image.rst","hydrosdk/hydrosdk.model.rst","hydrosdk/hydrosdk.monitoring.rst","hydrosdk/hydrosdk.predictor.rst","hydrosdk/hydrosdk.servable.rst","index.rst","quickstart.md","tutorial.md","whats_new.rst"],objects:{"hydrosdk.application":{Application:[2,1,1,""],ApplicationDef:[2,1,1,""],ApplicationStatus:[2,1,1,""],streaming_params:[2,3,1,""]},"hydrosdk.application.Application":{"delete":[2,2,1,""],app_json_to_app_obj:[2,2,1,""],create:[2,2,1,""],find_by_name:[2,2,1,""],list_all:[2,2,1,""],parse_application:[2,2,1,""],parse_model_variant:[2,2,1,""],parse_model_variant_list:[2,2,1,""],parse_pipeline:[2,2,1,""],parse_pipeline_stage:[2,2,1,""],parse_singular:[2,2,1,""],parse_singular_app:[2,2,1,""],parse_streaming_params:[2,2,1,""]},"hydrosdk.application.ApplicationDef":{executionGraph:[2,2,1,""],kafkaStreaming:[2,2,1,""],name:[2,2,1,""]},"hydrosdk.cluster":{Cluster:[3,1,1,""]},"hydrosdk.cluster.Cluster":{build_info:[3,2,1,""],connect:[3,2,1,""],grpc_insecure:[3,2,1,""],grpc_secure:[3,2,1,""],request:[3,2,1,""],safe_buildinfo:[3,2,1,""]},"hydrosdk.contract":{AnyDimSize:[4,1,1,""],ContractViolationException:[4,4,1,""],ProfilingType:[4,1,1,""],SignatureBuilder:[4,1,1,""],are_dtypes_compatible:[4,3,1,""],are_shapes_compatible:[4,3,1,""],attach_ds:[4,3,1,""],contract_from_dict:[4,3,1,""],contract_from_dict_yaml:[4,3,1,""],contract_to_dict:[4,3,1,""],field_from_dict:[4,3,1,""],field_from_dict_new:[4,3,1,""],field_to_dict:[4,3,1,""],mock_input_data:[4,3,1,""],parse_field:[4,3,1,""],shape_to_dict:[4,3,1,""],signature_to_dict:[4,3,1,""],validate:[4,3,1,""]},"hydrosdk.contract.SignatureBuilder":{build:[4,2,1,""],with_input:[4,2,1,""],with_output:[4,2,1,""]},"hydrosdk.data":{types:[7,0,0,"-"]},"hydrosdk.errors":{InvalidYAMLFile:[8,4,1,""]},"hydrosdk.exceptions":{MetricSpecException:[9,4,1,""],ServableException:[9,4,1,""]},"hydrosdk.image":{DockerImage:[11,1,1,""]},"hydrosdk.image.DockerImage":{name:[11,2,1,""],sha256:[11,2,1,""],tag:[11,2,1,""]},"hydrosdk.model":{BuildStatus:[12,1,1,""],ExternalModel:[12,1,1,""],LocalModel:[12,1,1,""],Metricable:[12,1,1,""],Model:[12,1,1,""],UploadResponse:[12,1,1,""],read_yaml:[12,3,1,""],resolve_paths:[12,3,1,""]},"hydrosdk.model.ExternalModel":{create:[12,2,1,""],delete_by_id:[12,2,1,""],ext_model_json_to_ext_model:[12,2,1,""],find_by_name:[12,2,1,""]},"hydrosdk.model.LocalModel":{create:[12,2,1,""],from_file:[12,2,1,""],model_json_to_upload_response:[12,2,1,""],upload:[12,2,1,""]},"hydrosdk.model.Metricable":{as_metric:[12,2,1,""],with_metrics:[12,2,1,""]},"hydrosdk.model.Model":{delete_by_id:[12,2,1,""],find:[12,2,1,""],find_by_id:[12,2,1,""],list_models:[12,2,1,""],to_proto:[12,2,1,""]},"hydrosdk.model.UploadResponse":{building:[12,2,1,""],get_status:[12,2,1,""],logs:[12,2,1,""],not_ok:[12,2,1,""],ok:[12,2,1,""],set_status:[12,2,1,""]},"hydrosdk.monitoring":{MetricModel:[13,1,1,""],MetricSpec:[13,1,1,""],MetricSpecConfig:[13,1,1,""],TresholdCmpOp:[13,1,1,""]},"hydrosdk.monitoring.MetricSpec":{"delete":[13,2,1,""],create:[13,2,1,""],get:[13,2,1,""],list_all:[13,2,1,""],list_for_model:[13,2,1,""]},"hydrosdk.predictor":{AbstractPredictor:[14,1,1,""],GRPCPredictor:[14,1,1,""],JSONPredictor:[14,1,1,""],ShadowlessGRPCPredictor:[14,1,1,""]},"hydrosdk.servable":{Servable:[15,1,1,""],ServableStatus:[15,1,1,""]},"hydrosdk.servable.Servable":{"delete":[15,2,1,""],create:[15,2,1,""],get:[15,2,1,""],list:[15,2,1,""],model_version_json_to_servable:[15,2,1,""]},hydrosdk:{application:[2,0,0,"-"],cluster:[3,0,0,"-"],contract:[4,0,0,"-"],data:[5,0,0,"-"],errors:[8,0,0,"-"],exceptions:[9,0,0,"-"],host_selector:[10,0,0,"-"],image:[11,0,0,"-"],model:[12,0,0,"-"],monitoring:[13,0,0,"-"],predictor:[14,0,0,"-"],servable:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception"},terms:{"class":[2,3,4,9,11,12,13,14,15],"default":18,"enum":[2,4],"final":18,"float":13,"function":12,"import":[17,18],"int":[12,13,18],"new":[0,16,18],"return":[2,3,4,12,13,15,18],"static":[2,3,12,13,15],"true":18,And:18,For:[17,18],Such:18,The:[3,17],Use:3,Using:16,_localmodel__upload:18,about:[2,12,18],absolut:12,abstractpredictor:14,activ:[2,12,13,15],add:[4,12],addit:3,address:[3,17,18],after:18,alia:[2,11],all:[2,12,13,15,17,18],alreadi:0,also:17,altern:0,anoth:18,answer:0,anydims:4,api:16,app:17,app_json_to_app_obj:2,app_nam:2,append:12,applic:[1,15,16,17],application_json:2,applicationdef:2,applicationstatu:2,are_dtypes_compat:4,are_shapes_compat:4,arg:3,arrai:4,as_metr:12,attach:16,attach_d:4,attempt:0,author:0,avail:[0,2,13],base:[2,3,4,9],been:0,befor:18,behav:18,bool:[4,12,13],both:18,bug:19,build:[3,4,12,18],build_info:3,buildstatu:12,calcul:18,call:18,can:[0,12,15,17,18,19],captur:18,channel:[3,14],check:[0,3,12,18],client:18,cluster:[1,2,12,13,15,16,17,18],code:16,com:17,combin:18,comment:0,compar:[4,12,13,18],comparis:4,comparison:[4,13,18],compat:4,complet:17,compress:3,concept:[2,12,15],config:[13,18],configur:[16,18],connect:[3,16,17],connectionerror:3,consid:18,consum:12,contact:0,content:16,contract:[1,12,16,18],contract_from_dict:4,contract_from_dict_yaml:4,contract_to_dict:4,contractviolationexcept:4,convers:5,could:15,cover:17,creat:[2,3,4,12,13,15,17,18],creation:3,credenti:3,csv:17,current:12,data:[4,17,18,19],data_dict:4,def:[2,18],defin:18,definit:[2,12],delet:[2,12,13,15],delete_by_id:12,deploi:[16,17,19],deseri:[2,4,12,15],design:17,detail:17,develop:[16,18],dict:[2,4,12,15],did:18,dim:4,dimens:4,doc:[2,12,15,17,18],dockerimag:[11,18],don:17,doubl:18,dtype:4,dummi:4,each:12,easi:[16,17],easili:19,effort:18,element:12,enabl:16,endpoint:[2,15],engin:18,entri:18,enumer:2,environ:18,error:[1,4,16],error_messag:4,establish:17,everi:12,exampl:17,except:[1,2,4,8,12,16],execution_graph:2,executiongraph:2,explor:18,expos:15,ext:12,ext_model_json:12,ext_model_json_to_ext_model:12,extern:12,externalmodel:12,extmodel:12,extra:13,factori:3,fals:[4,17],fashion:0,feel:0,field:[2,4,11,13],field_from_dict:4,field_from_dict_new:4,field_to_dict:4,file:[2,8,12,18],find:12,find_by_id:[12,18],find_by_nam:[2,12,17],finish:18,first:[0,4,17,18],fix:19,follow:17,format:3,found:13,four:15,free:0,freshli:18,from:[2,4,12,15,17,18,19],from_fil:12,func:18,func_main:18,gatewai:3,gener:0,get:[12,13,15,16,18],get_statu:12,git:17,github:[0,16,17],gitter:0,grpc:[3,15],grpc_insecur:3,grpc_secur:3,grpcpredictor:14,has:0,have:[13,17,18],haven:[17,18],healthi:18,help:16,here:[17,18],host_selector:[1,16],how:[12,17,18],html:[2,12,15,17,18],http:[2,12,15,17,18],hydro:17,hydro_serving_grpc:[4,12],hydrosdk:18,hydrospher:[2,12,15,17,18],hydrospheredata:17,id_:12,imag:[1,16,18],imagin:18,in_dict:2,in_list:2,in_top:2,incom:18,index:[16,17,18],infer:[16,17],info:[2,3],inform:[17,18],inherit:[5,7,8,9,10,11,12,13,14,15],input:[2,4,12,18],input_:18,insecur:3,instal:[16,18],install_command:12,instanc:[3,15,18],interact:3,interfac:18,invalid:[4,8,12],invalidyamlfil:[8,12],is_valid:4,issu:0,iter:12,itertupl:17,its:13,itself:15,json:[2,3,12,15],jsondecodeerror:3,jsonpredictor:14,kafka:15,kafka_stream:2,kafkastream:2,know:18,kwarg:3,last:12,latest:[2,12,15,17,18],launch:[17,18],learn:[12,17,18],let:18,lifecycl:16,like:18,list:[2,4,12,13,15,17],list_al:[2,13],list_for_model:13,list_model:[12,17],load:17,local:[12,16],localmodel:[12,17,18],log:12,look:18,machin:12,main:18,make:[12,17,18],manag:[3,16,17],math:18,messag:4,metadata:[2,12,15],method:[2,3,18],metric:[9,12,13,17,18],metric_config:18,metric_spec:18,metric_spec_id:13,metricmodel:[12,13],metricspec:[12,13,18],metricspecconfig:[13,18],metricspecexcept:[9,12,13],mock_input_data:4,model:[1,2,4,13,15,16,17,19],model_contract_pb2:[4,12],model_field_pb2:4,model_id:12,model_json:12,model_json_to_upload_respons:12,model_nam:[4,15,18],model_obj:12,model_signature_pb2:4,model_vers:[15,18],model_version_id:13,model_version_json_to_serv:15,modelcontract:[4,12,18],modelfield:4,modelsignatur:4,modul:[1,16],monitor:[1,12,16],monitoring_model:18,monitoring_upload_respons:18,more:[17,18],moreov:18,msg:8,multiplication_model:18,must:17,mv_json:15,name:[2,4,11,12,13,15,17,18],necessari:[2,18],need:18,neg:18,next:18,non:18,none:[3,4,12,13,15,18],not_avail:15,not_eq:18,not_ok:12,not_serv:15,nout:13,now:[17,18,19],number:[2,11],obj:[4,12,13],object:[2,3,4,12,15,16,17,18],ofr:2,old:4,one:[15,18],open:0,oper:[13,18],option:[3,4,12],organis:18,orient:16,other:[17,19],otherwis:[12,18],our:18,out:[17,18],out_top:2,output:[2,4,18],outsid:12,over:12,overview:[2,12,15],pack:18,packag:16,page:16,panda:17,param:[12,15],paramet:[2,3,4,12,13,15],pars:2,parse_appl:2,parse_field:4,parse_model_vari:2,parse_model_variant_list:2,parse_pipelin:2,parse_pipeline_stag:2,parse_singular:2,parse_singular_app:2,parse_streaming_param:2,part:[2,18],pass:[4,12],path:[12,17,18],payload:[12,18],payload_el:12,pip:17,pipelin:2,pipielin:2,platform:[12,16,17,18],pleas:[0,18],point:18,predict:[4,12,17,18],predictor:[1,16,17,18,19],prefer:3,prevent:18,previous:18,print:[17,18],proceed:18,process:12,produc:12,profil:4,profilingtyp:4,properli:3,properti:[2,11],provid:[2,12,16,17,18],publicli:2,put:18,pypi:16,python:[16,18,19],qualiti:18,question:0,quickstart:16,rais:[2,3,4,8,12,13,15],random:18,rang:18,rank:4,reach:2,read:12,read_csv:17,read_yaml:12,reason:0,receiv:[2,12],record:12,rel:12,releas:17,repositori:16,request:[3,12,13,15],res:3,resolve_path:12,resolved_path:12,respond:0,respons:[2,3,15],result:[3,4,13,15,18],result_dict:4,root:18,row:17,run:[12,17,18],runtim:[12,18],safe_buildinfo:3,sampl:16,save:12,scalar:18,script:18,sdk:17,search:[2,16],section:[17,18],secur:3,see:0,self:[4,12,13],send:[3,12,13,15,17,18,19],sent:[3,18],serial:4,serv:[2,12,15,17,18],servabl:[1,9,13,16,18],servable_nam:15,servableexcept:[9,15],servablestatu:15,server:[2,3,12,13,15],servic:2,set:12,set_statu:12,setup:18,sha256:11,shadow:18,shadowlessgrpcpredictor:14,shape:4,shape_to_dict:4,should:[4,18],show:[5,7,8,9,10,11,12,13,14,15,18],signatur:[4,14,18],signature_nam:4,signature_to_dict:4,signaturebuild:[4,18],similarli:18,simplic:18,singl:18,singular:2,situat:18,solut:0,someth:12,sonar:3,spec:[9,13],specif:13,specifi:18,sqrt:18,sqrt_local_model:18,sqrt_model:18,sqrt_servabl:18,squar:18,src:18,stage:2,stage_dict:2,start:15,state:15,statu:[2,12,15],status:12,status_messag:15,stopiter:12,store:18,str:[12,13],streaming_param:2,streamingparam:2,strict:4,strictli:18,structur:18,subfield:4,successfuli:18,successfulli:18,tag:11,target_nam:14,tensor:4,tensorshapeproto:4,test:[4,18],them:18,thi:[4,18],thing:19,thrash:18,threshold:[12,13,18],threshold_op:13,through:[17,18],time:0,to_proto:12,togeth:18,topic:[2,17],training_data:12,transform:12,tresholdcmpop:[13,18],tupl:2,turn:12,tutori:16,type:[3,4,5,18],typeerror:4,understand:17,union:13,unknown:4,upload:[12,16],upload_resp:12,upload_respons:18,uploadrespons:12,url:[3,14],use:[16,17,18],used:[4,15,18],uses:18,valid:[3,4,12],valu:18,valueerror:[2,4,12],variabl:18,variant:2,variou:15,version:[2,4,12,13,15,17,18],version_id:12,via:17,violat:4,web:18,weight:2,went:12,what:16,when:[4,8],where:18,whether:[4,18],which:[15,17,18],why:18,with_input:[4,18],with_intput:18,with_metr:12,with_output:[4,18],work:8,worri:17,write:18,written:18,wrong:[2,12],yaml:[2,4,8,12],yet:[12,18],you:[0,17,18,19],your:[0,2,15,16,17,19]},titles:["Getting Help","hydrosdk package","hydrosdk.application module","hydrosdk.cluster module","hydrosdk.contract module","hydrosdk.data package","hydrosdk.data.conversions module","hydrosdk.data.types module","hydrosdk.errors module","hydrosdk.exceptions module","hydrosdk.host_selector module","hydrosdk.image module","hydrosdk.model module","hydrosdk.monitoring module","hydrosdk.predictor module","hydrosdk.servable module","hydrosdk - SDK for Hydrosphere.io","Quickstart","Sample tutorial","What\u2019s new in 2.3.0"],titleterms:{"new":19,Using:17,applic:2,attach:18,cluster:3,code:18,connect:18,content:5,contract:4,convers:6,data:[5,6,7],deploi:18,error:8,except:9,get:0,help:0,host_selector:10,hydrosdk:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],hydrospher:16,imag:11,indic:16,infer:18,instal:17,local:18,model:[12,18],modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15],monitor:[13,18],packag:[1,5],predictor:14,quickstart:17,sampl:18,sdk:16,servabl:15,submodul:5,tabl:16,tutori:18,type:7,upload:18,what:19,your:18}})
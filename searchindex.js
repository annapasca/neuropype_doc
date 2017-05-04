Search.setIndex({envversion:46,filenames:["cinq/cinq","ephypype/includeme","ephypype/neuropype_ephy","ephypype/neuropype_ephy.interfaces","ephypype/neuropype_ephy.interfaces.mne","ephypype/neuropype_ephy.nodes","ephypype/neuropype_ephy.pipelines","ephypype/pipelines/nodes/inv_solution","ephypype/pipelines/power","ephypype/pipelines/preproc_meeg","ephypype/pipelines/source_reconstruction","ephypype/pipelines/spectral_connectivity","examples/conn_graph_example","examples/epoch_example","examples/examples","examples/inv_example","examples/params","examples/power_example","examples/preproc_example","graphpype/coclass","graphpype/conmat_to_graph","graphpype/correl_mat","graphpype/graph_stats","graphpype/includeme","graphpype/index","graphpype/intmat_to_graph","graphpype/modularity","graphpype/nii_to_conmat","graphpype/plot_igraph","graphpype/radatools","index"],objects:{"neuropype_ephy.aux_tools":{nostdout:[2,3,1,""],suppress_stdout_stderr:[2,2,1,""]},"neuropype_ephy.compute_fwd_problem":{compute_fwd_sol:[2,3,1,""]},"neuropype_ephy.compute_inv_problem":{compute_ROIs_inv_sol:[2,3,1,""],compute_noise_cov:[2,3,1,""],read_noise_cov:[2,3,1,""]},"neuropype_ephy.fif2ts":{ep2ts:[2,3,1,""]},"neuropype_ephy.import_ctf":{convert_ds_to_raw_fif:[2,3,1,""]},"neuropype_ephy.interfaces":{mne:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne":{Inverse_solution:[4,0,0,"-"],LF_computation:[4,0,0,"-"],power:[4,0,0,"-"],preproc:[4,0,0,"-"],spectral:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne.Inverse_solution":{InverseSolution:[4,2,1,""],NoiseCovariance:[4,2,1,""]},"neuropype_ephy.interfaces.mne.LF_computation":{LFComputation:[4,2,1,""]},"neuropype_ephy.interfaces.mne.power":{Power:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc":{CompIca:[4,2,1,""],CompIcaInputSpec:[4,2,1,""],CompIcaOutputSpec:[4,2,1,""],CreateEp:[4,2,1,""],CreateEpInputSpec:[4,2,1,""],CreateEpOutputSpec:[4,2,1,""],PreprocFif:[4,2,1,""],PreprocFifInputSpec:[4,2,1,""],PreprocFifOutputSpec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc.CompIca":{input_spec:[4,1,1,""],output_spec:[4,1,1,""]},"neuropype_ephy.interfaces.mne.preproc.CreateEp":{input_spec:[4,1,1,""],output_spec:[4,1,1,""]},"neuropype_ephy.interfaces.mne.preproc.PreprocFif":{input_spec:[4,1,1,""],output_spec:[4,1,1,""]},"neuropype_ephy.interfaces.mne.spectral":{PlotSpectralConn:[4,2,1,""],SpectralConn:[4,2,1,""]},"neuropype_ephy.nodes":{import_data:[5,0,0,"-"],ts_tools:[5,0,0,"-"]},"neuropype_ephy.nodes.import_data":{ConvertDs2Fif:[5,2,1,""],ConvertDs2FifInputSpec:[5,2,1,""],ConvertDs2FifOutputSpec:[5,2,1,""],Ep2ts:[5,2,1,""],Ep2tsInputSpec:[5,2,1,""],Ep2tsOutputSpec:[5,2,1,""],ImportBrainVisionAscii:[5,2,1,""],ImportBrainVisionAsciiOutputSpec:[5,2,1,""],ImportMat:[5,2,1,""],ImportMatInputSpec:[5,2,1,""],ImportMatOutputSpec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.ConvertDs2Fif":{input_spec:[5,1,1,""],output_spec:[5,1,1,""]},"neuropype_ephy.nodes.import_data.Ep2ts":{input_spec:[5,1,1,""],output_spec:[5,1,1,""]},"neuropype_ephy.nodes.import_data.ImportBrainVisionAscii":{output_spec:[5,1,1,""]},"neuropype_ephy.nodes.import_data.ImportMat":{input_spec:[5,1,1,""],output_spec:[5,1,1,""]},"neuropype_ephy.nodes.ts_tools":{SplitWindows:[5,2,1,""]},"neuropype_ephy.pipelines":{brain_vision_to_conmat:[6,0,0,"-"],fif_to_inv_sol:[6,0,0,"-"],power:[6,0,0,"-"],preproc_meeg:[6,0,0,"-"],ts_to_conmat:[6,0,0,"-"]},"neuropype_ephy.pipelines.brain_vision_to_conmat":{create_pipeline_brain_vision_ascii_to_spectral_connectivity:[6,3,1,""],create_pipeline_brain_vision_vhdr_to_spectral_connectivity:[6,3,1,""]},"neuropype_ephy.pipelines.fif_to_inv_sol":{create_pipeline_source_reconstruction:[6,3,1,""]},"neuropype_ephy.pipelines.power":{create_pipeline_power:[6,3,1,""]},"neuropype_ephy.pipelines.preproc_meeg":{create_pipeline_preproc_meeg:[6,3,1,""]},"neuropype_ephy.power":{compute_and_save_psd:[2,3,1,""]},"neuropype_ephy.preproc":{compute_ica:[2,3,1,""],create_epochs:[2,3,1,""],create_events:[2,3,1,""],generate_report:[2,3,1,""],preprocess_fif:[2,3,1,""]},"neuropype_graph.interfaces.plot_igraph.plots":{PlotIGraphCoclass:[28,2,1,""],PlotIGraphConjCoclass:[28,2,1,""],PlotIGraphModules:[28,2,1,""]},"neuropype_graph.interfaces.radatools.rada":{NetPropRada:[29,2,1,""],PrepRada:[29,2,1,""]},"neuropype_graph.nodes.coclass":{DiffMatrices:[19,2,1,""],PlotCoclass:[19,2,1,""],PrepareCoclass:[19,2,1,""]},"neuropype_graph.nodes.correl_mat":{ComputeConfCorMat:[21,2,1,""],ConcatTS:[21,2,1,""],ExtractMeanTS:[21,2,1,""],ExtractTS:[21,2,1,""],FindSPMRegressor:[21,2,1,""],IntersectMask:[21,2,1,""],MergeTS:[21,2,1,""],SeparateTS:[21,2,1,""]},"neuropype_graph.nodes.graph_stats":{ShuffleMatrix:[22,2,1,""],SwapLists:[22,2,1,""]},"neuropype_graph.nodes.modularity":{ComputeNetList:[26,2,1,""],ComputeNodeRoles:[26,2,1,""]},"neuropype_graph.pipelines.conmat_to_graph":{create_pipeline_conmat_to_graph_density:[20,3,1,""]},"neuropype_graph.pipelines.intmat_to_graph":{create_pipeline_intmat_to_graph_threshold:[25,3,1,""]},"neuropype_graph.pipelines.nii_to_conmat":{create_pipeline_nii_to_conmat:[27,3,1,""],create_pipeline_nii_to_weighted_conmat:[27,3,1,""]},neuropype_ephy:{aux_tools:[2,0,0,"-"],compute_fwd_problem:[2,0,0,"-"],compute_inv_problem:[2,0,0,"-"],fif2ts:[2,0,0,"-"],import_ctf:[2,0,0,"-"],import_mat:[2,0,0,"-"],import_txt:[2,0,0,"-"],interfaces:[3,0,0,"-"],power:[2,0,0,"-"],preproc:[2,0,0,"-"],spectral:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:function"},terms:{"5000e":16,"__main__":[12,17,18],"__name__":[12,17,18],"_sess_index_":18,"_subject_id_":18,"boolean":[5,6],"class":[2,4,5,19,21,22,26,28,29],"default":[4,5,6,19,21,28],"enum":4,"export":[4,5,6],"float":[2,4,6,21,26],"function":[1,2,4,6,8,9,10,11,12,19,21,26,28,29,30],"import":[2,5,12,16,17,18],"int":[2,4,5,6],"new":18,"return":[2,4,5,12,17,18],"true":[2,4,5,6,12,16,17,18,20,21,26,27],about:2,accord:[2,4,6,14],activ:2,add:4,adjac:6,advanc:30,after:[2,4,14,21],algorithm:[2,9],alia:[4,5],all:[2,4,5,14,16,21],allow:[2,10],alon:30,alpha:16,also:[6,9],amplitud:6,analys:[2,30],analysi:[1,2,6,11],analysis_nam:25,analyz:[2,4],annapasca:[1,30],anoth:30,aparc:[2,6],appli:[6,16],arg:2,around:21,arrai:2,artefact:[2,9],artifact:[2,6,16],ascii:[5,6],aseg:[2,4,6],aseg_label:[2,4,6],associ:4,atla:[2,4,6],automat:[2,6,9,16],aux:2,averag:[2,4,6],band:[4,16],base:[2,4,6,9,14,30],base_dir:[12,17,18],base_directori:[12,17,18],basenam:2,befor:[2,4,10,17,18],behav:5,belong:21,below:[17,21],bem:2,beta:16,between:[5,6,21],bid:14,bigger:30,binari:21,bold:21,bool:[2,4,5,6,21],brain:[5,14,30],brainvis:[5,6],calcul:2,can:[1,9,10,14,18,30],capit:5,cat:29,centroid:2,channel:[6,16],channel_coords_fil:12,channel_names_fil:12,channelflag:5,check:6,choic:[2,4,6],choos:5,clean:[2,10,18],clone:[1,30],coclassif:[19,28],code:[17,18],coh:[4,6,16],cohi:[4,16],collect:2,color:[12,17,18],com:[1,30],command:[29,30],common:30,commonli:30,community_rada:12,compat:1,compica:4,compicainputspec:4,compicaoutputspec:4,compil:2,compon:[6,9,18],comput:[2,4,6,8,9,10,16,17,21,26],compute_and_save_psd:2,compute_fwd_sol:2,compute_ica:2,compute_noise_cov:2,compute_rois_inv_sol:2,computenetlist:24,computenoderol:24,con_den:[12,20],con_method:[4,6,12,16],concatenated_run:27,concen:21,condit:21,conf_cor_mat_fil:21,conf_interval_prob:[21,27],confid:21,config:[12,17,18],conmat:4,conmat_fil:[4,12],conmat_to_graph:12,connect:[2,4,6,10],connectivti:4,consid:4,contact:[5,6],contain:[2,4,6,21],context:2,continu:2,convert:[2,5,9],convert_ds_to_raw_fif:2,convertds2fif:5,convertds2fifinputspec:5,convertds2fifoutputspec:5,convertor:2,coord:[21,28],coord_rois_fil:21,coordiant:[26,28],coordin:[2,21,28],coords_fil:[12,26],coords_rois_fil:21,cor_mat_fil:21,correct:9,correl:16,correl_analysis_nam:[12,16],correl_mat:21,correspond:26,cortic:[2,4,6],could:18,cov_filenam:[2,4],cov_fnam:2,cov_fname_in:4,covari:[2,4,6],covarianca:4,cpu:18,creat:[2,4,6,17,18],create_datasourc:[12,17,18],create_epoch:[2,4],create_ev:2,create_infosourc:[12,17,18],create_main_workflow_pow:17,create_main_workflow_spectral_modular:12,create_noise_cov:10,create_pipeline_brain_vision_ascii_to_spectral_connect:6,create_pipeline_brain_vision_vhdr_to_spectral_connect:6,create_pipeline_conmat_to_graph_dens:12,create_pipeline_intmat_to_graph_threshold:24,create_pipeline_nii_to_conmat:24,create_pipeline_nii_to_weighted_conmat:24,create_pipeline_pow:[6,8,17],create_pipeline_preproc_meeg:[6,9,18],create_pipeline_source_reconstruct:[6,10],create_pipeline_time_series_to_spectral_connect:[11,12],create_t:12,create_ts_nod:12,create_workflow_preproc:18,createep:4,createepinputspec:4,createepoutputspec:4,criteria:2,csf:21,ctf:2,cumul:6,current:2,cut:6,data:[2,4,6,8,9,10,12],data_field_nam:5,data_path:[12,16,17,18],data_typ:[6,16,18],datagrabb:[12,17,18],dataset:14,datasourc:[12,17,18],datataset:14,davidmeunier79:[1,30],decomposit:9,deep:2,def:[12,17,18],defin:[2,4,6,10,30],definit:4,defualt:[4,6],deim:29,delta:16,densiti:[2,4,6,8,17,26],desc:[4,5,21,26],dev:1,develop:[1,30],dict:[2,4,6,12,16,17,18],dictionari:[2,4,6],differ:[9,30],dipol:10,dir:[9,16],directori:[2,4,6,8,9,16,18],dmalt:30,done:6,down_sfreq:[2,6,16,18],download:[1,14,16,17,18],downloadandinstal:1,downsampl:[2,6,16],ds2fif:9,ds_file:2,dspm:[2,4,6],each:[5,6,9,10,30],easi:30,ecg:[6,16],ecg_ch_nam:[2,6,16,18],ecg_evok:2,ecg_ind:2,ecg_scor:2,edu:1,eeg:[2,6,9,30],either:[9,10],elec_names_fil:5,electa:5,electrod:[5,6],electrophysiolog:[1,2,30],emploi:2,empti:2,end:4,engin:[12,17,18,30],eog:[6,16],eog_ch_nam:[2,6,16,18],eog_evok:2,eog_ind:2,eog_scor:2,ep2t:[2,5],ep2tsinputspec:5,ep2tsoutputspec:5,ep_length:2,ephi:5,ephypyp:1,epo:[2,4,6,17],epoch:[2,4,5,6,8,10],epoch_length:2,epoch_window_length:[4,12,16],epochs_fnam:2,estim:10,even:2,event:[2,4,6],events_id:[2,4,6],evok:4,exampl:[0,2,8,9,11],except:2,exclud:[6,9,18],execut:[12,17,18],exist:[4,5,21,26,30],exit:2,explain:6,export_to_matlab:4,extract:[19,21,22],facilit:30,fals:[2,4,6,12,16,17,18,20,21,25,26],fast:30,field:[2,4],fif:[2,4,5,6,8,9,12,16,17,18,30],fif_fil:[2,17],file:[2,4,5,9,14],file_4d:21,filenam:[2,4,6,17,18],fill:6,filter:[2,6,9,14],filter_gm_threshold:27,filter_mask:21,filter_mask_fil:21,filter_spectr:6,filter_thr:21,filtered_coords_rois_fil:21,filtered_indexed_rois_fil:21,filtered_labels_rois_fil:21,filtered_mni_coords_rois_fil:21,filtermask:21,fine:9,fisher:21,flag:9,fmax:[2,6,16,17],fmin:[2,6,16,17],fmri:30,fname:2,focu:30,folder:2,follow:[1,17,18],format:[2,4,5,6,8,9,16,17,18,19,21,22,26,29,30],fortran:2,forward:[2,4],found:9,framework:30,freq_band:[4,12,16],freq_band_nam:[12,16],frequenc:[4,6,8,16,17],from:[1,2,4,5,6,9,10,12],fruchterman:28,fswiki:1,full:2,fwd_filenam:[2,4],gamma1:16,gamma2:16,gener:[2,9,19,21],generate_report:2,get:[8,9,11],get_freq_band:12,git:[1,30],github:[1,30],given:[4,21,29],gomez:29,good:9,good_channels_field_nam:5,grab:18,grad:[6,16],graph2us:[12,17,18],graph:11,graph_den_pip:[12,20],graphic:28,grei:21,grid:10,group:28,h_freq:[2,6,16,18],had:6,half:28,harvard:1,have:[6,16,19,21,22],heart:[2,9],heog:16,here:[9,16],high:6,higher:21,how:[8,9,11],html:[1,18,28],http:[1,28,29,30],ica:[2,4,6,9,12,14],ico:[4,6],identityinterfac:[12,17,18],igraph:28,ijk:21,ijk_coord:21,imag:[14,30],imcoh:[4,16],implement:[2,8,9,11,17,18,30],importbrainvisionascii:5,importbrainvisionasciioutputspec:5,importmat:5,importmatinputspec:5,importmatoutputspec:5,includ:[2,4,6,9,18,30],independ:5,index:[4,12,21,24,30],indexed_rois_fil:21,individu:10,infield:[12,17,18],info:[12,17,18],inform:[2,4,30],infosourc:[12,17,18],input:[2,4,5,6,8,9,10,12,17,18,19,21,22,26,28,29,30],input_nam:12,input_spec:[4,5],inputnod:[12,17,18],inspect:[9,18],install_mne_c:1,instanc:6,instruct:1,int_graph_thr_pip:25,integ:[5,26],interest:[6,17,19,21,22],interfac:2,interv:[2,4,6,21],intmat_to_graph:24,intraeeg:[5,6],inv_method:[2,4,6],inv_sol_pipelin:6,inv_solut:10,invers:[2,4,6],inverse_solut:3,inversesolut:4,ipynb:18,ipynb_report:18,is_epoch:[2,4,6,16,17],is_evok:[2,4,6],is_ica:[6,16],is_sensor_spac:[4,6,12],is_set_ica_compon:6,iter:[12,17,18],jupyt:[9,18],just:2,k_neigh:6,keep:21,kei:6,kept:[4,21],kill:2,kind:16,kit:30,kwarg:[4,5],kwd:2,l_freq:[2,6,16,18],label:[4,19,21,22,28],label_coords_fil:2,label_names_fil:2,labels_fil:[2,4,12,21],labels_rois_fil:21,later:1,launch:29,lead:[2,4],leadfield:2,learn:1,least:2,lego:[6,30],length:2,let:2,letter:5,level:2,lf_comput:3,lfcomput:4,librari:2,line:[4,30],link:[14,17],linuxinstal:1,list:[2,4,5,6,14],load:2,local:18,lol:26,look:9,low:6,mag:[6,16],main:[2,6,9,16,17,30],main_path:[6,12,16,17,18,20,25,27],main_workflow:[12,17,18],mainli:2,manag:2,mandatori:[4,5,21,26],mani:30,martino:1,mask:[19,21,22],mat:[4,5],matlab:[5,30],matric:[4,16,19,21,30],matrix:[2,4,5,6,10,19,20,25,26,27,28],matter:21,max:[4,6,17,19],mayb:30,mean:[19,21,22],mean_masked_ts_fil:21,meg:[2,9,12,16,17,18,30],meg_data:16,merg:21,method:[2,4,6,8,17],metric:4,mgh:1,min:[4,6,17,19],min_bold_intens:21,mix:[2,4,6],mni:21,mni_coord:21,mni_coords_rois_fil:21,mod:[12,20,25],modal:30,modular:24,more:[2,9,30],movement:21,mri:10,mult_regnam:27,multi:[20,30],multi_con:[4,6],multipl:4,multiproc:[12,17,18],multitap:[6,8,17],n_comp_exclud:6,n_compon:2,n_fft:2,n_job:2,n_overlap:2,n_proc:[12,17,18],n_r:[2,4],n_window:[5,6],name:[2,4,5,6,12,16,17,18,21],nb_line:4,ndarrai:5,ndarri:5,need:[10,14],net:[26,29],net_list_fil:26,netproprada:24,network:[26,28,29],network_properti:29,neural:10,neuro:30,neurodaddi:24,neuroimag:30,neuropyp:1,nifti:[19,21,22,27],nii:21,nii_to_conmat:24,nii_to_weighted_conmat:27,nio:[12,17,18],nipyp:[1,12,17,18,30],nmr:1,node:[2,4],nois:[2,4,6],noise_cov:2,noise_cov_fnam:6,noisecovari:4,non:21,none:[2,4,6,29],normal:[5,21,26],nostdout:2,notebook:[9,18],now:1,npy:[2,4,5,21,30],npz:8,number:5,numpi:[1,2,5,21,30],off:6,omega:[14,16],ongo:2,onli:[1,21],open:30,oper:[2,4],optim_seq:[12,20],option:[19,28],optionn:21,org:[1,28],organ:14,origin:[2,26],otherwis:[6,17,28],out:6,outfield:[12,17,18],outout:6,output:[2,4,5,6,8,9,10,18,21,26,30],output_nam:12,output_spec:[4,5],page:[24,30],pajek:29,param:[12,14],paramet:[2,4,6,9,14],params_ica:[16,18],params_pow:[16,17],parc:[2,4,6],parcel:[2,4,6],particular:[9,10,14,30],partit:26,pass:[17,18],path:[6,14],peak:6,percent:21,percent_sign:21,percentag:6,perform:[2,6,9,10,18],permut:22,php:29,pick:2,pickl:21,pip:[1,30],pipeline_nam:[6,20,27],plan:1,pli2_unbias:[4,16],pli:[4,16],plot:[4,12,19,20,21,25,28],plot_circular_connect:[4,6,11],plot_conmat_fil:4,plot_fig:21,plot_igraph:24,plot_mat:21,plotigraphcoclass:24,plotigraphconjcoclass:24,plotigraphmodul:24,plotspectralconn:4,plugin:[12,17,18],plugin_arg:[12,17,18],plv:[4,16],point:5,possibl:[2,4,6,9,18,30],power_analysis_nam:[16,17],power_method:[16,17],power_pipelin:16,power_workflow:17,ppc:[4,16],pre:2,prepar:22,preprada:24,preproc_pipeline_nam:[16,18],preproc_workflow:18,preprocess:[2,4,6],preprocess_fif:[2,4],preprocessing_pipelin:16,preprocfif:4,preprocfifinputspec:4,preprocfifoutputspec:4,present:21,print:[2,12],process:[2,30],proj:2,project:[14,30],proper:24,properti:[20,25,29],provid:[2,14,28,30],psd:[2,6,8,14],psd_multitap:8,psd_welch:8,python2:1,python3:1,python:[1,2,4,8,9,10,17,18,30],rada:29,radatool:[24,26],radatools_optim:[12,25],rais:2,rang:19,raw:[2,4,5,6,8,9,10,14,16,17],raw_fil:[12,17,18],raw_file_ica:18,raw_file_ica_solut:18,raw_filenam:[2,4],raw_fnam:12,raw_info:[2,4],read:2,read_noise_cov:2,recommend:2,reconstruct:[2,6],redirect:28,region:[2,4,6],registr:14,regress:21,regressor:21,regular:[2,4],reingold:28,reject:[2,6,16],relat:[2,9,14],releas:1,remov:[2,6,9,16],remove_unnecessary_output:[12,17,18],repair:5,report:[2,6,9,18],represent:[4,28],residu:21,respect:8,rest:[12,17,18],result:2,retain:21,roi:[2,4,6,21],roi_mask_fil:27,role:26,room:2,rule:9,run:[2,9,12,17,18],run_power_analysi:17,run_preprocess_pipelin:18,same:[6,9,21],sampl:[4,5,6,14,16],sample_bids_omega:16,sample_s:[5,6],save:[2,4,5,6,9,18],save_stc:[2,4,6],sbj_dir:[2,4,6],sbj_id:[2,4],scale:4,scikit:1,scipi:2,score:21,script:2,search:[24,30],section:[0,9],see:[0,8,9,17,18,29,30],segment:2,select:6,sensor:[2,6,8],sep:5,sep_label_nam:[5,6],separ:5,sergio:29,seri:[2,4,5,6,10,18,19,21,22,30],sess_index:[12,17,18],session:[6,12,16,17,18],set:[6,10,14],setup:[1,4,6],sever:[5,21],sfreq:[4,6,12],signal:[9,21],sinc:2,size:5,sloreta:[2,4,6],snr:[2,4],solut:[2,4,6],some:6,sometim:5,sort_filelist:[12,17,18],sotwar:1,sourc:[2,4,5,6],space:[2,4,5,6,8,28],spec:5,specif:[4,5,14],specifi:[2,10,16,18,21,28,30],spectral_connectivity_:16,spectral_workflow:12,spectralconn:4,split:[2,5,6],splitted_ts_fil:5,splitwindow:5,spm_reg:27,spontan:2,src:2,stand:30,standard:2,standart:2,start:[2,4,5,10,21],stat:22,stc:[2,4,6],stderr:2,stdout:2,step:[10,30],stop:5,store:[8,9,16],str:[2,4,6],strang:5,string:[4,5],structur:[2,5,14,28],sub:[2,4,6,16],subj_coord_rois_fil:21,subj_nam:2,subject:[2,4,6,9,10,14],subject_id:[12,16,17,18],submodul:3,subsequ:30,substructur:[2,4,6],sudo:1,suppress:2,suppress_stdout_stderr:2,surfer:1,t_max:[2,4,6],t_min:[2,4,6],templat:[10,12,17,18],template_arg:[12,17,18],tempor:5,tensor:8,test:12,text:5,them:18,theta:16,thi:[2,10,21],think:2,thread:30,three:[10,30],threshold:[21,25,26,28],through:2,time:[2,4,5,6,10,18,19,21,22,30],time_frequ:8,timeseri:[2,21],tmax:4,togeth:30,tool:30,topographi:[6,18],topolog:28,trans_fnam:2,transpos:21,transpose_t:21,trasform:21,trfr:20,trial:5,ts_file:[2,4,5,12,21],tsmat_fil:5,tune:9,tupl:5,tutori:9,two:5,txt:[5,6,21],txt_file:5,type:[4,5,6,21,26],unsplit:5,urv:29,usedefault:[4,5,21],user:[10,30],util:[12,17,18],valid:6,valu:[2,4,6,19,21,22],variabl:[6,14],varianc:[6,16,18],veog:16,verbos:2,veri:30,vision:5,visual:18,vmax:4,vmin:4,volum:21,voxel:[19,21,22],wai:30,want:[2,4,6,16],websit:14,weight:[21,26,29],weight_fil:21,welch:[2,6,8,16,17],well:[2,4,5,6,11,30],what:4,where:[2,14,16,18,19,21,22,30],whether:21,which:[2,4,6,16,17,18,30],white:21,why:2,window:5,within:16,without:2,work:1,workflow:[6,8,9,12,17,18,30],wpli2_debias:[4,16],wpli:[4,16],wrap:[6,8,10,11,28,29,30],write:[8,9,11],write_graph:[12,17,18],xor:26,z_cor_mat_fil:[21,26],zero:21},titles:["CINQ","README","neuropype_ephy","neuropype_ephy.interfaces package","neuropype_ephy.interfaces.mne package","neuropype_ephy.nodes package","neuropype_ephy.pipelines package","Inverse solution Nodes","Power pipeline","Preprocessing pipeline","Source reconstruction pipeline","Connectivity pipeline","Spectral connectivity and graph pipeline","From epoch data to graph theoretical analysis","Examples","Source reconstruction pipeline","params file","PSD pipeline","From raw data to preprocessed data","CoClass","conmat_to_graph","Correl Mat","Graph_stats","README :","Welcome to Neuropype_graph&#8217;s documentation!","intmat_to_graph","Modularity","nii_to_conmat","Plot_igraph","Radatools","NeuroPype documentation"],titleterms:{analysi:13,aux_tool:2,brain_vision_to_conmat:6,cinq:[0,30],coclass:19,compute_fwd_problem:2,compute_inv_problem:2,computeconfcormat:21,computenetlist:26,computenoderol:26,concatt:21,conmat_to_graph:20,connect:[11,12,16],content:[3,4],correl:21,covari:7,create_pipeline_conmat_to_graph_dens:20,create_pipeline_intmat_to_graph_threshold:25,create_pipeline_nii_to_conmat:27,create_pipeline_nii_to_weighted_conmat:27,data:[13,18],descript:1,diffmatric:19,document:[1,24,30],epoch:13,exampl:[14,30],extractm:21,extractt:21,field:7,fif2t:2,fif_to_inv_sol:6,file:16,filter:16,findspmregressor:21,freesurf:1,from:[13,18],graph:[12,13],graph_stat:22,ica:16,import_ctf:2,import_data:5,import_mat:2,import_txt:2,indic:[24,30],instal:[1,2,30],interfac:[3,4],intersectmask:21,intmat_to_graph:25,invers:7,inverse_solut:4,lead:7,lf_comput:4,list:16,mat:21,merget:21,mne:[1,4],modul:[2,3,4,5,6],modular:26,netproprada:29,neuropyp:30,neuropype_cli:30,neuropype_ephi:[1,2,3,4,5,6,30],neuropype_graph:[1,24,30],nii_to_conmat:27,node:[5,7],nois:7,packag:[1,3,4,5,6,30],param:16,paramet:16,path:16,pipelin:[2,6,8,9,10,11,12,15,17],plot_igraph:28,plotcoclass:19,plotigraphcoclass:28,plotigraphconjcoclass:28,plotigraphmodul:28,power:[2,4,6,8],preparecoclass:19,preprada:29,preproc:[2,4],preproc_meeg:6,preprocess:[9,18],psd:[16,17],radatool:29,raw:18,readm:[1,23],reconstruct:[10,15],requir:1,script:14,separatet:21,set:16,shufflematrix:22,softwar:1,solut:7,sourc:[10,15],spectral:[2,4,12],subject:16,submodul:4,subpackag:[2,3],swaplist:22,tabl:[24,30],theoret:13,ts_to_conmat:6,ts_tool:5,variabl:16,welcom:24}})
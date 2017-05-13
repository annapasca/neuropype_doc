Search.setIndex({docnames:["cinq/cinq","ephypype/includeme","ephypype/neuropype_ephy","ephypype/neuropype_ephy.interfaces","ephypype/neuropype_ephy.interfaces.mne","ephypype/neuropype_ephy.nodes","ephypype/neuropype_ephy.pipelines","ephypype/pipelines/nodes/inv_solution","ephypype/pipelines/power","ephypype/pipelines/preproc_meeg","ephypype/pipelines/source_reconstruction","ephypype/pipelines/spectral_connectivity","examples/conn_graph_example","examples/epoch_example","examples/examples","examples/howto","examples/inv_example","examples/params","examples/power_example","examples/preproc_example","graphpype/coclass","graphpype/conmat_to_graph","graphpype/correl_mat","graphpype/graph_stats","graphpype/includeme","graphpype/index","graphpype/intmat_to_graph","graphpype/modularity","graphpype/nii_to_conmat","graphpype/plot_igraph","graphpype/radatools","index"],envversion:50,filenames:["cinq/cinq.rst","ephypype/includeme.rst","ephypype/neuropype_ephy.rst","ephypype/neuropype_ephy.interfaces.rst","ephypype/neuropype_ephy.interfaces.mne.rst","ephypype/neuropype_ephy.nodes.rst","ephypype/neuropype_ephy.pipelines.rst","ephypype/pipelines/nodes/inv_solution.rst","ephypype/pipelines/power.rst","ephypype/pipelines/preproc_meeg.rst","ephypype/pipelines/source_reconstruction.rst","ephypype/pipelines/spectral_connectivity.rst","examples/conn_graph_example.rst","examples/epoch_example.rst","examples/examples.rst","examples/howto.rst","examples/inv_example.rst","examples/params.rst","examples/power_example.rst","examples/preproc_example.rst","graphpype/coclass.rst","graphpype/conmat_to_graph.rst","graphpype/correl_mat.rst","graphpype/graph_stats.rst","graphpype/includeme.rst","graphpype/index.rst","graphpype/intmat_to_graph.rst","graphpype/modularity.rst","graphpype/nii_to_conmat.rst","graphpype/plot_igraph.rst","graphpype/radatools.rst","index.rst"],objects:{"neuropype_ephy.aux_tools":{nostdout:[2,1,1,""],suppress_stdout_stderr:[2,2,1,""]},"neuropype_ephy.compute_fwd_problem":{compute_fwd_sol:[2,1,1,""]},"neuropype_ephy.compute_inv_problem":{compute_ROIs_inv_sol:[2,1,1,""],compute_noise_cov:[2,1,1,""],read_noise_cov:[2,1,1,""]},"neuropype_ephy.fif2ts":{ep2ts:[2,1,1,""]},"neuropype_ephy.import_ctf":{convert_ds_to_raw_fif:[2,1,1,""]},"neuropype_ephy.interfaces":{mne:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne":{Inverse_solution:[4,0,0,"-"],LF_computation:[4,0,0,"-"],power:[4,0,0,"-"],preproc:[4,0,0,"-"],spectral:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne.Inverse_solution":{InverseSolution:[4,2,1,""],NoiseCovariance:[4,2,1,""]},"neuropype_ephy.interfaces.mne.LF_computation":{LFComputation:[4,2,1,""]},"neuropype_ephy.interfaces.mne.power":{Power:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc":{CompIca:[4,2,1,""],CompIcaInputSpec:[4,2,1,""],CompIcaOutputSpec:[4,2,1,""],CreateEp:[4,2,1,""],CreateEpInputSpec:[4,2,1,""],CreateEpOutputSpec:[4,2,1,""],PreprocFif:[4,2,1,""],PreprocFifInputSpec:[4,2,1,""],PreprocFifOutputSpec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc.CompIca":{input_spec:[4,3,1,""],output_spec:[4,3,1,""]},"neuropype_ephy.interfaces.mne.preproc.CreateEp":{input_spec:[4,3,1,""],output_spec:[4,3,1,""]},"neuropype_ephy.interfaces.mne.preproc.PreprocFif":{input_spec:[4,3,1,""],output_spec:[4,3,1,""]},"neuropype_ephy.interfaces.mne.spectral":{PlotSpectralConn:[4,2,1,""],SpectralConn:[4,2,1,""]},"neuropype_ephy.nodes":{import_data:[5,0,0,"-"],ts_tools:[5,0,0,"-"]},"neuropype_ephy.nodes.import_data":{ConvertDs2Fif:[5,2,1,""],ConvertDs2FifInputSpec:[5,2,1,""],ConvertDs2FifOutputSpec:[5,2,1,""],Ep2ts:[5,2,1,""],Ep2tsInputSpec:[5,2,1,""],Ep2tsOutputSpec:[5,2,1,""],ImportBrainVisionAscii:[5,2,1,""],ImportBrainVisionAsciiOutputSpec:[5,2,1,""],ImportBrainVisionVhdr:[5,2,1,""],ImportBrainVisionVhdrOutputSpec:[5,2,1,""],ImportMat:[5,2,1,""],ImportMatInputSpec:[5,2,1,""],ImportMatOutputSpec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.ConvertDs2Fif":{input_spec:[5,3,1,""],output_spec:[5,3,1,""]},"neuropype_ephy.nodes.import_data.Ep2ts":{input_spec:[5,3,1,""],output_spec:[5,3,1,""]},"neuropype_ephy.nodes.import_data.ImportBrainVisionAscii":{output_spec:[5,3,1,""]},"neuropype_ephy.nodes.import_data.ImportBrainVisionVhdr":{output_spec:[5,3,1,""]},"neuropype_ephy.nodes.import_data.ImportMat":{input_spec:[5,3,1,""],output_spec:[5,3,1,""]},"neuropype_ephy.nodes.ts_tools":{SplitWindows:[5,2,1,""]},"neuropype_ephy.pipelines":{brain_vision_to_conmat:[6,0,0,"-"],fif_to_inv_sol:[6,0,0,"-"],power:[6,0,0,"-"],preproc_meeg:[6,0,0,"-"],ts_to_conmat:[6,0,0,"-"]},"neuropype_ephy.pipelines.brain_vision_to_conmat":{create_pipeline_brain_vision_ascii_to_spectral_connectivity:[6,1,1,""],create_pipeline_brain_vision_vhdr_to_spectral_connectivity:[6,1,1,""]},"neuropype_ephy.pipelines.fif_to_inv_sol":{create_pipeline_source_reconstruction:[6,1,1,""]},"neuropype_ephy.pipelines.power":{create_pipeline_power:[6,1,1,""]},"neuropype_ephy.pipelines.preproc_meeg":{create_pipeline_preproc_meeg:[6,1,1,""]},"neuropype_ephy.pipelines.ts_to_conmat":{create_pipeline_time_series_to_spectral_connectivity:[6,1,1,""]},"neuropype_ephy.power":{compute_and_save_psd:[2,1,1,""]},"neuropype_ephy.preproc":{compute_ica:[2,1,1,""],create_epochs:[2,1,1,""],create_events:[2,1,1,""],create_ts:[2,1,1,""],generate_report:[2,1,1,""],preprocess_fif:[2,1,1,""]},"neuropype_graph.interfaces.plot_igraph.plots":{PlotIGraphCoclass:[29,2,1,""],PlotIGraphConjCoclass:[29,2,1,""],PlotIGraphModules:[29,2,1,""]},"neuropype_graph.interfaces.radatools.rada":{NetPropRada:[30,2,1,""],PrepRada:[30,2,1,""]},"neuropype_graph.nodes.coclass":{DiffMatrices:[20,2,1,""],PlotCoclass:[20,2,1,""],PrepareCoclass:[20,2,1,""]},"neuropype_graph.nodes.correl_mat":{ComputeConfCorMat:[22,2,1,""],ConcatTS:[22,2,1,""],ExtractMeanTS:[22,2,1,""],ExtractTS:[22,2,1,""],FindSPMRegressor:[22,2,1,""],IntersectMask:[22,2,1,""],MergeTS:[22,2,1,""],SeparateTS:[22,2,1,""]},"neuropype_graph.nodes.graph_stats":{ShuffleMatrix:[23,2,1,""],SwapLists:[23,2,1,""]},"neuropype_graph.nodes.modularity":{ComputeNetList:[27,2,1,""],ComputeNodeRoles:[27,2,1,""]},"neuropype_graph.pipelines.conmat_to_graph":{create_pipeline_conmat_to_graph_density:[21,1,1,""]},"neuropype_graph.pipelines.intmat_to_graph":{create_pipeline_intmat_to_graph_threshold:[26,1,1,""]},"neuropype_graph.pipelines.nii_to_conmat":{create_pipeline_nii_to_conmat:[28,1,1,""],create_pipeline_nii_to_weighted_conmat:[28,1,1,""]},neuropype_ephy:{aux_tools:[2,0,0,"-"],compute_fwd_problem:[2,0,0,"-"],compute_inv_problem:[2,0,0,"-"],fif2ts:[2,0,0,"-"],import_ctf:[2,0,0,"-"],import_mat:[2,0,0,"-"],import_txt:[2,0,0,"-"],interfaces:[3,0,0,"-"],power:[2,0,0,"-"],preproc:[2,0,0,"-"],spectral:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute"},terms:{"4_role":27,"4role":27,"5000e":17,"boolean":[5,6],"case":20,"class":[2,4,5,20,22,23,27,29,30],"default":[4,5,6,20,22,23,29,30],"enum":[4,27,30],"export":[4,5,6],"float":[2,4,6,19,22,27],"function":[1,2,4,6,8,9,10,11,12,15,20,22,27,29,30,31],"import":[2,5,12,14,16,17,18,19,31],"int":[2,4,5,6,22,23,29],"new":19,"return":[2,4,5,12,15,16,18,19,22],"static":15,"true":[2,4,5,6,12,15,16,17,18,19,20,21,22,23,27,28,29,30],"void":20,"while":15,And:15,For:[15,31],IDs:15,NOT:5,Not:[20,22,29],One:[0,27],The:[0,2,8,9,10,11,12,15,16,18,19],Used:[22,26,29],__main__:[12,15,16,18,19],__name__:[12,15,16,18,19],_sess_index_:19,_subject_id_:19,about:[2,12],abov:12,accord:[2,4,6,14],achiev:15,activ:[2,22,28],add:[4,12],added:[2,4,6,16,22],adding:5,adjac:6,advanc:31,after:[2,4,14,15,20,22,28],again:15,aim:0,algorithm:[0,2,9],alia:[4,5],all:[2,4,5,11,12,14,15,17,18,19,20,22,23,29,30],all_modules_fil:29,all_participation_coeff_fil:27,all_ts_fil:22,all_z_com_degree_fil:27,allow:[2,12,15,16],alon:31,alpha:17,also:[1,6,9,11,15],alwai:15,amaral_rol:27,amplitud:[6,11],anaconda:1,analys:[2,31],analysi:[1,2,6,10,11,12,15,16,17,20,21,26,28,31],analysis_nam:26,analyz:[2,4],ani:15,annapasca:[1,31],anoth:[15,31],anymor:[26,29,30],aparc:[2,6],appli:[0,6,17],arg:2,argstr:30,around:22,arrai:2,artefact:[2,9],artifact:[0,2,6,17],ascii:[5,6],aseg:[2,4,6,16],aseg_label:[2,4,6,16],assign:20,associ:[4,6,12],atla:[2,4,6,16],automat:[0,1,2,6,9,17],aux:2,avail:11,averag:[2,4,6],band:[4,6,12,15,17],base:[0,2,4,6,9,11,14,15,20,21,23,26,31],base_dir:[12,15,16,18,19],base_directori:[12,15,16,18,19],basenam:2,befor:[0,2,4,10,12,15,16,18,19,28],beginn:15,behav:5,belong:22,below:[12,16,18,19,22],bem:2,beta:17,between:[5,6,15,19,20,22],bid:14,big:27,bigger:31,binari:22,bold:22,bool:[2,4,5,6,22],brain:[5,14,31],brainpip:11,brainvis:[5,6],brief:15,build:[14,31],cach:15,calcul:2,call:15,can:[0,1,9,10,11,12,14,15,19,31],capit:5,cat:30,caus:15,centroid:2,chang:15,channel:[2,6,17,19],channel_coords_fil:[2,12,15],channel_names_fil:[2,12,15],channelflag:5,check:6,checkout:0,choic:[2,4,6,16,18],choos:5,circular:11,clean:[0,2,10,19],clear:12,clone:[0,1,31],coclass:[25,29],coclass_matrix_fil:[20,29],coclassif:[20,26,29],code:[12,15,16,18,19,27],coeff:27,coh:[4,6,12,17],coher:11,cohi:[4,6,12,17],collect:2,color:[12,15,16,18,19],com:[0,1,31],command:[0,1,30,31],comment:[20,22,26,28,29],common:31,commonli:31,community_rada:[12,16],compat:1,compica:4,compicainputspec:4,compicaoutputspec:4,compil:2,compon:[6,9,19],comput:[0,2,4,6,8,9,10,11,17,18,20,22,23,27,28],compute_and_save_psd:2,compute_fwd_sol:2,compute_ica:2,compute_noise_cov:2,compute_rois_inv_sol:2,computeconfcormat:25,computenetlist:25,computenoderol:25,con_den:[12,16,21],con_method:[4,6,12,15,16,17],concaten:22,concatenate_run:22,concatenated_run:[22,28],concatenated_ts_fil:22,concatt:25,concen:[],conda:19,condit:22,conf_cor_mat_fil:22,conf_interval_prob:[22,28],confid:22,config:[12,15,16,18,19],conmat:[4,6],conmat_fil:[4,12,16,21],conmat_to_graph:[12,15,16,25,28],connect:[2,4,6,10,14,16,18,19,21,26,28,31],connecteur:27,connectivti:[4,11],connector:27,consid:4,construct:15,contact:[5,6],contain:[2,4,6,12,15,22,29],context:2,continu:2,convert:[2,5,9],convert_ds_to_raw_fif:2,convertds2fif:5,convertds2fifinputspec:5,convertds2fifoutputspec:5,convertor:2,coord:[20,22,23,29],coord_rois_fil:22,coordiant:27,coordin:[2,20,22,29],coords_fil:[12,16,20,21,26,27,29],coords_rois_fil:22,cor_mat:23,cor_mat_fil:22,correct:[0,9],correl:[11,17,23,25,27,28],correl_analysis_nam:[12,15,17],correl_mat:22,correspond:[20,27],cortic:[2,4,6,16],could:[15,19],coupl:11,cov_filenam:[2,4],cov_fnam:2,cov_fname_in:4,covari:[2,4,6,10,16],cpu:19,creat:[0,1,2,4,6,15,16,18,19],create_datasourc:[12,15,16,18,19],create_epoch:[2,4],create_ev:2,create_infosourc:[12,15,16,18,19],create_main_workflow_pow:18,create_main_workflow_spectral_modular:[12,15],create_main_workflow_spectral_modularity_src_spac:16,create_noise_cov:10,create_pipeline_brain_vision_ascii_to_spectral_connect:6,create_pipeline_brain_vision_vhdr_to_spectral_connect:6,create_pipeline_conmat_to_graph_dens:[11,12,15,16,25],create_pipeline_intmat_to_graph_threshold:25,create_pipeline_nii_to_conmat:25,create_pipeline_nii_to_weighted_conmat:25,create_pipeline_pow:[6,8,18],create_pipeline_preproc_meeg:[6,9,19],create_pipeline_source_reconstruct:[6,10,16],create_pipeline_time_series_to_spectral_connect:[6,11,12,15,16],create_t:[2,12,15],create_ts_nod:[12,15],create_workflow_preproc:19,createep:4,createepinputspec:4,createepoutputspec:4,creation:15,criteria:2,csf:[],csf_anat_fil:28,ctf:2,cumul:[6,19],current:[2,11],cut:[6,19],cwt_morlet:6,data:[0,2,4,6,8,9,10,11,12,14,15,16,17,18,19,20,31],data_field_nam:5,data_fnam:2,data_path:[12,15,16,17,18,19],data_typ:[6,17,19],datagrabb:[12,14,16,18,19],dataset:[0,14],datasourc:[12,15,16,18,19],datataset:14,davidmeunier79:[0,1,31],decomposit:9,deep:2,def:[12,15,16,18,19],defin:[2,4,6,10,14,16,17,27,31],definit:[4,15,27,30],defualt:[4,6],deim:30,delta:17,densiti:[0,2,4,6,8,18,21,27],depend:15,deprec:22,deriv:11,desc:[4,5,20,22,23,27,29,30],descib:27,describ:[22,27,30],descript:[2,4,5,6,11,12,20,21,22,23,26,27,28,29,30],design:22,detail:0,dev:[0,1],develop:[1,31],dict:[2,4,6,12,15,16,17,18,19],dictionari:[2,4,6],diff_mat_fil:20,differ:[9,11,15,17,20,29,31],diffmatric:25,diplai:29,dipol:10,dir:[9,17],directori:[0,2,4,6,8,9,11,15,17,19],distribut:[15,23],dmalt:31,document:30,doing:2,domain:11,done:[6,23],down_sfreq:[2,6,17,19],download:[1,12,14,15,16,17,18,19],downloadandinstal:1,downsampl:[2,6,17,19],ds2fif:9,ds_file:2,dspm:[2,4,6,16],dure:1,each:[0,5,6,9,10,15,20,23,31],easi:[15,31],ecg:[6,17,19],ecg_ch_nam:[2,6,17,19],ecg_evok:2,ecg_ind:2,ecg_scor:2,edg:[20,29,30],edu:1,eeg:[2,6,9,31],either:[6,9,10,15,16],elec_names_fil:5,electa:5,electrod:[5,6],electrophysiolog:[1,2,31],emploi:2,empti:[2,6,16,17],encapsul:15,end:4,engin:[12,15,16,18,19,31],environ:1,eog:[6,17,19],eog_ch_nam:[2,6,17,19],eog_evok:2,eog_ind:2,eog_scor:2,ep2t:[2,5],ep2tsinputspec:5,ep2tsoutputspec:5,ep_length:2,ephi:5,ephypyp:1,epo:[2,4,6,18],epoch:[2,4,5,6,8,10,12,18],epoch_length:2,epoch_window_length:[4,6,12,15,16,17],eps:[4,20,29],estim:10,etc:15,evelop:11,even:2,event:[2,4,6],events_id:[2,4,6],everi:15,evok:4,exampl:[0,2,8,9,10,11,15,17,20,25],except:2,exchang:23,exclud:[6,9,19],exe:30,execut:[12,15,16,18,19],exist:[4,5,20,22,23,27,29,30,31],exit:2,explain:[6,12,19],export_to_matlab:[4,6,16],extern:15,extract:[20,22],extractm:25,extractt:25,eyes:[0,2,9],facilit:31,fals:[2,4,6,12,15,16,17,18,19,20,21,22,26,27,28,29,30],far:11,fashion:23,fast:31,feed:15,field:[2,4,10,12,15,16,18,19,31],fif:[2,4,5,6,8,9,10,12,15,16,17,18,19,31],fif_fil:[2,6,18],fif_to_inv_sol:16,figur:[],file:[0,2,4,5,6,9,12,14,15,16,18,19,20,22,23,27,28,29,30,31],file_4d:22,filenam:[2,4,18,19],fill:6,filter:[2,6,9,22],filter_gm_threshold:28,filter_mask:22,filter_mask_fil:22,filter_spectr:6,filter_thr:22,filtered_coords_rois_fil:22,filtered_indexed_rois_fil:22,filtered_labels_rois_fil:22,filtered_mni_coords_rois_fil:22,filtermask:[],find:22,findspmregressor:25,fine:[0,9],first:15,fisher:22,flag:9,flexibl:15,flow:15,fmax:[2,6,17,18],fmin:[2,6,17,18],fmri:31,fname:2,focu:31,folder:[0,2,15],follow:[1,12,15,16,18,19],forc:[20,30],format:[2,4,5,6,8,9,10,11,12,17,18,19,20,22,23,27,29,30,31],fortran:2,forward:[2,4],found:[9,11,12],framework:31,free:15,freesurf:[2,4,6],freq_band:[4,6,12,15,16,17],freq_band_nam:[12,15,16,17],frequenc:[2,4,6,8,11,12,15,17,18,19],from:[1,2,4,5,6,9,10,12,14,15,16,18,19,20,21,22,26,27,28,29,30],fruchterman:29,fswiki:1,full:[2,29],furthermor:[12,18,19],fwd_filenam:[2,4],gamma1:17,gamma2:17,gener:[2,9,15,20,22,29,30],generate_report:2,get:[8,9,10,11,15],get_freq_band:[12,15,16],get_raw_sfreq:16,git:[0,1,31],github:[0,1,31],given:[4,6,20,22,29,30],gm_anat_fil:28,gm_mask_coords_fil:[20,29],gm_mask_labels_fil:20,gomez:30,good:9,good_channels_field_nam:5,grab:19,grad:[6,17],graph2us:[12,15,16,18,19],graph:[10,11,14,15,16,17,21,26,29,31],graph_den_pip:[12,16,21],graph_stat:25,graphic:[20,29],grei:22,grid:10,group:[20,29],group_coclass_matrix_fil:20,guid:15,h_freq:[2,6,17,19],had:6,half:29,harvard:1,has:[2,6,15],hash:15,hash_fil:30,have:[1,6,15,17,20,22],heart:[0,2,9],heog:17,here:[9,17],high:[6,19],higher:22,how:[8,9,10,11,14,22,31],html:[1,19,29],http:[0,1,29,30,31],hub:27,ica:[0,2,4,6,9,12,15,16,18,19],ico:[4,6],identityinterfac:[12,15,16,18,19],igraph:29,ijk:22,ijk_coord:22,imag:[14,31],imaginari:11,imcoh:[4,6,12,17],implement:[2,8,9,11,18,19,31],importbrainvisionascii:5,importbrainvisionasciioutputspec:5,importbrainvisionvhdr:5,importbrainvisionvhdroutputspec:5,importmat:5,importmatinputspec:5,importmatoutputspec:5,includ:[2,4,6,9,16,19,31],independ:5,index:[4,11,12,15,16,22,25,31],indexed_rois_fil:22,indiv:20,individu:[10,20],infield:[12,15,16,18,19],info:[12,15,16,18,19],inform:[1,2,4,30,31],infosourc:[12,14,16,18,19],input:[2,4,5,6,8,9,10,11,12,14,16,18,19,20,21,22,23,26,27,28,29,30,31],input_nam:[12,15],input_spec:[4,5],inputnod:[6,12,15,16,18,19,21,26,28],inspect:[0,9,19],instal:[0,19],install_mne_c:1,instanc:6,instruct:1,int_graph_thr_pip:26,int_mat_fil:26,integ:[5,6,26,27,29],interest:[6,15,18,22],interfac:[2,12,15,16,18,19,25,29,30,31],intersectmask:25,interv:[2,4,6,22],intmat_to_graph:25,intraeeg:[5,6],introduct:15,inv_method:[2,4,6,16],inv_sol_pipelin:6,inv_sol_workflow:16,inv_solut:[10,16],invers:[2,4,6,10,16],inverse_solut:3,inversesolut:4,involv:28,ipykernel:1,ipynb:[0,19],ipynb_plot_psd:0,ipynb_report:[0,19],ipywidget:[1,19],is_epoch:[2,4,6,17,18],is_evok:[2,4,6],is_ica:[6,17],is_sensor_spac:[4,6,16],is_set_ica_compon:6,iter:[12,14,16,18,19],its:[8,9,11],itself:15,jupyt:[0,9,19],just:[2,15],k_neigh:6,keep:[22,23],keep_extens:30,kei:6,kept:[4,22],kill:2,kind:[15,17],kit:31,knowledg:15,kwarg:[4,5],kwd:2,l_freq:[2,6,17,19],label:[2,4,6,12,15,16,20,22,23,29],label_coord:16,label_coords_fil:2,label_nam:16,label_names_fil:2,label_rois_fil:22,labels_fil:[2,4,6,12,15,16,20,21,22,26,29],labels_rois_fil:22,lag:11,last:15,later:1,launch:30,lead:[2,4,10],leadfield:2,learn:1,least:[2,15],leav:17,lego:[6,31],length:[2,22],let:2,letter:5,level1:28,level:2,lf_comput:[3,10],lfcomput:4,librari:2,line:[4,31],link:[12,14,16,18,19],linuxinstal:1,list:[2,4,5,6,11,12,14,15,16,18,19,20,22,23,27,29,30],list_of_list:23,list_to_net:30,list_value_rang:20,listint:20,load:2,local:19,locat:15,lock:11,log:30,lol:[20,27],look:[0,9,15,22,28],low:[6,19],mag:[6,17],main:[2,6,9,12,14,16,17,18,19,31],main_path:[0,6,12,15,16,17,18,19,21,26,28],main_workflow:[0,12,15,16,18,19],mainli:2,manag:2,mandatori:[4,5,12,18,19,20,22,23,27,29,30],mani:[15,22,31],manual:1,martino:1,mask:22,mask_fil:22,master:1,mat1:20,mat2:20,mat:[4,5,6,11,25,31],mat_file1:20,mat_file2:20,matlab:[5,31],matplotlib:[1,19,20],matric:[4,6,17,20,21,22,23,26,28,31],matrix:[2,4,5,6,10,11,15,16,20,21,22,23,26,27,28,29],matshow:20,matter:22,max:[4,6,18,20],mayb:31,mean:22,mean_masked_ts_fil:22,measur:[11,12,15,17],meg:[0,2,6,9,12,15,16,17,18,19,31],meg_data:17,merg:22,merged_ts_fil:22,merget:25,method:[2,4,6,8,15,16,18],metric:[4,6],mgh:1,min:[4,6,18,20,29],min_bold_intens:22,mix:[2,4,6,16],mne:[2,3,6,8,9,10,11,12,16,31],mni:[22,29],mni_coord:22,mni_coords_rois_fil:22,mod:[12,16,21,26],mod_fil:20,modal:31,mode:[6,15],model:22,modul:[14,25,29,31],modular:[20,25,29],more:[0,1,2,9,30,31],movement:[],mri:10,much:[26,29],mult_regnam:28,multi:[21,31],multi_con:[4,6],multipap:6,multipl:[4,6,22],multiproc:[0,12,15,16,18,19],multitap:[6,8,18],must:[8,18],n_comp_exclud:6,n_compon:2,n_fft:2,n_job:2,n_overlap:2,n_proc:[0,12,15,16,18,19],n_r:[2,4],n_window:[5,6],name:[2,4,5,6,12,15,16,17,18,19,22,28],name_sourc:30,name_templ:30,nb_line:4,ndarrai:5,ndarri:5,necessari:15,need:[10,14,15,22],neg:22,net:[27,29,30],net_list_fil:[27,30],netproprada:25,network:[27,29,30],network_properti:30,network_typ:30,neural:10,neuro:31,neurodaddi:25,neuroimag:31,neuropyp:[1,15,17],neuropype_ephi:[12,15,16,18,19],neuropype_graph:[12,15,16,20,21,22,23,26,27,28,29,30],neuropype_workshop:0,nifti:[22,28],nii:22,nii_4d_fil:28,nii_to_conmat:25,nii_to_weighted_conmat:28,nio:[12,15,16,18,19],nipyp:[1,12,15,16,18,19,28,31],nmr:1,node:[2,4,6,8,9,10,11,12,14,16,18,19,20,22,23,25,27,29,31],node_corr:23,node_corres_fil:20,node_roles_fil:[27,29],nois:[2,4,6,10,16],noise_cov:2,noise_cov_fnam:[6,16],noisecovari:4,non:[20,27],none:[2,4,6,30],norm_coclass_matrix_fil:20,normal:[5,20,22,26,27],nostdout:2,notebook:[0,9,19],now:1,npy:[2,4,5,6,11,12,20,22,23,29,31],npz:8,number:[0,5],numpi:[1,2,5,20,22,31],object:15,obtain:20,off:[6,19],omega:[0,14,17],one:[15,20,22],ongo:2,onli:[1,15,22,27],only_positive_valu:22,open:[0,31],oper:[2,4],optim_seq:[12,16,21,30],optimis:30,option:[12,20,29],optionn:22,order:15,org:[1,29],organ:14,origin:[0,2,20,23,27],original_matrix_fil:23,other:[1,20],otherwis:[6,17,18,22,29],our:15,out:[6,15],outfield:[12,15,16,18,19],outout:6,output:[0,2,4,5,6,8,9,10,11,15,19,20,22,23,27,29,30,31],output_nam:[12,15],output_spec:[4,5],over:15,packag:[2,15,19],page:[12,25,31],pajek:[20,27,29,30],pajek_net_fil:[27,29,30],panda:1,parallel:15,param:[0,12,14,15,16,18,19,31],paramet:[2,4,6,9,12,14,15,16,18,19,30],parameter:15,params_congraph:[12,15],params_conn:[0,15],params_ica:[0,17,19],params_pow:[0,17,18],params_src:16,parc:[2,4,6,16],parcel:[2,4,6,16],part:22,particip:27,particular:[9,10,14,15,31],partit:27,pass:[18,19],path:[6,12,14,15,16,18,19],pathnam:2,pattern:15,peak:6,percent:22,percent_sign:22,percentag:[6,19],perform:[0,2,6,9,10,11,12,15,16,19],permut:23,permut_lists_of_list:23,phase:11,php:30,pick:2,pickl:22,pip:[1,31],pipelin:[0,12,14,16,17,18,19,21,25,26,28,31],pipeline_nam:[6,21,28],plan:1,pli2_unbias:[4,6,12,17],pli:[4,6,12,17],plot:[4,12,16,20,21,22,26,29],plot_circular_connect:[4,6],plot_coclass_matrix_fil:20,plot_conmat_fil:4,plot_connectivity_circl:11,plot_fig:22,plot_igraph:25,plot_igraph_3d_coclass_matrix_fil:29,plot_mat:22,plot_spectr:11,plotcoclass:25,plotigraphcoclass:25,plotigraphconjcoclass:25,plotigraphmodul:25,plotspectralconn:4,plugin:[0,12,15,16,18,19],plugin_arg:[0,12,15,16,18,19],plv:[4,6,12,17],point:[5,6,15,29],posit:[22,30],possibl:[1,2,4,6,9,12,15,16,17,18,19,20,29,31],pourcentag:26,power:[3,18],power_analysis_nam:[17,18],power_method:[17,18],power_pipelin:[0,17],power_workflow:18,ppc:[4,6,12,17],pre:2,prepar:[20,23],preparecoclass:25,preprada:[20,25],preproc:[3,9,12,15,16],preproc_meeg:19,preproc_pipeline_nam:[17,19],preproc_workflow:19,preprocess:[2,4,6,10,11,14,17,28,31],preprocess_fif:[2,4],preprocessing_pipelin:[0,17],preprocfif:4,preprocfifinputspec:4,preprocfifoutputspec:4,present:22,previou:[15,28],print:[2,12,15,16],process:[2,31],processor:0,proj:2,project:[14,31],proper:25,properti:[15,21,26,30],provid:[2,14,15,17,29,31],provinci:27,psd:[0,2,6,8,14,31],psd_multitap:8,psd_welch:8,pull:0,purpos:15,put:15,py27:1,pyqt:[1,19],python2:1,python3:1,python:[0,2,4,8,9,10,11,12,15,16,18,19,31],qualiti:27,quantiti:27,rada:[20,30],rada_log_fil:30,rada_lol_fil:[27,29],radatool:[25,27,29,31],radatools_optim:[12,16,26],rais:2,random:23,randomis:23,rang:20,raw:[0,2,4,5,6,8,9,10,15,16,18,19,31],raw_fil:[6,12,15,16,18,19],raw_file_ica:19,raw_file_ica_solut:19,raw_filenam:[2,4],raw_fnam:[2,12,15],raw_info:[2,4],read:[2,15],read_noise_cov:2,readm:[2,25,31],receiv:15,recommend:[1,2],reconstruct:[2,6,11,14,31],record:15,redirect:29,refer:20,reg_txt:28,region:[2,4,6,16,22],registr:14,regress:[],regress_nam:28,regressor:[22,28],regressor_fil:22,regressor_nam:22,regular:[2,4],reingold:29,reject:[2,6,17],relat:[0,2,9,14],releas:1,remov:[0,2,6,9,17,20],remove_unnecessary_output:[12,15,16,18,19],repair:5,repeat:15,report:[0,2,6,9,19],repres:[15,20],represent:[4,20,29],requir:[15,22],reres:29,rerun:15,resid_ts_fil:28,residu:[],resp:20,respect:8,rest:[12,15,16,18,19],result:[2,15],retain:22,roi:[2,4,6,16,22],roi_coords_fil:28,roi_labels_fil:28,roi_mask_fil:28,roi_mni_coords_fil:28,role:[27,29],role_typ:27,room:[2,6,16],rp_file:28,rule:9,run:[0,2,9,12,14,16,18,19,22,31],run_index:[22,28],run_pow:0,run_power_analysi:18,run_preprocess_pipelin:[0,19],run_spectr:[0,15],run_spectral_modular:12,run_spectral_modularity_src_spac:16,same:[6,9,20,22,23],sampl:[0,2,4,5,6,12,14,17,19],sample_bids_omega:17,sample_s:[5,6],save:[0,2,4,5,6,9,15,19,22],save_stc:[2,4,6],sbj_dir:[2,4,6,16],sbj_id:[2,4,6,16],scale:4,scikit:1,scipi:2,score:[],script:[2,12,15,16,18,19,31],search:[15,22,25,31],section:[0,9,12,15,18,19],see:[0,1,8,9,10,11,12,15,16,18,19,30,31],seed:23,segment:2,select:[6,19,22],sensor:[0,2,6,8,11,12,15],sep:5,sep_label_nam:[5,6],separ:[5,15,22],separated_ts_fil:22,separatet:25,sequenc:30,sequenti:15,sergio:30,seri:[2,4,5,6,10,11,12,19,22,31],ses:17,sess_index:[12,15,16,18,19],session:[6,12,15,16,17,18,19,22],set:[0,6,10,12,14,15,16,18,19,22,31],setup:[1,4,6,16],sever:[5,22],sfreq:[2,4,6,12,15,16],shape:[20,29],should:[0,1,12,15,16,18,19,20],shuffl:23,shuffled_matrix_fil:23,shufflematrix:25,signal:[9,22],similar:20,simpli:15,sinc:[2,15],singl:22,size:5,slightli:15,sloreta:[2,4,6,16],snr:[2,4],softwar:31,solut:[2,4,6,9,10,19],some:[1,6,11,15],sometim:5,somewher:29,sort_filelist:[12,15,16,18,19],sourc:[2,4,5,6,11,12,14,15,18,19,20,21,22,23,26,27,28,29,30,31],source_cod:0,space:[0,2,4,5,6,8,10,11,12,15,16,20,29],spec:5,special:15,specif:[4,5,14,15,17],specifi:[2,10,12,14,17,18,19,22,29,31],spectral:[0,3,6,8,11,14,15,16,17,18,31],spectral_connect:[11,12],spectral_connectivity_:17,spectral_workflow:[12,15,16],spectralconn:4,split:[2,5,6],splitted_ts_fil:5,splitwindow:5,spm:[22,28],spm_mat_fil:[22,28],spm_reg:28,spontan:2,src:2,src_correl_analysis_nam:16,stand:31,standard:2,standart:2,start:[2,4,5,6,10,22],stat:23,stc:[2,4,6],stderr:2,stdout:2,step:[10,14,31],still:29,stop:[5,6],store:[8,9,11,15,17],str:[2,4,6],strang:5,stream:[14,31],string:[5,17,22,30],structur:[2,5,14,15,27,29],sub001:15,sub002:15,sub003:15,sub:[2,4,6,16,17],subj_coord_rois_fil:22,subj_label_rois_fil:22,subj_nam:2,subject:[0,2,4,6,9,10,14,15,19,20,22,23],subject_id:[6,12,15,16,17,18,19],submodul:3,subsequ:31,substructur:[2,4,6,16],sudo:1,suf:22,suffix:22,sum:20,sum_coclass_matrix_fil:20,sum_possible_edge_matrix_fil:20,suppress:2,suppress_stdout_stderr:2,sure:[20,22,29],surfer:1,swap:23,swaplist:25,system:15,t_max:[2,4,6],t_min:[2,4,6],templat:[6,10,12,15,16,18,19],template_arg:[12,15,16,18,19],tempor:[5,6],tensor:8,test:[12,15],text:5,than:22,them:[15,19,29],theoret:31,theta:17,thi:[0,2,10,15,22],thing:15,think:2,those:15,thread:31,three:[10,31],threshold:[21,22,26,27,29],through:2,time:[2,4,5,6,10,11,12,19,22,31],time_frequ:8,timeseri:[2,22],tmax:4,togeth:[29,31],tool:[1,15,31],topographi:[6,19],topolog:29,trait:[22,30],trans_fnam:2,transport:27,transpos:22,transpose_t:22,trasform:22,trfr:21,trial:5,ts_file:[2,4,5,6,12,15,16,22],ts_to_conmat:[12,15,16],tsmat_fil:5,tune:[0,9],tupl:[5,6],turn:15,tutori:9,two:[5,6,15,20],txt:[2,5,6,20,22,29],txt_file:5,type:[4,5,6,20,22,23,27,29,30],typic:[23,28],undirect:30,unsplit:5,urv:30,use:[1,2,4,6,10,14,15,16,17,19,29],used:[0,1,2,4,9,10,11,14,15,20,22,26,27,28,29,30,31],usedefault:[4,5,22,23,27,29,30],useful:27,user:[10,15,31],uses:4,using:[1,4,8,9,11,15],usual:15,util:[12,15,16,18,19],valid:6,valu:[2,4,6,11,15,20,22,23,26,27,29],vari:20,variabl:[0,6,14,31],varianc:[6,17,19],veog:17,verbos:2,veri:[15,31],version:1,vhdr:5,vhdr_file:5,view:29,vision:5,visual:[11,19],vmax:4,vmin:4,volum:22,voxel:22,wai:[15,31],want:[2,4,6,16,17],websit:14,weight:[22,27,28,30],weight_fil:22,welch:[2,6,8,17,18],well:[2,4,5,6,31],wf_graph:[],what:[4,12,29],when:15,where:[0,2,14,15,17,19,20,22,31],whether:22,which:[2,4,6,15,17,18,19,31],white:[],whose:15,why:2,wiehgt:28,window:[5,6],within:17,without:2,wm_anat_fil:28,work:1,workflow:[0,6,8,9,10,11,14,17,31],wpli2_debias:[4,6,12,17],wpli:[4,6,12,17],wrap:[6,8,10,11,29,30,31],write:[8,9,10,11,29],write_graph:[12,15,16,18,19],xor:[20,22,27],you:[0,1],your:15,z_cor_mat_fil:[22,27],z_list:23,zero:22},titles:["CINQ","README","neuropype_ephy","neuropype_ephy.interfaces package","neuropype_ephy.interfaces.mne package","neuropype_ephy.nodes package","neuropype_ephy.pipelines package","Inverse solution Nodes","Power pipeline","Preprocessing pipeline","Source reconstruction pipeline","Connectivity pipeline","Spectral connectivity and graph Workflow","From epoch data to graph theoretical analysis","Examples","How to build a Workflow","Source reconstruction Workflow","params file","PSD Workflow","Preprocessing Workflow","CoClass","conmat_to_graph","Correl Mat","Graph_stats","README :","Welcome to Neuropype_graph&#8217;s documentation!","intmat_to_graph","Modularity","nii_to_conmat","Plot_igraph","Radatools","NeuroPype documentation"],titleterms:{"import":15,analysi:[0,13],aux_tool:2,brain_vision_to_conmat:6,build:15,cinq:[0,31],coclass:20,compute_fwd_problem:2,compute_inv_problem:2,computeconfcormat:22,computenetlist:27,computenoderol:27,concatt:22,conda:1,conmat_to_graph:21,connect:[0,11,12,15,17],content:[3,4],correl:22,covari:7,create_pipeline_conmat_to_graph_dens:21,create_pipeline_intmat_to_graph_threshold:26,create_pipeline_nii_to_conmat:28,create_pipeline_nii_to_weighted_conmat:28,data:13,datagrabb:15,defin:15,depend:1,descript:1,diffmatric:20,document:[1,25,31],download:0,epoch:13,exampl:[14,31],extractm:22,extractt:22,field:7,fif2t:2,fif_to_inv_sol:6,file:17,filter:17,findspmregressor:22,freesurf:1,from:13,graph:[0,12,13],graph_stat:23,how:15,ica:17,import_ctf:2,import_data:5,import_mat:2,import_txt:2,indic:[25,31],infosourc:15,input:15,instal:[1,2,31],interfac:[3,4],intersectmask:22,intmat_to_graph:26,invers:7,inverse_solut:4,iter:15,lead:7,lf_comput:4,list:17,main:15,mat:22,merget:22,mne:[1,4],modul:[2,3,4,5,6,15],modular:27,netproprada:30,neuropyp:31,neuropype_cli:31,neuropype_ephi:[0,1,2,3,4,5,6,31],neuropype_graph:[1,25,31],nii_to_conmat:28,node:[5,7,15],nois:7,packag:[1,3,4,5,6,31],param:17,paramet:17,path:17,pipelin:[2,6,8,9,10,11,15],plot_igraph:29,plotcoclass:20,plotigraphcoclass:29,plotigraphconjcoclass:29,plotigraphmodul:29,power:[0,2,4,6,8],preparecoclass:20,preprada:30,preproc:[2,4],preproc_meeg:6,preprocess:[0,9,19],psd:[17,18],python:1,radatool:30,readm:[1,24],reconstruct:[10,16],requir:1,run:15,script:[0,14],separatet:22,set:17,shufflematrix:23,softwar:1,solut:7,sourc:[10,16],specifi:15,spectral:[2,4,12],step:15,stream:15,subject:17,submodul:4,subpackag:[2,3],swaplist:23,tabl:[25,31],theoret:13,ts_to_conmat:6,ts_tool:5,upgrad:0,variabl:[15,17],welcom:25,workflow:[12,15,16,18,19]}})
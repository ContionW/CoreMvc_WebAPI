(function(){var e={},N=[],s=false,d;window.onload=function(){$focus($G("videoUrl"));t();i();w()};function t(){var o=$G("tabHeads").children;for(var e=0;e<o.length;e++){domUtils.on(o[e],"click",function(e){var t,i,a=e.target||e.srcElement;for(t=0;t<o.length;t++){i=o[t].getAttribute("data-content-id");if(o[t]==a){domUtils.addClass(o[t],"focus");domUtils.addClass($G(i),"focus")}else{domUtils.removeClasses(o[t],"focus");domUtils.removeClasses($G(i),"focus")}}})}}function i(){f(["videoFloat","upload_alignment"]);m($G("videoUrl"));a();(function(){var e=editor.selection.getRange().getClosedNode(),t;if(e&&e.className){var i=e.className=="edui-faked-video",a=e.className.indexOf("edui-upload-video")!=-1;if(i||a){$G("videoUrl").value=t=e.getAttribute("_url");$G("videoWidth").value=e.width;$G("videoHeight").value=e.height;var o=domUtils.getComputedStyle(e,"float"),r=domUtils.getComputedStyle(e.parentNode,"text-align");n(r==="center"?"center":o)}if(a){s=true}}g(t)})()}function a(){dialog.onok=function(){$G("preview").innerHTML="";var e=u("tabHeads","tabSrc");switch(e){case"video":return o();break;case"videoSearch":return r("searchList");break;case"upload":return h();break}};dialog.oncancel=function(){$G("preview").innerHTML=""}}function n(e){var t=$G("videoFloat").children;for(var i=0,a;a=t[i++];){if(a.getAttribute("name")==e){if(a.className!="focus"){a.className="focus"}}else{if(a.className=="focus"){a.className=""}}}}function o(){var e=$G("videoWidth"),t=$G("videoHeight"),i=$G("videoUrl").value,a=u("videoFloat","name");if(!i)return false;if(!c([e,t]))return false;editor.execCommand("insertvideo",{url:l(i),width:e.value,height:t.value,align:a},s?"upload":null)}function r(e){var t=domUtils.getElementsByTagName($G(e),"img"),i=[];for(var a=0,o;o=t[a++];){if(o.getAttribute("selected")){i.push({url:o.getAttribute("ue_video_url"),width:420,height:280,align:"none"})}}editor.execCommand("insertvideo",i)}function u(e,t){var i=$G(e).children,a;for(var o=0,r;r=i[o++];){if(r.className=="focus"){a=r.getAttribute(t);break}}return a}function l(e){if(!e)return"";e=utils.trim(e).replace(/v\.youku\.com\/v_show\/id_([\w\-=]+)\.html/i,"player.youku.com/player.php/sid/$1/v.swf").replace(/(www\.)?youtube\.com\/watch\?v=([\w\-]+)/i,"www.youtube.com/v/$2").replace(/youtu.be\/(\w+)$/i,"www.youtube.com/v/$1").replace(/v\.ku6\.com\/.+\/([\w\.]+)\.html.*$/i,"player.ku6.com/refer/$1/v.swf").replace(/www\.56\.com\/u\d+\/v_([\w\-]+)\.html/i,"player.56.com/v_$1.swf").replace(/www.56.com\/w\d+\/play_album\-aid\-\d+_vid\-([^.]+)\.html/i,"player.56.com/v_$1.swf").replace(/v\.pps\.tv\/play_([\w]+)\.html.*$/i,"player.pps.tv/player/sid/$1/v.swf").replace(/www\.letv\.com\/ptv\/vplay\/([\d]+)\.html.*$/i,"i7.imgs.letv.com/player/swfPlayer.swf?id=$1&autoplay=0").replace(/www\.tudou\.com\/programs\/view\/([\w\-]+)\/?/i,"www.tudou.com/v/$1").replace(/v\.qq\.com\/cover\/[\w]+\/[\w]+\/([\w]+)\.html/i,"static.video.qq.com/TPout.swf?vid=$1").replace(/v\.qq\.com\/.+[\?\&]vid=([^&]+).*$/i,"static.video.qq.com/TPout.swf?vid=$1").replace(/my\.tv\.sohu\.com\/[\w]+\/[\d]+\/([\d]+)\.shtml.*$/i,"share.vrs.sohu.com/my/v.swf&id=$1");return e}function c(e){for(var t=0,i;i=e[t++];){var a=i.value;if(!p(a)&&a){alert(lang.numError);i.value="";i.focus();return false}}return true}function p(e){return/(0|^[1-9]\d*$)/.test(e)}function f(e){for(var t=0,i;i=e[t++];){var a=$G(i),o={none:lang["default"],left:lang.floatLeft,right:lang.floatRight,center:lang.block};for(var r in o){var s=document.createElement("div");s.setAttribute("name",r);if(r=="none")s.className="focus";s.style.cssText="background:url(images/"+r+"_focus.jpg);";s.setAttribute("title",o[r]);a.appendChild(s)}v(i)}}function v(e){var i=$G(e).children;for(var t=0,a;a=i[t++];){domUtils.on(a,"click",function(){for(var e=0,t;t=i[e++];){t.className="";t.removeAttribute&&t.removeAttribute("class")}this.className="focus"})}}function m(e){if(browser.ie){e.onpropertychange=function(){g(this.value)}}else{e.addEventListener("input",function(){g(this.value)},false)}}function g(e){if(!e)return;var t=l(e);$G("preview").innerHTML='<div class="previewMsg"><span>'+lang.urlError+"</span></div>"+'<video class="previewVideo"'+' src="'+t+'"'+' width="'+420+'"'+' height="'+280+'"'+' play="true" loop="false" data-setup="{}" controls="controls" preload="auto">'+"</video>"}function h(){var e=[],t=editor.getOpt("videoUrlPrefix"),i=$G("upload_width").value||420,a=$G("upload_height").value||280,o=u("upload_alignment","name")||"none",r=editor.getOpt("videoUploadService")(this,editor).videoSrcField||"url";for(var s in N){var n=N[s];e.push({url:t+n[r],width:i,height:a,align:o})}var l=d.getQueueCount();if(l){$(".info","#queueList").html('<span style="color:red;">'+"还有2个未上传文件".replace(/[\d]/,l)+"</span>");return false}else{editor.execCommand("insertvideo",e,"upload")}}function w(){d=new b("queueList")}function b(e){this.$wrap=e.constructor==String?$("#"+e):$(e);this.init()}b.prototype={init:function(){this.fileList=[];this.initContainer();this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){var a=this,d=jQuery,e=a.$wrap,o=e.find(".filelist"),r=e.find(".statusBar"),s=r.find(".info"),n=e.find(".uploadBtn"),t=e.find(".filePickerBtn"),u=e.find(".filePickerBlock"),l=e.find(".placeholder"),c=r.find(".progress").hide(),i=0,p=0,f=window.devicePixelRatio||1,v=113*f,m=113*f,g="",h={},w=function(){var e=document.createElement("p").style,t="transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e;e=null;return t}(),b,y=editor.getActionUrl(editor.getOpt("videoActionName")),$=editor.getOpt("videoMaxSize"),k=(editor.getOpt("videoAllowFiles")||[".mp4",".webm",".flv",".ogg",".f4v"]).join("").replace(/\./g,",").replace(/^[,]/,"");if(!WebUploader.Uploader.support()){d("#filePickerReady").after(d("<div>").html(lang.errorNotSupport)).hide();return}else if(!editor.getOpt("videoActionName")){d("#filePickerReady").after(d("<div>").html(lang.errorLoadConfig)).hide();return}b=a.uploader=WebUploader.create({pick:{id:"#filePickerReady",label:lang.uploadSelectFile},swf:"../../third-party/webuploader/Uploader.swf",server:y,fileVal:editor.getOpt("videoFieldName"),duplicate:true,fileSingleSizeLimit:$,compress:false});b.addButton({id:"#filePickerBlock"});b.addButton({id:"#filePickerBtn",label:lang.uploadAddFile});U("pedding");function x(i){var a=d('<li id="'+i.id+'">'+'<p class="title">'+i.name+"</p>"+'<p class="imgWrap"></p>'+'<p class="progress"><span></span></p>'+"</li>"),o=d('<div class="file-panel">'+'<span class="cancel">'+lang.uploadDelete+"</span>"+'<span class="rotateRight">'+lang.uploadTurnRight+"</span>"+'<span class="rotateLeft">'+lang.uploadTurnLeft+"</span></div>").appendTo(a),r=a.find("p.progress span"),s=a.find("p.imgWrap"),n=d('<p class="error"></p>').hide().appendTo(a),l=function(e){switch(e){case"exceed_size":text=lang.errorExceedSize;break;case"interrupt":text=lang.errorInterrupt;break;case"http":text=lang.errorHttp;break;case"not_allow_type":text=lang.errorFileType;break;default:text=lang.errorUploadRetry;break}n.text(text).show()};if(i.getStatus()==="invalid"){l(i.statusText)}else{s.text(lang.uploadPreview);if("|png|jpg|jpeg|bmp|gif|".indexOf("|"+i.ext.toLowerCase()+"|")==-1){s.empty().addClass("notimage").append('<i class="file-preview file-type-'+i.ext.toLowerCase()+'"></i>'+'<span class="file-title">'+i.name+"</span>")}else{if(browser.ie&&browser.version<=7){s.text(lang.uploadNoPreview)}else{b.makeThumb(i,function(e,t){if(e||!t||/^data:/.test(t)&&browser.ie&&browser.version<=7){s.text(lang.uploadNoPreview)}else{var i=d('<img src="'+t+'">');s.empty().append(i);i.on("error",function(){s.text(lang.uploadNoPreview)})}},v,m)}}h[i.id]=[i.size,0];i.rotation=0;if(!i.ext||k.indexOf(i.ext.toLowerCase())==-1){l("not_allow_type");b.removeFile(i)}}i.on("statuschange",function(e,t){if(t==="progress"){r.hide().width(0)}else if(t==="queued"){a.off("mouseenter mouseleave");o.remove()}if(e==="error"||e==="invalid"){l(i.statusText);h[i.id][1]=1}else if(e==="interrupt"){l("interrupt")}else if(e==="queued"){h[i.id][1]=0}else if(e==="progress"){n.hide();r.css("display","block")}else if(e==="complete"){}a.removeClass("state-"+t).addClass("state-"+e)});a.on("mouseenter",function(){o.stop().animate({height:30})});a.on("mouseleave",function(){o.stop().animate({height:0})});o.on("click","span",function(){var e=d(this).index(),t;switch(e){case 0:b.removeFile(i);return;case 1:i.rotation+=90;break;case 2:i.rotation-=90;break}if(w){t="rotate("+i.rotation+"deg)";s.css({"-webkit-transform":t,"-mos-transform":t,"-o-transform":t,transform:t})}else{s.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(i.rotation/90%4+4)%4+")")}});a.insertBefore(u)}function C(e){var t=d("#"+e.id);delete h[e.id];S();t.off().find(".file-panel").off().end().remove()}function S(){var i=0,a=0,e=c.children(),t;d.each(h,function(e,t){a+=t[0];i+=t[0]*t[1]});t=a?i/a:0;e.eq(0).text(Math.round(t*100)+"%");e.eq(1).css("width",Math.round(t*100)+"%");_()}function U(e,t){if(e!=g){var i=b.getStats();n.removeClass("state-"+g);n.addClass("state-"+e);switch(e){case"pedding":o.addClass("element-invisible");r.addClass("element-invisible");l.removeClass("element-invisible");c.hide();s.hide();b.refresh();break;case"ready":l.addClass("element-invisible");o.removeClass("element-invisible");r.removeClass("element-invisible");c.hide();s.show();n.text(lang.uploadStart);b.refresh();break;case"uploading":c.show();s.hide();n.text(lang.uploadPause);break;case"paused":c.show();s.hide();n.text(lang.uploadContinue);break;case"confirm":c.show();s.hide();n.text(lang.uploadStart);i=b.getStats();if(i.successNum&&!i.uploadFailNum){U("finish");return}break;case"finish":c.hide();s.show();if(i.uploadFailNum){n.text(lang.uploadRetry)}else{n.text(lang.uploadStart)}break}g=e;_()}if(!a.getQueueCount()){n.addClass("disabled")}else{n.removeClass("disabled")}}function _(){var e="",t;if(g==="ready"){e=lang.updateStatusReady.replace("_",i).replace("_KB",WebUploader.formatSize(p))}else if(g==="confirm"){t=b.getStats();if(t.uploadFailNum){e=lang.updateStatusConfirm.replace("_",t.successNum).replace("_",t.successNum)}}else{t=b.getStats();e=lang.updateStatusFinish.replace("_",i).replace("_KB",WebUploader.formatSize(p)).replace("_",t.successNum);if(t.uploadFailNum){e+=lang.updateStatusError.replace("_",t.uploadFailNum)}}s.html(e)}b.on("fileQueued",function(e){editor.getOpt("videoUploadService")(a,editor).setUploadData(e);i++;p+=e.size;if(i===1){l.addClass("element-invisible");r.show()}x(e)});b.on("fileDequeued",function(e){i--;p-=e.size;C(e);S()});b.on("filesQueued",function(e){if(!b.isInProgress()&&(g=="pedding"||g=="finish"||g=="confirm"||g=="ready")){U("ready")}S()});b.on("all",function(e,t){switch(e){case"uploadFinished":U("confirm",t);break;case"startUpload":console.log(b);editor.getOpt("videoUploadService")(a,editor).setUploaderOptions(b);U("uploading",t);break;case"stopUpload":U("paused",t);break}});b.on("uploadBeforeSend",function(e,t,i){editor.getOpt("videoUploadService")(a,editor).setFormData(e,t,i)});b.on("uploadProgress",function(e,t){var i=d("#"+e.id),a=i.find(".progress span");a.css("width",t*100+"%");h[e.id][1]=t;S()});b.on("uploadSuccess",function(e,t){var i=d("#"+e.id);try{if(editor.getOpt("videoUploadService")(a,editor).getResponseSuccess(t)){N.push(t);i.append('<span class="success"></span>')}else{i.find(".error").text(t.message).show()}}catch(e){i.find(".error").text(lang.errorServerUpload).show()}});b.on("uploadError",function(e,t){});b.on("error",function(e,t){if(e=="Q_TYPE_DENIED"||e=="F_EXCEED_SIZE"){x(t)}});b.on("uploadComplete",function(e,t){});n.on("click",function(){if(d(this).hasClass("disabled")){return false}if(g==="ready"){window.setTimeout(function(){b.upload()},500)}else if(g==="paused"){window.setTimeout(function(){b.upload()},500)}else if(g==="uploading"){b.stop()}});n.addClass("state-"+g);S()},getQueueCount:function(){var e,t,i,a=0,o=this.uploader.getFiles();for(t=0;e=o[t++];){i=e.getStatus();if(i=="queued"||i=="uploading"||i=="progress")a++}return a},refresh:function(){this.uploader.refresh()}}})();
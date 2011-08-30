jQuery.webshims.register("mediaelement-swf",function(e,f,p,r,q,n){var k=f.mediaelement,C=p.swfobject,D=Modernizr.audio&&Modernizr.video,E=C.hasFlashPlayerVersion("9.0.115"),u,w={paused:!0,ended:!1,currentSrc:"",duration:p.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:q},h=Object.keys(w),v={currentTime:0,volume:1,muted:!1};Object.keys(v);var x=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,currentTime:0,_ppFlag:q},
w,v),y=/^jwplayer-/,m=function(b){if(b=r.getElementById(b.replace(y,"")))return b=f.data(b,"mediaelement"),b.isActive=="flash"?b:null},o=function(b){return(b=f.data(b,"mediaelement"))&&b.isActive=="flash"?b:null},i=function(b,a){a=e.Event(a);a.preventDefault();e.event.trigger(a,q,b)},c,d=f.cfg.basePath+"swf/jwwebshims.swf",j=f.cfg.basePath+"jwplayer/player.swf";E&&f.ready("WINDOWLOAD",function(){u||e.ajax(d,f.xhrPreloadOption)});f.extendUNDEFProp(n.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",
wmode:"transparent"});f.extendUNDEFProp(n.jwVars,{screencolor:"ffffffff",controlbar:"over"});f.extendUNDEFProp(n.jwAttrs,{bgcolor:"#000000"});k.jwEvents={View:{PLAY:function(b){var a=m(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;i(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(b){var a=m(b.id);if(a&&a._bufferEnd!=b.percentage){a.networkState=b.percentage==100?1:2;if(!a.duration){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,
a.duration<=0)a.duration=p.NaN}catch(c){}a.duration&&(i(a._elem,"durationchange"),a._elemNodeName=="audio"&&this.META(e.extend({duration:a.duration},b),a))}if(a.ended)a.ended=!1;if(a.duration){a._bufferedEnd=b.percentage;a.buffered.length=1;if(b.percentage==100)a.networkState=1,a.readyState=4;e.event.trigger("progress",q,a._elem,!0)}}},META:function(b,a){if("duration"in b||"youtubequalitylevels"in b)if((a=a&&a.networkState?a:m(b.id))&&!a._metadata){a._metadata=!0;if(!a.duration||"duration"in b||!("youtubequalitylevels"in
b)){var c=a.duration;a.duration=b.duration;a.videoHeight=b.height||0;a.videoWidth=b.width||0;if(!a.networkState)a.networkState=2;if(a.readyState<1)a.readyState=1;c!==a.duration&&i(a._elem,"durationchange")}i(a._elem,"loadedmetadata")}},TIME:function(b){var a=m(b.id);if(a&&a.currentTime!==b.position){a.currentTime=b.position;if(a.readyState<2)a.readyState=2;if(a.ended)a.ended=!1;i(a._elem,"timeupdate")}},STATE:function(b){var a=m(b.id);if(a)switch(b.newstate){case "BUFFERING":if(a.readyState>1)a.readyState=
1;if(a.ended)a.ended=!1;i(a._elem,"waiting");break;case "PLAYING":a.paused=!1;a._ppFlag=!0;if(a.readyState<3)a.readyState=3,i(a._elem,"canplay");if(a.ended)a.ended=!1;i(a._elem,"playing");break;case "PAUSED":if(!a.paused&&!a.stopPlayPause)a.paused=!0,a._ppFlag=!0,i(a._elem,"pause");break;case "COMPLETED":if(a.readyState<4)a.readyState=4;a.ended=!0;i(a._elem,"ended")}}},Controller:{ERROR:function(b){var a=m(b.id);a&&k.setError(a._elem,b.message)},SEEK:function(b){var a=m(b.id);if(a){if(a.ended)a.ended=
!1;if(a.paused)try{a.jwapi.sendEvent("play","false")}catch(c){}if(a.currentTime!=b.position)a.currentTime=b.position,i(a._elem,"timeupdate")}},VOLUME:function(b){var a=m(b.id);if(a&&(b=b.percentage/100,a.volume!=b))a.volume=b,i(a._elem,"volumechange")},MUTE:function(b){if(!c||!b.state){var a=m(b.id);if(a&&a.muted!=b.state)a.muted=b.state,i(a._elem,"volumechange")}}}};var g=function(b){e.each(k.jwEvents,function(a,c){e.each(c,function(c){b.jwapi["add"+a+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+
a+"."+c)})})},z=function(b){b&&(b._ppFlag===q&&e.prop(b._elem,"autoplay")||!b.paused)&&setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag===q||!b.paused))try{e(b._elem).play()}catch(a){}},1)},H=function(b){if(b&&b._elemNodeName=="video"){var a,c,d,j,s,l=function(l,k){if(k&&l&&!(k<1||l<1||b.isActive!="flash"))if(a&&(a.remove(),a=!1),clearTimeout(s),c=b._elem.style.width=="auto",d=b._elem.style.height=="auto",c||d){j=j||e(b._elem).getShadowElement();var f;c&&!d?(f=e(b._elem).height(),l*=f/k,k=
f):!c&&d&&(f=e(b._elem).width(),k*=f/l,l=f);j.css({width:l,height:k})}},k=function(){if(!(b.isActive!="flash"||e.prop(b._elem,"readyState"))){var j=e.prop(b._elem,"poster");if(j&&(c=b._elem.style.width=="auto",d=b._elem.style.height=="auto",c||d))a&&(a.remove(),a=!1),a=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),a.bind("load error alreadycomplete",function(){clearTimeout(s);e(this).unbind();var b=this,c=b.naturalWidth||b.width||b.offsetWidth,
d=b.naturalHeight||b.height||b.offsetHeight;d&&c?(l(c,d),b=null):setTimeout(function(){c=b.naturalWidth||b.width||b.offsetWidth;d=b.naturalHeight||b.height||b.offsetHeight;l(c,d);a&&(a.remove(),a=!1);b=null},9)}).prop("src",j).appendTo("body").each(function(){this.complete||this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(s),s=setTimeout(function(){e(b._elem).triggerHandler("error")},9E3))})}};e(b._elem).bind("loadedmetadata",function(){l(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",
k).each(function(){e.prop(b._elem,"readyState")?l(e.prop(this,"videoWidth"),e.prop(this,"videoHeight")):k()})}};e(r).bind("emptied",function(b){b=o(b.target);z(b)});var A;k.jwPlayerReady=function(b){var a=m(b.id);if(a&&a.jwapi){clearTimeout(A);a.jwData=b;if(a.wasSwfReady){var b=a.actionQueue.length,c=0,d;if(b&&a.isActive=="flash")for(;a.actionQueue.length&&b>c;)c++,d=a.actionQueue.shift(),a.jwapi[d.fn].apply(a.jwapi,d.args);if(a.actionQueue.length)a.actionQueue=[]}else b=parseFloat(b.version,10),
(b<5.6||b>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),e.prop(a._elem,"volume",a.volume),e.prop(a._elem,"muted",a.muted),g(a);a.wasSwfReady=!0;z(a)}};var F=e.noop;if(D){var I={play:1,playing:1},B=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"].map(function(b){return b+".webshimspolyfill"}).join(" "),G=function(b){var a=f.data(b.target,"mediaelement");a&&(b.originalEvent&&b.originalEvent.type===b.type)==(a.activating==
"flash")&&(b.stopImmediatePropagation(),I[b.type]&&a.isActive!=a.activating&&e(b.target).pause())};e(r).bind(B,G);F=function(b){e(b).unbind(B).bind(B,G)}}k.setActive=function(b,a,c){c||(c=f.data(b,"mediaelement"));if(c&&c.isActive!=a)a!="html5"&&a!="flash"&&f.warn("wrong type for mediaelement activating: "+a),c.activating=a,e(b).pause(),f.data(b,"mediaelementError",!1),c.isActive=a,a=="flash"?e(b).hide().getShadowElement().show():e(b).show().getShadowElement().hide()};var J=function(){var b=["_bufferedEnd",
"_bufferedStart","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],a=b.length;return function(c){if(c){for(var d=a,e=c.networkState;--d;)delete c[b[d]];c.actionQueue=[];c.buffered.length=0;e&&i(c._elem,"emptied")}}}();k.createSWF=function(b,a,c){if(E){u=!0;var g=e.extend({},n.jwVars,{image:e.prop(b,"poster")||"",file:a.srcProp}),h=e(b).data("jwvars")||{};if(c)k.setActive(b,"flash",c),J(c),c.currentSrc=a.srcProp,e.extend(g,h),n.changeJW(g,
b,a,c,"load"),t(b,"sendEvent",["LOAD",g]);else{var s=e.prop(b,"controls"),l="jwplayer-"+f.getID(b),z=e.extend({},n.jwParams,e(b).data("jwparams")),i=b.nodeName.toLowerCase(),m=e.extend({},n.jwAttrs,{name:l,id:l},e(b).data("jwattrs")),o=e('<div class="polyfill-'+i+'" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({width:b.style.width||e(b).width(),height:b.style.height||e(b).height(),position:"relative"}).insertBefore(b),c=f.data(b,"mediaelement",f.objectCreate(x,{actionQueue:{value:[]},_elemNodeName:{value:i},
_elem:{value:b},currentSrc:{value:a.srcProp},buffered:{value:{start:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(a){if(a>=c.buffered.length)f.error("buffered index size error");else return c.duration*c._bufferedEnd/100+c._bufferedStart},length:0}}}));D&&e.extend(c,{volume:e.prop(b,"volume"),muted:e.prop(b,"muted")});e.extend(g,{id:l,controlbar:s?n.jwVars.controlbar||"over":"none",icons:""+s},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});
g.plugins?g.plugins+=","+d:g.plugins=d;f.addShadowDom(b,o);F(b);k.setActive(b,"flash",c);n.changeJW(g,b,a,c,"embed");H(c);C.embedSWF(j,l,"100%","100%","9.0.0",!1,g,z,m,function(a){if(a.success)c.jwapi=a.ref,s||e(a.ref).attr("tabindex","-1").css("outline","none"),A||(clearTimeout(A),A=setTimeout(function(){var b=e(a.ref);b[0].offsetWidth>1&&b[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):
f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){e(b).mediaLoad()},1)};var t=function(b,a,c,d){return(d=d||o(b))?(d.jwapi&&d.jwapi[a]?d.jwapi[a].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:a,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(b){var a={},d,e=function(c){b=="audio"&&(c=="videoHeight"||c=="videoWidth")||(a[c]=
{get:function(){var a=o(this);if(a)return a[c];else if(d[c].prop._supget)return d[c].prop._supget.apply(this)},writeable:!1})},j=function(b,c){e(b);delete a[b].writeable;a[b].set=c};j("volume",function(a){var b=o(this);if(b){if(a*=100,!isNaN(a)){(a<0||a>100)&&f.error("volume greater or less than allowed "+a/100);b.muted&&(c=!0);t(this,"sendEvent",["VOLUME",a],b);if(c){try{b.jwapi.sendEvent("mute","true")}catch(e){}c=!1}setTimeout(function(){if(!(b.volume==a||b.isActive!="flash"))b.volume=a,i(b._elem,
"volumechange"),b=null},1)}}else if(d.volume.prop._supset)return d.volume.prop._supset.apply(this,arguments)});j("muted",function(a){var b=o(this);if(b)a=!!a,t(this,"sendEvent",["mute",""+a],b),setTimeout(function(){if(!(b.muted==a||b.isActive!="flash"))b.muted=a,i(b._elem,"volumechange"),b=null},1);else if(d.muted.prop._supset)return d.muted.prop._supset.apply(this,arguments)});j("currentTime",function(a){var b=o(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=
setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);t(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(b.readyState>0)b.currentTime=a,i(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(d.currentTime.prop._supset)return d.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(b){a[b]={value:function(){var a=o(this);if(a)a.stopPlayPause&&clearTimeout(a.stopPlayPause),t(this,"sendEvent",["play",b=="play"],a),setTimeout(function(){if(a.isActive==
"flash"&&(a._ppFlag=!0,a.paused!=(b!="play")))a.paused=b!="play",i(a._elem,b)},1);else if(d[b].prop._supvalue)return d[b].prop._supvalue.apply(this,arguments)}}});h.forEach(e);f.onNodeNamesPropertyModify(b,"controls",function(a,b){t(this,b?"showControls":"hideControls")});d=f.defineNodeNameProperties(b,a,"prop")})});
(function(e,f,p){var r=f.audio&&f.video,q=!1;if(r){var n=document.createElement("video");f.videoBuffered="buffered"in n;q="loop"in n;f.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),p.cfg.waitReady&&e.readyWait++,p.loader.loadScript("mediaelement-native-fix",function(){p.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support",function(e,f,n,p,u){var w=f.cfg.mediaelement,h=f.mediaelement,v=!n.swfobject||swfobject.hasFlashPlayerVersion("9.0.115"),
x=function(){f.ready("mediaelement-swf",function(){if(!h.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})},y=function(c,d){var c=e(c),j={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!j.src)return j;var g=c.attr("type");if(g)j.type=g,j.container=e.trim(g.split(";")[0]);else if(d||(d=c[0].nodeName.toLowerCase(),d=="source"&&(d=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),
g=h.getTypeForSrc(j.src,d))j.type=g,j.container=g,e.nodeName(c[0],"source")&&(f.warn("you should always provide a proper mime-type. "+j.src+" detected as: "+g),c.attr("type",g));if(g=c.attr("media"))j.media=g;return j};f.ready("WINDOWLOAD",function(){f.loader.loadList(["swfobject"])});f.ready("swfobject",function(){(v=swfobject.hasFlashPlayerVersion("9.0.115"))&&f.ready("WINDOWLOAD",x)});r&&f.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay",
"volumechange"]);h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],
"video/webm":["webm"]}};h.mimeTypes.source=e.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(c,d){if(c.indexOf("youtube.com/watch?")!=-1)return"video/youtube";var c=c.split("?")[0].split("."),c=c[c.length-1],f;e.each(h.mimeTypes[d],function(d,e){if(e.indexOf(c)!==-1)return f=d,!1});return f};h.srces=function(c,d){c=e(c);if(d)c.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(d)||(d=[d]),d.forEach(function(d){var e=p.createElement("source");typeof d=="string"&&
(d={src:d});e.setAttribute("src",d.src);d.type&&e.setAttribute("type",d.type);d.media&&e.setAttribute("media",d.media);c.append(e)});else{var d=[],f=c[0].nodeName.toLowerCase(),g=y(c,f);g.src?d.push(g):e("source",c).each(function(){g=y(this,f);g.src&&d.push(g)});return d}};e.fn.loadMediaSrc=function(c,d){return this.each(function(){d!==u&&(e(this).removeAttr("poster"),d&&e.attr(this,"poster",d));h.srces(this,c);e(this).mediaLoad()})};h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime",
"video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];h.canSwfPlaySrces=function(c,d){var f="";v&&(c=e(c),d=d||h.srces(c),e.each(d,function(c,d){if(d.container&&d.src&&h.swfMimeTypes.indexOf(d.container)!=-1)return f=d,!1}));return f};h.canNativePlaySrces=function(c,d){var f="";r&&(c=e(c),d=d||h.srces(c),e.each(d,function(d,e){if(e.type&&
c.canPlayType(e.type))return f=e,!1}));return f};h.setError=function(c,d){d||(d="can't play sources");f.data(c,"mediaelementError",d);f.warn("mediaelementError: "+d);setTimeout(function(){f.data(c,"mediaelementError")&&e(c).trigger("mediaerror")},1)};var m=function(){var c;return function(d,e,g){f.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(d,e,g):c||(c=!0,x(),m(d,e,g))})}}(),o=function(c,d,e,g,i){g=g||h.srces(c);f.data(c,"mediaelementError",!1);g.length&&(e||e!==!1&&d&&d.isActive==
"flash"?(e=h.canSwfPlaySrces(c,g))?m(c,e,d):i?h.setError(c):o(c,d,!1,g,!0):(e=h.canNativePlaySrces(c))?d&&d.isActive=="flash"&&h.setActive(c,"html5",d):i?h.setError(c):o(c,d,!0,g,!0))};e(p).bind("ended",function(c){var d=f.data(c.target,"mediaelement");(!q||d&&d.isActive!="html5"||e.prop(c.target,"loop"))&&setTimeout(function(){!e.prop(c.target,"paused")&&e.prop(c.target,"loop")&&e(c.target).prop("currentTime",0).play()},1)});q||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");var i=/^(?:embed|object)$/i;
f.addReady(function(c,d){e("video, audio",c).add(d.filter("video, audio")).each(function(){var c=this.parentNode;if(!c||!i.test(c.nodeName||""))o(this,!1,w.preferFlash||u)})});["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var c=f.data(this,"mediaelement");o(this,c);r&&(!c||c.isActive=="html5")&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}})});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,jQuery.webshims);
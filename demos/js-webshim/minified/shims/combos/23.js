var swfmini=function(){function e(){if(!A){try{var e=T.getElementsByTagName("body")[0].appendChild(p("span"));e.parentNode.removeChild(e)}catch(t){return}A=!0;for(var i=N.length,n=0;i>n;n++)N[n]()}}function t(e){A?e():N[N.length]=e}function i(){}function n(){E&&a()}function a(){var e=T.getElementsByTagName("body")[0],t=p(m);t.setAttribute("type",b);var i=e.appendChild(t);if(i){var n=0;(function(){if(typeof i.GetVariable!=f){var a=i.GetVariable("$version");a&&(a=a.split(" ")[1].split(","),D.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}else if(10>n)return n++,setTimeout(arguments.callee,10),void 0;e.removeChild(t),i=null})()}}function r(e){var t=null,i=c(e);if(i&&"OBJECT"==i.nodeName)if(typeof i.SetVariable!=f)t=i;else{var n=i.getElementsByTagName(m)[0];n&&(t=n)}return t}function o(e,t,i){var n,a=c(i);if(D.wk&&312>D.wk)return n;if(a)if(typeof e.id==f&&(e.id=i),D.ie&&D.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var u="";for(var l in t)t[l]!=Object.prototype[l]&&(u+='<param name="'+l+'" value="'+t[l]+'" />');a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+u+"</object>",k[k.length]=e.id,n=c(e.id)}else{var d=p(m);d.setAttribute("type",b);for(var h in e)e[h]!=Object.prototype[h]&&("styleclass"==h.toLowerCase()?d.setAttribute("class",e[h]):"classid"!=h.toLowerCase()&&d.setAttribute(h,e[h]));for(var v in t)t[v]!=Object.prototype[v]&&"movie"!=v.toLowerCase()&&s(d,v,t[v]);a.parentNode.replaceChild(d,a),n=d}return n}function s(e,t,i){var n=p("param");n.setAttribute("name",t),n.setAttribute("value",i),e.appendChild(n)}function u(e){var t=c(e);t&&"OBJECT"==t.nodeName&&(D.ie&&D.win?(t.style.display="none",function(){4==t.readyState?l(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function l(e){var t=c(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function c(e){var t=null;try{t=T.getElementById(e)}catch(i){}return t}function p(e){return T.createElement(e)}function d(e){var t=D.pv,i=e.split(".");return i[0]=parseInt(i[0],10),i[1]=parseInt(i[1],10)||0,i[2]=parseInt(i[2],10)||0,t[0]>i[0]||t[0]==i[0]&&t[1]>i[1]||t[0]==i[0]&&t[1]==i[1]&&t[2]>=i[2]?!0:!1}function h(e,t){if(S){var i,n=t?"visible":"hidden";A&&i&&c(e)&&(c(e).style.visibility=n)}}var f="undefined",m="object",v=jQuery.webshims,g="Shockwave Flash",y="ShockwaveFlash.ShockwaveFlash",b="application/x-shockwave-flash",w=window,T=document,x=navigator,E=!1,N=[n],k=[],C=[],A=!1,S=!0,D=function(){var e=typeof T.getElementById!=f&&typeof T.getElementsByTagName!=f&&typeof T.createElement!=f,t=x.userAgent.toLowerCase(),i=x.platform.toLowerCase(),n=i?/win/.test(i):/win/.test(t),a=i?/mac/.test(i):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],u=null;if(typeof x.plugins!=f&&typeof x.plugins[g]==m)u=x.plugins[g].description,!u||typeof x.mimeTypes!=f&&x.mimeTypes[b]&&!x.mimeTypes[b].enabledPlugin||(E=!0,o=!1,u=u.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(u.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(u.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(u)?parseInt(u.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof w.ActiveXObject!=f)try{var l=new ActiveXObject(y);l&&(u=l.GetVariable("$version"),u&&(o=!0,u=u.split(" ")[1].split(","),s=[parseInt(u[0],10),parseInt(u[1],10),parseInt(u[2],10)]))}catch(c){}return{w3:e,pv:s,wk:r,ie:o,win:n,mac:a}}();return function(){D.ie&&D.win&&window.attachEvent&&window.attachEvent("onunload",function(){for(var e=C.length,t=0;e>t;t++)C[t][0].detachEvent(C[t][1],C[t][2]);for(var i=k.length,n=0;i>n;n++)u(k[n]);for(var a in D)D[a]=null;D=null;for(var r in swfmini)swfmini[r]=null;swfmini=null})}(),v.ready("DOM",e),{registerObject:function(){},getObjectById:function(e){return D.w3?r(e):void 0},embedSWF:function(e,i,n,a,r,s,u,l,c,p){var v={success:!1,id:i};D.w3&&!(D.wk&&312>D.wk)&&e&&i&&n&&a&&r?(h(i,!1),t(function(){n+="",a+="";var t={};if(c&&typeof c===m)for(var s in c)t[s]=c[s];t.data=e,t.width=n,t.height=a;var g={};if(l&&typeof l===m)for(var y in l)g[y]=l[y];if(u&&typeof u===m)for(var b in u)typeof g.flashvars!=f?g.flashvars+="&"+b+"="+u[b]:g.flashvars=b+"="+u[b];if(d(r)){var w=o(t,g,i);t.id==i&&h(i,!0),v.success=!0,v.ref=w}else h(i,!0);p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){S=!1},ua:D,getFlashPlayerVersion:function(){return{major:D.pv[0],minor:D.pv[1],release:D.pv[2]}},hasFlashPlayerVersion:d,createSWF:function(e,t,i){return D.w3?o(e,t,i):void 0},showExpressInstall:function(){},removeSWF:function(e){D.w3&&u(e)},createCSS:function(){},addDomLoadEvent:t,addLoadEvent:i,expressInstallCallback:function(){}}}();(function(e,t,i){"use strict";var n,a=t.audio&&t.video,r=!1,o=i.bugs,s=function(){i.ready(l,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([l],a))})},u=i.cfg.mediaelement,l=u&&"jwplayer"==u.player?"mediaelement-swf":"mediaelement-jaris";if(!u)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(a){var c=document.createElement("video");t.videoBuffered="buffered"in c,r="loop"in c,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(a&&!u.preferFlash){var p={1:1,2:1},d=function(t){var a,r=t.target.parentNode;!u.preferFlash&&(e(t.target).is("audio, video")||r&&e("source:last",r)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!p[a.prop("error")]&&e(function(){n&&!u.preferFlash?(s(),i.ready("WINDOWLOAD "+l,function(){setTimeout(function(){u.preferFlash||!i.mediaelement.createSWF||a.is(".nonnative-api-active")||(u.preferFlash=!0,document.removeEventListener("error",d,!0),e("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",d,!0)})};document.addEventListener("error",d,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!p[t]?(d({target:this}),!1):void 0})}t.track&&!o.track&&function(){if(o.track||(o.track="number"!=typeof e("<track />")[0].readyState),!o.track)try{new TextTrackCue(2,3,"")}catch(t){o.track=!0}var n=i.cfg.track,a=function(t){e(t.target).filter("track").each(r)},r=function(){return o.track||!n.override&&3==e.prop(this,"readyState")?(n.override=!0,i.reTest("track"),document.removeEventListener("error",a,!0),this&&e.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support"),!1):void 0},s=function(){document.addEventListener("error",a,!0),o.track?r():e("track").each(r)};n.override||(i.isReady("track")?s():e(s))}(),i.register("mediaelement-core",function(e,i,c,p,d){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var h=i.mediaelement;h.parseRtmp=function(e){var t,n,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],t=1,n=o.length;n>t;t++)a||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],a=!0),a?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=h.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:h.parseRtmp(a)),a):a},m=!n&&"postMessage"in c&&a,v=function(){v.loaded||(v.loaded=!0,e(function(){i.loader.loadList(["track-ui"])}))},g=function(){var t;return function(){!t&&m&&(t=!0,i.loader.loadScript("https://www.youtube.com/player_api"),e(function(){i.polyfill("mediaelement-yt")}))}}(),y=function(){n?s():g()};i.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},h.mimeTypes.source=e.extend({},h.mimeTypes.audio,h.mimeTypes.video),h.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(h.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):d}),n},h.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=f(t,n);return a.src?i.push(a):e("source",t).each(function(){a=f(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(e){var i=p.createElement("source");"string"==typeof e&&(e={src:e}),i.setAttribute("src",e.src),e.type&&i.setAttribute("type",e.type),e.media&&i.setAttribute("media",e.media),t.append(i)})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==d&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),h.srces(this,t),e(this).mediaLoad()})},h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],h.canThirdPlaySrces=function(t,i){var a="";return(n||m)&&(t=e(t),i=i||h.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=h.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(a=t,!1):d})),a};var b={};h.canNativePlaySrces=function(t,i){var n="";if(a){t=e(t);var r=(t[0].nodeName||"").toLowerCase(),o=(b[r]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return n;i=i||h.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(n=i,!1):d})}return n},h.setError=function(t,n){n||(n="can't play sources"),e(t).pause().data("mediaerror",n),i.warn("mediaelementError: "+n),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var w=function(){var e;return function(t,a,r){e||v(),i.ready(n?l:"mediaelement-yt",function(){h.createSWF?h.createSWF(t,a,r):e||(e=!0,y(),w(t,a,r))}),e||!m||h.createSWF||g()}}(),T=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=h.canThirdPlaySrces(e,n),r?w(e,r,t):a?h.setError(e,!1):T(e,t,!1,n,!0)):(r=h.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&h.setActive(e,"html5",t):a?(h.setError(e,!1),t&&"third"==t.isActive&&h.setActive(e,"html5",t)):T(e,t,!0,n,!0))},x=/^(?:embed|object|datalist)$/i,E=function(t,n){var a=i.data(t,"mediaelementBase")||i.data(t,"mediaelementBase",{}),r=h.srces(t),o=t.parentNode;clearTimeout(a.loadTimer),e.data(t,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!x.test(o.nodeName||"")&&(n=n||i.data(t,"mediaelement"),T(t,n,u.preferFlash||d,r))};h.selectSource=E,e(p).on("ended",function(t){var n=i.data(t.target,"mediaelement");(!r||n&&"html5"!=n.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()},1)}),i.ready("dom-support",function(){r||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var r=i.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");E(this,e),!a||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}});b[t]=i.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(i){var r="";return a&&b[t].prop._supvalue&&(r=b[t].prop._supvalue.call(this,i),"no"==r&&(r="")),!r&&n&&(i=e.trim((i||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(i)&&(r="maybe")),r}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){E(e),e=null},9)}})});var N=function(){var t=function(){if(E(this),a){var t,i,n=this,r=function(){var t=e.prop(n,"buffered");if(t){for(var i="",a=0,r=t.length;r>a;a++)i+=t.end(a);return i}},o=function(){var t=r();t!=i&&(i=t,e(n).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(i=r()),clearTimeout(t),t=setTimeout(o,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(i=!1),clearTimeout(t)}})}},n=!1;i.ready("dom-support",function(){n=!0,i.addReady(function(i,n){var a=e("video, audio",i).add(n.filter("video, audio")).each(t);!v.loaded&&e("track",a).length&&v(),a=null})}),a&&!n&&i.addReady(function(t,i){n||e("video, audio",t).add(i.filter("video, audio")).each(function(){return!h.canNativePlaySrces(this)||!v.loaded&&e("track",this).length?(y(),n=!0,!1):d})})};t.track&&!o.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),a?(i.isReady("mediaelement-core",!0),N(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(l,N),i.ready("WINDOWLOAD mediaelement",v)})})(jQuery,Modernizr,jQuery.webshims);
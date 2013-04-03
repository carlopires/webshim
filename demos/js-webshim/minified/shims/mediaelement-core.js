(function(e,t,i){"use strict";var n,a=t.audio&&t.video,r=!1,o=i.bugs,s=function(){i.ready(l,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([l],a))})},u=i.cfg.mediaelement,l=u&&"jwplayer"==u.player?"mediaelement-swf":"mediaelement-jaris";if(!u)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(a){var p=document.createElement("video");t.videoBuffered="buffered"in p,r="loop"in p,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),i.reTest("mediaelement-native-fix"))}if(a&&!u.preferFlash){var c={1:1,2:1},d=function(t){var a,r=t.target.parentNode;!u.preferFlash&&(e(t.target).is("audio, video")||r&&e("source:last",r)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!c[a.prop("error")]&&e(function(){n&&!u.preferFlash?(s(),i.ready("WINDOWLOAD "+l,function(){setTimeout(function(){u.preferFlash||!i.mediaelement.createSWF||a.is(".nonnative-api-active")||(u.preferFlash=!0,document.removeEventListener("error",d,!0),e("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",d,!0)})};document.addEventListener("error",d,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!c[t]?(d({target:this}),!1):void 0})}t.track&&!o.track&&function(){if(o.track||(o.track="number"!=typeof e("<track />")[0].readyState),!o.track)try{new TextTrackCue(2,3,"")}catch(t){o.track=!0}var n=i.cfg.track,a=function(t){e(t.target).filter("track").each(r)},r=function(){return o.track||!n.override&&3==e.prop(this,"readyState")?(n.override=!0,i.reTest("track"),document.removeEventListener("error",a,!0),this&&e.nodeName(this,"track")?i.error("track support was overwritten. Please check your vtt including your vtt mime-type"):i.info("track support was overwritten. due to bad browser support"),!1):void 0},s=function(){document.addEventListener("error",a,!0),o.track?r():e("track").each(r)};n.override||(i.isReady("track")?s():e(s))}(),i.register("mediaelement-core",function(e,i,p,c,d){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var h=i.mediaelement;h.parseRtmp=function(e){var t,n,a,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],t=1,n=o.length;n>t;t++)a||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],a=!0),a?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var m=function(t,i){t=e(t);var n,a={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return a.src?(n=t.attr("data-server"),null!=n&&(a.server=n),n=t.attr("type"),n?(a.type=n,a.container=e.trim(n.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),a.server?(a.type=i+"/rtmp",a.container=i+"/rtmp"):(n=h.getTypeForSrc(a.src,i,a),n&&(a.type=n,a.container=n))),n=t.attr("media"),n&&(a.media=n),("audio/rtmp"==a.type||"video/rtmp"==a.type)&&(a.server?a.streamId=a.src:h.parseRtmp(a)),a):a},f=!n&&"postMessage"in p&&a,v=function(){v.loaded||(v.loaded=!0,e(function(){i.loader.loadList(["track-ui"])}))},g=function(){var t;return function(){!t&&f&&(t=!0,i.loader.loadScript("https://www.youtube.com/player_api"),e(function(){i.polyfill("mediaelement-yt")}))}}(),y=function(){n?s():g()};i.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},h.mimeTypes.source=e.extend({},h.mimeTypes.audio,h.mimeTypes.video),h.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var n;return e.each(h.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(n=e,!1):d}),n},h.srces=function(t,i){if(t=e(t),!i){i=[];var n=t[0].nodeName.toLowerCase(),a=m(t,n);return a.src?i.push(a):e("source",t).each(function(){a=m(this,n),a.src&&i.push(a)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(e){var i=c.createElement("source");"string"==typeof e&&(e={src:e}),i.setAttribute("src",e.src),e.type&&i.setAttribute("type",e.type),e.media&&i.setAttribute("media",e.media),t.append(i)})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==d&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),h.srces(this,t),e(this).mediaLoad()})},h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],h.canThirdPlaySrces=function(t,i){var a="";return(n||f)&&(t=e(t),i=i||h.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=h.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(a=t,!1):d})),a};var b={};h.canNativePlaySrces=function(t,i){var n="";if(a){t=e(t);var r=(t[0].nodeName||"").toLowerCase(),o=(b[r]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return n;i=i||h.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(n=i,!1):d})}return n},h.setError=function(t,n){n||(n="can't play sources"),e(t).pause().data("mediaerror",n),i.warn("mediaelementError: "+n),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var w=function(){var e;return function(t,a,r){e||v(),i.ready(n?l:"mediaelement-yt",function(){h.createSWF?h.createSWF(t,a,r):e||(e=!0,y(),w(t,a,r))}),e||!f||h.createSWF||g()}}(),x=function(e,t,i,n,a){var r;i||i!==!1&&t&&"third"==t.isActive?(r=h.canThirdPlaySrces(e,n),r?w(e,r,t):a?h.setError(e,!1):x(e,t,!1,n,!0)):(r=h.canNativePlaySrces(e,n),r?t&&"third"==t.isActive&&h.setActive(e,"html5",t):a?(h.setError(e,!1),t&&"third"==t.isActive&&h.setActive(e,"html5",t)):x(e,t,!0,n,!0))},T=/^(?:embed|object|datalist)$/i,N=function(t,n){var a=i.data(t,"mediaelementBase")||i.data(t,"mediaelementBase",{}),r=h.srces(t),o=t.parentNode;clearTimeout(a.loadTimer),e.data(t,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!T.test(o.nodeName||"")&&(n=n||i.data(t,"mediaelement"),x(t,n,u.preferFlash||d,r))};h.selectSource=N,e(c).on("ended",function(t){var n=i.data(t.target,"mediaelement");(!r||n&&"html5"!=n.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()},1)}),i.ready("dom-support",function(){r||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var r=i.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=i.data(this,"mediaelement");N(this,e),!a||e&&"html5"!=e.isActive||!r.prop._supvalue||r.prop._supvalue.apply(this,arguments)}}});b[t]=i.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(i){var r="";return a&&b[t].prop._supvalue&&(r=b[t].prop._supvalue.call(this,i),"no"==r&&(r="")),!r&&n&&(i=e.trim((i||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(i)&&(r="maybe")),r}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){N(e),e=null},9)}})});var E=function(){var t=function(){if(N(this),a){var t,i,n=this,r=function(){var t=e.prop(n,"buffered");if(t){for(var i="",a=0,r=t.length;r>a;a++)i+=t.end(a);return i}},o=function(){var t=r();t!=i&&(i=t,e(n).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(i=r()),clearTimeout(t),t=setTimeout(o,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(i=!1),clearTimeout(t)}})}},n=!1;i.ready("dom-support",function(){n=!0,i.addReady(function(i,n){var a=e("video, audio",i).add(n.filter("video, audio")).each(t);!v.loaded&&e("track",a).length&&v(),a=null})}),a&&!n&&i.addReady(function(t,i){n||e("video, audio",t).add(i.filter("video, audio")).each(function(){return!h.canNativePlaySrces(this)||!v.loaded&&e("track",this).length?(y(),n=!0,!1):d})})};t.track&&!o.track&&i.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),a?(i.isReady("mediaelement-core",!0),E(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(l,E),i.ready("WINDOWLOAD mediaelement",v)})})(jQuery,Modernizr,jQuery.webshims);
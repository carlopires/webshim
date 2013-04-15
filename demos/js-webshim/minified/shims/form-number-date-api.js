jQuery.webshims.register("form-number-date-api",function(e,t,i,n){"use strict";t.getStep||(t.getStep=function(t,i){var n=e.attr(t,"step");return"any"===n?n:(i=i||u(t),r[i]&&r[i].step?(n=v.number.asNumber(n),(!isNaN(n)&&n>0?n:r[i].step)*(r[i].stepScaleFactor||1)):n)}),t.addMinMaxNumberToCache||(t.addMinMaxNumberToCache=function(e,t,i){e+"AsNumber"in i||(i[e+"AsNumber"]=r[i.type].asNumber(t.attr(e)),isNaN(i[e+"AsNumber"])&&e+"Default"in r[i.type]&&(i[e+"AsNumber"]=r[i.type][e+"Default"]))});var a=parseInt("NaN",10),r=t.inputTypes,o=function(e){return"number"==typeof e||e&&e==1*e},s=function(t){return e('<input type="'+t+'" />').prop("type")===t},u=function(e){return(e.getAttribute("type")||"").toLowerCase()},l=function(e){return e&&!isNaN(1*e)},p=t.addMinMaxNumberToCache,c=function(e,t){e=""+e,t-=e.length;for(var i=0;t>i;i++)e="0"+e;return e},d=1e-7,h=t.bugs.bustedValidity;t.addValidityRule("stepMismatch",function(e,i,n,a){if(""===i)return!1;"type"in n||(n.type=u(e[0]));var o,s=(a||{}).stepMismatch||!1;if(r[n.type]&&r[n.type].step){if("step"in n||(n.step=t.getStep(e[0],n.type)),"any"==n.step)return!1;if("valueAsNumber"in n||(n.valueAsNumber=r[n.type].asNumber(i)),isNaN(n.valueAsNumber))return!1;p("min",e,n),o=n.minAsNumber,isNaN(o)&&(o=r[n.type].stepBase||0),s=Math.abs((n.valueAsNumber-o)%n.step),s=!(d>=s||d>=Math.abs(s-n.step))}return s}),[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(e){t.addValidityRule(e.name,function(t,i,n,a){var o=(a||{})[e.name]||!1;if(""===i)return o;if("type"in n||(n.type=u(t[0])),r[n.type]&&r[n.type].asNumber){if("valueAsNumber"in n||(n.valueAsNumber=r[n.type].asNumber(i)),isNaN(n.valueAsNumber))return!1;if(p(e.attr,t,n),isNaN(n[e.attr+"AsNumber"]))return o;o=n[e.attr+"AsNumber"]*e.factor<n.valueAsNumber*e.factor-d}return o})}),t.reflectProperties(["input"],["max","min","step"]);var m=t.defineNodeNameProperty("input","valueAsNumber",{prop:{get:function(){var t=this,i=u(t),n=r[i]&&r[i].asNumber?r[i].asNumber(e.prop(t,"value")):m.prop._supget&&m.prop._supget.apply(t,arguments);return null==n&&(n=a),n},set:function(i){var n=this,a=u(n);if(r[a]&&r[a].numberToString){if(isNaN(i))return e.prop(n,"value",""),undefined;var o=r[a].numberToString(i);o!==!1?e.prop(n,"value",o):t.error("INVALID_STATE_ERR: DOM Exception 11")}else m.prop._supset&&m.prop._supset.apply(n,arguments)}}}),f=t.defineNodeNameProperty("input","valueAsDate",{prop:{get:function(){var t=this,i=u(t);return r[i]&&r[i].asDate&&!r[i].noAsDate?r[i].asDate(e.prop(t,"value")):f.prop._supget&&f.prop._supget.call(t)||null},set:function(i){var n=this,a=u(n);if(!r[a]||!r[a].dateToString||r[a].noAsDate)return f.prop._supset&&f.prop._supset.apply(n,arguments)||null;if(null===i)return e.prop(n,"value",""),"";var o=r[a].dateToString(i);return o!==!1?(e.prop(n,"value",o),o):(t.error("INVALID_STATE_ERR: DOM Exception 11"),undefined)}}});e.each({stepUp:1,stepDown:-1},function(i,n){var a=t.defineNodeNameProperty("input",i,{prop:{value:function(i){var o,s,l,p,c,h,m=u(this);if(!r[m]||!r[m].asNumber){if(a.prop&&a.prop.value)return a.prop.value.apply(this,arguments);throw t.info("no step method for type: "+m),"invalid state error"}if(h={type:m},i||(i=1,t.info("you should always use a factor for stepUp/stepDown")),i*=n,s=e.prop(this,"valueAsNumber"),isNaN(s))throw t.info("valueAsNumber is NaN can't apply stepUp/stepDown "),"invalid state error";if(o=t.getStep(this,m),"any"==o)throw t.info("step is 'any' can't apply stepUp/stepDown"),"invalid state error";if(t.addMinMaxNumberToCache("min",e(this),h),t.addMinMaxNumberToCache("max",e(this),h),o*=i,s=1*(s+o).toFixed(5),p=(s-(h.minAsNumber||0))%o,p&&Math.abs(p)>d&&(c=s-p,c+=p>0?o:-o,s=1*c.toFixed(5)),!isNaN(h.maxAsNumber)&&s>h.maxAsNumber||!isNaN(h.minAsNumber)&&h.minAsNumber>s)throw t.info("max/min overflow can't apply stepUp/stepDown"),"invalid state error";l?e.prop(this,"valueAsDate",l):e.prop(this,"valueAsNumber",s)}}})});var v={number:{mismatch:function(e){return!o(e)},step:1,stepScaleFactor:1,asNumber:function(e){return o(e)?1*e:a},numberToString:function(e){return o(e)?e:!1}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(e){if(!e||!e.split||!/\d$/.test(e))return!0;var t,i=e.split(/\u002D/);if(3!==i.length)return!0;var n=!1;if(4>i[0].length||2!=i[1].length||i[1]>12||2!=i[2].length||i[2]>33)n=!0;else for(t=0;3>t;t++)if(!l(i[t])){n=!0;break}return n||e!==this.dateToString(this.asDate(e,!0))},step:1,stepScaleFactor:864e5,asDate:function(e,t){return!t&&this.mismatch(e)?null:new Date(this.asNumber(e,!0))},asNumber:function(e,t){var i=a;return(t||!this.mismatch(e))&&(e=e.split(/\u002D/),i=Date.UTC(e[0],e[1]-1,e[2])),i},numberToString:function(e){return o(e)?this.dateToString(new Date(1*e)):!1},dateToString:function(e){return e&&e.getFullYear?c(e.getUTCFullYear(),4)+"-"+c(e.getUTCMonth()+1,2)+"-"+c(e.getUTCDate(),2):!1}},time:{mismatch:function(t,i){if(!t||!t.split||!/\d$/.test(t))return!0;if(t=t.split(/\u003A/),2>t.length||t.length>3)return!0;var n,a=!1;return t[2]&&(t[2]=t[2].split(/\u002E/),n=parseInt(t[2][1],10),t[2]=t[2][0]),e.each(t,function(e,t){return l(t)&&2===t.length?undefined:(a=!0,!1)}),a?!0:t[0]>23||0>t[0]||t[1]>59||0>t[1]?!0:t[2]&&(t[2]>59||0>t[2])?!0:n&&isNaN(n)?!0:(n&&(100>n?n*=100:10>n&&(n*=10)),i===!0?[t,n]:!1)},step:60,stepBase:0,stepScaleFactor:1e3,asDate:function(e){return e=new Date(this.asNumber(e)),isNaN(e)?null:e},asNumber:function(e){var t=a;return e=this.mismatch(e,!0),e!==!0&&(t=Date.UTC("1970",0,1,e[0][0],e[0][1],e[0][2]||0),e[1]&&(t+=e[1])),t},dateToString:function(e){if(e&&e.getUTCHours){var t=c(e.getUTCHours(),2)+":"+c(e.getUTCMinutes(),2),i=e.getSeconds();return"0"!=i&&(t+=":"+c(i,2)),i=e.getUTCMilliseconds(),"0"!=i&&(t+="."+c(i,3)),t}return!1}},month:{mismatch:function(e){return v.date.mismatch(e+"-01")},step:1,stepScaleFactor:!1,asDate:function(e){return new Date(v.date.asNumber(e+"-01"))},asNumber:function(e){var t=a;return e&&!this.mismatch(e)&&(e=e.split(/\u002D/),e[0]=1*e[0]-1970,e[1]=1*e[1]-1,t=12*e[0]+e[1]),t},numberToString:function(e){var t,i=!1;return o(e)&&(t=e%12,e=(e-t)/12+1970,t+=1,1>t&&(e-=1,t+=12),i=c(e,4)+"-"+c(t,2)),i},dateToString:function(e){if(e&&e.getUTCHours){var t=v.date.dateToString(e);return t.split&&(t=t.split(/\u002D/))?t[0]+"-"+t[1]:!1}return!1}}};!h&&s("range")&&s("time")||(v.range=e.extend({},v.number,v.range),v.time=e.extend({},v.date,v.time),v.month=e.extend({},v.date,v.month)),["number","month","range","date","time"].forEach(function(e){(h||!s(e))&&t.addInputType(e,v[e])}),null==e("<input />").prop("labels")&&t.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){if("hidden"==this.type)return null;var t=this.id,i=e(this).closest("label").filter(function(){var e=this.attributes["for"]||{};return!e.specified||e.value==t});return t&&(i=i.add('label[for="'+t+'"]')),i.get()},writeable:!1}}),Modernizr.formvalidation&&!t.bugs.bustedValidity&&e("input").each(function(){e(this).prop("validity")})});
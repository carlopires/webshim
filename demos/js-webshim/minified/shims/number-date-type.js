(function(w){var z,D=function(h,i,E){if(!z){z=true;var r=parseInt("NaN",10),x=document,e=i.inputTypes,o=function(a){return typeof a=="number"||a&&a==a*1},s=function(a){return h('<input type="'+a+'" />').attr("type")===a},m=function(a){return(a.getAttribute("type")||"").toLowerCase()},A=function(a,b){var c=h.attr(a,"step");if(c==="any")return c;b=b||m(a);if(!e[b]||!e[b].step)return c;c=e.number.asNumber(c);return(!isNaN(c)&&c>0?c:e[b].step)*e[b].stepScaleFactor},u=function(a,b,c){if(!(a+"AsNumber"in
c)){c[a+"AsNumber"]=e[c.type].asNumber(b.attr(a));if(isNaN(c[a+"AsNumber"])&&a+"Default"in e[c.type])c[a+"AsNumber"]=e[c.type][a+"Default"]}},p=function(a,b){a=""+a;b-=a.length;for(var c=0;c<b;c++)a="0"+a;return a};i.addValidityRule("stepMismatch",function(a,b,c){if(b==="")return false;if(!("type"in c))c.type=m(a[0]);if(c.type=="date")return false;var f=false;if(e[c.type]&&e[c.type].step){if(!("step"in c))c.step=A(a[0],c.type);if(c.step=="any")return false;if(!("valueAsNumber"in c))c.valueAsNumber=
e[c.type].asNumber(b);if(isNaN(c.valueAsNumber))return false;u("min",a,c);a=c.minAsNumber;if(isNaN(a))a=e[c.type].stepBase||0;f=Math.abs((c.valueAsNumber-a)%c.step);f=!(f<=1.0E-7||Math.abs(f-c.step)<=1.0E-7)}return f});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){i.addValidityRule(a.name,function(b,c,f){var k=false;if(c==="")return k;if(!("type"in f))f.type=m(b[0]);if(e[f.type]&&e[f.type].asNumber){if(!("valueAsNumber"in f))f.valueAsNumber=
e[f.type].asNumber(c);if(isNaN(f.valueAsNumber))return false;u(a.attr,b,f);if(isNaN(f[a.attr+"AsNumber"]))return k;k=f[a.attr+"AsNumber"]*a.factor<f.valueAsNumber*a.factor-1.0E-7}return k})});i.attr("valueAsNumber",{elementNames:["input"],getter:function(a){var b=m(a);return e[b]&&e[b].asNumber?e[b].asNumber(h.attr(a,"value")):r},setter:function(a,b,c){var f=m(a);if(e[f]&&e[f].numberToString)if(isNaN(b))h.attr(a,"value","");else{b=e[f].numberToString(b);if(b!==false)h.attr(a,"value",b);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else c()}});i.attr("valueAsDate",{elementNames:["input"],getter:function(a){var b=m(a);return e[b]&&e[b].asDate&&!e[b].noAsDate?e[b].asDate(h.attr(a,"value")):null},setter:function(a,b,c){var f=m(a);if(e[f]&&e[f].dateToString){if(!E.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(b===null)h.attr(a,"value","");else{b=e[f].dateToString(b);if(b!==false)h.attr(a,"value",b);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else c()}});var n={number:{mismatch:function(a){return!o(a)},
step:1,stepScaleFactor:1,asNumber:function(a){return o(a)?a*1:r},numberToString:function(a){return o(a)?a:false}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return true;var b=a.split(/\u002D/);if(b.length!==3)return true;var c=false;h.each(b,function(f,k){if(!(o(k)||k&&k=="0"+k*1)){c=true;return false}});if(c)return c;if(b[0].length!==4||b[1].length!=2||b[1]>12||b[2].length!=2||b[2]>33)c=true;return a!==this.dateToString(this.asDate(a,true))},step:1,
stepScaleFactor:864E5,asDate:function(a,b){if(!b&&this.mismatch(a))return null;return new Date(this.asNumber(a,true))},asNumber:function(a,b){var c=r;if(b||!this.mismatch(a)){a=a.split(/\u002D/);c=Date.UTC(a[0],a[1]-1,a[2])}return c},numberToString:function(a){return o(a)?this.dateToString(new Date(a*1)):false},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+p(a.getUTCMonth()+1,2)+"-"+p(a.getUTCDate(),2):false}},time:{mismatch:function(a,b){if(!a||!a.split||!/\d$/.test(a))return true;
a=a.split(/\u003A/);if(a.length<2||a.length>3)return true;var c=false,f;if(a[2]){a[2]=a[2].split(/\u002E/);f=parseInt(a[2][1],10);a[2]=a[2][0]}h.each(a,function(k,g){if(!(o(g)||g&&g=="0"+g*1)||g.length!==2){c=true;return false}});if(c)return true;if(a[0]>23||a[0]<0||a[1]>59||a[1]<0)return true;if(a[2]&&(a[2]>59||a[2]<0))return true;if(f&&isNaN(f))return true;if(f)if(f<100)f*=100;else if(f<10)f*=10;return b===true?[a,f]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));
return isNaN(a)?null:a},asNumber:function(a){var b=r;a=this.mismatch(a,true);if(a!==true){b=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0);if(a[1])b+=a[1]}return b},dateToString:function(a){if(a&&a.getUTCHours){var b=p(a.getUTCHours(),2)+":"+p(a.getUTCMinutes(),2),c=a.getSeconds();if(c!="0")b+=":"+p(c,2);c=a.getUTCMilliseconds();if(c!="0")b+="."+p(c,3);return b}else return false}},"datetime-local":{mismatch:function(a,b){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return true;a=a.split(/\u0054/);
return e.date.mismatch(a[0])||e.time.mismatch(a[1],b)},noAsDate:true,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var b=r,c=this.mismatch(a,true);if(c!==true){a=a.split(/\u0054/)[0].split(/\u002D/);b=Date.UTC(a[0],a[1]-1,a[2],c[0][0],c[0][1],c[0][2]||0);if(c[1])b+=c[1]}return b},dateToString:function(a,b){return e.date.dateToString(a)+"T"+e.time.dateToString(a,b)}}};s("number")||i.addInputType("number",n.number);s("range")||i.addInputType("range",h.extend({},
n.number,n.range));s("date")||i.addInputType("date",n.date);s("time")||i.addInputType("time",h.extend({},n.date,n.time));s("datetime-local")||i.addInputType("datetime-local",h.extend({},n.date,n.time,n["datetime-local"]));(function(){var a=i.modules["number-date-type"].options,b=function(g,j,d){d=d||{};if(!("type"in d))d.type=m(g);if(!("step"in d))d.step=A(g,d.type);if(!("valueAsNumber"in d))d.valueAsNumber=e[d.type].asNumber(h.attr(g,"value"));var l=d.step=="any"?e[d.type].step*e[d.type].stepScaleFactor:
d.step;u("min",h(g),d);u("max",h(g),d);if(isNaN(d.valueAsNumber))d.valueAsNumber=e[d.type].stepBase||0;if(d.step!=="any")if((g=Math.round((d.valueAsNumber-(d.minAsnumber||0))%d.step*1E7)/1E7)&&Math.abs(g)!=d.step)d.valueAsNumber-=g;g=d.valueAsNumber+l*j;if(!isNaN(d.minAsNumber)&&g<d.minAsNumber)g=d.valueAsNumber*j<d.minAsNumber?d.minAsNumber:isNaN(d.maxAsNumber)?Number.MAX_VALUE:d.maxAsNumber;else if(!isNaN(d.maxAsNumber)&&g>d.maxAsNumber)g=d.valueAsNumber*j>d.maxAsNumber?d.maxAsNumber:isNaN(d.minAsNumber)?
Number.MIN_VALUE:d.minAsNumber;return Math.round(g*1E7)/1E7};i.modules["number-date-type"].getNextStep=b;var c=function(g,j,d){if(!(g.disabled||g.readOnly||h(d).hasClass("step-controls"))){h.attr(g,"value",e[j].numberToString(b(g,h(d).hasClass("step-up")?1:-1,{type:j})));h(g).unbind("blur.stepeventshim");i.triggerInlineForm(g,"input");if(x.activeElement){if(x.activeElement!==g)try{g.focus()}catch(l){}setTimeout(function(){if(x.activeElement!==g)try{g.focus()}catch(q){}h(g).one("blur.stepeventshim",
function(){h(g).trigger("change")})},0)}}};if(a.stepArrows){var f={elementNames:["input"],setter:function(g,j,d){d();if(j=h.data(g,"step-controls"))j[g.disabled||g.readonly?"addClass":"removeClass"]("disabled-step-control")}};i.attr("disabled",f);i.attr("readonly",f)}var k={38:1,40:-1};i.addReady(function(g){a.stepArrows&&h("input",g).each(function(){var j=m(this);if(!(!e[j]||!e[j].asNumber||!a.stepArrows||a.stepArrows!==true&&!a.stepArrows[j])){var d=this,l=h(this).css("direction")=="rtl"?{action:"insertBefore",
side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"Left"},q=h('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>')[l.action](this).bind("selectstart dragstart",function(){return false}).bind("mousedown mousepress",function(t){c(d,j,t.target);return false});h(this).addClass("has-step-controls").data("step-controls",q).attr({readonly:this.readOnly,disabled:this.disabled}).bind("keypress",function(t){console.log(t.keyCode);
if(!(this.disabled||this.readOnly||!k[t.keyCode])){h.attr(this,"value",e[j].numberToString(b(this,k[t.keyCode],{type:j})));i.triggerInlineForm(this,"input");return false}});if(a.calculateWidth){var B=h(this).getwidth();if(B){var C=parseInt(q.css("margin"+l.otherSide),10)||0,v=parseInt(q.css("margin"+l.side),10)||0;v=(parseInt(h(this).css("margin"+l.side),10)||0)+v;var y=0;if(C<-1){y=C*-1;h(this).css("padding"+l.side,(parseInt(h(this).css("padding"+l.side),10)||0)+y)}h(this).css("width",B-q.getouterWidth(true)-
y);if(v){h(this).css("margin"+l.side,0);q.css("margin"+l.side,v)}}}}})})})();i.attr("type",{elementNames:["input"],getter:function(a){var b=m(a);return i.inputTypes[b]?b:a.type||a.getAttribute("type")},setter:true});i.createReadyEvent("number-date-type")}};w.support.validity===true?w.webshims.ready("validation-base",D,true):w.webshims.ready("validity",D,true)})(jQuery);

/*
 AngularJS v1.7.5
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(B){'use strict';function oe(a){if(F(a))v(a.objectMaxDepth)&&(Vb.objectMaxDepth=Wb(a.objectMaxDepth)?a.objectMaxDepth:NaN),v(a.urlErrorParamsEnabled)&&Fa(a.urlErrorParamsEnabled)&&(Vb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Vb}function Wb(a){return ba(a)&&0<a}function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.5/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
    f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function xa(a){if(null==a||$a(a))return!1;if(I(a)||C(a)||y&&a instanceof y)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||
    xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Mc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function Nc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Xb(a){return function(b,d){a(d,b)}}function pe(){return++pb}
    function Yb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(F(g)||z(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],q=g[m];d&&F(q)?ha(q)?a[m]=new Date(q.valueOf()):ab(q)?a[m]=new RegExp(q):q.nodeName?a[m]=q.cloneNode(!0):Zb(q)?a[m]=q.clone():(F(a[m])||(a[m]=I(q)?[]:{}),Yb(a[m],[q],!0)):a[m]=q}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Yb(a,Ga.call(arguments,1),!1)}function qe(a){return Yb(a,Ga.call(arguments,1),!0)}function da(a){return parseInt(a,
        10)}function $b(a,b){return R(Object.create(a),b)}function A(){}function Ta(a){return a}function ia(a){return function(){return a}}function ac(a){return z(a.toString)&&a.toString!==ma}function x(a){return"undefined"===typeof a}function v(a){return"undefined"!==typeof a}function F(a){return null!==a&&"object"===typeof a}function Mc(a){return null!==a&&"object"===typeof a&&!Oc(a)}function C(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ha(a){return"[object Date]"===
        ma.call(a)}function I(a){return Array.isArray(a)||a instanceof Array}function bc(a){switch(ma.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function z(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===ma.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Fa(a){return"boolean"===typeof a}function re(a){return a&&ba(a.length)&&
        se.test(ma.call(a))}function Zb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function te(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return O(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ha(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(I(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Mc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
    (b[f]=e(a[f],c));else for(f in a)sa.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!F(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw Ia("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Oc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
        a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}
        var g=[],k=[];d=Wb(d)?d:NaN;if(b){if(re(b)||"[object ArrayBuffer]"===ma.call(b))throw Ia("cpta");if(a===b)throw Ia("cpi");I(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function cc(a,b){return a===b||a!==a&&b!==b}function ua(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!ua(a[c],
        b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?cc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||I(b)||ha(b)||ab(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!ua(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!z(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ga.call(b,d))}function Va(a,b){var d=2<arguments.length?Ga.call(arguments,2):[];return!z(b)||b instanceof
    RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Pc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&B.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!x(a))return ba(b)||(b=b?2:null),JSON.stringify(a,Pc,b)}function Qc(a){return C(a)?JSON.parse(a):a}function dc(a,b){a=a.replace(ue,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
        a)/6E4;return V(d)?b:d}function Rc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ec(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=dc(b,c);return Rc(a,d*(b-c))}function ya(a){a=y(a).clone().empty();var b=y("<div></div>").append(a).html();try{return a[0].nodeType===Oa?O(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+O(b)})}catch(d){return O(b)}}function Sc(a){try{return decodeURIComponent(a)}catch(b){}}function fc(a){var b={};r((a||"").split("&"),
        function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Sc(e),v(e)&&(f=v(f)?Sc(f):!0,sa.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ve(a){var b=[];r(a,function(a,c){I(a)?r(a,function(a){b.push(ca(c,!0)+(!0===a?"":"="+ca(a,!0)))}):b.push(ca(c,!0)+(!0===a?"":"="+ca(a,!0)))});return b.length?b.join("&"):""}function gc(a){return ca(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ca(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function we(a,b){var d,c,e=Pa.length;for(c=0;c<e;++c)if(d=Pa[c]+b,C(d=a.getAttribute(d)))return d;return null}function xe(a,b){var d,c,e={};r(Pa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Pa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
        if(d)if(ye)e.strictDi=null!==we(d,"strict-di"),b(d,c?[c]:[],e);else try{B.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.")}catch(f){}}function Tc(a,b,d){F(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=y(a);if(a.injector()){var c=a[0]===B.document?"document":ya(a);throw Ia("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&
    b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;B&&e.test(B.name)&&(d.debugInfoEnabled=!0,B.name=B.name.replace(e,""));if(B&&!f.test(B.name))return c();B.name=B.name.replace(f,"");ea.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};z(ea.resumeDeferredBootstrap)&&
    ea.resumeDeferredBootstrap()}function ze(){B.name="NG_ENABLE_DEBUG_INFO!"+B.name;B.location.reload()}function Ae(a){a=ea.element(a).injector();if(!a)throw Ia("test");return a.get("$$testability")}function Uc(a,b){b=b||"_";return a.replace(Be,function(a,c){return(c?b:"")+a.toLowerCase()})}function Ce(){var a;if(!Vc){var b=qb();(rb=x(b)?B.jQuery:b?B[b]:void 0)&&rb.fn.on?(y=rb,R(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
        y=W;a=y.cleanData;y.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(y._data(f)||{}).events)&&c.$destroy&&y(f).triggerHandler("$destroy");a(b)};ea.element=y;Vc=!0}}function gb(a,b,d){if(!a)throw Ia("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&I(a)&&(a=a[a.length-1]);gb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw Ia("badname",b);}function De(a,b,d){if(!b)return a;b=b.split(".");
        for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=y(Ga.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function hc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!ac(a)||I(a)||ha(a)?eb(a):a.toString()}return a}function Ee(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),
        c=M("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||M;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return u}}function b(a,c,d){d||(d=e);return function(b,e){e&&z(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return u}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],t=a("$injector","invoke",
        "push",n),u={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(v(a)){if(!F(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
            "directive"),component:b("$compileProvider","component"),config:t,run:function(a){s.push(a);return this}};k&&t(k);return u})}})}function oa(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Fe(a,b){var d=[];Wb(b)&&(a=ea.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Pc(a,b);if(F(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ge(a){R(a,{errorHandlingConfig:oe,
        bootstrap:Tc,copy:Ha,extend:R,merge:qe,equals:ua,element:y,forEach:r,injector:fb,noop:A,bind:Va,toJson:eb,fromJson:Qc,identity:Ta,isUndefined:x,isDefined:v,isString:C,isFunction:z,isObject:F,isNumber:ba,isElement:Zb,isArray:I,version:He,isDate:ha,callbacks:{$$counter:0},getTestability:Ae,reloadWithDebugInfo:ze,$$minErr:M,$$csp:pa,$$encodeUriSegment:gc,$$encodeUriQuery:ca,$$lowercase:O,$$stringify:hc,$$uppercase:ub});jc=Ee(B);jc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ie});
        a.provider("$compile",Wc).directive({a:Je,input:Xc,textarea:Xc,form:Ke,script:Le,select:Me,option:Ne,ngBind:Oe,ngBindHtml:Pe,ngBindTemplate:Qe,ngClass:Re,ngClassEven:Se,ngClassOdd:Te,ngCloak:Ue,ngController:Ve,ngForm:We,ngHide:Xe,ngIf:Ye,ngInclude:Ze,ngInit:$e,ngNonBindable:af,ngPluralize:bf,ngRef:cf,ngRepeat:df,ngShow:ef,ngStyle:ff,ngSwitch:gf,ngSwitchWhen:hf,ngSwitchDefault:jf,ngOptions:kf,ngTransclude:lf,ngModel:mf,ngList:nf,ngChange:of,pattern:Yc,ngPattern:Yc,required:Zc,ngRequired:Zc,minlength:$c,
            ngMinlength:$c,maxlength:ad,ngMaxlength:ad,ngValue:pf,ngModelOptions:qf}).directive({ngInclude:rf}).directive(vb).directive(bd);a.provider({$anchorScroll:sf,$animate:tf,$animateCss:uf,$$animateJs:vf,$$animateQueue:wf,$$AnimateRunner:xf,$$animateAsyncRun:yf,$browser:zf,$cacheFactory:Af,$controller:Bf,$document:Cf,$$isDocumentHidden:Df,$exceptionHandler:Ef,$filter:cd,$$forceReflow:Ff,$interpolate:Gf,$interval:Hf,$$intervalFactory:If,$http:Jf,$httpParamSerializer:Kf,$httpParamSerializerJQLike:Lf,$httpBackend:Mf,
            $xhrFactory:Nf,$jsonpCallbacks:Of,$location:Pf,$log:Qf,$parse:Rf,$rootScope:Sf,$q:Tf,$$q:Uf,$sce:Vf,$sceDelegate:Wf,$sniffer:Xf,$$taskTrackerFactory:Yf,$templateCache:Zf,$templateRequest:$f,$$testability:ag,$timeout:bg,$window:cg,$$rAF:dg,$$jqLite:eg,$$Map:fg,$$cookieReader:gg})}]).info({angularVersion:"1.7.5"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(hg,wb)}function kc(a){a=a.nodeType;return 1===a||!a||9===a}function dd(a,b){var d,c,e=b.createDocumentFragment(),f=
        [];if(lc.test(a)){d=e.appendChild(b.createElement("div"));c=(ig.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(jg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function W(a){if(a instanceof W)return a;var b;C(a)&&(a=T(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw mc("nosel");return new W(a)}if(b){b=
        B.document;var d;a=(d=kg.exec(a))?[b.createElement(d[1])]:(d=dd(a,b))?d.childNodes:[];nc(this,a)}else z(a)?ed(a):nc(this,a)}function oc(a){return a.cloneNode(!0)}function yb(a,b){!b&&kc(a)&&y.cleanData([a]);a.querySelectorAll&&y.cleanData(a.querySelectorAll("*"))}function fd(a){for(var b in a)return!1;return!0}function gd(a){var b=a.ng339,d=b&&Ja[b],c=d&&d.events,d=d&&d.data;d&&!fd(d)||c&&!fd(c)||(delete Ja[b],a.ng339=void 0)}function hd(a,b,d,c){if(v(c))throw mc("offargs");var e=(c=zb(a))&&c.events,
        f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];v(d)&&cb(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];gd(a)}}function pc(a,b){var d=a.ng339;if(d=d&&Ja[d])b?delete d.data[b]:d.data={},gd(a)}function zb(a,b){var d=a.ng339,d=d&&Ja[d];b&&!d&&(a.ng339=d=++lg,d=Ja[d]={events:{},data:{},handle:void 0});return d}function qc(a,b,d){if(kc(a)){var c,e=v(d),
        f=!e&&b&&!F(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=T(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",T(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
        (" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",T(c))}}function nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function id(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=
        0,e=b.length;c<e;c++)if(v(d=y.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function jd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function mg(a,b){b=b||B;if("complete"===b.document.readyState)b.setTimeout(a);else y(b).on("load",a)}function ed(a){function b(){B.document.removeEventListener("DOMContentLoaded",b);B.removeEventListener("load",b);a()}"complete"===B.document.readyState?B.setTimeout(a):(B.document.addEventListener("DOMContentLoaded",
        b),B.addEventListener("load",b))}function kd(a,b){var d=Gb[b.toLowerCase()];return d&&ld[ta(a)]&&d}function ng(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
        var h=f.specialHandlerWrapper||og;1<g&&(f=oa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function og(a,b,d){d.call(a,b)}function pg(a,b,d){var c=b.relatedTarget;c&&(c===a||qg.call(a,c))||d.call(a,b)}function eg(){this.$get=function(){return R(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function Ka(a,b){var d=a&&a.$$hashKey;
        if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||pe)():d+":"+a}function md(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function nd(a){a=Function.prototype.toString.call(a).replace(rg,"");return a.match(sg)||a.match(tg)}function ug(a){return(a=nd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(F(b))r(b,Xb(a));else return a(b,
        c)}}function c(a,b){Qa(a,"service");if(z(b)||I(b))b=n.instantiate(b);if(!b.$get)throw za("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=u.invoke(b,this);if(x(c))throw za("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(x(a)||I(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{C(a)?(c=jc(a),
        u.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(n.invoke(a)):I(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),za("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw za("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
        a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw za("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Aa||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Fa(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
            (c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return q.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,q={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
                ia(b),!1)}),constant:d(function(a,b){Qa(a,"constant");q[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=u.invoke(d,c);return u.invoke(b,null,{$delegate:a})}}}},n=q.$injector=k(q,function(a,b){ea.isString(b)&&l.push(b);throw za("unpr",l.join(" <- "));}),s={},t=k(s,function(a,b){var c=n.get(a+"Provider",b);return u.invoke(c.$get,c,void 0,a)}),u=t;q.$injectorProvider={$get:ia(t)};u.modules=n.modules=S();var D=g(a),u=t.get("$injector");u.strictDi=b;r(D,
        function(a){a&&u.invoke(a)});u.loadNewModules=function(a){r(g(a),function(a){a&&u.invoke(a)})};return u}function sf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Zb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):ba(c)||
        (c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=C(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||mg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function vg(a){C(a)&&
    (a=a.split(" "));var b=S();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ba(a){return F(a)?a:{}}function wg(a,b,d,c,e){function f(){Z=null;k()}function g(){u=E();u=x(u)?null:u;ua(u,H)&&(u=H);D=H=u}function k(){var a=D;g();if(w!==h.url()||a!==u)w=h.url(),D=u,r(G,function(a){a(h.url(),u)})}var h=this,l=a.location,m=a.history,q=a.setTimeout,n=a.clearTimeout,s={},t=e(d);h.isMock=!1;h.$$completeOutstandingRequest=t.completeTask;h.$$incOutstandingRequestCount=t.incTaskCount;h.notifyWhenNoOutstandingRequests=
        t.notifyWhenNoPendingTasks;var u,D,w=l.href,ic=b.find("base"),Z=null,E=c.history?function(){try{return m.state}catch(a){}}:A;g();h.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=D===e;if(w===b&&(!c.history||f))return h;var k=w&&qa(w)===qa(b);w=b;D=e;!c.history||k&&f?(k||(Z=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(Z=b)):(m[d?"replaceState":"pushState"](e,"",b),g());Z&&(Z=b);return h}return(Z||
        l.href).replace(/#$/,"")};h.state=function(){return u};var G=[],J=!1,H=null;h.onUrlChange=function(b){if(!J){if(c.history)y(a).on("popstate",f);y(a).on("hashchange",f);J=!0}G.push(b);return b};h.$$applicationDestroyed=function(){y(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=ic.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||t.DEFAULT_TASK_TYPE;t.incTaskCount(c);d=q(function(){delete s[d];t.completeTask(a,
        c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);t.completeTask(A,b);return!0}return!1}}function zf(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new wg(a,c,b,d,e)}]}function Af(){this.$get=function(){function a(a,c){function e(a){a!==q&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,
        k=R({},c,{id:a}),h=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),q=null,n=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===q&&(q=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=S();g=0;m=S();q=n=null},
        destroy:function(){m=k=h=null;delete b[a]},info:function(){return R({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Zf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Wc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=S();r(a,function(a,f){a=a.trim();if(a in q)e[f]=q[a];else{var g=a.match(d);if(!g)throw aa("iscp",b,f,a,c?"controller bindings definition":
        "isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(q[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==O(b))throw aa("baddir",a);if(a!==a.trim())throw aa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!I(b)&&F(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=te("ngSrc,ngSrcset,src,srcset"),
        l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,q=S();this.directive=function Z(b,d){gb(b,"name");Qa(b,"directive");C(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!C(l)||!/[EACM]/.test(l)))throw aa("badrestrict",
        l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Xb(Z));return this};this.component=function E(a,b){function c(a){function e(b){return z(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:xg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
        require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!C(a))return r(a,Xb(Va(this,E))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
        var n=!0;this.debugInfoEnabled=function(a){return v(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return v(a)?(s=a,this):s};var t=10;this.onChangesTtl=function(a){return arguments.length?(t=a,this):t};var u=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};var D=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(D=a,this):D};var w=S();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
            if(d in w&&w[d]!==c)throw aa("ctxoverride",a,b,w[d],c);w[d]=c;return this};(function(){function a(b,c){r(c,function(a){w[a.toLowerCase()]=b})}a(U.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(U.CSS,["*|style"]);a(U.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(U.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(U.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
        this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,q,K,L,P,Q){function p(){try{if(!--Ja)throw Ua=void 0,aa("infchng",t);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function na(a,b){if(!a)return a;if(!C(a))throw aa("srcset",b,a.toString());for(var c="",d=T(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
            2),f=0;f<e;f++)var g=2*f,c=c+P.getTrustedMediaUrl(T(d[g])),c=c+(" "+T(d[g+1]));d=T(d[2*f]).split(/\s/);c+=P.getTrustedMediaUrl(T(d[0]));2===d.length&&(c+=" "+T(d[1]));return c}function v(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function N(a,b,c){Ea.innerHTML="<span "+b+">";b=Ea.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function ra(a,b){try{a.addClass(b)}catch(c){}}
            function fa(a,b,c,d,e){a instanceof y||(a=y(a));var f=Xa(a,b,a,c,d,e);fa.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw aa("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?y(ja(g,y("<div></div>").append(a).html())):c?Wa.clone.call(a):
                a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);fa.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,q,n,G;if(J)for(G=Array(c.length),m=0;m<h.length;m+=3)f=h[m],G[f]=c[f];else G=c;m=0;for(q=h.length;m<q;)k=G[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),fa.$$addScopeInfo(y(k),l)):l=a,n=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,
                void 0,e)}for(var h=[],k=I(a)||a instanceof y,l,m,q,n,J,G=0;G<a.length;G++){l=new v;11===Aa&&ib(a,G,k);m=rc(a[G],[],l,0===G?d:void 0,e);(f=m.length?ba(m,a[G],l,b,c,null,[],[],f):null)&&f.scope&&fa.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[G].childNodes)||!q.length?null:Xa(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(G,f,l),n=!0,J=J||f;f=null}return n?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Oa)for(;;){f=e?d.nextSibling:
                a[b+1];if(!f||f.nodeType!==Oa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=S(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function rc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ta(a);V(b,va(h),"E",e,f);for(var l,m,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 n,G,u,s=a.attributes,w=0,E=s&&s.length;w<E;w++){var D=!1,r=!1,P=!1,H=!1,t=!1,K;l=s[w];m=l.name;G=l.value;n=va(m.toLowerCase());(u=n.match(Ra))?(P="Attr"===u[1],H="Prop"===u[1],t="On"===u[1],m=m.replace(od,"").toLowerCase().substr(4+u[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(K=n.match(Sa))&&ea(K[1])&&(D=m,r=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(H||t)d[n]=G,g[n]=l.name,H?Ha(a,b,n,m):b.push(pd(q,L,c,n,m,!1));else{n=va(m.toLowerCase());g[n]=m;if(P||!d.hasOwnProperty(n))d[n]=
                G,kd(a,n)&&(d[n]=!0);Ia(a,b,G,n,P);V(b,n,"A",e,f,D,r)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;F(g)&&(g=g.animVal);if(C(g)&&""!==g)for(;a=k.exec(g);)n=va(a[2]),V(b,n,"C",e,f)&&(d[n]=T(a[3])),g=g.substr(a.index+a[0].length);break;case Oa:oa(b,a.nodeValue);break;case 8:if(!Pa)break;M(a,b,d,e,f)}b.sort(la);return b}function M(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=va(f[1]);V(b,h,"M",d,e)&&(c[h]=T(f[2]))}}catch(k){}}
            function U(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw aa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function W(a,b,c){return function(d,e,f,g,h){e=U(e[0],b,c);return a(d,e,f,g,h)}}function Y(a,b,c,d,e,f){var g;return a?fa(b,c,d,e,f):function(){g||(g=fa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function ba(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&
            (a=W(a,c,d));a.require=t.require;a.directiveName=K;if(s===t||t.$$isolateScope)a=za(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=W(b,c,d));b.require=t.require;b.directiveName=K;if(s===t||t.$$isolateScope)b=za(b,{isolateScope:!0});k.push(b)}}function q(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);P&&(e=D);c||(c=P?K.parent():K);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,Q);if(x(f))throw aa("noslot",d,ya(K));}else return l(a,b,e,c,Q)}var n,t,L,H,E,D,X,K;b===f?(g=d,K=d.$$element):
                (K=y(f),g=new v(K,d));E=e;s?H=e.$new(!0):G&&(E=e.$parent);l&&(X=m,X.$$boundTransclude=l,X.isSlotFilled=function(a){return!!l.$$slots[a]});u&&(D=ga(K,g,X,u,H,e,s));s&&(fa.$$addScopeInfo(K,H,!0,!(w&&(w===s||w===s.$$originalDirective))),fa.$$addScopeClass(K,!0),H.$$isolateBindings=s.$$isolateBindings,t=Ca(e,g,H,H.$$isolateBindings,s),t.removeWatches&&H.$on("$destroy",t.removeWatches));for(n in D){t=u[n];L=D[n];var yg=t.$$bindings.bindToController;L.instance=L();K.data("$"+t.name+"Controller",L.instance);
                L.bindingInfo=Ca(E,g,L.instance,yg,t)}r(u,function(a,b){var c=a.require;a.bindToController&&!I(c)&&F(c)&&R(D[b].instance,$(b,c,K,D))});r(D,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$doCheck)&&(E.$watch(function(){b.$doCheck()}),b.$doCheck());z(b.$onDestroy)&&E.$on("$destroy",function(){b.$onDestroy()})});n=0;for(t=h.length;n<t;n++)L=h[n],Ba(L,L.isolateScope?H:e,K,g,L.require&&$(L.directiveName,
                L.require,K,D),X);var Q=e;s&&(s.template||null===s.templateUrl)&&(Q=H);a&&a(Q,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?H:e,K,g,L.require&&$(L.directiveName,L.require,K,D),X);r(D,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,G=l.newScopeDirective,u=l.controllerDirectives,s=l.newIsolateScopeDirective,w=l.templateDirective,L=l.nonTlbTranscludeDirective,E=!1,D=!1,P=l.hasElementTranscludeDirective,H=d.$$element=y(b),t,K,
                                                                                                                                                                                                                                                                                                              X,Q=e,p,na=!1,Ib=!1,N,ra=0,C=a.length;ra<C;ra++){t=a[ra];var A=t.$$start,ib=t.$$end;A&&(H=U(b,A,ib));X=void 0;if(n>t.priority)break;if(N=t.scope)t.templateUrl||(F(N)?(ca("new/isolated scope",s||G,t,H),s=t):ca("new/isolated scope",s,t,H)),G=G||t;K=t.name;if(!na&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(N=ra+1;na=a[N++];)if(na.transclude&&!na.$$tlb||na.replace&&(na.templateUrl||na.template)){Ib=!0;break}na=!0}!t.templateUrl&&t.controller&&(u=u||S(),ca("'"+K+"' controller",
                u[K],t,H),u[K]=t);if(N=t.transclude)if(E=!0,t.$$tlb||(ca("transclusion",L,t,H),L=t),"element"===N)P=!0,n=t.priority,X=H,H=d.$$element=y(fa.$$createComment(K,d[K])),b=H[0],pa(f,Ga.call(X,0),b),Q=Y(Ib,X,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=S();if(F(N)){X=B.document.createDocumentFragment();var Xa=S(),M=S();r(N,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;M[b]=c});r(H.contents(),function(a){var b=Xa[va(ta(a))];b?(M[b]=!0,ka[b]=ka[b]||B.document.createDocumentFragment(),
                ka[b].appendChild(a)):X.appendChild(a)});r(M,function(a,b){if(!a)throw aa("reqslot",b);});for(var O in ka)ka[O]&&(Q=y(ka[O].childNodes),ka[O]=Y(Ib,Q,e));X=y(X.childNodes)}else X=y(oc(b)).contents();H.empty();Q=Y(Ib,X,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});Q.$$slots=ka}if(t.template)if(D=!0,ca("template",w,t,H),w=t,N=z(t.template)?t.template(H,d):t.template,N=Na(N),t.replace){g=t;X=lc.test(N)?qd(ja(t.templateNamespace,T(N))):[];b=X[0];if(1!==X.length||1!==b.nodeType)throw aa("tplrt",
                K,"");pa(f,H,b);C={$attr:{}};N=rc(b,[],C);var zg=a.splice(ra+1,a.length-(ra+1));(s||G)&&da(N,s,G);a=a.concat(N).concat(zg);ha(d,C);C=a.length}else H.html(N);if(t.templateUrl)D=!0,ca("template",w,t,H),w=t,t.replace&&(g=t),q=ia(a.splice(ra,a.length-ra),H,d,f,E&&Q,h,k,{controllerDirectives:u,newScopeDirective:G!==t&&G,newIsolateScopeDirective:s,templateDirective:w,nonTlbTranscludeDirective:L}),C=a.length;else if(t.compile)try{p=t.compile(H,d,Q);var V=t.$$originalDirective||t;z(p)?m(null,Va(V,p),A,ib):
                p&&m(Va(V,p.pre),Va(V,p.post),A,ib)}catch(ea){c(ea,ya(H))}t.terminal&&(q.terminal=!0,n=Math.max(n,t.priority))}q.scope=G&&!0===G.scope;q.transcludeOnThisElement=E;q.templateOnThisElement=D;q.transclude=Q;l.hasElementTranscludeDirective=P;return q}function $(a,b,c,d){var e;if(C(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
                !f)throw aa("ctreq",b,a);}else if(I(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=$(a,b[g],c,d);else F(b)&&(e={},r(b,function(b,f){e[f]=$(a,b,c,d)}));return e||null}function ga(a,b,c,d,e,f,g){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=K(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function da(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=$b(a[d],{$$isolateScope:b,
                $$newScope:c})}function V(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,q=h.length;n<q;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=$b(c,{$$start:k,$$end:l}));if(!c.$$bindings){var J=m=c,G=c.name,u={isolateScope:null,bindToController:null};F(J.scope)&&(!0===J.bindToController?(u.bindToController=d(J.scope,G,!0),u.isolateScope={}):u.isolateScope=d(J.scope,G,!1));F(J.bindToController)&&(u.bindToController=d(J.bindToController,
                G,!0));if(u.bindToController&&!J.controller)throw aa("noctrl",G);m=m.$$bindings=u;F(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ea(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ha(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
            "$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ia(a,b,d,f,g,h,k,l){var m=[],n,q,G=b[0],u=a.shift(),t=$b(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=z(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,J;c=Na(c);if(u.replace){c=lc.test(c)?qd(ja(L,T(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw aa("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var w=rc(e,[],c);F(u.scope)&&da(w,!0);
                a=w.concat(a);ha(d,c)}else e=G,b.html(c);a.unshift(t);n=ba(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(q=Xa(b[0].childNodes,g);m.length;){c=m.shift();J=m.shift();var H=m.shift(),D=m.shift(),w=b[0];if(!c.$$destroyed){if(J!==G){var E=J.className;l.hasElementTranscludeDirective&&u.replace||(w=oc(e));pa(H,y(J),w);ra(y(w),E)}J=n.transcludeOnThisElement?ka(c,n.transclude,D):D;n(q,c,w,f,J)}}m=null}).catch(function(a){bc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
                c,d,a):(n.transcludeOnThisElement&&(a=ka(b,n.transclude,e)),n(q,b,c,d,a)))}}function la(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ca(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw aa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function oa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&fa.$$addBindingClass(a);return function(a,c){var e=c.parent();
                    b||fa.$$addBindingClass(e);fa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=O(a||"html");switch(a){case "svg":case "math":var c=B.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function wa(a,b){if("srcdoc"===b)return P.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?P.RESOURCE_URL:P.MEDIA_URL;if("xlinkHref"===b)return"image"===a?P.MEDIA_URL:
                "a"===a?P.URL:P.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return P.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return P.URL}function xa(a,b){var c=b.toLowerCase();return w[a+"|"+c]||w["*|"+c]}function Da(a){return na(P.valueOf(a),"ng-prop-srcset")}function Ha(a,b,c,d){if(m.test(d))throw aa("nodomevents");a=ta(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=P.getTrusted.bind(P,e)):f=Da;b.push({priority:100,compile:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   b){var e=q(b[c]),g=q(b[c],function(a){return P.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b.prop(d,f(g))}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ta(a),k=wa(g,e),l=h[e]||f,n=b(d,!f,k,l);if(n){if("multiple"===e&&"select"===g)throw aa("selmulti",ya(a));if(m.test(e))throw aa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=S());var g=f[e];g!==d&&(n=g&&b(g,!0,k,l),d=g);n&&(f[e]=n(a),(c[e]||(c[e]=[])).$$inter=
                        !0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(n,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=B.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);y.hasData(d)&&(y.data(c,y.data(d)),y(d).off("$destroy"));
                y.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function za(a,b){return R(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function qa(a,b){if(s)throw aa("missingattr",a,b);}function Ca(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&!cc(c,e)&&(Ua||(a.$$postDigest(p),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         h){var m=e.attrName,n=e.optional,J,u,t,s;switch(e.mode){case "@":n||sa.call(c,m)||(qa(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(C(a)||Fa(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;J=c[m];C(J)?d[h]=b(J)(a):Fa(J)&&(d[h]=J);l[h]=new Jb(sc,d[h]);k.push(n);break;case "=":if(!sa.call(c,m)){if(n)break;qa(m,f.name);c[m]=void 0}if(n&&!c[m])break;u=q(c[m]);s=u.literal?ua:cc;t=u.assign||function(){J=d[h]=u(a);throw aa("nonassign",c[m],m,f.name);};J=d[h]=u(a);n=function(b){s(b,d[h])||
            (s(b,J)?t(a,b=d[h]):d[h]=b);return J=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(q(c[m],n),null,u.literal);k.push(n);break;case "<":if(!sa.call(c,m)){if(n)break;qa(m,f.name);c[m]=void 0}if(n&&!c[m])break;u=q(c[m]);var L=u.literal,w=d[h]=u(a);l[h]=new Jb(sc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](u,function(a,b){if(b===a){if(b===w||L&&ua(b,w))return;b=w}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||sa.call(c,m)||qa(m,f.name);u=c.hasOwnProperty(m)?q(c[m]):A;if(u===
                A&&n)break;d[h]=function(b){return u(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Ea=B.document.createElement("div"),Pa=u,Qa=D,Ja=t,Ua;v.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rd(a,b);c&&c.length&&Q.addClass(this.$$element,c);(c=rd(b,a))&&c.length&&Q.removeClass(this.$$element,
                    c)},$set:function(a,b,d,e){var f=kd(this.$$element[0],a),g=sd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Uc(a,"-"));"img"===ta(this.$$element)&&"srcset"===a&&(this[a]=b=na(b,"$set('srcset', value)"));!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Ma.test(e)?this.$$element.attr(e,b):N(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||
                    (c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;fa.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;fa.$$addBindingClass=n?function(a){ra(a,"ng-binding")}:
                A;fa.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;fa.$$addScopeClass=n?function(a,b){ra(a,b?"ng-isolate-scope":"ng-scope")}:A;fa.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return B.document.createComment(c)};return fa}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function va(a){return a.replace(od,"").replace(Ag,function(a,d,c){return c?d.toUpperCase():d})}function rd(a,b){var d="",c=a.split(/\s+/),
        e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function qd(a){a=y(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Oa&&""===d.nodeValue.trim())&&Bg.call(a,b,1)}return a}function xg(a,b){if(b&&C(b))return b;if(C(a)){var d=td.exec(a);if(d)return d[3]}}function Bf(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Qa(b,"controller");F(b)?R(a,
        b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!F(a.$scope))throw M("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&C(g)&&(l=g);if(C(c)){g=c.match(td);if(!g)throw ud("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:De(e.$scope,h,!0);if(!c)throw ud("ctrlreg",h);sb(c,h,!0)}if(f)return f=(I(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),R(function(){var a=b.invoke(c,k,e,h);a!==k&&(F(a)||z(a))&&(k=
        a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Cf(){this.$get=["$window",function(a){return y(a.document)}]}function Df(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Ef(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}
    function tc(a){return F(a)?ha(a)?a.toISOString():eb(a):a}function Kf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Nc(a,function(a,c){null===a||x(a)||z(a)||(I(a)?r(a,function(a){b.push(ca(c)+"="+ca(tc(a)))}):b.push(ca(c)+"="+ca(tc(a))))});return b.join("&")}}}function Lf(){this.$get=function(){return function(a){function b(a,e,f){I(a)?r(a,function(a,c){b(a,e+"["+(F(a)?c:"")+"]")}):F(a)&&!ha(a)?Nc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):(z(a)&&(a=a()),d.push(ca(e)+"="+
        (null==a?"":ca(tc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function uc(a,b){if(C(a)){var d=a.replace(Cg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(vd),e;(e=c)||(e=(e=d.match(Dg))&&Eg[e[0]].test(d));if(e)try{a=Qc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function wd(a){var b=S(),d;C(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=O(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):F(a)&&r(a,function(a,d){var f=O(d),
        g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function xd(a){var b;return function(d){b||(b=wd(a));return d?(d=b[O(d)],void 0===d&&(d=null),d):b}}function yd(a,b,d,c){if(z(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Jf(){var a=this.defaults={transformResponse:[uc],transformRequest:[function(a){return F(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:oa(vc),
            put:oa(vc),patch:oa(vc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,q){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,
        g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){z(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=R({},a);b.data=yd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!F(b))throw M("$http")("badreq",b);if(!C(q.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
        b);g.headers=function(b){var c=a.headers,e=R({},b.headers),f,g,h,c=R({},c.common,c[O(b.method)]);a:for(f in c){g=O(f);for(h in e)if(O(h)===g)continue a;e[f]=c[f]}return d(e,oa(b))}(b);g.method=ub(g.method);g.paramSerializer=C(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(w,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
        b=c(b,h);b=b.then(function(b){var c=b.headers,d=yd(b.data,xd(c),void 0,b.transformRequest);x(d)&&r(c,function(a,b){"content-type"===O(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(A,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       c,d,e,f){function g(){m(c,a,d,e,f)}Q&&(200<=a&&300>a?Q.put(N,[a,c,wd(d),e,f]):Q.remove(N));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:xd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,oa(a.headers()),a.statusText,a.xhrStatus)}function w(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),P=L.promise,Q,p,na=c.headers,y="jsonp"===O(c.method),
        N=c.url;y?N=q.getTrustedResourceUrl(N):C(N)||(N=q.valueOf(N));N=t(N,c.paramSerializer(c.params));y&&(N=u(N,c.jsonpCallbackParam));n.pendingRequests.push(c);P.then(w,w);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(Q=F(c.cache)?c.cache:F(a.cache)?a.cache:D);Q&&(p=Q.get(N),v(p)?p&&z(p.then)?p.then(s,s):I(p)?m(p[1],p[0],oa(p[2]),p[3],p[4]):m(p,200,{},"OK","complete"):Q.put(N,P));x(p)&&((p=ic(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(na[c.xsrfHeaderName||a.xsrfHeaderName]=
        p),f(c.method,N,d,k,na,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return P}function t(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function u(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=fc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var D=k("$http");a.paramSerializer=C(a.paramSerializer)?m.get(a.paramSerializer):
        a.paramSerializer;var w=[];r(d,function(a){w.unshift(C(a)?m.get(a):m.invoke(a))});var ic=Fg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Nf(){this.$get=function(){return function(){return new B.XMLHttpRequest}}}function Mf(){this.$get=
        ["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Gg(a,c,a.defer,b,d[0])}]}function Gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
        m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,q,n,s,t,u){function D(a){G="timeout"===a;Z&&Z();E&&E.abort()}function w(a,b,c,e,f,g){v(H)&&d.cancel(H);Z=E=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===O(e))var p=c.createCallback(k),Z=f(k,p,function(a,b){var d=200===a&&c.getResponse(p);w(l,a,d,"",b,"complete");c.removeCallback(p)});else{var E=b(e,k),G=!1;E.open(e,k,!0);r(m,function(a,b){v(a)&&E.setRequestHeader(b,a)});E.onload=function(){var a=E.statusText||
        "",b="response"in E?E.response:E.responseText,c=1223===E.status?204:E.status;0===c&&(c=b?200:"file"===la(k).protocol?404:0);w(l,c,b,E.getAllResponseHeaders(),a,"complete")};E.onerror=function(){w(l,-1,null,null,"","error")};E.ontimeout=function(){w(l,-1,null,null,"","timeout")};E.onabort=function(){w(l,-1,null,null,"",G?"timeout":"abort")};r(t,function(a,b){E.addEventListener(b,a)});r(u,function(a,b){E.upload.addEventListener(b,a)});n&&(E.withCredentials=!0);if(s)try{E.responseType=s}catch(J){if("json"!==
        s)throw J;}E.send(x(h)?null:h)}if(0<q)var H=d(function(){D("timeout")},q);else q&&z(q.then)&&q.then(function(){D(v(q.$$timeoutId)?"timeout":"abort")})}}function Gf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(q,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
        function h(f,h,n,q){function w(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),q&&!v(a)?a:hc(a)}catch(b){c(Ca.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h&&!r)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}q=!!q;for(var p,E,G=0,J=[],H,X=f.length,K=[],L=[],P;G<X;)if(-1!==(p=f.indexOf(a,G))&&-1!==(E=f.indexOf(b,p+l)))G!==p&&K.push(g(f.substring(G,p))),G=f.substring(p+l,E),J.push(G),G=E+m,L.push(K.length),
            K.push("");else{G!==X&&K.push(g(f.substring(G)));break}P=1===K.length&&1===L.length;var Q=r&&P?void 0:w;H=J.map(function(a){return d(a,Q)});if(!h||J.length){var y=function(a){for(var b=0,c=J.length;b<c;b++){if(q&&x(a[b]))return;K[L[b]]=a[b]}if(r)return e.getTrusted(n,P?K[0]:K.join(""));n&&1<K.length&&Ca.throwNoconcat(f);return K.join("")};return R(function(a){var b=0,d=J.length,e=Array(d);try{for(;b<d;b++)e[b]=H[b](a);return y(e)}catch(g){c(Ca.interr(f,g))}},{exp:f,expressions:J,$$watchDelegate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b){var c;return a.$watchGroup(H,function(d,e){var f=y(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,q=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Hf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Hg("badprom");
        if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a];b.promise.$$state.pur=!0;b.reject("canceled");c(a);return!0};return e}]}function If(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){q?g.apply(null,n):g(s)}var q=4<arguments.length,n=q?Ga.call(arguments,4):[],s=0,t=v(l)&&!l,u=(t?d:b).defer(),D=u.promise;h=v(h)?h:0;D.$$intervalId=e(function(){t?a.defer(m):c.$evalAsync(m);u.notify(s++);0<h&&s>=h&&(u.resolve(s),
        f(D.$$intervalId));t||c.$apply()},k,u,t);return D}}}]}function zd(a,b){var d=la(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=da(d.port)||Ig[d.protocol]||null}function Ad(a,b,d){if(Jg.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=la(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=fc(a.search);b.$$hash=decodeURIComponent(a.hash);
        b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function wc(a,b){return a.slice(0,b.length)===b}function wa(a,b){if(wc(b,a))return b.substr(a.length)}function qa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function xc(a,b,d){this.$$html5=!0;d=d||"";zd(a,this);this.$$parse=function(a){var d=wa(b,a);if(!C(d))throw jb("ipthprfx",a,b);Ad(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};this.$$parseLinkUrl=function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;v(f=wa(a,c))?(g=f,g=d&&v(f=wa(d,f))?b+(wa("/",f)||f):a+g):v(f=wa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function yc(a,b,d){zd(a,this);this.$$parse=function(c){var e=wa(a,c)||wa(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",x(e)&&(a=c,this.replace())):(f=wa(d,e),x(f)&&(f=e));Ad(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;wc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};
        this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return qa(a)===qa(b)?(this.$$parse(b),!0):!1}}function Bd(a,b,d){this.$$html5=!0;yc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===qa(c)?f=c:(g=wa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Cd(a,b){return function(d){if(x(d))return this[a];
        this[a]=b(d);this.$$compose();return this}}function Pf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){if(Fa(a))return b.enabled=a,this;if(F(a)){Fa(a.enabled)&&(b.enabled=a.enabled);Fa(a.requireBase)&&(b.requireBase=a.requireBase);if(Fa(a.rewriteLinks)||C(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       f,g){function k(a,b){return a===b||la(a).href===la(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,q;q=c.baseHref();var n=c.url(),s;if(b.enabled){if(!q&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(q||"/");q=e.history?xc:Bd}else s=qa(n),q=yc;var t=s.substr(0,qa(s).lastIndexOf("/")+1);m=new q(s,
        t,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=y(a.target);"a"!==ta(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!C(e)||!x(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");F(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=la(e.animVal).href);u.test(e)||!e||g.attr("target")||a.isDefaultPrevented()||!m.$$parseLinkUrl(e,
        h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var D=!0;c.onUrlChange(function(a,b){wc(a,t)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(D=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(D||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=!1;var a=c.url(),b=
        m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(D||n)D=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Qf(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){bc(a)&&(a.stack&&f?a=a.message&&-1===
    a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Aa||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}
    function Kg(a){return a+""}function Lg(a,b){return"undefined"!==typeof a?a:b}function Dd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Mg(a,b){switch(a.type){case p.MemberExpression:if(a.computed)return!1;break;case p.UnaryExpression:return 1;case p.BinaryExpression:return"+"!==a.operator?1:!1;case p.CallExpression:return!1}return void 0===b?Ed:b}function Y(a,b,d){var c,e,f=a.isPure=Mg(a,d);switch(a.type){case p.Program:c=!0;r(a.body,function(a){Y(a.expression,b,f);c=c&&
        a.expression.constant});a.constant=c;break;case p.Literal:a.constant=!0;a.toWatch=[];break;case p.UnaryExpression:Y(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case p.BinaryExpression:Y(a.left,b,f);Y(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case p.LogicalExpression:Y(a.left,b,f);Y(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case p.ConditionalExpression:Y(a.test,
        b,f);Y(a.alternate,b,f);Y(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case p.Identifier:a.constant=!1;a.toWatch=[a];break;case p.MemberExpression:Y(a.object,b,f);a.computed&&Y(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case p.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Y(a,b,f);c=c&&a.constant;e.push.apply(e,
        a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case p.AssignmentExpression:Y(a.left,b,f);Y(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case p.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Y(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case p.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Y(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Y(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
        a.key.toWatch))});a.constant=c;a.toWatch=e;break;case p.ThisExpression:a.constant=!1;a.toWatch=[];break;case p.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Fd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Gd(a){return a.type===p.Identifier||a.type===p.MemberExpression}function Hd(a){if(1===a.body.length&&Gd(a.body[0].expression))return{type:p.AssignmentExpression,left:a.body[0].expression,right:{type:p.NGValueParameter},operator:"="}}
    function Id(a){this.$filter=a}function Jd(a){this.$filter=a}function Mb(a,b,d){this.ast=new p(a,d);this.astCompiler=d.csp?new Jd(b):new Id(b)}function zc(a){return z(a.valueOf)?a.valueOf():Ng.call(a)}function Rf(){var a=S(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(t),
        d=(new Mb(d,e,t)).parse(b),a[f]=q(d)),s(d,c);case "function":return s(b,c);default:return s(A,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=zc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&zc(b));return h},b,c,e)}for(var l=[],m=[],n=0,q=f.length;n<q;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
        !1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&zc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=s&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return t(m)}var h=d.literal?l:v,k,m,n=d.$$intercepted||d,t=d.$$interceptor||Ta,s=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;q(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){v(a)||(b=!1)});return b}
        function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function q(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
            b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Ed?function(b){return a(b)}:a})));return q(d)}var t={csp:pa().noUnsafeEval,literals:Ha(b),isIdentifierStart:z(d)&&d,isIdentifierContinue:z(c)&&c};f.$$getAst=function(a){var b=new Nb(t);return(new Mb(b,e,t)).getAst(a).ast};return f}]}function Tf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Kd(function(a){b.$evalAsync(a)},
        d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Uf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Kd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Kd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!v&&
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Z.length;){var a=Z.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?Fe(c,void 0):c);bc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===v&&0===Z.length&&a(g),Z.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++v,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
        !0;f=k[l][0];e=k[l][c.status];try{z(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(q){m(f,q),q&&!0===q.$$passToExceptionHandler&&b(q)}}}finally{--v,d&&0===v&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?q(a,w("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,q(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(F(b)||z(b))f=b.then;z(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      b){a.$$state.status||q(a,b)}function q(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,z(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function t(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return s(e)}return d&&z(d.then)?d.then(function(){return b(a)},s):b(a)}function u(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
        d)}function p(a){if(!z(a))throw w("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var w=M("$q",TypeError),v=0,Z=[];R(f.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return t(b,E,a)},function(b){return t(b,s,a)},
            b)}});var E=u;p.prototype=f.prototype;p.defer=c;p.reject=s;p.when=u;p.resolve=E;p.all=function(a){var b=new f,c=0,d=I(a)?[]:{};r(a,function(a,e){c++;u(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};p.race=function(a){var b=c();r(a,function(a){u(a).then(b.resolve,b.reject)});return b.promise};return p}function dg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
        a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Sf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,e=null;this.digestTtl=
        function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Aa&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
        this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function q(a){if(w.$$phase)throw d("inprog",w.$$phase);w.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function u(){for(;E.length;)try{E.shift()()}catch(a){f(a)}e=null}function p(){null===e&&(e=k.defer(function(){w.$apply(u)},
        null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=z(b)?b:A;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
            {fn:b,last:t,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
            !1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(xa(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},s=0,l++);a=0;for(b in e)sa.call(e,
            b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)sa.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],q={},t=!0,s=0;return this.$watch(m,function(){t?(t=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
            g,h,l,m,n,s,r=b,p,D=v.length?w:this,E=[],x,y;q("$digest");k.$$checkUrlChange();this===w&&null!==e&&(k.defer.cancel(e),u());c=null;do{s=!1;p=D;for(n=0;n<v.length;n++){try{y=v[n],l=y.fn,l(y.scope,y.locals)}catch(C){f(C)}c=null}v.length=0;a:do{if(n=!p.$$suspended&&p.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(p))!==(h=a.last)&&!(a.eq?ua(g,h):V(g)&&V(h)))s=!0,c=a,a.last=a.eq?Ha(g,null):g,l=a.fn,l(g,h===t?g:h,p),5>r&&(x=4-r,E[x]||
        (E[x]=[]),E[x].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(B){f(B)}if(!(n=!p.$$suspended&&p.$$watchersCount&&p.$$childHead||p!==D&&p.$$nextSibling))for(;p!==D&&!(n=p.$$nextSibling);)p=p.$parent}while(p=n);if((s||v.length)&&!r--)throw w.$$phase=null,d("infdig",b,E);}while(s||v.length);for(w.$$phase=null;G<Z.length;)try{Z[G++]()}catch(A){f(A)}Z.length=G=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
        $resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===w&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
            this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){w.$$phase||v.length||k.defer(function(){v.length&&w.$digest()},null,"$evalAsync");v.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){Z.push(a)},$apply:function(a){try{q("$apply");try{return this.$eval(a)}finally{w.$$phase=
            null}}catch(b){f(b)}finally{try{w.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&E.push(b);a=g(a);p()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
                !0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
            1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var w=new m,v=w.$$asyncQueue=[],Z=w.$$postDigestQueue=[],E=w.$$applyAsyncQueue=[],G=0;return w}]}function Ie(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=la(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Og(a){if("self"===a)return a;if(C(a)){if(-1<a.indexOf("***"))throw Da("iwcard",a);a=Ld(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Da("imatcher");
    }function Md(a){var b=[];v(a)&&r(a,function(a){b.push(Og(a))});return b}function Wf(){this.SCE_CONTEXTS=U;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Md(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Md(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Ac(b,Nd))||(B.document.baseURI?c=B.document.baseURI:(La||(La=B.document.createElement("a"),La.href=".",La=La.cloneNode(!1)),c=La.href),
        c=Ac(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Da("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[U.HTML]=f(k);h[U.CSS]=f(k);h[U.MEDIA_URL]=f(k);h[U.URL]=f(h[U.MEDIA_URL]);h[U.JS]=f(k);h[U.RESOURCE_URL]=
        f(h[U.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Da("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw Da("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();z(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===U.MEDIA_URL||d===U.URL)return c(f.toString(),d===U.MEDIA_URL);if(d===U.RESOURCE_URL){var k=
            la(f.toString()),n,s,t=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){t=!0;break}if(t)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){t=!1;break}if(t)return f;throw Da("insecurl",f.toString());}if(d===U.HTML)return g(f);throw Da("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Vf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Aa)throw Da("iequirks");var c=oa(U);c.isEnabled=function(){return a};
        c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(U,function(a,b){var d=O(b);c[("parse_as_"+d).replace(Bc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Bc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Bc,wb)]=function(b){return g(a,b)}});
        return c}]}function Xf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=da((/android (\d+)/.exec(O((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
            4>e||f),hasEvent:function(a){if("input"===a&&Aa)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:pa(),transitions:h,animations:l,android:e}}]}function Yf(){this.$get=ia(function(a){return new Pg(a)})}function Pg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(q){a.error(q)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function $f(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!C(k)||
        x(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==uc}):l===uc&&(l=null);return c.get(k,R({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Qg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function ag(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ea.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Ld(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
        whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function bg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){z(f)||(l=h,h=f,f=A);var m=Ga.call(arguments,3),q=v(l)&&!l,n=(q?c:d).defer(),s=n.promise,t;t=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}q||a.$apply()},h,"$timeout");s.$$timeoutId=t;g[t]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Rg("badprom");
        if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a];c.promise.$$state.pur=!0;c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function la(a){if(!C(a))return a;Aa&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:
            "/"+$.pathname}}function Fg(a){var b=[Nd].concat(a.map(la));return function(a){a=la(a);return b.some(Ac.bind(null,a))}}function Ac(a,b){a=la(a);b=la(b);return a.protocol===b.protocol&&a.host===b.host}function cg(){this.$get=ia(B)}function Od(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,
        h)),x(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function gg(){this.$get=Od}function cd(a){function b(d,c){if(F(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Pd);b("date",Qd);b("filter",Sg);b("json",Tg);b("limitTo",Ug);b("lowercase",Vg);b("number",Rd);b("orderBy",Sd);b("uppercase",Wg)}function Sg(){return function(a,b,d,c){if(!xa(a)){if(null==a)return a;
        throw M("filter")("notarray",a);}c=c||"$";var e;switch(Cc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Xg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Xg(a,b,d,c){var e=F(a)&&d in a;!0===b?b=ua:z(b)||(b=function(a,b){if(x(a))return!1;if(null===a||null===b)return a===b;if(F(b)||F(a)&&!ac(a))return!1;a=O(""+a);b=O(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!F(f)?Ma(f,a[d],b,d,!1):Ma(f,a,b,
        d,c)}}function Ma(a,b,d,c,e,f){var g=Cc(a),k=Cc(b);if("string"===k&&"!"===b.charAt(0))return!Ma(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return Ma(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Ma(a[h],b,d,c,!0))return!0;return f?!1:Ma(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!z(f)&&!x(f)&&(g=h===c,!Ma(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Cc(a){return null===
    a?"null":typeof a}function Pd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Td(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Rd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Td(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Yg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Ud))&&(a=a.replace(Ud,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=
        a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Dc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Dc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Vd&&(d=d.splice(0,Vd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Zg(a,b,d,c){var e=a.d,f=e.length-a.i;b=x(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-
        1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Td(a,b,d,c,e){if(!C(a)&&!ba(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=Yg(k);Zg(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];
        for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Dc+a;d&&(a=a.substr(a.length-b));return e+a}function ga(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===
    f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Wd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Xd(a){return function(b){var d=Wd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Ec(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Qd(a){function b(a){var b;
        if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=da(b[9]+b[10]),g=da(b[9]+b[11]));k.call(a,da(b[1]),da(b[2])-1,da(b[3]));f=da(b[4]||0)-f;g=da(b[5]||0)-g;k=da(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||
        d;C(c)&&(c=$g.test(c)?da(c):b(c));ba(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ah.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=dc(f,m),c=ec(c,f,!0));r(k,function(b){h=bh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Tg(){return function(a,b){x(b)&&(b=2);return eb(a,b)}}function Ug(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):da(b);if(V(b))return a;
        ba(a)&&(a=a.toString());if(!xa(a))return a;d=!d||isNaN(d)?0:da(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Fc(a,d,d+b):0===d?Fc(a,b,a.length):Fc(a,Math.max(0,d+b),d)}}function Fc(a,b,d){return C(a)?a.slice(b,d):Ga.call(a,b,d)}function Sd(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(z(b))d=b;else if(C(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
        default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(F(h)&&(h=a.index),F(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!xa(a))throw M("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=z(k)?k:c;a=Array.prototype.map.call(a,function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;ac(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}
    function Na(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Yd(this)}function Yd(a){a.$$classCache={};a.$$classCache[Zd]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function $d(a){function b(a,b,c){c&&!a.$$classCache[b]?
        (a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Uc(c,"-"):"";b(a,mb+c,!0===d);b(a,Zd+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,a,k),ae(this.$pending)&&(this.$pending=void 0));Fa(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,
        a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=ae(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function ae(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Gc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?
        b:b.toString()})}function Ra(a,b,d,c,e,f){var g=O(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(x(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=
        function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(be[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
        "":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(C(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(ch.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,
        f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m){function q(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return v(a)&&!ha(a)?s(a)||void 0:a}function s(a,b){var c=k.$options.getOption("timezone");p&&p!==c&&(b=Rc(b,dc(p)));var e=d(a,b);!isNaN(e)&&c&&(e=ec(e,c));return e}Hc(e,f,g,k,a);Ra(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,u,p;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;
        if(b.test(c))return s(c,u);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(q(a)){u=a;var b=k.$options.getOption("timezone");b&&(p=b,u=ec(u,b,!0));var d=c;t&&C(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}p=u=null;return""});if(v(g.min)||g.ngMin){var r;k.$validators.min=
        function(a){return!q(a)||x(r)||d(a)>=r};g.$observe("min",function(a){r=n(a);k.$validate()})}if(v(g.max)||g.ngMax){var y;k.$validators.max=function(a){return!q(a)||x(y)||d(a)<=y};g.$observe("max",function(a){y=n(a);k.$validate()})}}}function Hc(a,b,d,c,e){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function ce(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(dh.test(b))return parseFloat(b);
        a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw ob("numfmt",b);b=b.toString()}return b})}function Sa(a){v(a)&&!ba(a)&&(a=parseFloat(a));return V(a)?void 0:a}function Ic(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function de(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ic(a):0,k=e?Ic(b):0,h=f?Ic(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&
    (a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function ee(a,b,d,c,e){if(v(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Jc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;I(a)?b=a.map(c).join(" "):F(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):
        C(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||q[a])q[a]=(q[a]||0)+b,q[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var q=k.data("$classCounts"),n=!0,s;q||(q=S(),k.data("$classCounts",q));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));
            g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function pd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;
        this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;
        this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Yd(this);eh(this)}function eh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);
        return b})}function Kc(a){this.$$options=a}function fe(a,b){r(b,function(b,c){v(a[c])||(a[c]=b)})}function Ea(a,b){a.prop("selected",b);a.attr("selected",b)}var Vb={objectMaxDepth:5,urlErrorParamsEnabled:!0},fh=/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,O=function(a){return C(a)?a.toLowerCase():a},ub=function(a){return C(a)?a.toUpperCase():a},Aa,y,rb,Ga=[].slice,Bg=[].splice,gh=[].push,ma=Object.prototype.toString,Oc=Object.getPrototypeOf,Ia=M("ng"),ea=B.angular||(B.angular={}),jc,pb=
        0;Aa=B.document.documentMode;var V=Number.isNaN||function(a){return a!==a};A.$inject=[];Ta.$inject=[];var se=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,T=function(a){return C(a)?a.trim():a},Ld=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},pa=function(){if(!v(pa.rules)){var a=B.document.querySelector("[ng-csp]")||B.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");
        pa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=pa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return pa.rules},qb=function(){if(v(qb.name_))return qb.name_;var a,b,d=Pa.length,c,e;for(b=0;b<d;++b)if(c=Pa[b],a=B.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},ue=/:/g,Pa=["ng-","data-ng-","ng:","x-ng-"],ye=function(a){var b=a.currentScript;
        if(!b)return!0;if(!(b instanceof B.HTMLScriptElement||b instanceof B.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(B.document),Be=/[A-Z]/g,Vc=!1,Oa=3,He={full:"1.7.5",
        major:1,minor:7,dot:5,codeName:"anti-prettification"};W.expando="ng339";var Ja=W.cache={},lg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var hg=/-([a-z])/g,hh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},mc=M("jqLite"),kg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,lc=/<|&#?\w+;/,ig=/<([\w:-]+)/,jg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
            "</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var qg=B.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=W.prototype={ready:ed,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?y(this[a]):y(this[this.length+a])},length:0,
        push:gh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[O(a)]=a});var ld={};r("input select option textarea button form details".split(" "),function(a){ld[a]=!0});var sd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:qc,removeData:pc,hasData:function(a){for(var b in Ja[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)pc(a[b]),
            hd(a[b])}},function(a,b){W[b]=a});r({data:qc,inheritedData:Eb,scope:function(a){return y.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return y.data(a,"$isolateScope")||y.data(a,"$isolateScopeNoTemplate")},controller:id,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(hh,"ms-"));if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==
            Oa&&2!==c&&8!==c&&a.getAttribute){var c=O(b),e=Gb[c];if(v(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(v(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===ta(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||
            a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:jd},function(a,b){W.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==jd&&x(2===a.length&&a!==Bb&&a!==id?b:c)){if(F(b)){for(e=0;e<g;e++)if(a===qc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:pc,on:function(a,b,d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           c){if(v(c))throw mc("onargs");if(kc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=ng(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],pg),k(b,void 0,!0)):k(b)}},off:hd,one:function(a,b,d){a=y(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new W(b),function(b){d?
            c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=y(b).eq(0).clone()[0],c=a.parentNode;
            c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;x(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?
            a.getElementsByTagName(b):[]},clone:oc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=R(c,b)),b=oa(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||
        b.apply(a,e)})}},function(a,b){W.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)x(f)?(f=a(this[g],b,c,e),v(f)&&(f=y(f))):nc(f,a(this[g],b,c,e));return v(f)?f:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;var ih=Object.create(null);md.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return V(a)?ih:a},get:function(a){a=this._transformKey(a);a=this._idx(a);
            if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=md,fg=[function(){this.$get=[function(){return Hb}]}],sg=/^([^(]+?)=>/,tg=/^[^(]*\(\s*([^)]*)\)/m,
        jh=/,/,kh=/^\s*(_?)(\S+?)\1\s*$/,rg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,za=M("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw C(d)&&d||(d=a.name||ug(a)),za("strictdi",d);b=nd(a);r(b[1].split(jh),function(a){a.replace(kh,function(a,b,d){c.push(d)})})}a.$inject=c}}else I(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var ge=M("$animate"),vf=function(){this.$get=A},wf=function(){var a=new Hb,b=[];this.$get=
        ["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=C(b)?b.split(" "):I(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=vg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||
                h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},tf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw ge("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=z(a)?a:null);return c};
        this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,ge("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},
            enter:function(c,d,h,l){d=d&&y(d);h=h&&y(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",Ba(l))},move:function(c,d,h,l){d=d&&y(d);h=h&&y(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",Ba(l))},leave:function(b,c){return a.push(b,"leave",Ba(c),function(){b.remove()})},addClass:function(b,c,d){d=Ba(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=Ba(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ba(f);
                f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ba(m);m.from=m.from?R(m.from,c):c;m.to=m.to?R(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],yf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},xf=function(){this.$get=
        ["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
            this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
            this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},uf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
        null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ha(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},aa=M("$compile"),sc=new function(){};Wc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===sc};var od=/^((?:x|data)[:\-_])/i,Ag=/[:\-_]+(.)/g,ud=M("$controller"),
        td=/^(\S+)(\s+as\s+([\w$]+))?$/,Ff=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof y&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},vd="application/json",vc={"Content-Type":vd+";charset=utf-8"},Dg=/^\[|^\{(?!\{)/,Eg={"[":/]$/,"{":/}$/},Cg=/^\)]\}',?\n/,Kb=M("$http"),Ca=ea.$interpolateMinErr=M("$interpolate");Ca.throwNoconcat=function(a){throw Ca("noconcat",a);};Ca.interr=function(a,b){return Ca("interr",a,b.toString())};var Hg=M("$interval"),Of=function(){this.$get=
        function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ea.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},lh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Ig={http:80,https:443,ftp:21},jb=M("$location"),Jg=/^\s*[\\/]{2,}/,mh={$$absUrl:"",$$html5:!1,
        $$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ve(this.$$search),b=b?"#"+gc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=gc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=lh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),
        host:Lb("$$host"),port:Lb("$$port"),path:Cd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||ba(a))a=a.toString(),this.$$search=fc(a);else if(F(a))a=Ha(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Cd("$$hash",function(a){return null!==
        a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([Bd,yc,xc],function(a){a.prototype=Object.create(mh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==xc||!this.$$html5)throw jb("nostate");this.$$state=x(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=M("$parse"),Ng={}.constructor.prototype.valueOf,Tb=S();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Tb[a]=!0});var nh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v",
        "'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
        else{var b=a+this.peek(),d=b+this.peek(2),c=Tb[b],e=Tb[d];Tb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
            "\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
            b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",
            a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=O(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
        readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
        this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=nh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var p=function(a,b){this.lexer=a;this.options=b};p.Program="Program";p.ExpressionStatement="ExpressionStatement";p.AssignmentExpression="AssignmentExpression";p.ConditionalExpression="ConditionalExpression";
    p.LogicalExpression="LogicalExpression";p.BinaryExpression="BinaryExpression";p.UnaryExpression="UnaryExpression";p.CallExpression="CallExpression";p.MemberExpression="MemberExpression";p.Identifier="Identifier";p.Literal="Literal";p.ArrayExpression="ArrayExpression";p.Property="Property";p.ObjectExpression="ObjectExpression";p.ThisExpression="ThisExpression";p.LocalsExpression="LocalsExpression";p.NGValueParameter="NGValueParameter";p.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
            a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:p.Program,body:a}},expressionStatement:function(){return{type:p.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
        assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Gd(a))throw Ya("lval");a={type:p.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:p.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:p.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};
            return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:p.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:p.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:p.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=
            this.multiplicative(),b;b=this.expect("+","-");)a={type:p.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:p.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:p.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),
            this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ha(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:p.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===
        b.text?(a={type:p.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:p.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:p.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:p.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=
            [];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:p.Identifier,name:a.text}},constant:function(){return{type:p.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:p.ArrayExpression,
            elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:p.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):
            this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:p.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},
        peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:p.ThisExpression},$locals:{type:p.LocalsExpression}}};var Ed=2;Id.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],
                body:[],own:{}},inputs:[]};Y(a,b.$filter);var d="",c;this.stage="assign";if(c=Hd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Fd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);
            a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Kg,Lg,Dd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+
            b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       f){var g,k,h=this,l,m,q;c=c||A;if(!f&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case p.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case p.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case p.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=
            a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case p.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case p.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case p.ConditionalExpression:b=
            b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case p.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),
            "{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case p.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&
        1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case p.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,
            k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case p.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;
            h.assign(b,m);c(b||m)})},1);break;case p.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case p.ObjectExpression:l=[];q=!1;r(a.properties,function(a){a.computed&&(q=!0)});q?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===p.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,
            g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===p.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case p.ThisExpression:this.assign(b,"s");c(b||"s");break;case p.LocalsExpression:this.assign(b,"l");c(b||"l");break;case p.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||
        (c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
            c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,
            "getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(C(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";
            if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Jd.prototype={compile:function(a){var b=this;Y(a,b.$filter);var d,c;if(d=Hd(a))c=this.recurse(d);d=Fd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});
            a=0===a.body.length?A:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case p.Literal:return this.value(a.value,b);case p.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case p.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+
        a.operator](c,e,b);case p.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case p.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case p.Identifier:return f.identifier(a.name,b,d);case p.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,
            e,b,d);case p.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var q=[],n=0;n<g.length;++n)q.push(g[n](a,c,d,f));a=e.apply(void 0,q,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var q=e(a,c,d,f),n;if(null!=q.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=q.value.apply(q.context,n)}return b?{value:n}:n};case p.AssignmentExpression:return c=
            this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var q=c(a,d,f,g);a=e(a,d,f,g);q.context[q.name]=a;return b?{value:a}:a};case p.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case p.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===p.Identifier?a.key.name:
                ""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case p.ThisExpression:return function(a){return b?{value:a}:a};case p.LocalsExpression:return function(a,c){return b?{value:c}:c};case p.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=v(d)?+d:0;return b?{value:d}:
            d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=v(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Dd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(v(k)?k:0)-(v(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
            return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?
            {value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:
            c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]=
            {});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype=
        {constructor:Mb,parse:function(a){a=this.getAst(a);var b=this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===p.Literal||d.body[0].expression.type===p.ArrayExpression||d.body[0].expression.type===p.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Da=M("$sce"),U={HTML:"html",
        CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Bc=/_([a-z])/g,Qg=M("$templateRequest"),Rg=M("$timeout"),$=B.document.createElement("a"),Nd=la(B.location.href),La;Od.$inject=["$document"];cd.$inject=["$provide"];var Vd=22,Ud=".",Dc="0";Pd.$inject=["$locale"];Rd.$inject=["$locale"];var bh={yyyy:ga("FullYear",4,0,!1,!0),yy:ga("FullYear",2,0,!0,!0),y:ga("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ga("Month",2,1),M:ga("Month",1,1),LLLL:kb("Month",!1,!0),dd:ga("Date",
            2),d:ga("Date",1),HH:ga("Hours",2),H:ga("Hours",1),hh:ga("Hours",2,-12),h:ga("Hours",1,-12),mm:ga("Minutes",2),m:ga("Minutes",1),ss:ga("Seconds",2),s:ga("Seconds",1),sss:ga("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Xd(2),w:Xd(1),G:Ec,GG:Ec,GGG:Ec,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
        ah=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,$g=/^-?\d+$/;Qd.$inject=["$locale"];var Vg=ia(O),Wg=ia(ub);Sd.$inject=["$parse"];var Je=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
        function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=va("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(sd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(fh))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=va("ng-"+a);vb[b]=
        function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Aa&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var lb={$addControl:A,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A,$$setSubmitted:A};Pb.$inject=["$element","$attrs","$scope","$animate",
        "$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Qa(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return oa(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===
        a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Ub);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Za,Ub+
            " ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};$d({clazz:Pb,set:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var he=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var q=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){q.$commitViewValue();
                    q.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||q.$$parentForm).$addControl(q);var s=g?c(q.$name):A;g&&(s(a,q),e.$observe(g,function(b){q.$name!==b&&(s(a,void 0),q.$$parentForm.$$renameControl(q,b),s=c(q.$name),s(a,q))}));d.on("$destroy",function(){q.$$parentForm.$removeControl(q);s(a,void 0);R(q,lb)})}}}}}]},Ke=he(),We=he(!0),ch=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        oh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,ph=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,dh=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,ie=/^(\d{4,})-(\d{2})-(\d{2})$/,je=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Lc=/^(\d{4,})-W(\d\d)$/,ke=/^(\d{4,})-(\d\d)$/,
        le=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,be=S();r(["date","datetime-local","month","time","week"],function(a){be[a]=!0});var me={text:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Gc(c)},date:nb("date",ie,Qb(ie,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",je,Qb(je,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",le,Qb(le,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Lc,function(a,b){if(ha(a))return a;if(C(a)){Lc.lastIndex=0;var d=Lc.exec(a);
            if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Wd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ke,Qb(ke,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Hc(a,b,d,c,"number");ce(c);Ra(a,b,d,c,e,f);var g,k;if(v(d.min)||d.ngMin)c.$validators.min=function(a,b){return c.$isEmpty(b)||x(g)||b>=g},d.$observe("min",function(a){g=Sa(a);c.$validate()});if(v(d.max)||d.ngMax)c.$validators.max=
            function(a,b){return c.$isEmpty(b)||x(k)||b<=k},d.$observe("max",function(a){k=Sa(a);c.$validate()});if(v(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(h)||de(b,g||0,h)};d.$observe("step",function(a){h=Sa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Gc(c);c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||oh.test(d)}},email:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Gc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||
            ph.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==T(d.ngTrim);x(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=T(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=T(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function k(a){q=Sa(a);V(c.$modelValue)||(m?(a=b.val(),q>a&&(a=q,b.val(a)),c.$setViewValue(a)):c.$validate())}
            function h(a){n=Sa(a);V(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<q?q:n),c.$setViewValue(a)):c.$validate())}function l(a){s=Sa(a);V(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Hc(a,b,d,c,"range");ce(c);Ra(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,q=m?0:void 0,n=m?100:void 0,s=m?1:void 0,p=b[0].validity;a=v(d.min);e=v(d.max);f=v(d.step);var r=c.$render;c.$render=m&&v(p.rangeUnderflow)&&v(p.rangeOverflow)?function(){r();c.$setViewValue(b.val())}:
                r;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(q)||b>=q},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b<=n},g("max",h));f&&(c.$validators.step=m?function(){return!p.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(s)||de(b,q||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=ee(k,a,"ngTrueValue",d.ngTrueValue,!0),l=ee(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,
            a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ua(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:A,button:A,submit:A,reset:A,file:A},Xc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(me[O(g.type)]||me.text)(e,f,g,k[0],b,a,d,c)}}}}],qh=/^(true|false|\d+)$/,pf=function(){function a(a,d,c){var e=v(c)?c:9===Aa?"":null;
        a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return qh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Oe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=hc(a)})}}}}],Qe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);
            return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Pe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],of=ia({restrict:"A",
        require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Re=Jc("",!0),Te=Jc("Odd",0),Se=Jc("Even",1),Ue=Na({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ve=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],bd={},rh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=
        va("ng-"+a);bd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return pd(d,c,e,b,a,rh[a])}]});var Ye=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),a.leave(l).done(function(a){!1!==
        a&&(l=null)}),k=null))})}}}],Ze=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,q,n){var s=0,p,r,D,w=function(){r&&(r.remove(),r=null);p&&(p.$destroy(),p=null);D&&(d.leave(D).done(function(a){!1!==a&&(r=null)}),r=D,D=null)};c.$watch(f,function(f){var m=function(a){!1===a||!v(k)||k&&!c.$eval(k)||b()},
            r=++s;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&r===s){var b=c.$new();q.template=a;a=n(b,function(a){w();d.enter(a,null,e).done(m)});p=b;D=a;p.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||r!==s||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),q.template=null)})}}}}],rf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(dd(e.template,B.document).childNodes)(b,
            function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],$e=Na({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),nf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});c.$isEmpty=
            function(a){return!a||!a.length}}}},mb="ng-valid",Zd="ng-invalid",Za="ng-pristine",Ub="ng-dirty",ob=M("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);z(c)&&(c=a(b));return c};this.$$ngModelSet=
            function(a,c){z(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:A,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
            "ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Ub);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Ub);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
            !0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!V(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
        c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
        h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(x(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
            a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=x(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}V(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
            var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
            a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");ba(b[a])?b=b[a]:ba(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:ba(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
        $overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,A))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
            void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};$d({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var mf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
            "^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
                function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,sh=/(\s+|^)default(\s+|$)/;Kc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=R({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=T(d.replace(sh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],fe(a,this.$$options));fe(a,Sb.$$options);
            return new Kc(a)}};Sb=new Kc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var qf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},af=Na({terminal:!0,
        priority:1E3}),th=M("ngOptions"),uh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,kf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!p&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
    "$"!==c.charAt(0)&&b.push(c)}return b}var q=a.match(uh);if(!q)throw th("iexp",a,ya(b));var n=q[5]||q[7],p=q[6];a=/ as /.test(q[0])&&q[1];var r=q[9];b=d(q[2]?q[1]:n);var u=a&&d(a)||b,v=r&&d(r),w=r?function(a,b){return v(c,b)}:function(a){return Ka(a)},y=function(a,b){return w(a,C(a,b))},x=d(q[2]||q[1]),E=d(q[3]||""),G=d(q[4]||""),J=d(q[8]),z={},C=p?function(a,b){z[p]=b;z[n]=a;return z}:function(a){z[n]=a;return z};return{trackBy:r,getTrackByValue:y,getWatchables:d(J,function(a){var b=[];a=a||[];for(var d=
            f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=C(l,k),l=w(l,k);b.push(l);if(q[2]||q[1])l=x(c,k),b.push(l);q[4]&&(k=G(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=J(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var q=d===g?n:g[n],p=C(d[q],q),s=u(c,p),q=w(s,p),v=x(c,p),D=E(c,p),p=G(c,p),s=new e(q,s,v,D,p);a.push(s);b[q]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[y(a)]},getViewValueFromOption:function(a){return r?Ha(a.viewValue):a.viewValue}}}}}
        var e=B.document.createElement("option"),f=B.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,k,h,l){function m(a){var b=(a=w.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function q(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],p=l[1],t=h.multiple;l=0;for(var u=k.children(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     D=u.length;l<D;l++)if(""===u[l].value){n.hasEmptyOption=!0;n.emptyOption=u.eq(l);break}k.empty();l=!!n.emptyOption;y(e.cloneNode(!1)).val("?");var w,x=c(h.ngOptions,k,d),z=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};t?(n.writeValue=function(a){if(w){var b=a&&a.map(m)||[];w.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=w.selectValueMap[a])&&
                !a.disabled&&b.push(w.getViewValueFromOption(a))});return b},x.trackBy&&d.$watchCollection(function(){if(I(p.$viewValue))return p.$viewValue.map(function(a){return x.getTrackByValue(a)})},function(){p.$render()})):(n.writeValue=function(a){if(w){var b=k[0].options[k[0].selectedIndex],c=w.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
                    n.readValue=function(){var a=w.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),w.getViewValueFromOption(a)):null},x.trackBy&&d.$watch(function(){return x.getTrackByValue(p.$viewValue)},function(){p.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),p.$render(),b.on("$destroy",
                    function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&p.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(x.getWatchables,function(){var a=w&&n.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];v(c.group)?Fb(c.element.parentNode):Fb(c.element)}w=x.getOptions();var d={};w.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),z.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
                    var c=e.cloneNode(!1);b.appendChild(c);q(a,c)}else b=e.cloneNode(!1),z.appendChild(b),q(a,b)});k[0].appendChild(z);p.$render();p.$isEmpty(a)||(b=n.readValue(),(x.trackBy||t?ua(a,b):a===b)||(p.$setViewValue(b),p.$render()))})}}}}],bf=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),q=k.offset||0,n=f.$eval(m)||{},p={},t=b.startSymbol(),u=b.endSymbol(),v=t+l+"-"+
            q+u,w=ea.noop,y;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+O(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){p[d]=b(a.replace(c,v))});f.$watch(l,function(b){var c=parseFloat(b),e=V(c);e||c in n||(c=a.pluralCat(c-q));c===y||e&&V(y)||(w(),e=p[c],x(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),w=A,h()):w=f.$watch(e,h),y=c)})}}}],ne=M("ngRef"),cf=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=va(ta(b)),e=a(d.ngRef),f=e.assign||
            function(){throw ne("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw ne("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],df=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),e=function(a,b,c,d,e,m,q){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===q-1;a.$middle=!(a.$first||
        a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",k);var m=l[1],q=l[2],n=l[3],p=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],u=l[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||
            /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw c("badident",n);var v,w,x,y,z={$id:Ka};p?v=a(p):(x=function(a,b){return Ka(b)},y=function(a){return a});return function(a,d,f,g,l){v&&(w=function(b,c,d){u&&(z[u]=b);z[t]=c;z.$index=d;return v(a,z)});var m=S();a.$watchCollection(q,function(f){var g,q,p=d[0],s,v=S(),D,z,C,B,E,A,F;n&&(a[n]=f);if(xa(f))E=f,q=w||x;else for(F in q=w||y,E=[],f)sa.call(f,F)&&"$"!==F.charAt(0)&&E.push(F);D=E.length;F=
            Array(D);for(g=0;g<D;g++)if(z=f===E?g:E[g],C=f[z],B=q(z,C,g),m[B])A=m[B],delete m[B],v[B]=A,F[g]=A;else{if(v[B])throw r(F,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,B,C);F[g]={id:B,scope:void 0,clone:void 0};v[B]=!0}for(s in m){A=m[s];B=tb(A.clone);b.leave(B);if(B[0].parentNode)for(g=0,q=B.length;g<q;g++)B[g].$$NG_REMOVED=!0;A.scope.$destroy()}for(g=0;g<D;g++)if(z=f===E?g:E[g],C=f[z],A=F[g],A.scope){s=p;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);A.clone[0]!==s&&b.move(tb(A.clone),null,p);
            p=A.clone[A.clone.length-1];e(A.scope,g,t,C,u,z,D)}else l(function(a,c){A.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,p);p=d;A.clone=a;v[A.id]=A;e(A.scope,g,t,C,u,z,D)});m=v})}}}}],ef=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Xe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?
            "addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ff=Na(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)})}),gf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;
            for(e=l.length;d<e;++d){var p=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(p)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],hf=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-
        1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),jf=Na({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),vh=M("ngTransclude"),lf=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw vh("orphan",
            ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Oa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Le=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],wh={$setViewValue:A,$render:A},xh=["$element",
        "$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=wh;e.multiple=!1;e.unknownOption=y(B.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
            a.prepend(e.unknownOption);Ea(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ea(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Ka(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ea(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Ea(e.emptyOption,!1)};b.$on("$destroy",
            function(){e.renderUnknownOption=A});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Ea(y(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Ka(b),a.val(c in e.selectValueMap?c:b),Ea(y(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
            b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
        a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var p,r;f.$observe("value",function(a){var d,f=b.prop("selected");v(r)&&(e.removeOption(p),delete e.selectValueMap[r],d=!0);r=Ka(a);p=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
            v(p)&&(e.removeOption(p),d=!0);p=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Me=function(){return{restrict:"E",
        require:["select","?ngModel"],controller:xh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
                b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ea(y(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||ua(g,f.$viewValue)||(g=oa(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=A},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Ne=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;v(d.ngValue)||
        (v(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],Zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=da(a);e=V(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
            b.length<=e}}}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=da(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};B.angular.bootstrap?B.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Ce(),Ge(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
                "PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
                6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),y(function(){xe(B.document,Tc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.7.5
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

    /* global shallowCopy: true */

    /**
     * Creates a shallow copy of an object, an array or a primitive.
     *
     * Assumes that there are no proto properties for objects.
     */
    function shallowCopy(src, dst) {
        if (isArray(src)) {
            dst = dst || [];

            for (var i = 0, ii = src.length; i < ii; i++) {
                dst[i] = src[i];
            }
        } else if (isObject(src)) {
            dst = dst || {};

            for (var key in src) {
                if (!(key.charAt(0) === '$' && key.charAt(1) === '$')) {
                    dst[key] = src[key];
                }
            }
        }

        return dst || src;
    }

    /* global routeToRegExp: true */

    /**
     * @param {string} path - The path to parse. (It is assumed to have query and hash stripped off.)
     * @param {Object} opts - Options.
     * @return {Object} - An object containing an array of path parameter names (`keys`) and a regular
     *     expression (`regexp`) that can be used to identify a matching URL and extract the path
     *     parameter values.
     *
     * @description
     * Parses the given path, extracting path parameter names and a regular expression to match URLs.
     *
     * Originally inspired by `pathRexp` in `visionmedia/express/lib/utils.js`.
     */
    function routeToRegExp(path, opts) {
        var keys = [];

        var pattern = path
            .replace(/([().])/g, '\\$1')
            .replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function(_, slash, key, option) {
                var optional = option === '?' || option === '*?';
                var star = option === '*' || option === '*?';
                keys.push({name: key, optional: optional});
                slash = slash || '';
                return (
                    (optional ? '(?:' + slash : slash + '(?:') +
                    (star ? '(.+?)' : '([^/]+)') +
                    (optional ? '?)?' : ')')
                );
            })
            .replace(/([/$*])/g, '\\$1');

        if (opts.ignoreTrailingSlashes) {
            pattern = pattern.replace(/\/+$/, '') + '/*';
        }

        return {
            keys: keys,
            regexp: new RegExp(
                '^' + pattern + '(?:[?#]|$)',
                opts.caseInsensitiveMatch ? 'i' : ''
            )
        };
    }

    /* global routeToRegExp: false */
    /* global shallowCopy: false */

// `isArray` and `isObject` are necessary for `shallowCopy()` (included via `src/shallowCopy.js`).
// They are initialized inside the `$RouteProvider`, to ensure `window.angular` is available.
    var isArray;
    var isObject;
    var isDefined;
    var noop;

    /**
     * @ngdoc module
     * @name ngRoute
     * @description
     *
     * The `ngRoute` module provides routing and deeplinking services and directives for AngularJS apps.
     *
     * ## Example
     * See {@link ngRoute.$route#examples $route} for an example of configuring and using `ngRoute`.
     *
     */
    /* global -ngRouteModule */
    var ngRouteModule = angular.
    module('ngRoute', []).
    info({ angularVersion: '1.7.5' }).
    provider('$route', $RouteProvider).
    // Ensure `$route` will be instantiated in time to capture the initial `$locationChangeSuccess`
    // event (unless explicitly disabled). This is necessary in case `ngView` is included in an
    // asynchronously loaded template.
    run(instantiateRoute);
    var $routeMinErr = angular.$$minErr('ngRoute');
    var isEagerInstantiationEnabled;


    /**
     * @ngdoc provider
     * @name $routeProvider
     * @this
     *
     * @description
     *
     * Used for configuring routes.
     *
     * ## Example
     * See {@link ngRoute.$route#examples $route} for an example of configuring and using `ngRoute`.
     *
     * ## Dependencies
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     */
    function $RouteProvider() {
        isArray = angular.isArray;
        isObject = angular.isObject;
        isDefined = angular.isDefined;
        noop = angular.noop;

        function inherit(parent, extra) {
            return angular.extend(Object.create(parent), extra);
        }

        var routes = {};

        /**
         * @ngdoc method
         * @name $routeProvider#when
         *
         * @param {string} path Route path (matched against `$location.path`). If `$location.path`
         *    contains redundant trailing slash or is missing one, the route will still match and the
         *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
         *    route definition.
         *
         *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
         *        to the next slash are matched and stored in `$routeParams` under the given `name`
         *        when the route matches.
         *    * `path` can contain named groups starting with a colon and ending with a star:
         *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
         *        when the route matches.
         *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
         *
         *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
         *    `/color/brown/largecode/code/with/slashes/edit` and extract:
         *
         *    * `color: brown`
         *    * `largecode: code/with/slashes`.
         *
         *
         * @param {Object} route Mapping information to be assigned to `$route.current` on route
         *    match.
         *
         *    Object properties:
         *
         *    - `controller` – `{(string|Function)=}` – Controller fn that should be associated with
         *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
         *    - `controllerAs` – `{string=}` – An identifier name for a reference to the controller.
         *      If present, the controller will be published to scope under the `controllerAs` name.
         *    - `template` – `{(string|Function)=}` – html template as a string or a function that
         *      returns an html template as a string which should be used by {@link
            *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
         *      This property takes precedence over `templateUrl`.
         *
         *      If `template` is a function, it will be called with the following parameters:
         *
         *      - `{Array.<Object>}` - route parameters extracted from the current
         *        `$location.path()` by applying the current route
         *
         *      One of `template` or `templateUrl` is required.
         *
         *    - `templateUrl` – `{(string|Function)=}` – path or function that returns a path to an html
         *      template that should be used by {@link ngRoute.directive:ngView ngView}.
         *
         *      If `templateUrl` is a function, it will be called with the following parameters:
         *
         *      - `{Array.<Object>}` - route parameters extracted from the current
         *        `$location.path()` by applying the current route
         *
         *      One of `templateUrl` or `template` is required.
         *
         *    - `resolve` - `{Object.<string, Function>=}` - An optional map of dependencies which should
         *      be injected into the controller. If any of these dependencies are promises, the router
         *      will wait for them all to be resolved or one to be rejected before the controller is
         *      instantiated.
         *      If all the promises are resolved successfully, the values of the resolved promises are
         *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
         *      fired. If any of the promises are rejected the
         *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired.
         *      For easier access to the resolved dependencies from the template, the `resolve` map will
         *      be available on the scope of the route, under `$resolve` (by default) or a custom name
         *      specified by the `resolveAs` property (see below). This can be particularly useful, when
         *      working with {@link angular.Module#component components} as route templates.<br />
         *      <div class="alert alert-warning">
         *        **Note:** If your scope already contains a property with this name, it will be hidden
         *        or overwritten. Make sure, you specify an appropriate name for this property, that
         *        does not collide with other properties on the scope.
         *      </div>
         *      The map object is:
         *
         *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
         *      - `factory` - `{string|Function}`: If `string` then it is an alias for a service.
         *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
         *        and the return value is treated as the dependency. If the result is a promise, it is
         *        resolved before its value is injected into the controller. Be aware that
         *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
         *        functions.  Use `$route.current.params` to access the new route parameters, instead.
         *
         *    - `resolveAs` - `{string=}` - The name under which the `resolve` map will be available on
         *      the scope of the route. If omitted, defaults to `$resolve`.
         *
         *    - `redirectTo` – `{(string|Function)=}` – value to update
         *      {@link ng.$location $location} path with and trigger route redirection.
         *
         *      If `redirectTo` is a function, it will be called with the following parameters:
         *
         *      - `{Object.<string>}` - route parameters extracted from the current
         *        `$location.path()` by applying the current route templateUrl.
         *      - `{string}` - current `$location.path()`
         *      - `{Object}` - current `$location.search()`
         *
         *      The custom `redirectTo` function is expected to return a string which will be used
         *      to update `$location.url()`. If the function throws an error, no further processing will
         *      take place and the {@link ngRoute.$route#$routeChangeError $routeChangeError} event will
         *      be fired.
         *
         *      Routes that specify `redirectTo` will not have their controllers, template functions
         *      or resolves called, the `$location` will be changed to the redirect url and route
         *      processing will stop. The exception to this is if the `redirectTo` is a function that
         *      returns `undefined`. In this case the route transition occurs as though there was no
         *      redirection.
         *
         *    - `resolveRedirectTo` – `{Function=}` – a function that will (eventually) return the value
         *      to update {@link ng.$location $location} URL with and trigger route redirection. In
         *      contrast to `redirectTo`, dependencies can be injected into `resolveRedirectTo` and the
         *      return value can be either a string or a promise that will be resolved to a string.
         *
         *      Similar to `redirectTo`, if the return value is `undefined` (or a promise that gets
         *      resolved to `undefined`), no redirection takes place and the route transition occurs as
         *      though there was no redirection.
         *
         *      If the function throws an error or the returned promise gets rejected, no further
         *      processing will take place and the
         *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event will be fired.
         *
         *      `redirectTo` takes precedence over `resolveRedirectTo`, so specifying both on the same
         *      route definition, will cause the latter to be ignored.
         *
         *    - `[reloadOnUrl=true]` - `{boolean=}` - reload route when any part of the URL changes
         *      (including the path) even if the new URL maps to the same route.
         *
         *      If the option is set to `false` and the URL in the browser changes, but the new URL maps
         *      to the same route, then a `$routeUpdate` event is broadcasted on the root scope (without
         *      reloading the route).
         *
         *    - `[reloadOnSearch=true]` - `{boolean=}` - reload route when only `$location.search()`
         *      or `$location.hash()` changes.
         *
         *      If the option is set to `false` and the URL in the browser changes, then a `$routeUpdate`
         *      event is broadcasted on the root scope (without reloading the route).
         *
         *      <div class="alert alert-warning">
         *        **Note:** This option has no effect if `reloadOnUrl` is set to `false`.
         *      </div>
         *
         *    - `[caseInsensitiveMatch=false]` - `{boolean=}` - match routes without being case sensitive
         *
         *      If the option is set to `true`, then the particular route can be matched without being
         *      case sensitive
         *
         * @returns {Object} self
         *
         * @description
         * Adds a new route definition to the `$route` service.
         */
        this.when = function(path, route) {
            //copy original route object to preserve params inherited from proto chain
            var routeCopy = shallowCopy(route);
            if (angular.isUndefined(routeCopy.reloadOnUrl)) {
                routeCopy.reloadOnUrl = true;
            }
            if (angular.isUndefined(routeCopy.reloadOnSearch)) {
                routeCopy.reloadOnSearch = true;
            }
            if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
                routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
            }
            routes[path] = angular.extend(
                routeCopy,
                {originalPath: path},
                path && routeToRegExp(path, routeCopy)
            );

            // create redirection for trailing slashes
            if (path) {
                var redirectPath = (path[path.length - 1] === '/')
                    ? path.substr(0, path.length - 1)
                    : path + '/';

                routes[redirectPath] = angular.extend(
                    {originalPath: path, redirectTo: path},
                    routeToRegExp(redirectPath, routeCopy)
                );
            }

            return this;
        };

        /**
         * @ngdoc property
         * @name $routeProvider#caseInsensitiveMatch
         * @description
         *
         * A boolean property indicating if routes defined
         * using this provider should be matched using a case insensitive
         * algorithm. Defaults to `false`.
         */
        this.caseInsensitiveMatch = false;

        /**
         * @ngdoc method
         * @name $routeProvider#otherwise
         *
         * @description
         * Sets route definition that will be used on route change when no other route definition
         * is matched.
         *
         * @param {Object|string} params Mapping information to be assigned to `$route.current`.
         * If called with a string, the value maps to `redirectTo`.
         * @returns {Object} self
         */
        this.otherwise = function(params) {
            if (typeof params === 'string') {
                params = {redirectTo: params};
            }
            this.when(null, params);
            return this;
        };

        /**
         * @ngdoc method
         * @name $routeProvider#eagerInstantiationEnabled
         * @kind function
         *
         * @description
         * Call this method as a setter to enable/disable eager instantiation of the
         * {@link ngRoute.$route $route} service upon application bootstrap. You can also call it as a
         * getter (i.e. without any arguments) to get the current value of the
         * `eagerInstantiationEnabled` flag.
         *
         * Instantiating `$route` early is necessary for capturing the initial
         * {@link ng.$location#$locationChangeStart $locationChangeStart} event and navigating to the
         * appropriate route. Usually, `$route` is instantiated in time by the
         * {@link ngRoute.ngView ngView} directive. Yet, in cases where `ngView` is included in an
         * asynchronously loaded template (e.g. in another directive's template), the directive factory
         * might not be called soon enough for `$route` to be instantiated _before_ the initial
         * `$locationChangeSuccess` event is fired. Eager instantiation ensures that `$route` is always
         * instantiated in time, regardless of when `ngView` will be loaded.
         *
         * The default value is true.
         *
         * **Note**:<br />
         * You may want to disable the default behavior when unit-testing modules that depend on
         * `ngRoute`, in order to avoid an unexpected request for the default route's template.
         *
         * @param {boolean=} enabled - If provided, update the internal `eagerInstantiationEnabled` flag.
         *
         * @returns {*} The current value of the `eagerInstantiationEnabled` flag if used as a getter or
         *     itself (for chaining) if used as a setter.
         */
        isEagerInstantiationEnabled = true;
        this.eagerInstantiationEnabled = function eagerInstantiationEnabled(enabled) {
            if (isDefined(enabled)) {
                isEagerInstantiationEnabled = enabled;
                return this;
            }

            return isEagerInstantiationEnabled;
        };


        this.$get = ['$rootScope',
            '$location',
            '$routeParams',
            '$q',
            '$injector',
            '$templateRequest',
            '$sce',
            '$browser',
            function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce, $browser) {

                /**
                 * @ngdoc service
                 * @name $route
                 * @requires $location
                 * @requires $routeParams
                 *
                 * @property {Object} current Reference to the current route definition.
                 * The route definition contains:
                 *
                 *   - `controller`: The controller constructor as defined in the route definition.
                 *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
                 *     controller instantiation. The `locals` contain
                 *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
                 *
                 *     - `$scope` - The current route scope.
                 *     - `$template` - The current route template HTML.
                 *
                 *     The `locals` will be assigned to the route scope's `$resolve` property. You can override
                 *     the property name, using `resolveAs` in the route definition. See
                 *     {@link ngRoute.$routeProvider $routeProvider} for more info.
                 *
                 * @property {Object} routes Object with all route configuration Objects as its properties.
                 *
                 * @description
                 * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
                 * It watches `$location.url()` and tries to map the path to an existing route definition.
                 *
                 * Requires the {@link ngRoute `ngRoute`} module to be installed.
                 *
                 * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
                 *
                 * The `$route` service is typically used in conjunction with the
                 * {@link ngRoute.directive:ngView `ngView`} directive and the
                 * {@link ngRoute.$routeParams `$routeParams`} service.
                 *
                 * @example
                 * This example shows how changing the URL hash causes the `$route` to match a route against the
                 * URL, and the `ngView` pulls in the partial.
                 *
                 * <example name="$route-service" module="ngRouteExample"
                 *          deps="angular-route.js" fixBase="true">
                 *   <file name="index.html">
                 *     <div ng-controller="MainController">
                 *       Choose:
                 *       <a href="Book/Moby">Moby</a> |
                 *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
                 *       <a href="Book/Gatsby">Gatsby</a> |
                 *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
                 *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
                 *
                 *       <div ng-view></div>
                 *
                 *       <hr />
                 *
                 *       <pre>$location.path() = {{$location.path()}}</pre>
                 *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
                 *       <pre>$route.current.params = {{$route.current.params}}</pre>
                 *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
                 *       <pre>$routeParams = {{$routeParams}}</pre>
                 *     </div>
                 *   </file>
                 *
                 *   <file name="book.html">
                 *     controller: {{name}}<br />
                 *     Book Id: {{params.bookId}}<br />
                 *   </file>
                 *
                 *   <file name="chapter.html">
                 *     controller: {{name}}<br />
                 *     Book Id: {{params.bookId}}<br />
                 *     Chapter Id: {{params.chapterId}}
                 *   </file>
                 *
                 *   <file name="script.js">
                 *     angular.module('ngRouteExample', ['ngRoute'])
                 *
                 *      .controller('MainController', function($scope, $route, $routeParams, $location) {
                 *          $scope.$route = $route;
                 *          $scope.$location = $location;
                 *          $scope.$routeParams = $routeParams;
                 *      })
                 *
                 *      .controller('BookController', function($scope, $routeParams) {
                 *          $scope.name = 'BookController';
                 *          $scope.params = $routeParams;
                 *      })
                 *
                 *      .controller('ChapterController', function($scope, $routeParams) {
                 *          $scope.name = 'ChapterController';
                 *          $scope.params = $routeParams;
                 *      })
                 *
                 *     .config(function($routeProvider, $locationProvider) {
                 *       $routeProvider
                 *        .when('/Book/:bookId', {
                 *         templateUrl: 'book.html',
                 *         controller: 'BookController',
                 *         resolve: {
                 *           // I will cause a 1 second delay
                 *           delay: function($q, $timeout) {
                 *             var delay = $q.defer();
                 *             $timeout(delay.resolve, 1000);
                 *             return delay.promise;
                 *           }
                 *         }
                 *       })
                 *       .when('/Book/:bookId/ch/:chapterId', {
                 *         templateUrl: 'chapter.html',
                 *         controller: 'ChapterController'
                 *       });
                 *
                 *       // configure html5 to get links working on jsfiddle
                 *       $locationProvider.html5Mode(true);
                 *     });
                 *
                 *   </file>
                 *
                 *   <file name="protractor.js" type="protractor">
                 *     it('should load and compile correct template', function() {
                 *       element(by.linkText('Moby: Ch1')).click();
                 *       var content = element(by.css('[ng-view]')).getText();
                 *       expect(content).toMatch(/controller: ChapterController/);
                 *       expect(content).toMatch(/Book Id: Moby/);
                 *       expect(content).toMatch(/Chapter Id: 1/);
                 *
                 *       element(by.partialLinkText('Scarlet')).click();
                 *
                 *       content = element(by.css('[ng-view]')).getText();
                 *       expect(content).toMatch(/controller: BookController/);
                 *       expect(content).toMatch(/Book Id: Scarlet/);
                 *     });
                 *   </file>
                 * </example>
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeChangeStart
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted before a route change. At this  point the route services starts
                 * resolving all of the dependencies needed for the route change to occur.
                 * Typically this involves fetching the view template as well as any dependencies
                 * defined in `resolve` route property. Once  all of the dependencies are resolved
                 * `$routeChangeSuccess` is fired.
                 *
                 * The route change (and the `$location` change that triggered it) can be prevented
                 * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
                 * for more details about event object.
                 *
                 * @param {Object} angularEvent Synthetic event object.
                 * @param {Route} next Future route information.
                 * @param {Route} current Current route information.
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeChangeSuccess
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted after a route change has happened successfully.
                 * The `resolve` dependencies are now available in the `current.locals` property.
                 *
                 * {@link ngRoute.directive:ngView ngView} listens for the directive
                 * to instantiate the controller and render the view.
                 *
                 * @param {Object} angularEvent Synthetic event object.
                 * @param {Route} current Current route information.
                 * @param {Route|Undefined} previous Previous route information, or undefined if current is
                 * first route entered.
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeChangeError
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted if a redirection function fails or any redirection or resolve promises are
                 * rejected.
                 *
                 * @param {Object} angularEvent Synthetic event object
                 * @param {Route} current Current route information.
                 * @param {Route} previous Previous route information.
                 * @param {Route} rejection The thrown error or the rejection reason of the promise. Usually
                 * the rejection reason is the error that caused the promise to get rejected.
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeUpdate
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted if the same instance of a route (including template, controller instance,
                 * resolved dependencies, etc.) is being reused. This can happen if either `reloadOnSearch` or
                 * `reloadOnUrl` has been set to `false`.
                 *
                 * @param {Object} angularEvent Synthetic event object
                 * @param {Route} current Current/previous route information.
                 */

                var forceReload = false,
                    preparedRoute,
                    preparedRouteIsUpdateOnly,
                    $route = {
                        routes: routes,

                        /**
                         * @ngdoc method
                         * @name $route#reload
                         *
                         * @description
                         * Causes `$route` service to reload the current route even if
                         * {@link ng.$location $location} hasn't changed.
                         *
                         * As a result of that, {@link ngRoute.directive:ngView ngView}
                         * creates new scope and reinstantiates the controller.
                         */
                        reload: function() {
                            forceReload = true;

                            var fakeLocationEvent = {
                                defaultPrevented: false,
                                preventDefault: function fakePreventDefault() {
                                    this.defaultPrevented = true;
                                    forceReload = false;
                                }
                            };

                            $rootScope.$evalAsync(function() {
                                prepareRoute(fakeLocationEvent);
                                if (!fakeLocationEvent.defaultPrevented) commitRoute();
                            });
                        },

                        /**
                         * @ngdoc method
                         * @name $route#updateParams
                         *
                         * @description
                         * Causes `$route` service to update the current URL, replacing
                         * current route parameters with those specified in `newParams`.
                         * Provided property names that match the route's path segment
                         * definitions will be interpolated into the location's path, while
                         * remaining properties will be treated as query params.
                         *
                         * @param {!Object<string, string>} newParams mapping of URL parameter names to values
                         */
                        updateParams: function(newParams) {
                            if (this.current && this.current.$$route) {
                                newParams = angular.extend({}, this.current.params, newParams);
                                $location.path(interpolate(this.current.$$route.originalPath, newParams));
                                // interpolate modifies newParams, only query params are left
                                $location.search(newParams);
                            } else {
                                throw $routeMinErr('norout', 'Tried updating route with no current route');
                            }
                        }
                    };

                $rootScope.$on('$locationChangeStart', prepareRoute);
                $rootScope.$on('$locationChangeSuccess', commitRoute);

                return $route;

                /////////////////////////////////////////////////////

                /**
                 * @param on {string} current url
                 * @param route {Object} route regexp to match the url against
                 * @return {?Object}
                 *
                 * @description
                 * Check if the route matches the current url.
                 *
                 * Inspired by match in
                 * visionmedia/express/lib/router/router.js.
                 */
                function switchRouteMatcher(on, route) {
                    var keys = route.keys,
                        params = {};

                    if (!route.regexp) return null;

                    var m = route.regexp.exec(on);
                    if (!m) return null;

                    for (var i = 1, len = m.length; i < len; ++i) {
                        var key = keys[i - 1];

                        var val = m[i];

                        if (key && val) {
                            params[key.name] = val;
                        }
                    }
                    return params;
                }

                function prepareRoute($locationEvent) {
                    var lastRoute = $route.current;

                    preparedRoute = parseRoute();
                    preparedRouteIsUpdateOnly = isNavigationUpdateOnly(preparedRoute, lastRoute);

                    if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
                        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
                            if ($locationEvent) {
                                $locationEvent.preventDefault();
                            }
                        }
                    }
                }

                function commitRoute() {
                    var lastRoute = $route.current;
                    var nextRoute = preparedRoute;

                    if (preparedRouteIsUpdateOnly) {
                        lastRoute.params = nextRoute.params;
                        angular.copy(lastRoute.params, $routeParams);
                        $rootScope.$broadcast('$routeUpdate', lastRoute);
                    } else if (nextRoute || lastRoute) {
                        forceReload = false;
                        $route.current = nextRoute;

                        var nextRoutePromise = $q.resolve(nextRoute);

                        $browser.$$incOutstandingRequestCount('$route');

                        nextRoutePromise.
                        then(getRedirectionData).
                        then(handlePossibleRedirection).
                        then(function(keepProcessingRoute) {
                            return keepProcessingRoute && nextRoutePromise.
                            then(resolveLocals).
                            then(function(locals) {
                                // after route change
                                if (nextRoute === $route.current) {
                                    if (nextRoute) {
                                        nextRoute.locals = locals;
                                        angular.copy(nextRoute.params, $routeParams);
                                    }
                                    $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
                                }
                            });
                        }).catch(function(error) {
                            if (nextRoute === $route.current) {
                                $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
                            }
                        }).finally(function() {
                            // Because `commitRoute()` is called from a `$rootScope.$evalAsync` block (see
                            // `$locationWatch`), this `$$completeOutstandingRequest()` call will not cause
                            // `outstandingRequestCount` to hit zero.  This is important in case we are redirecting
                            // to a new route which also requires some asynchronous work.

                            $browser.$$completeOutstandingRequest(noop, '$route');
                        });
                    }
                }

                function getRedirectionData(route) {
                    var data = {
                        route: route,
                        hasRedirection: false
                    };

                    if (route) {
                        if (route.redirectTo) {
                            if (angular.isString(route.redirectTo)) {
                                data.path = interpolate(route.redirectTo, route.params);
                                data.search = route.params;
                                data.hasRedirection = true;
                            } else {
                                var oldPath = $location.path();
                                var oldSearch = $location.search();
                                var newUrl = route.redirectTo(route.pathParams, oldPath, oldSearch);

                                if (angular.isDefined(newUrl)) {
                                    data.url = newUrl;
                                    data.hasRedirection = true;
                                }
                            }
                        } else if (route.resolveRedirectTo) {
                            return $q.
                            resolve($injector.invoke(route.resolveRedirectTo)).
                            then(function(newUrl) {
                                if (angular.isDefined(newUrl)) {
                                    data.url = newUrl;
                                    data.hasRedirection = true;
                                }

                                return data;
                            });
                        }
                    }

                    return data;
                }

                function handlePossibleRedirection(data) {
                    var keepProcessingRoute = true;

                    if (data.route !== $route.current) {
                        keepProcessingRoute = false;
                    } else if (data.hasRedirection) {
                        var oldUrl = $location.url();
                        var newUrl = data.url;

                        if (newUrl) {
                            $location.
                            url(newUrl).
                            replace();
                        } else {
                            newUrl = $location.
                            path(data.path).
                            search(data.search).
                            replace().
                            url();
                        }

                        if (newUrl !== oldUrl) {
                            // Exit out and don't process current next value,
                            // wait for next location change from redirect
                            keepProcessingRoute = false;
                        }
                    }

                    return keepProcessingRoute;
                }

                function resolveLocals(route) {
                    if (route) {
                        var locals = angular.extend({}, route.resolve);
                        angular.forEach(locals, function(value, key) {
                            locals[key] = angular.isString(value) ?
                                $injector.get(value) :
                                $injector.invoke(value, null, null, key);
                        });
                        var template = getTemplateFor(route);
                        if (angular.isDefined(template)) {
                            locals['$template'] = template;
                        }
                        return $q.all(locals);
                    }
                }

                function getTemplateFor(route) {
                    var template, templateUrl;
                    if (angular.isDefined(template = route.template)) {
                        if (angular.isFunction(template)) {
                            template = template(route.params);
                        }
                    } else if (angular.isDefined(templateUrl = route.templateUrl)) {
                        if (angular.isFunction(templateUrl)) {
                            templateUrl = templateUrl(route.params);
                        }
                        if (angular.isDefined(templateUrl)) {
                            route.loadedTemplateUrl = $sce.valueOf(templateUrl);
                            template = $templateRequest(templateUrl);
                        }
                    }
                    return template;
                }

                /**
                 * @returns {Object} the current active route, by matching it against the URL
                 */
                function parseRoute() {
                    // Match a route
                    var params, match;
                    angular.forEach(routes, function(route, path) {
                        if (!match && (params = switchRouteMatcher($location.path(), route))) {
                            match = inherit(route, {
                                params: angular.extend({}, $location.search(), params),
                                pathParams: params});
                            match.$$route = route;
                        }
                    });
                    // No route matched; fallback to "otherwise" route
                    return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
                }

                /**
                 * @param {Object} newRoute - The new route configuration (as returned by `parseRoute()`).
                 * @param {Object} oldRoute - The previous route configuration (as returned by `parseRoute()`).
                 * @returns {boolean} Whether this is an "update-only" navigation, i.e. the URL maps to the same
                 *                    route and it can be reused (based on the config and the type of change).
                 */
                function isNavigationUpdateOnly(newRoute, oldRoute) {
                    // IF this is not a forced reload
                    return !forceReload
                        // AND both `newRoute`/`oldRoute` are defined
                        && newRoute && oldRoute
                        // AND they map to the same Route Definition Object
                        && (newRoute.$$route === oldRoute.$$route)
                        // AND `reloadOnUrl` is disabled
                        && (!newRoute.reloadOnUrl
                            // OR `reloadOnSearch` is disabled
                            || (!newRoute.reloadOnSearch
                                // AND both routes have the same path params
                                && angular.equals(newRoute.pathParams, oldRoute.pathParams)
                            )
                        );
                }

                /**
                 * @returns {string} interpolation of the redirect path with the parameters
                 */
                function interpolate(string, params) {
                    var result = [];
                    angular.forEach((string || '').split(':'), function(segment, i) {
                        if (i === 0) {
                            result.push(segment);
                        } else {
                            var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
                            var key = segmentMatch[1];
                            result.push(params[key]);
                            result.push(segmentMatch[2] || '');
                            delete params[key];
                        }
                    });
                    return result.join('');
                }
            }];
    }

    instantiateRoute.$inject = ['$injector'];
    function instantiateRoute($injector) {
        if (isEagerInstantiationEnabled) {
            // Instantiate `$route`
            $injector.get('$route');
        }
    }

    ngRouteModule.provider('$routeParams', $RouteParamsProvider);


    /**
     * @ngdoc service
     * @name $routeParams
     * @requires $route
     * @this
     *
     * @description
     * The `$routeParams` service allows you to retrieve the current set of route parameters.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * The route parameters are a combination of {@link ng.$location `$location`}'s
     * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
     * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
     *
     * In case of parameter name collision, `path` params take precedence over `search` params.
     *
     * The service guarantees that the identity of the `$routeParams` object will remain unchanged
     * (but its properties will likely change) even when a route change occurs.
     *
     * Note that the `$routeParams` are only updated *after* a route change completes successfully.
     * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
     * Instead you can use `$route.current.params` to access the new route's parameters.
     *
     * @example
     * ```js
     *  // Given:
     *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
     *  // Route: /Chapter/:chapterId/Section/:sectionId
     *  //
     *  // Then
     *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
     * ```
     */
    function $RouteParamsProvider() {
        this.$get = function() { return {}; };
    }

    ngRouteModule.directive('ngView', ngViewFactory);
    ngRouteModule.directive('ngView', ngViewFillContentFactory);


    /**
     * @ngdoc directive
     * @name ngView
     * @restrict ECA
     *
     * @description
     * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
     * including the rendered template of the current route into the main layout (`index.html`) file.
     * Every time the current route changes, the included view changes with it according to the
     * configuration of the `$route` service.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * @animations
     * | Animation                        | Occurs                              |
     * |----------------------------------|-------------------------------------|
     * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM |
     * | {@link ng.$animate#leave leave}  | when the old element is removed from to the DOM  |
     *
     * The enter and leave animation occur concurrently.
     *
     * @scope
     * @priority 400
     * @param {string=} onload Expression to evaluate whenever the view updates.
     *
     * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
     *
     *                  - If the attribute is not set, disable scrolling.
     *                  - If the attribute is set without value, enable scrolling.
     *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
     *                    as an expression yields a truthy value.
     * @example
     <example name="ngView-directive" module="ngViewExample"
     deps="angular-route.js;angular-animate.js"
     animations="true" fixBase="true">
     <file name="index.html">
     <div ng-controller="MainCtrl as main">
     Choose:
     <a href="Book/Moby">Moby</a> |
     <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     <a href="Book/Gatsby">Gatsby</a> |
     <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     <a href="Book/Scarlet">Scarlet Letter</a><br/>

     <div class="view-animate-container">
     <div ng-view class="view-animate"></div>
     </div>
     <hr />

     <pre>$location.path() = {{main.$location.path()}}</pre>
     <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
     <pre>$route.current.params = {{main.$route.current.params}}</pre>
     <pre>$routeParams = {{main.$routeParams}}</pre>
     </div>
     </file>

     <file name="book.html">
     <div>
     controller: {{book.name}}<br />
     Book Id: {{book.params.bookId}}<br />
     </div>
     </file>

     <file name="chapter.html">
     <div>
     controller: {{chapter.name}}<br />
     Book Id: {{chapter.params.bookId}}<br />
     Chapter Id: {{chapter.params.chapterId}}
     </div>
     </file>

     <file name="animations.css">
     .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

     .view-animate {
          padding:10px;
        }

     .view-animate.ng-enter, .view-animate.ng-leave {
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

     .view-animate.ng-enter {
          left:100%;
        }
     .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
     .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
     </file>

     <file name="script.js">
     angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
     .config(['$routeProvider', '$locationProvider',
     function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
     .controller('MainCtrl', ['$route', '$routeParams', '$location',
     function MainCtrl($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
     .controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
            this.name = 'BookCtrl';
            this.params = $routeParams;
          }])
     .controller('ChapterCtrl', ['$routeParams', function ChapterCtrl($routeParams) {
            this.name = 'ChapterCtrl';
            this.params = $routeParams;
          }]);

     </file>

     <file name="protractor.js" type="protractor">
     it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller: ChapterCtrl/);
          expect(content).toMatch(/Book Id: Moby/);
          expect(content).toMatch(/Chapter Id: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller: BookCtrl/);
          expect(content).toMatch(/Book Id: Scarlet/);
        });
     </file>
     </example>
     */


    /**
     * @ngdoc event
     * @name ngView#$viewContentLoaded
     * @eventType emit on the current ngView scope
     * @description
     * Emitted every time the ngView content is reloaded.
     */
    ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
    function ngViewFactory($route, $anchorScroll, $animate) {
        return {
            restrict: 'ECA',
            terminal: true,
            priority: 400,
            transclude: 'element',
            link: function(scope, $element, attr, ctrl, $transclude) {
                var currentScope,
                    currentElement,
                    previousLeaveAnimation,
                    autoScrollExp = attr.autoscroll,
                    onloadExp = attr.onload || '';

                scope.$on('$routeChangeSuccess', update);
                update();

                function cleanupLastView() {
                    if (previousLeaveAnimation) {
                        $animate.cancel(previousLeaveAnimation);
                        previousLeaveAnimation = null;
                    }

                    if (currentScope) {
                        currentScope.$destroy();
                        currentScope = null;
                    }
                    if (currentElement) {
                        previousLeaveAnimation = $animate.leave(currentElement);
                        previousLeaveAnimation.done(function(response) {
                            if (response !== false) previousLeaveAnimation = null;
                        });
                        currentElement = null;
                    }
                }

                function update() {
                    var locals = $route.current && $route.current.locals,
                        template = locals && locals.$template;

                    if (angular.isDefined(template)) {
                        var newScope = scope.$new();
                        var current = $route.current;

                        // Note: This will also link all children of ng-view that were contained in the original
                        // html. If that content contains controllers, ... they could pollute/change the scope.
                        // However, using ng-view on an element with additional content does not make sense...
                        // Note: We can't remove them in the cloneAttchFn of $transclude as that
                        // function is called before linking the content, which would apply child
                        // directives to non existing elements.
                        var clone = $transclude(newScope, function(clone) {
                            $animate.enter(clone, null, currentElement || $element).done(function onNgViewEnter(response) {
                                if (response !== false && angular.isDefined(autoScrollExp)
                                    && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                                    $anchorScroll();
                                }
                            });
                            cleanupLastView();
                        });

                        currentElement = clone;
                        currentScope = current.scope = newScope;
                        currentScope.$emit('$viewContentLoaded');
                        currentScope.$eval(onloadExp);
                    } else {
                        cleanupLastView();
                    }
                }
            }
        };
    }

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
    ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
    function ngViewFillContentFactory($compile, $controller, $route) {
        return {
            restrict: 'ECA',
            priority: -400,
            link: function(scope, $element) {
                var current = $route.current,
                    locals = current.locals;

                $element.html(locals.$template);

                var link = $compile($element.contents());

                if (current.controller) {
                    locals.$scope = scope;
                    var controller = $controller(current.controller, locals);
                    if (current.controllerAs) {
                        scope[current.controllerAs] = controller;
                    }
                    $element.data('$ngControllerController', controller);
                    $element.children().data('$ngControllerController', controller);
                }
                scope[current.resolveAs || '$resolve'] = locals;

                link(scope);
            }
        };
    }


})(window, window.angular);


/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
    return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
    return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
    --r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Ln[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function U(n,t){return function(r){return n(t(r))}}function B(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Un={};
    Un["[object Float32Array]"]=Un["[object Float64Array]"]=Un["[object Int8Array]"]=Un["[object Int16Array]"]=Un["[object Int32Array]"]=Un["[object Uint8Array]"]=Un["[object Uint8ClampedArray]"]=Un["[object Uint16Array]"]=Un["[object Uint32Array]"]=true,Un["[object Arguments]"]=Un["[object Array]"]=Un["[object ArrayBuffer]"]=Un["[object Boolean]"]=Un["[object DataView]"]=Un["[object Date]"]=Un["[object Error]"]=Un["[object Function]"]=Un["[object Map]"]=Un["[object Number]"]=Un["[object Object]"]=Un["[object RegExp]"]=Un["[object Set]"]=Un["[object String]"]=Un["[object WeakMap]"]=false;
    var Bn={};Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object DataView]"]=Bn["[object Boolean]"]=Bn["[object Date]"]=Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object Symbol]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,
        Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object WeakMap]"]=false;var Ln={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Cn=parseFloat,Dn=parseInt,Mn=typeof global=="object"&&global&&global.Object===Object&&global,Tn=typeof self=="object"&&self&&self.Object===Object&&self,$n=Mn||Tn||Function("return this")(),Fn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nn=Fn&&typeof module=="object"&&module&&!module.nodeType&&module,Pn=Nn&&Nn.exports===Fn,Zn=Pn&&Mn.process,qn=function(){
        try{var n=Nn&&Nn.require&&Nn.require("util").types;return n?n:Zn&&Zn.binding&&Zn.binding("util")}catch(n){}}(),Vn=qn&&qn.isArrayBuffer,Kn=qn&&qn.isDate,Gn=qn&&qn.isMap,Hn=qn&&qn.isRegExp,Jn=qn&&qn.isSet,Yn=qn&&qn.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e",
        "\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a",
        "\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I",
        "\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r",
        "\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ",
        "\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(yu(n)&&!ff(n)&&!(n instanceof Ln)){if(n instanceof On)return n;if(oi.call(n,"__wrapped__"))return Fe(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Ln(n){
        this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Mn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Fn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new Fn;++t<r;)this.add(n[t]);
    }function Zn(n){this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=ff(n),u=!e&&of(n),i=!e&&!u&&af(n),o=!e&&!u&&!i&&_f(n),u=(e=e||u||i||o)?A(n.length,ni):[],f=u.length;for(r in n)!t&&!oi.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return De(Lr(n),pt(t,0,n.length))}function ut(n){return De(Lr(n))}function it(n,t,r){(r===T||lu(n[t],r))&&(r!==T||t in n)||st(n,t,r);
    }function ot(n,t,r){var e=n[t];oi.call(n,t)&&lu(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(lu(n[r][0],t))return r;return-1}function ct(n,t,r,e){return uo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,Wu(t),n)}function lt(n,t){return n&&Cr(t,Uu(t),n)}function st(n,t,r){"__proto__"==t&&Ai?Ai(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Ku(e),i=null==n;++r<e;)u[r]=i?T:Ru(n,t[r]);return u;
    }function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!du(n))return n;if(u=ff(n)){if(f=me(n),!c)return Lr(n,f)}else{var s=vo(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(af(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Bn[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Zn),
        i=o.get(n))return i;if(o.set(n,f),pf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(sf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Uu:Wu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=Wu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Qu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ti("Expected a function");
        return bo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return uo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!wu(o):r(o,f)))var f=o,c=i;
    }return c}function jt(n,t){var r=[];return uo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&oo(n,t,Wu)}function At(n,t){return n&&fo(n,t,Wu)}function kt(n,t){return i(t,function(t){return _u(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[Me(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
        ff(n)?t:a(t,r(n))}function Ot(n){if(null==n)return n===T?"[object Undefined]":"[object Null]";if(mi&&mi in Qu(n)){var t=oi.call(n,mi),r=n[mi];try{n[mi]=T;var e=true}catch(n){}var u=ai.call(n);e&&(t?n[mi]=r:delete n[mi]),n=u}else n=ai.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&oi.call(n,t)}function zt(n,t){return null!=n&&t in Qu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Ku(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ci(p.length,s),
        l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Ut(n,t,r,e){return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Bt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[Me(Ve(r))],null==r?T:n(r,t,e)}function Lt(n){return yu(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
        return yu(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return yu(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)return true;if(null==n||null==t||!yu(n)&&!yu(t))return n!==n&&t!==t;n:{var i=ff(n),o=ff(t),f=i?"[object Array]":vo(n),c=o?"[object Array]":vo(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&af(n)){if(!af(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Zn),t=i||_f(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
        if(!(1&r)&&(i=a&&oi.call(n,"__wrapped__"),f=o&&oi.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Zn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Zn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:oi.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
        }c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return yu(n)&&"[object Map]"==vo(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Qu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
    }else{if(f=new Zn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!du(n)||ci&&ci in n)&&(_u(n)?hi:dn).test(Te(n))}function Nt(n){return yu(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return yu(n)&&"[object Set]"==vo(n)}function Zt(n){return yu(n)&&gu(n.length)&&!!Un[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?$u:typeof n=="object"?ff(n)?Jt(n[0],n[1]):Ht(n):Zu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Qu(n))oi.call(n,t)&&"constructor"!=t&&r.push(t);
        return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=su(n)?Ku(n.length):[];return uo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!du(t)?We(Me(n),t):function(r){var e=Ru(r,n);return e===T&&e===t?zu(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&oo(t,function(i,o){if(du(i)){u||(u=new Zn);var f=u,c=Be(n,o),a=Be(t,o),l=f.get(a);if(!l){var l=e?e(c,a,o+"",n,t,f):T,s=l===T;
        if(s){var h=ff(a),p=!h&&af(a),_=!h&&!p&&_f(a),l=a;h||p||_?ff(c)?l=c:hu(c)?l=Lr(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:xu(a)||of(a)?(l=c,of(c)?l=Ou(c):du(c)&&!_u(c)||(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a))}it(n,o,l)}else f=e?e(Be(n,o),i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Uu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[$u],E(ye())),n=Gt(n,function(n,r,u){return{a:c(t,function(t){return t(n)}),
        b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){if(e>=f){e=c;break n}e=c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return zu(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;for(n===t&&(t=Lr(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&xi.call(f,a,1),
        xi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?xi.call(n,u,1):xr(n,u)}}return n}function ir(n,t){return n+Ii(Ti()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Ii(t/2))&&(n+=n);while(t);return r}function fr(n,t){return xo(Ue(n,t,$u),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){var r=Lu(n);return De(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!du(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){
        var c=Me(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=du(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return De(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ku(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return uo(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!wu(o)&&(r?o<=t:o<t)?e=i+1:u=i;
    }return u}return vr(n,t,$u,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=wu(t),a=t===T;u<i;){var l=Ii((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=wu(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ci(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!lu(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:wu(n)?F:+n}function yr(n){
        if(typeof n=="string")return n;if(ff(n))return c(n,yr)+"";if(wu(n))return ro?ro.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:so(n))return L(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),
        n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[Me(Ve(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Ln&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Ku(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));return br(wt(i,1),t,r)}function Ar(n,t,r){
        for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return hu(n)?n:[]}function Er(n){return typeof n=="function"?n:$u}function Sr(n,t){return ff(n)?n:Ie(n,t)?[n]:jo(Iu(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=gi?gi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new vi(t).set(new vi(n)),t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length);
    }function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=wu(n),o=t!==T,f=null===t,c=t===t,a=wu(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Ur(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Ku(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Br(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Ku(l+a);
        for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Lr(n,t){var r=-1,e=n.length;for(t||(t=Ku(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,po(n),t)}function Mr(n,t){return Cr(n,_o(n),t)}function Tr(n,r){return function(e,u){var i=ff(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o);
    }}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Qu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!su(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Qu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){var u=-1,i=Qu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break;
    }return t}}function Pr(n,t,r){function e(){return(this&&this!==$n&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Iu(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Mu(Du(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:
        return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=eo(n.prototype),t=n.apply(r,t);return du(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Ku(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:B(f,a),o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==$n&&this instanceof u?i:t,this,f);
    }var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Qu(t);if(!su(t)){var i=ye(r,3);t=Wu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ti("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?ho(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
        return function(){var n=arguments,e=n[0];if(o&&1==n.length&&ff(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Ku(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Ur(y,e,u,_)),i&&(y=Br(y,i,o,_)),d-=x,_&&d<a)return j=B(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ci(f.length,x),m=Lr(y);w--;){
        var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==$n&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Ut(r,n,t(e),{})}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
        return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Oi(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Ku(l+c),h=this&&this!==$n&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
        e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=Au(t),r===T?(r=t,t=0):r=Au(r),e=e===T?t<r?1:-1:Au(e);var u=-1;r=Li(Oi((r-t)/(e||1)),0);for(var i=Ku(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Su(t),r=Su(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&yo(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
        var t=Yu[n];return function(n,r){if(n=Su(n),r=null==r?0:Ci(ku(r),292)){var e=(Iu(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Iu(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=vo(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ti("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(ku(o),0),f=f===T?f:ku(f),a-=u?u.length:0,64&t){
        var l=e,s=u;e=u=T}var h=c?T:ho(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Ur(e,r,h[4]):r,i[4]=e?B(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Br(e,r,h[6]):r,i[6]=e?B(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ci(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
        r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),c=t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),Le((h?co:yo)(c,i),n,t)}function ce(n,t,r,e){return n===T||lu(n,ei[r])&&!oi.call(e,r)?t:n}function ae(n,t,r,e,u,i){return du(n)&&du(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return xu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;
        var c=-1,a=true,l=2&r?new Nn:T;for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":
        if(n.byteLength!=t.byteLength||!i(new vi(n),new vi(t)))break;return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return lu(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=L),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(to)return to.call(n)==to.call(t)}
        return false}function pe(n){return xo(Ue(n,T,Ze),n+"")}function _e(n){return St(n,Wu,po)}function ve(n){return St(n,Uu,_o)}function ge(n){for(var t=n.name+"",r=Gi[t],e=oi.call(Gi,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(oi.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||Fu,n=n===Fu?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
    }function xe(n){for(var t=Wu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!du(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=Me(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&gu(u)&&Se(o,u)&&(ff(n)||of(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&oi.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
        return typeof n.constructor!="function"||ze(n)?{}:eo(di(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
        case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return to?Qu(to.call(n)):{}}}function Ee(n){return ff(n)||of(n)||!!(ji&&n&&n[ji])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
    }function Oe(n,t,r){if(!du(r))return false;var e=typeof t;return!!("number"==e?su(r)&&Se(t,r.length):"string"==e&&t in r)&&lu(r[t],n)}function Ie(n,t){if(ff(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!wu(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Qu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Ln.prototype&&(n===r||(t=ho(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ei)}function We(n,t){
        return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Qu(r)))}}function Ue(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Ku(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Ku(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Be(n,t){if("__proto__"!=t)return n[t]}function Le(n,t,r){var e=t+"";t=xo;var u,i=$e;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),
        t(n,e)}function Ce(n){var t=0,r=0;return function(){var e=Di(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function De(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function Me(n){if(typeof n=="string"||wu(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Te(n){if(null!=n){try{return ii.call(n)}catch(n){}return n+""}return""}function $e(n,t){return r(N,function(r){var e="_."+r[0];
        t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function Fe(n){if(n instanceof Ln)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Lr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Ne(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Pe(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=ku(r),u=0>r?Li(e+u,0):Ci(u,e-1)),_(n,ye(t,3),u,true)}function Ze(n){return(null==n?0:n.length)?wt(n,1):[];
    }function qe(n){return n&&n.length?n[0]:T}function Ve(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ke(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ge(n){return null==n?n:$i.call(n)}function He(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(hu(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function Je(t,r){if(!t||!t.length)return[];var e=He(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Ye(n){return n=An(n),n.__chain__=true,n;
    }function Qe(n,t){return t(n)}function Xe(){return this}function nu(n,t){return(ff(n)?r:uo)(n,ye(t,3))}function tu(n,t){return(ff(n)?e:io)(n,ye(t,3))}function ru(n,t){return(ff(n)?c:Gt)(n,ye(t,3))}function eu(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function uu(n,t){var r;if(typeof t!="function")throw new ti("Expected a function");return n=ku(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function iu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=iu.placeholder,
        n}function ou(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=ou.placeholder,n}function fu(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Go();if(u(n))return o(n);var r,e=bo;r=n-_,n=t-(n-p),r=g?Ci(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Go(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=bo(i,t),v?e(n):s;if(g)return h=bo(i,t),e(p)}return h===T&&(h=bo(i,t)),
        s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ti("Expected a function");return t=Su(t)||0,du(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Su(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&lo(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Go())},f}function cu(n,t){if(typeof n!="function"||null!=t&&typeof t!="function")throw new ti("Expected a function");var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),
        r.cache=i.set(u,e)||i,e)};return r.cache=new(cu.Cache||Fn),r}function au(n){if(typeof n!="function")throw new ti("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function lu(n,t){return n===t||n!==n&&t!==t}function su(n){return null!=n&&gu(n.length)&&!_u(n)}function hu(n){return yu(n)&&su(n)}function pu(n){if(!yu(n))return false;
        var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!xu(n)}function _u(n){return!!du(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function vu(n){return typeof n=="number"&&n==ku(n)}function gu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function du(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function yu(n){return null!=n&&typeof n=="object";
    }function bu(n){return typeof n=="number"||yu(n)&&"[object Number]"==Ot(n)}function xu(n){return!(!yu(n)||"[object Object]"!=Ot(n))&&(n=di(n),null===n||(n=oi.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ii.call(n)==li))}function ju(n){return typeof n=="string"||!ff(n)&&yu(n)&&"[object String]"==Ot(n)}function wu(n){return typeof n=="symbol"||yu(n)&&"[object Symbol]"==Ot(n)}function mu(n){if(!n)return[];if(su(n))return ju(n)?M(n):Lr(n);if(wi&&n[wi]){n=n[wi]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);
        return r}return t=vo(n),("[object Map]"==t?W:"[object Set]"==t?L:Lu)(n)}function Au(n){return n?(n=Su(n),n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function ku(n){n=Au(n);var t=n%1;return n===n?t?n-t:n:0}function Eu(n){return n?pt(ku(n),0,4294967295):0}function Su(n){if(typeof n=="number")return n;if(wu(n))return F;if(du(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=du(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?F:+n;
    }function Ou(n){return Cr(n,Uu(n))}function Iu(n){return null==n?"":yr(n)}function Ru(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function zu(n,t){return null!=n&&we(n,t,zt)}function Wu(n){return su(n)?qn(n):Vt(n)}function Uu(n){if(su(n))n=qn(n,true);else if(du(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&oi.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Qu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){
        return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,Wu(n))}function Cu(n){return $f(Iu(n).toLowerCase())}function Du(n){return(n=Iu(n))&&n.replace(xn,Xn).replace(Sn,"")}function Mu(n,t,r){return n=Iu(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Tu(n){return function(){return n}}function $u(n){return n}function Fu(n){return qt(typeof n=="function"?n:_t(n,1))}function Nu(n,t,e){var u=Wu(t),i=kt(t,u);null!=e||du(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,Wu(t)));
        var o=!(du(e)&&"chain"in e&&!e.chain),f=_u(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Lr(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Pu(){}function Zu(n){return Ie(n)?b(Me(n)):rr(n)}function qu(){return[]}function Vu(){return false}mn=null==mn?$n:rt.defaults($n.Object(),mn,rt.pick($n,Wn));var Ku=mn.Array,Gu=mn.Date,Hu=mn.Error,Ju=mn.Function,Yu=mn.Math,Qu=mn.Object,Xu=mn.RegExp,ni=mn.String,ti=mn.TypeError,ri=Ku.prototype,ei=Qu.prototype,ui=mn["__core-js_shared__"],ii=Ju.prototype.toString,oi=ei.hasOwnProperty,fi=0,ci=function(){
        var n=/[^.]+$/.exec(ui&&ui.keys&&ui.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ai=ei.toString,li=ii.call(Qu),si=$n._,hi=Xu("^"+ii.call(oi).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pi=Pn?mn.Buffer:T,_i=mn.Symbol,vi=mn.Uint8Array,gi=pi?pi.allocUnsafe:T,di=U(Qu.getPrototypeOf,Qu),yi=Qu.create,bi=ei.propertyIsEnumerable,xi=ri.splice,ji=_i?_i.isConcatSpreadable:T,wi=_i?_i.iterator:T,mi=_i?_i.toStringTag:T,Ai=function(){try{var n=je(Qu,"defineProperty");
        return n({},"",{}),n}catch(n){}}(),ki=mn.clearTimeout!==$n.clearTimeout&&mn.clearTimeout,Ei=Gu&&Gu.now!==$n.Date.now&&Gu.now,Si=mn.setTimeout!==$n.setTimeout&&mn.setTimeout,Oi=Yu.ceil,Ii=Yu.floor,Ri=Qu.getOwnPropertySymbols,zi=pi?pi.isBuffer:T,Wi=mn.isFinite,Ui=ri.join,Bi=U(Qu.keys,Qu),Li=Yu.max,Ci=Yu.min,Di=Gu.now,Mi=mn.parseInt,Ti=Yu.random,$i=ri.reverse,Fi=je(mn,"DataView"),Ni=je(mn,"Map"),Pi=je(mn,"Promise"),Zi=je(mn,"Set"),qi=je(mn,"WeakMap"),Vi=je(Qu,"create"),Ki=qi&&new qi,Gi={},Hi=Te(Fi),Ji=Te(Ni),Yi=Te(Pi),Qi=Te(Zi),Xi=Te(qi),no=_i?_i.prototype:T,to=no?no.valueOf:T,ro=no?no.toString:T,eo=function(){
        function n(){}return function(t){return du(t)?yi?yi(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=eo(kn.prototype),On.prototype.constructor=On,Ln.prototype=eo(kn.prototype),Ln.prototype.constructor=Ln,Mn.prototype.clear=function(){this.__data__=Vi?Vi(null):{},this.size=0},Mn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
        this.size-=n?1:0,n},Mn.prototype.get=function(n){var t=this.__data__;return Vi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):oi.call(t,n)?t[n]:T},Mn.prototype.has=function(n){var t=this.__data__;return Vi?t[n]!==T:oi.call(t,n)},Mn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=Vi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():xi.call(t,n,1),
        --this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},Fn.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(Ni||Tn),string:new Mn}},Fn.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},Fn.prototype.get=function(n){return be(this,n).get(n);
    },Fn.prototype.has=function(n){return be(this,n).has(n)},Fn.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Zn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Zn.prototype.get=function(n){
        return this.__data__.get(n)},Zn.prototype.has=function(n){return this.__data__.has(n)},Zn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Ni||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new Fn(e)}return r.set(n,t),this.size=r.size,this};var uo=Fr(mt),io=Fr(At,true),oo=Nr(),fo=Nr(true),co=Ki?function(n,t){return Ki.set(n,t),n}:$u,ao=Ai?function(n,t){return Ai(n,"toString",{configurable:true,enumerable:false,value:Tu(t),writable:true})}:$u,lo=ki||function(n){
        return $n.clearTimeout(n)},so=Zi&&1/L(new Zi([,-0]))[1]==$?function(n){return new Zi(n)}:Pu,ho=Ki?function(n){return Ki.get(n)}:Pu,po=Ri?function(n){return null==n?[]:(n=Qu(n),i(Ri(n),function(t){return bi.call(n,t)}))}:qu,_o=Ri?function(n){for(var t=[];n;)a(t,po(n)),n=di(n);return t}:qu,vo=Ot;(Fi&&"[object DataView]"!=vo(new Fi(new ArrayBuffer(1)))||Ni&&"[object Map]"!=vo(new Ni)||Pi&&"[object Promise]"!=vo(Pi.resolve())||Zi&&"[object Set]"!=vo(new Zi)||qi&&"[object WeakMap]"!=vo(new qi))&&(vo=function(n){
        var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Te(n):"")switch(n){case Hi:return"[object DataView]";case Ji:return"[object Map]";case Yi:return"[object Promise]";case Qi:return"[object Set]";case Xi:return"[object WeakMap]"}return t});var go=ui?_u:Vu,yo=Ce(co),bo=Si||function(n,t){return $n.setTimeout(n,t)},xo=Ce(ao),jo=function(n){n=cu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
        t.push(e?u.replace(hn,"$1"):r||n)}),t}),wo=fr(function(n,t){return hu(n)?yt(n,wt(t,1,hu,true)):[]}),mo=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),ye(r,2)):[]}),Ao=fr(function(n,t){var r=Ve(t);return hu(r)&&(r=T),hu(n)?yt(n,wt(t,1,hu,true),T,r):[]}),ko=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),Eo=fr(function(n){var t=Ve(n),r=c(n,kr);return t===Ve(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),So=fr(function(n){var t=Ve(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
        r.length&&r[0]===n[0]?Wt(r,T,t):[]}),Oo=fr(Ke),Io=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Ro=fr(function(n){return br(wt(n,1,hu,true))}),zo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),br(wt(n,1,hu,true),ye(t,2))}),Wo=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return br(wt(n,1,hu,true),T,t)}),Uo=fr(function(n,t){return hu(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,hu))}),Lo=fr(function(n){var t=Ve(n);return hu(t)&&(t=T),
        mr(i(n,hu),ye(t,2))}),Co=fr(function(n){var t=Ve(n),t=typeof t=="function"?t:T;return mr(i(n,hu),T,t)}),Do=fr(He),Mo=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return Je(n,t)}),To=pe(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return ht(t,n)};return!(1<t||this.__actions__.length)&&e instanceof Ln&&Se(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:Qe,args:[u],thisArg:T}),new On(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(T),
        n})):this.thru(u)}),$o=Tr(function(n,t,r){oi.call(n,r)?++n[r]:st(n,r,1)}),Fo=Gr(Ne),No=Gr(Pe),Po=Tr(function(n,t,r){oi.call(n,r)?n[r].push(t):st(n,r,[t])}),Zo=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=su(t)?Ku(t.length):[];return uo(t,function(t){o[++u]=i?n(r,t,e):Bt(t,r,e)}),o}),qo=Tr(function(n,t,r){st(n,r,t)}),Vo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Ko=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
        Xt(n,wt(t,1),[])}),Go=Ei||function(){return $n.Date.now()},Ho=fr(function(n,t,r){var e=1;if(r.length)var u=B(r,de(Ho)),e=32|e;return fe(n,e,t,r,u)}),Jo=fr(function(n,t,r){var e=3;if(r.length)var u=B(r,de(Jo)),e=32|e;return fe(t,e,n,r,u)}),Yo=fr(function(n,t){return dt(n,1,t)}),Qo=fr(function(n,t,r){return dt(n,Su(t)||0,r)});cu.Cache=Fn;var Xo=fr(function(t,r){r=1==r.length&&ff(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ci(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
        return n(t,this,u)})}),nf=fr(function(n,t){return fe(n,32,T,t,B(t,de(nf)))}),tf=fr(function(n,t){return fe(n,64,T,t,B(t,de(tf)))}),rf=pe(function(n,t){return fe(n,256,T,T,T,t)}),ef=ee(It),uf=ee(function(n,t){return n>=t}),of=Lt(function(){return arguments}())?Lt:function(n){return yu(n)&&oi.call(n,"callee")&&!bi.call(n,"callee")},ff=Ku.isArray,cf=Vn?E(Vn):Ct,af=zi||Vu,lf=Kn?E(Kn):Dt,sf=Gn?E(Gn):Tt,hf=Hn?E(Hn):Nt,pf=Jn?E(Jn):Pt,_f=Yn?E(Yn):Zt,vf=ee(Kt),gf=ee(function(n,t){return n<=t}),df=$r(function(n,t){
        if(ze(t)||su(t))Cr(t,Wu(t),n);else for(var r in t)oi.call(t,r)&&ot(n,r,t[r])}),yf=$r(function(n,t){Cr(t,Uu(t),n)}),bf=$r(function(n,t,r,e){Cr(t,Uu(t),n,e)}),xf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),jf=pe(ht),wf=fr(function(n,t){n=Qu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Uu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||lu(a,ei[c])&&!oi.call(n,c))&&(n[c]=u[c])}return n}),mf=fr(function(t){return t.push(T,ae),n(Of,T,t)}),Af=Yr(function(n,t,r){
        null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),n[t]=r},Tu($u)),kf=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ai.call(t)),oi.call(n,t)?n[t].push(r):n[t]=[r]},ye),Ef=fr(Bt),Sf=$r(function(n,t,r){Yt(n,t,r)}),Of=$r(function(n,t,r,e){Yt(n,t,r,e)}),If=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),Rf=pe(function(n,t){return null==n?{}:nr(n,t);
    }),zf=oe(Wu),Wf=oe(Uu),Uf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Cu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Cf=Zr("toLowerCase"),Df=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Mf=qr(function(n,t,r){return n+(r?" ":"")+$f(t)}),Tf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),$f=Zr("toUpperCase"),Ff=fr(function(t,r){try{return n(t,T,r)}catch(n){return pu(n)?n:new Hu(n)}}),Nf=pe(function(n,t){
        return r(t,function(t){t=Me(t),st(n,t,Ho(n[t],n))}),n}),Pf=Hr(),Zf=Hr(true),qf=fr(function(n,t){return function(r){return Bt(r,n,t)}}),Vf=fr(function(n,t){return function(r){return Bt(n,r,t)}}),Kf=Xr(c),Gf=Xr(u),Hf=Xr(h),Jf=re(),Yf=re(true),Qf=Qr(function(n,t){return n+t},0),Xf=ie("ceil"),nc=Qr(function(n,t){return n/t},1),tc=ie("floor"),rc=Qr(function(n,t){return n*t},1),ec=ie("round"),uc=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ti("Expected a function");
        return n=ku(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=eu,An.assign=df,An.assignIn=yf,An.assignInWith=bf,An.assignWith=xf,An.at=jf,An.before=uu,An.bind=Ho,An.bindAll=Nf,An.bindKey=Jo,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return ff(n)?n:[n]},An.chain=Ye,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(ku(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Ku(Oi(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
        var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Ku(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(ff(r)?Lr(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ti("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Tu,
        An.countBy=$o,An.create=function(n,t){var r=eo(n);return null==t?r:at(r,t)},An.curry=iu,An.curryRight=ou,An.debounce=fu,An.defaults=wf,An.defaultsDeep=mf,An.defer=Yo,An.delay=Qo,An.difference=wo,An.differenceBy=mo,An.differenceWith=Ao,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
    },An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=ku(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:ku(e),0>e&&(e+=u),e=r>e?0:Eu(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(ff(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(ru(n,t),1)},An.flatMapDeep=function(n,t){return wt(ru(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:ku(r),
        wt(ru(n,t),r)},An.flatten=Ze,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:ku(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Pf,An.flowRight=Zf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,Wu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Uu(n))},An.groupBy=Po,An.initial=function(n){
        return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=ko,An.intersectionBy=Eo,An.intersectionWith=So,An.invert=Af,An.invertBy=kf,An.invokeMap=Zo,An.iteratee=Fu,An.keyBy=qo,An.keys=Wu,An.keysIn=Uu,An.map=ru,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=cu,
        An.merge=Sf,An.mergeWith=Of,An.method=qf,An.methodOf=Vf,An.mixin=Nu,An.negate=au,An.nthArg=function(n){return n=ku(n),fr(function(t){return Qt(t,n)})},An.omit=If,An.omitBy=function(n,t){return Bu(n,au(ye(t)))},An.once=function(n){return uu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(ff(t)||(t=null==t?[]:[t]),r=e?T:r,ff(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Kf,An.overArgs=Xo,An.overEvery=Gf,An.overSome=Hf,An.partial=nf,An.partialRight=tf,An.partition=Vo,An.pick=Rf,An.pickBy=Bu,An.property=Zu,
        An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=Oo,An.pullAll=Ke,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Io,An.range=Jf,An.rangeRight=Yf,An.rearg=rf,An.reject=function(n,t){return(ff(n)?i:jt)(n,au(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
        u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ti("Expected a function");return t=t===T?t:ku(t),fr(n,t)},An.reverse=Ge,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),(ff(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(ff(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
        r=e):(t=null==t?0:ku(t),r=r===T?e:ku(r)),hr(n,t,r)):[]},An.sortBy=Ko,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Iu(n))&&(typeof t=="string"||null!=t&&!hf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ti("Expected a function");return r=null==r?0:Li(ku(r),0),
        fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:ku(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:ku(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
        n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ti("Expected a function");return du(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),fu(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Qe,An.toArray=mu,An.toPairs=zf,An.toPairsIn=Wf,An.toPath=function(n){return ff(n)?c(n,Me):wu(n)?[n]:Lr(jo(Iu(n)))},An.toPlainObject=Ou,An.transform=function(n,t,e){var u=ff(n),i=u||af(n)||_f(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:du(n)&&_u(o)?eo(di(n)):{};
    }return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return eu(n,1)},An.union=Ro,An.unionBy=zo,An.unionWith=Wo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=He,An.unzipWith=Je,An.update=function(n,t,r){return null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),void 0)),n},An.updateWith=function(n,t,r,e){
        return e=typeof e=="function"?e:T,null!=n&&(r=Er(r),n=lr(n,t,r(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Uu(n))},An.without=Uo,An.words=Mu,An.wrap=function(n,t){return nf(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Co,An.zip=Do,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Mo,An.entries=zf,An.entriesIn=Wf,An.extend=yf,An.extendWith=bf,Nu(An,An),An.add=Qf,An.attempt=Ff,An.camelCase=Uf,An.capitalize=Cu,
        An.ceil=Xf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Su(r),r=r===r?r:0),t!==T&&(t=Su(t),t=t===t?t:0),pt(Su(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,Wu(t))},An.deburr=Du,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=nc,An.endsWith=function(n,t,r){
            n=Iu(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(ku(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=lu,An.escape=function(n){return(n=Iu(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Iu(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=ff(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=Fo,An.findIndex=Ne,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=No,An.findLastIndex=Pe,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
        },An.floor=tc,An.forEach=nu,An.forEachRight=tu,An.forIn=function(n,t){return null==n?n:oo(n,ye(t,3),Uu)},An.forInRight=function(n,t){return null==n?n:fo(n,ye(t,3),Uu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Ru,An.gt=ef,An.gte=uf,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=zu,An.head=qe,An.identity=$u,An.includes=function(n,t,r,e){return n=su(n)?n:Lu(n),r=r&&!e?ku(r):0,e=n.length,0>r&&(r=Li(e+r,0)),ju(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
        },An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:ku(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=Au(t),r===T?(r=t,t=0):r=Au(r),n=Su(n),n>=Ci(t,r)&&n<Li(t,r)},An.invoke=Ef,An.isArguments=of,An.isArray=ff,An.isArrayBuffer=cf,An.isArrayLike=su,An.isArrayLikeObject=hu,An.isBoolean=function(n){return true===n||false===n||yu(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=af,An.isDate=lf,An.isElement=function(n){return yu(n)&&1===n.nodeType&&!xu(n)},An.isEmpty=function(n){
            if(null==n)return true;if(su(n)&&(ff(n)||typeof n=="string"||typeof n.splice=="function"||af(n)||_f(n)||of(n)))return!n.length;var t=vo(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(oi.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=pu,An.isFinite=function(n){return typeof n=="number"&&Wi(n)},An.isFunction=_u,
        An.isInteger=vu,An.isLength=gu,An.isMap=sf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return bu(n)&&n!=+n},An.isNative=function(n){if(go(n))throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=bu,An.isObject=du,An.isObjectLike=yu,An.isPlainObject=xu,An.isRegExp=hf,
        An.isSafeInteger=function(n){return vu(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=pf,An.isString=ju,An.isSymbol=wu,An.isTypedArray=_f,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return yu(n)&&"[object WeakMap]"==vo(n)},An.isWeakSet=function(n){return yu(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Ui.call(n,t)},An.kebabCase=Bf,An.last=Ve,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=ku(r),u=0>u?Li(e+u,0):Ci(u,e-1)),
        t===t)n:{for(r=u+1;r--;)if(n[r]===t){n=r;break n}n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Cf,An.lt=vf,An.lte=gf,An.max=function(n){return n&&n.length?xt(n,$u,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,$u)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,$u,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=qu,An.stubFalse=Vu,An.stubObject=function(){
            return{}},An.stubString=function(){return""},An.stubTrue=function(){return true},An.multiply=rc,An.nth=function(n,t){return n&&n.length?Qt(n,ku(t)):T},An.noConflict=function(){return $n._===this&&($n._=si),this},An.noop=Pu,An.now=Go,An.pad=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Ii(t),r)+n+ne(Oi(t),r))},An.padEnd=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Iu(n);var e=(t=ku(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n;
        },An.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),Mi(Iu(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=Au(n),t===T?(t=n,n=0):t=Au(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Ti(),Ci(n+r*(t-n+Cn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=ff(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,uo)},An.reduceRight=function(n,t,r){
            var e=ff(n)?s:j,u=3>arguments.length;return e(n,ye(t,4),r,u,io)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:ku(t),or(Iu(n),t)},An.replace=function(){var n=arguments,t=Iu(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[Me(t[e])];i===T&&(e=u,i=r),n=_u(i)?i.call(n):i}return n},An.round=ec,An.runInContext=x,An.sample=function(n){return(ff(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;
            if(su(n))return ju(n)?D(n):n.length;var t=vo(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Df,An.some=function(n,t,r){var e=ff(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&lu(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){
            return vr(n,t,ye(r,2),true)},An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(lu(n[r],t))return r}return-1},An.startCase=Mf,An.startsWith=function(n,t,r){return n=Iu(n),r=null==r?0:pt(ku(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=uc,An.sum=function(n){return n&&n.length?m(n,$u):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Iu(n),t=bf({},t,e,ce),r=bf({},t.imports,e.imports,ce);
            var u,i,o=Wu(r),f=S(r,o),c=0;r=t.interpolate||jn;var a="__p+='";r=Xu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
                a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=Ff(function(){return Ju(o,l+"return "+a).apply(T,f)}),t.source=a,pu(t))throw t;return t},An.times=function(n,t){if(n=ku(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ci(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=Au,An.toInteger=ku,An.toLength=Eu,An.toLower=function(n){
            return Iu(n).toLowerCase()},An.toNumber=Su,An.toSafeInteger=function(n){return n?pt(ku(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Iu,An.toUpper=function(n){return Iu(n).toUpperCase()},An.trim=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Iu(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
            return(n=Iu(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(du(t))var u="separator"in t?t.separator:u,r="length"in t?ku(t.length):r,e="omission"in t?yr(t.omission):e;n=Iu(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),hf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Xu(u.source,Iu(_n.exec(u))+"g")),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Iu(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++fi;return Iu(n)+t},An.upperCase=Tf,An.upperFirst=$f,An.each=nu,An.eachRight=tu,An.first=qe,Nu(An,function(){var n={};return mt(An,function(t,r){oi.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.11",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
            An[n].placeholder=An}),r(["drop","take"],function(n,t){Ln.prototype[n]=function(r){r=r===T?1:Li(ku(r),0);var e=this.__filtered__&&!t?new Ln(this):this.clone();return e.__filtered__?e.__takeCount__=Ci(r,e.__takeCount__):e.__views__.push({size:Ci(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Ln.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Ln.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
            iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Ln.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Ln.prototype[n]=function(){return this.__filtered__?new Ln(this):this[r](1)}}),Ln.prototype.compact=function(){return this.filter($u)},Ln.prototype.find=function(n){return this.filter(n).head()},Ln.prototype.findLast=function(n){return this.reverse().find(n);
        },Ln.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Ln(this):this.map(function(r){return Bt(r,n,t)})}),Ln.prototype.reject=function(n){return this.filter(au(ye(n)))},Ln.prototype.slice=function(n,t){n=ku(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Ln(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=ku(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Ln.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ln.prototype.toArray=function(){return this.take(4294967295);
        },mt(Ln.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Ln,c=o[0],l=f||ff(t),s=function(n){return n=u.apply(An,a([n],o)),e&&h?n[0]:n};l&&r&&typeof c=="function"&&1!=c.length&&(f=l=false);var h=this.__chain__,p=!!this.__actions__.length,c=i&&!h,f=f&&!p;return!i&&l?(t=f?t:new Ln(this),t=n.apply(t,o),t.__actions__.push({
            func:Qe,args:[s],thisArg:T}),new On(t,h)):c&&f?n.apply(this,o):(t=this.thru(s),c?e?t.value()[0]:t.value():t)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ri[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(ff(u)?u:[],n)}return this[r](function(r){return t.apply(ff(r)?r:[],n)})}}),mt(Ln.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
            (Gi[e]||(Gi[e]=[])).push({name:t,func:r})}}),Gi[Jr(T,2).name]=[{name:"wrapper",func:T}],Ln.prototype.clone=function(){var n=new Ln(this.__wrapped__);return n.__actions__=Lr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lr(this.__views__),n},Ln.prototype.reverse=function(){if(this.__filtered__){var n=new Ln(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
        },Ln.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=ff(t),u=0>r,i=e?t.length:0;n=0;for(var o=i,f=this.__views__,c=-1,a=f.length;++c<a;){var l=f[c],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":o-=s;break;case"take":o=Ci(o,n+s);break;case"takeRight":n=Li(n,o-s)}}if(n={start:n,end:o},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ci(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=To,An.prototype.chain=function(){return Ye(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=mu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
            var e=Fe(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Ln?(this.__actions__.length&&(n=new Ln(this)),n=n.reverse(),n.__actions__.push({func:Qe,args:[Ge],thisArg:T}),new On(n,this.__chain__)):this.thru(Ge)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,wi&&(An.prototype[wi]=Xe),
        An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?($n._=rt, define(function(){return rt})):Nn?((Nn.exports=rt)._=rt,Fn._=rt):$n._=rt}).call(this);
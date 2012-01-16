(function(){var k=this,e=k.Jet,q={},t={},n={NO_DEBUG:0,SHOW_ERROR:1,SHOW_WARNING:2,SHOW_INFO:3,SHOW_ALL:4},m={console:false,debug:n.SHOW_ALL},i=function(c,l){c=String(c);l=l||3;if(l<m.debug)this.console?this.console.out(c,l):alert(c+" - \u6d88\u606f\u7c7b\u578b["+l+"]");return c};try{if(typeof e==="undefined"||e.mark&&e.mark==="JetMark"){if(e){q=e.VERSIONS;t=e.PACKAGES}e=function(c,l){var h=this;if(l)this._init();else if(c){c=String(c);try{if(e.VERSIONS[c])h=e.VERSIONS[c];else{h=e.VERSIONS[e.DEFAULT_VERSION];
throw new Error("\u6ca1\u6709\u627e\u5230 JET version "+c+", \u6240\u4ee5\u8fd4\u56de\u9ed8\u8ba4\u7248\u672c JET version "+e.DEFAULT_VERSION+"!");}}catch(f){h.out("A.\u9519\u8bef\uff1a["+f.name+"] "+f.message+", "+f.fileName+", \u884c\u53f7:"+f.lineNumber+"; stack:"+typeof f.stack,2)}}else h=e.VERSIONS[e.DEFAULT_VERSION];return h};e.prototype={version:"1.0",DEBUG:n,option:m,_init:function(){this.constructor=e},$namespace:function(c){var l,h=c.split("."),f=k;for(c=0;c<h.length;c+=1){l=h[c];f[l]=f[l]||
{};f=f[h[c]]}return f},$package:function(){var c=arguments[0],l=arguments[arguments.length-1],h=k,f;try{if(typeof l==="function"){if(typeof c==="string"){h=this.$namespace(c);e.PACKAGES[c]||(e.PACKAGES[c]={isLoaded:true,returnValue:f})}h.packageName=c;l.call(h,this)}else throw new Error("Function required");}catch(d){this.out("B.\u9519\u8bef\uff1a["+d.name+"] "+d.message+", "+d.fileName+", \u884c\u53f7:"+d.lineNumber+"; stack:"+typeof d.stack,1)}},checkPackage:function(c){return e.PACKAGES[c]},out:i,
startTime:+new Date,about:function(){return this.out("JET (Javascript Extend Tools)\nversion: "+this.version+"\n\nCopyright (c) 2009, KDV.cn, All rights reserved.",3)},toString:function(){return"JET version "+this.version+" !"}};e.VERSIONS=q;e.PACKAGES=t;e.VERSIONS["1.0"]=new e("1.0",true);e.DEFAULT_VERSION="1.0";e.mark="JetMark";k.Jet=e}else throw new Error('"Jet" name is defined in other javascript code !!!');}catch(a){i("JET \u5fae\u5185\u6838\u521d\u59cb\u5316\u5931\u8d25! \u9519\u8bef\uff1a["+
a.name+"] "+a.message+", "+a.fileName+", \u884c\u53f7:"+a.lineNumber+"; stack:"+typeof a.stack,1)}})();
Jet().$package(function(k){var e,q,t,n,m,i,a,c,l,h,f;e=function(d){return typeof d==="undefined"};q=function(d){return d===null};t=function(d){return d&&d.constructor===Number};m=function(d){return d&&d.constructor===Boolean};n=function(d){return d&&d.constructor===String};i=function(d){return d&&d.constructor===Object||String(d)==="[object Object]"};a=function(d){return d&&d.constructor===Array};c=function(d){return d&&d.length&&d.callee};l=function(d){return d&&d.constructor===Function};h=function(d){var j=
arguments,o,p;if(j.length===1){d=this;j=0}else{d=j[0]||{};j=1}for(;j<arguments.length;j++){p=arguments[j];for(o in p){var u=p[o];if(d[o]!==u)if(u&&i(u)&&!u.nodeType&&!l(u)){d[o]={};h(d[o],u||(u.length!=null?[]:{}))}else if(u!==undefined)d[o]=u}}return d};k.isUndefined=e;k.isNull=q;k.isNumber=t;k.isString=n;k.isBoolean=m;k.isObject=i;k.isArray=a;k.isFunction=l;k.$typeof=function(d){return e(d)?"undefined":q(d)?"null":t(d)?"number":m(d)?"boolean":n(d)?"string":i(d)?"object":a(d)?"array":c(d)?"arguments":
l(d)?"function":"other"};k.$return=function(d){return k.isFunction(d)?d:function(){return d}};k.$try=function(){var d,j=arguments.length,o;for(d=0;d<j;d++)try{o=arguments[d]();break}catch(p){k.out("C.\u9519\u8bef\uff1a["+p.name+"] "+p.message+", "+p.fileName+", \u884c\u53f7:"+p.lineNumber+"; stack:"+typeof p.stack,2)}return o};k.emptyFunc=function(){};k.clone=function(d){var j=function(){};j.prototype=d;return new j};k.getLength=function(d){var j,o=0;for(j in d)d.hasOwnProperty(j)&&o++;return o};
k.random=function(d,j){return Math.floor(Math.random()*(j-d+1)+d)};k.extend=h;k.now=function(){return+new Date};k.timedChunk=function(d,j,o,p,u){var w=d.concat();if(p)w=d;window.setTimeout(function(){var z=+new Date;do j.call(o,w.shift());while(w.length>0&&+new Date-z<50);if(w.length>0)window.setTimeout(arguments.callee,25);else u&&u(d)},25)};k.rebuild=function(d,j){j=j||{};d.$$rebuildedFunc=d.$$rebuildedFunc||function(){var o=this,p;o=j.contextObj||o;p=Array.prototype.slice.call(arguments,0);if(p!==
undefined)p=p.concat(j.arguments);if(j.event===false)p=p.slice(1);return d.apply(o,p)};return d.$$rebuildedFunc};k.pass=function(d){var j=Array.prototype.slice,o=j.call(arguments,1);return function(){return d.apply(this,o.concat(j.call(arguments)))}};k.bind=function(d,j){var o=Array.prototype.slice,p=o.call(arguments,2);return function(){return d.apply(j,p.concat(o.call(arguments)))}};k.bindNoEvent=f;k.formatDate=function(d,j){var o={"M+":d.getMonth()+1,"d+":d.getDate(),"h+":d.getHours(),"m+":d.getMinutes(),
"s+":d.getSeconds(),"q+":Math.floor((d.getMonth()+3)/3),S:d.getMilliseconds()};if(/(y+)/.test(j))j=j.replace(RegExp.$1,(d.getFullYear()+"").substr(4-RegExp.$1.length));for(var p in o)if((new RegExp("("+p+")")).test(j))j=j.replace(RegExp.$1,RegExp.$1.length==1?o[p]:("00"+o[p]).substr((""+o[p]).length));return j};k.Class=function(){var d=arguments.length,j=arguments[d-1];j.init=j.init||function(){};if(d===2){d=arguments[0].extend;var o=function(){};o.prototype=d.prototype;var p=function(){this.init.apply(this,
arguments)};p.superClass=d.prototype;p.prototype=new o;p.prototype.constructor=p;k.extend(p.prototype,j);p.prototype.init=function(){p.superClass.init.apply(this,arguments);j.init.apply(this,arguments)};return p}else if(d===1){d=function(){this.init.apply(this,arguments)};d.prototype=j;return d}}});
Jet().$package(function(k){k.browserOptions={adjustBehaviors:true,htmlClass:true};k.host=window.location.host;var e=navigator.platform.toLowerCase(),q=navigator.userAgent.toLowerCase(),t=navigator.plugins,n,m,i,a,c;a=function(h,f){f=f||1;h=String(h).split(".");h=h[0]+"."+(h[1]||"0");return h=Number(h).toFixed(f)};n={getPlatform:function(){return e},name:window.orientation!=undefined?"ipod":(e.match(/mac|win|linux/i)||["unknown"])[0],version:0,ipod:0,win:0,linux:0,mac:0,set:function(h,f){this.name=
h;this.version=f;this[h]=f}};n[n.name]=true;(c=q.match(/windows ([\d.]+)/))?n.set("win",a(c[1])):(c=q.match(/windows nt ([\d.]+)/))?n.set("win",a(c[1])):(c=q.match(/mac ([\d.]+)/))?n.set("mac",a(c[1])):(c=q.match(/ipod ([\d.]+)/))?n.set("ipod",a(c[1])):(c=q.match(/linux ([\d.]+)/))&&n.set("linux",a(c[1]));m={features:{xpath:!!document.evaluate,air:!!window.runtime,query:!!document.querySelector},getPlugins:function(){return t},plugins:{flash:function(){var h="none";if(t&&t.length){if((flash=t["Shockwave Flash"])&&
flash.description)h=a(flash.description.match(/\b(\d+)\.\d+\b/)[1],1)||h}else for(var f=13;f--;)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+f);h=a(f);break}catch(d){}return h}()},getUserAgent:function(){return q},name:"unknown",version:0,ie:0,firefox:0,chrome:0,opera:0,safari:0,set:function(h,f){this.name=h;this.version=f;this[h]=f}};(c=q.match(/msie ([\d.]+)/))?m.set("ie",a(c[1])):(c=q.match(/firefox\/([\d.]+)/))?m.set("firefox",a(c[1])):(c=q.match(/chrome\/([\d.]+)/))?m.set("chrome",
a(c[1])):(c=q.match(/opera.([\d.]+)/))?m.set("opera",a(c[1])):(c=q.match(/version\/([\d.]+).*safari/))&&m.set("safari",a(c[1]));i={name:"unknown",version:0,trident:0,gecko:0,webkit:0,presto:0,set:function(h,f){this.name=h;this.version=f;this[h]=f}};(c=q.match(/trident\/([\d.]+)/))?i.set("trident",a(c[1])):(c=q.match(/gecko\/([\d.]+)/))?i.set("gecko",a(c[1])):(c=q.match(/applewebkit\/([\d.]+)/))?i.set("webkit",a(c[1])):(c=q.match(/presto\/([\d.]+)/))&&i.set("presto",a(c[1]));if(m.ie)if(m.ie==6)i.set("trident",
a("4"));else if(m.ie==7||m.ie==8)i.set("trident",a("5"));c=function(){if(m.ie&&m.ie<7)try{document.execCommand("BackgroundImageCache",false,true)}catch(h){}};k.browserOptions.adjustBehaviors&&c();var l=function(h){return String(h).replace(/\./gi,"_")};c=function(){var h=document.documentElement,f=[h.className];f.push("javascriptEnabled");f.push(n.name);f.push(n.name+l(n.version));f.push(m.name);f.push(m.name+l(m.version));f.push(i.name);f.push(i.name+l(i.version));if(m.plugins.flash){f.push("flash");
f.push("flash"+l(m.plugins.flash))}h.className=f.join(" ")};k.browserOptions.htmlClass&&c();c=this;c.console||(c.console={out:function(){},log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){}});k.platform=n;k.browser=
m;k.browser.engine=i});
Jet().$package(function(k){var e,q,t,n,m,i,a,c,l,h,f,d,j,o,p,u,w;k.dom=k.dom||{};e=k.dom;u=e.win?e.win.contentWindow:e.win||window;e.win=u;e.doc=u.document;w=function(){return document.compatMode==="CSS1Compat"?document.documentElement:document.body};o=function(b){b=b||window.document;return b.nodeType===9?b:b.ownerDocument||e.doc};p=function(b){var g=o(b);return b.document?b:g.defaultView||g.parentWindow||e.win};q=function(b,g){g=g||o();return g.getElementsByTagName(b)};c=function(b){return(b?b.scrollLeft:
Math.max(document.documentElement.scrollLeft,document.body.scrollLeft))||0};l=function(b){return(b?b.scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop))||0};t=function(b,g){return b.className.indexOf(" "+g+" ")!==-1};n=function(b,g){if(!t(b,g))b.className=b.className+" "+g};m=function(b,g){b.className=b.className.replace(new RegExp("(^|\\s)"+g+"(?:\\s|$)"),"$1")};i=function(b,g,r){if(b){var v=k.browser.name;if(g==="float"||g==="cssFloat")g=v==="ie"?"styleFloat":"cssFloat";
if(g==="opacity"&&v==="ie"){b.style.filter="alpha(opacity="+r*100+")";if(!b.style.zoom)b.style.zoom=1}else b.style[g]=r}};a=function(b,g){if(b){var r=p(b),v=k.browser.name;if(g==="float"||g==="cssFloat")g=v==="ie"?"styleFloat":"cssFloat";if(g==="opacity"&&v==="ie"){g=1;if((b=b.style.filter.match(/opacity=(\d+)/))&&b[1])g=b[1]/100;return g}if(b.style[g])return b.style[g];else if(b.currentStyle)return b.currentStyle[g];else if(r.getComputedStyle)return r.getComputedStyle(b,null)[g];else if(document.defaultView&&
document.defaultView.getComputedStyle){g=g.replace(/([/A-Z])/g,"-$1");g=g.toLowerCase();return(b=document.defaultView.getComputedStyle(b,""))&&b.getPropertyValue(g)}}};h=function(b){var g=0,r=0;if(b)if(document.documentElement.getBoundingClientRect&&b.getBoundingClientRect){r=b.getBoundingClientRect();b=b.ownerDocument;var v=k.browser.ie?2:0;g=r.top-v+l(b);r=r.left-v+c(b)}else for(;b.offsetParent;){g+=b.offsetTop;r+=b.offsetLeft;b=b.offsetParent}return[r,g]};f=function(b){b=h(b);b[0]+=c();b[1]+=l();
return b};d=function(b,g,r){var v=parseInt(a(b,"marginLeft"))||0,A=parseInt(a(b,"marginTop"))||0;i(b,"left",parseInt(g)-v+"px");i(b,"top",parseInt(r)-A+"px")};for(var z=q("script"),y=0;y<z.length;y++)if(z[y].getAttribute("hasJet")=="true")k.src=z[y].src;if(!k.src)k.src=z[z.length-1].src;k.filename=k.src.replace(/(.*\/){0,}([^\\]+).*/ig,"$2");k.path=k.src.split(k.filename)[0];e.getDoc=o;e.id=function(b,g){return o(g).getElementById(b)};e.name=function(b,g){return o(g).getElementsByName(b)};e.tagName=
q;e.getText=function(b){var g=b?b[TEXT_CONTENT]:"";if(g===UNDEFINED&&INNER_TEXT in b)g=b[INNER_TEXT];return g||""};e.node=function(b,g,r){var v,A=(r||e.win).document.createElement(b);for(v in g){b={"class":function(){A.className=g[v]}};b[v]?b[v]():A.setAttribute(v,g[v])}return A};e.setClass=function(b,g){b.className=g};e.getClass=function(b){return b.className};e.hasClass=t;e.addClass=n;e.removeClass=m;e.toggleClass=function(b,g){return t(b,g)?m(b,g):n(b,g)};e.replaceClass=function(b,g,r){m(b,g);
n(b,r)};e.setStyle=i;e.getStyle=a;e.setCssText=function(b,g){b.style.cssText=g};e.getCssText=function(b){return b.style.cssText};e.addCssText=function(b,g){b.style.cssText+=";"+g};e.show=function(b,g){var r;r=(r=b.getAttribute("_oldDisplay"))?r:a(b,"display");if(g)i(b,"display",g);else r==="none"?i(b,"display","block"):i(b,"display",r)};e.isShow=function(b){return a(b,"display")==="none"?false:true};e.recover=function(b){var g;g=(g=b.getAttribute("_oldDisplay"))?g:a(b,"display");g==="none"?i(b,"display",
""):i(b,"display",g)};e.hide=function(b){var g=a(b,"display");b.getAttribute("_oldDisplay")||(g==="none"?b.setAttribute("_oldDisplay",""):b.setAttribute("_oldDisplay",g));i(b,"display","none")};e.getScrollLeft=c;e.getScrollTop=l;e.getScrollHeight=function(b){return(b?b.scrollHeight:Math.max(document.documentElement.scrollHeight,document.body.scrollHeight))||0};e.getScrollWidth=function(b){return(b?b.scrollWidth:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth))||0};e.getClientHeight=
function(b){var g=k.browser.engine.name;if(g=="webkit"||g=="presto"){b=b||u;return b.innerHeight}else{b=b||w();return b.clientHeight}};e.getClientWidth=function(b){var g=k.browser.engine.name;if(g==="webkit"||g==="presto"){b=b||u;return b.innerWidth}else{b=b||w();return b.clientWidth}};e.getOffsetHeight=function(b){var g=k.browser.engine.name;b=g=="webkit"||g=="presto"?b||u:b||w();return b.offsetHeight};e.getOffsetWidth=function(b){var g=k.browser.engine.name;b=g==="webkit"||g==="presto"?b||u:b||
w();return b.offsetWidth};e.getClientXY=h;e.setClientXY=function(b,g,r){g=parseInt(g)+c();r=parseInt(r)+l();d(b,g,r)};e.getXY=f;e.setXY=d;e.getRelativeXY=function(b,g){b=f(b);g=f(g);var r=[];r[0]=b[0]-g[0];r[1]=b[1]-g[1];return r};e.getSelection=j;e.getSelectionText=function(b){b=b||window;var g=b.document;if(b.getSelection)return b.getSelection().toString();else if(g.getSelection)return g.getSelection();else if(g.selection)return g.selection.createRange().text};e.getTextFieldSelection=function(b){return b.selectionStart!=
undefined&&b.selectionEnd!=undefined?b.value.substring(b.selectionStart,b.selectionEnd):""};e.getDocumentElement=w});
Jet().$package(function(k){var e,q,t,n,m,i;k.event=k.event||{};e=k.event;if(document.addEventListener){q=function(a,c,l){var h=false;if(!a._eventTypes)a._eventTypes={};a._eventTypes[c]||(a._eventTypes[c]=[]);a.addEventListener(c,l,false);a=a._eventTypes[c];for(c=0;c<a.length;c++)if(a[c]==l)h=true;h||a.push(l)};t=function(a,c,l){if(c)if(l){a.removeEventListener(c,l,false);if(a._eventTypes&&a._eventTypes[c])for(var h=a._eventTypes[c],f=0;f<h.length;f++)h[f]===l&&h.splice(f,1)}else{if(a._eventTypes&&
a._eventTypes[c]){h=a._eventTypes[c];for(f=0;f<h.length;f++)a.removeEventListener(c,h[f],false);a._eventTypes[c]=[]}}else if(a._eventTypes){c=a._eventTypes;for(var d in c){h=a._eventTypes[d];for(f=0;f<h.length;f++)a.removeEventListener(d,h[f],false)}}}}else if(document.attachEvent){q=function(a,c,l){if(e._find(arguments)==-1){var h=function(j){if(!j)j=window.event;j={_event:j,type:j.type,target:j.srcElement,currentTarget:a,relatedTarget:j.fromElement?j.fromElement:j.toElement,eventPhase:j.srcElement==
a?2:3,clientX:j.clientX,clientY:j.clientY,screenX:j.screenX,screenY:j.screenY,layerX:j.offsetX,layerY:j.offsetY,pageX:j.clientX+document.body.scrollLeft,pageY:j.clientY+document.body.scrollTop,altKey:j.altKey,ctrlKey:j.ctrlKey,shiftKey:j.shiftKey,charCode:j.keyCode,keyCode:j.keyCode,stopPropagation:function(){this._event.cancelBubble=true},preventDefault:function(){this._event.returnValue=false}};if(Function.prototype.call)l.call(a,j);else{a._currentHandler=l;a._currentHandler(j);a._currentHandler=
null}};a.attachEvent("on"+c,h);h={element:a,eventType:c,handler:l,wrappedEvent:h};var f=(a.document||a).parentWindow,d=e._uid();if(!f._allHandlers)f._allHandlers={};f._allHandlers[d]=h;if(!a._handlers)a._handlers=[];a._handlers.push(d);if(!f._onunloadEventRegistered){f._onunloadEventRegistered=true;f.attachEvent("onunload",e._removeAllEvents)}}};t=function(a){var c=e._find(arguments);if(c!=-1)for(var l=(a.document||a).parentWindow,h=0;h<c.length;h++){var f=c[h],d=a._handlers[f],j=l._allHandlers[d];
a.detachEvent("on"+j.eventType,j.wrappedEvent);a._handlers.splice(f,1);delete l._allHandlers[d]}};e._find=function(a){var c=a[0],l=a[1],h=a[2],f=c._handlers;if(!f)return-1;c=(c.document||c).parentWindow;var d=[];if(a.length===3)for(a=f.length-1;a>=0;a--){var j=f[a];j=c._allHandlers[j];if(j.eventType==l&&j.handler==h){d.push(a);return d}}else if(a.length===2){for(a=f.length-1;a>=0;a--){j=f[a];j=c._allHandlers[j];j.eventType==l&&d.push(a)}if(d.length>0)return d}else if(a.length===1){for(a=f.length-
1;a>=0;a--)d.push(a);if(d.length>0)return d}return-1};e._removeAllEvents=function(){var a,c=this;for(a in c._allHandlers){var l=c._allHandlers[a];l.element.detachEvent("on"+l.eventType,l.wrappedEvent);delete c._allHandlers[a]}};e._counter=0;e._uid=function(){return"h"+e._counter++}}n=function(a){if(n.done)return a();if(n.timer)n.ready.push(a);else{n.ready=[a];e.on(window,"load",m);n.timer=window.setInterval(m,300)}};m=function(){if(n.done)return true;if(document&&document.getElementsByTagName&&document.getElementById&&
document.body){n.done=true;window.clearInterval(n.timer);n.timer=null;for(var a=0;a<n.ready.length;a++)n.ready[a]();n.ready=null;return true}};i=function(){this.subscribers=[]};i.prototype.subscribe=function(a){k.array.some(this.subscribers,function(c){return c===a})||this.subscribers.push(a);return a};i.prototype.deliver=function(a){k.array.forEach(this.subscribers,function(c){c(a)})};i.prototype.unsubscribe=function(a){this.subscribers=k.array.filter(this.subscribers,function(c){return c!==a});
return a};e.addEventListener=q;e.removeEventListener=t;e.on=e.addEventListener;e.off=e.removeEventListener;e.onDomReady=n;e.Publish=i;e.addObserver=function(a,c,l){var h,f;c="on"+c;if(!a._$events)a._$events={};a._$events[c]||(a._$events[c]=[]);a=a._$events[c];c=a.length;h=-1;for(f=0;f<c;f++)if(a[f]===l){h=f;break}h===-1&&a.push(l)};e.notifyObservers=function(a,c,l){var h,f;c="on"+c;if(a._$events&&a._$events[c]){c=a._$events[c];h=c.length;if(h>0){for(f=0;f<h;f++)c[f].apply(a,[l]);return true}}else return false};
e.removeObserver=function(a,c,l){var h,f,d=a._$events;if(l){if(d){c="on"+c;if(a=d[c]){f=a.length;for(h=0;h<f;h++)if(a[h]==l){a[h]=null;a.splice(h,1);break}}}}else if(c){if(d){c="on"+c;if(a=d[c]){f=a.length;for(h=0;h<f;h++)a[h]=null;delete d[c]}}}else if(a)if(d){for(h in d)delete d[h];delete a._$events}}});
Jet().$package(function(k){var e=k.dom.id,q=k.dom,t=k.event,n;if(typeof window.XMLHttpRequest==="undefined")window.XMLHttpRequest=function(){return new window.ActiveXObject(navigator.userAgent.indexOf("MSIE 5")>=0?"Microsoft.XMLHTTP":"Msxml2.XMLHTTP")};k.http=k.http||{};n=function(m,i,a){var c,l,h,f,d=document.getElementsByTagName("head")?document.getElementsByTagName("head")[0]:document.documentElement,j,o=false,p=false;a=a||{};l=a.query||null;var u=a.arguments||null,w=a.onSuccess||function(){},
z=a.onError||function(){},y=a.onComplete||function(){},b,g=a.onTimeout||function(){},r=a.timeout?a.timeout:1E4,v=a.charset?a.charset:"utf-8",A=a.win||window,B;i=i||"";if(l!==null)i=i+"?"+l;f=function(){return n.Id++}();b=function(s){d.removeChild(e("jet_load_"+s))};l=function(s,x,C){return q.node("link",{id:"jet_load_"+f,type:"text/css",charset:C||"utf-8",rel:"stylesheet",href:s},x)};h=function(s,x,C){return q.node("script",{id:"jet_load_"+f,defer:"defer",type:"text/javascript",charset:C||"utf-8",
src:s},x)};if(m==="script")c=a.node||h(i,A,v);else if(m==="css")c=a.node||l(i,A,v);if(k.browser.engine.trident)c.onreadystatechange=function(){var s=this.readyState;if(s==="loaded"||s==="complete"){c.onreadystatechange=null;if(!o){p=true;window.clearTimeout(j);j=null;B={};B.id=f;B.uri=i;B.arguments=u;w(B);y(B);m==="script"&&b(f)}}};else if(k.browser.engine.webkit)t.on(c,"load",function(){var s;if(!o){p=true;window.clearTimeout(j);j=null;s={};s.id=f;s.uri=i;s.arguments=u;w(s);y(s);m==="script"&&b(f)}});
else{c.onload=function(){var s;if(!o){p=true;window.clearTimeout(j);j=null;s={};s.id=f;s.uri=i;s.arguments=a.arguments;w(s);y(s);m==="script"&&b(f)}};c.onerror=function(s){var x;if(!o){p=true;window.clearTimeout(j);j=null;x={};x.id=f;x.uri=i;x.arguments=u;x.error=s;z(x);y(x);b(f)}}}if(a.node)if(m==="script")c.src=i;else{if(m==="css")c.href=i}else d.appendChild(c);if(m==="script")j=window.setTimeout(function(){var s;if(!p){o=true;s={};s.uri=i;s.arguments=u;g(s);y(s);b(f)}},r);r=function(s){this._node=
s;this._head=d};r.prototype={abort:function(){this._node.src="";this._head.removeChild(this._node);delete this._node}};return new r(c)};n.Id=0;k.http.ajax=function(m,i){var a,c,l,h=false,f=false;i={method:i.method||"GET",data:i.data||null,arguments:i.arguments||null,onSuccess:i.onSuccess||function(){},onError:i.onError||function(){},onComplete:i.onComplete||function(){},onTimeout:i.onTimeout||function(){},isAsync:i.isAsync||true,timeout:i.timeout?i.timeout:1E4,contentType:i.contentType?i.contentType:
"utf-8",type:i.type||"xml"};m=m||"";l=i.timeout;a=new window.XMLHttpRequest;a.open(i.method,m,i.isAsync);a.setRequestHeader("Content-Type",i.contentType);c=function(d){try{return!d.status&&location.protocol=="file:"||d.status>=200&&d.status<300||d.status==304||navigator.userAgent.indexOf("Safari")>-1&&typeof d.status=="undefined"}catch(j){}return false};a.onreadystatechange=function(){if(a.readyState==4){if(!h){var d={};d.responseText=a.responseText;d.responseXML=a.responseXML;d.uri=m;d.arguments=
i.arguments;if(c(a)){i.type==="script"&&eval.call(window,data);i.onSuccess(d)}else i.onError(d);i.onComplete(d)}f=true;a=null}};a.send(i.data);window.setTimeout(function(){var d;if(!f){h=true;d={};d.uri=m;d.arguments=i.arguments;i.onTimeout(d);i.onComplete(d)}},l);return a};k.http.comet=function(m,i){m=m||"";i={method:i.method||"GET",data:i.data||null,arguments:i.arguments||null,callback:i.callback||function(){},onLoad:i.onLoad||function(){},contentType:i.contentType?i.contentType:"utf-8"};var a;
if(k.browser.ie){a=new ActiveXObject("htmlfile");a.open();a.close();var c=a.createElement("div");a.appendChild(c);a.parentWindow._parent=self;c.innerHTML='<iframe id="_cometIframe" src="'+m+"?callback=window.parent._parent."+i.callback+'"></iframe>';a=a.getElementById("_cometIframe")}else{a=q.node("iframe");a.setAttribute("id","_cometIframe");a.setAttribute("src",m+"?callback=window.parent._parent."+i.callback);a.style.position="absolute";a.style.visibility="hidden";a.style.left=a.style.top="-999px";
a.style.width=a.style.height="1px";document.body.appendChild(a);self._parent=self}t.on(a,"load",i.onLoad);return a};k.http.load=n;k.http.loadCss=function(m,i){return n("css",m,i)};k.http.loadScript=function(m,i){return n("script",m,i)}});
Jet().$package(function(k){var e=window.location.host;k.cookie={set:function(q,t,n,m,i){if(i){var a=new Date,c=new Date;c.setTime(a.getTime()+36E5*i)}window.document.cookie=q+"="+t+"; "+(i?"expires="+c.toGMTString()+"; ":"")+(m?"path="+m+"; ":"path=/; ")+(n?"domain="+n+";":"domain="+e+";");return true},get:function(q){q=window.document.cookie.match(new RegExp("(?:^|;+|\\s+)"+q+"=([^;]*)"));return!q?"":q[1]},remove:function(q,t,n){window.document.cookie=q+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; "+
(n?"path="+n+"; ":"path=/; ")+(t?"domain="+t+";":"domain="+e+";")}}});

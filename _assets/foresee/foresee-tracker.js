var FSR = {
    'version': '6.0.0',
    'date': '03/22/2010',
    'enabled': true,
	'auto' : true,
	'encode' : false,
    'files': '/_assets/foresee/',
    'id': 'hk8gAFRdYhFVkIAgpV5gYA==',
    'sites': [{
        path: /\w+-?\w+\.(com|org|edu|gov|net)/
    }, {
        path: '.',
        domain: 'default'
    }]
};
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
fsr$dbug={log:function(){}};FSR.Native=function(J){J=J||{};var F=J.afterImplement||function(){};var G=J.generics;
G=(G!==false);var H=J.legacy;var E=J.initialize;var B=J.protect;var A=J.name;var C=E||H;C.xconstructor=FSR.Native;
C.fsr$family={name:"native"};if(H&&E){C.prototype=H.prototype}C.prototype.xconstructor=C;if(A){var D=A.toLowerCase();
C.prototype.fsr$family={name:D}}var I=function(M,K,N,L){if(!B||L||!M.prototype[K]){M.prototype[K]=N
}if(G){FSR.Native.genericize(M,K,B)}F.call(M,K,N);return M};C.fsr$implement=function(L,K,N){if(typeof L=="string"){return I(this,L,K,N)
}for(var M in L){I(this,M,L[M],K)}return this};C.fsr$alias=function(M,K,N){if(typeof M=="string"){M=this.prototype[M];
if(M){I(this,K,M,N)}}else{for(var L in M){this.fsr$alias(L,M[L],K)}}return this};return C};FSR.Native.fsr$implement=function(D,C){for(var B=0,A=D.length;
B<A;B++){D[B].fsr$implement(C)}};FSR.Native.genericize=function(B,C,A){if((!A||!B[C])&&typeof B.prototype[C]=="function"){B[C]=function(){var D=Array.prototype.slice.call(arguments);
return B.prototype[C].apply(D.shift(),D)}}};FSR.Native.fsr$alias=function(E,B,A,F){for(var D=0,C=E.length;
D<C;D++){E[D].fsr$alias(B,A,F)}};(function(B){for(var A in B){new FSR.Native({name:A,initialize:B[A],protect:true,generics:true})
}})({String:String,Function:Function,Number:Number,RegExp:RegExp,Date:Date});FSR.$chk=function(A){return !!(A||A===0)
};FSR.$clear=function(A){clearTimeout(A);clearInterval(A);return null};FSR.$defined=function(A){return(A!=undefined)
};FSR.$empty=function(){};FSR.$arguments=function(A){return function(){return arguments[A]}};FSR.$lambda=function(A){return(typeof A=="function")?A:function(){return A
}};FSR.$extend=function(C,A){for(var B in (A||{})){C[B]=A[B]}return C};FSR.$unlink=function(C){var B;
switch(FSR.$type(C)){case"object":B={};for(var E in C){B[E]=FSR.$unlink(C[E])}break;case"hash":B=FSR.$unlink(C.getClean());
break;case"array":B=[];for(var D=0,A=C.length;D<A;D++){B[D]=FSR.$unlink(C[D])}break;default:return C
}return B};FSR.$merge=function(){var E={};for(var D=0,A=arguments.length;D<A;D++){var B=arguments[D];
if(FSR.$type(B)!="object"){continue}for(var C in B){var G=B[C],F=E[C];E[C]=(F&&FSR.$type(G)=="object"&&FSR.$type(F)=="object")?FSR.$merge(F,G):FSR.$unlink(G)
}}return E};FSR.$pick=function(){for(var B=0,A=arguments.length;B<A;B++){if(arguments[B]!=undefined){return arguments[B]
}}return null};FSR.$random=function(B,A){return(Math.random()*(A-B))+B};FSR.$splat=function(B){var A=FSR.$type(B);
return(A)?((A!="array"&&A!="arguments")?[B]:B):[]};FSR.$time=Date.now||function(){return new Date().getTime()
};FSR.$pause=function(C){var B=new Date();var A=null;do{A=new Date()}while(A-B<C)};FSR.$try=function(){for(var B=0,A=arguments.length;
B<A;B++){try{return arguments[B]()}catch(C){}}return null};FSR.$type=function(A){if(A==undefined){return false
}if(A.fsr$family){return(A.fsr$family.name=="number"&&!isFinite(A))?false:A.fsr$family.name}if(A.nodeName){switch(A.nodeType){case 1:return"element";
case 3:return(/\S/).test(A.nodeValue)?"textnode":"whitespace"}}else{if(typeof A.length=="number"){if(A.callee){return"arguments"
}else{if(A.item){return"collection"}}}}if(FSR.isArray(A)){return"array"}return typeof A};FSR.isArray=function(B){if(typeof B=="object"){var A=B.constructor.toString().match(/array/i);
return(A!=null)}return false};FSR.Hash=new FSR.Native({name:"Hash",initialize:function(A){if(FSR.$type(A)=="hash"){A=FSR.$unlink(A.getClean())
}for(var B in A){this[B]=A[B]}return this}});FSR.Hash.fsr$implement({getLength:function(){var B=0;
for(var A in this){if(this.hasOwnProperty(A)){B++}}return B},forEach:function(B,C){for(var A in this){if(this.hasOwnProperty(A)){B.call(C,this[A],A,this)
}}},getClean:function(){var B={};for(var A in this){if(this.hasOwnProperty(A)){B[A]=this[A]}}return B
},empty:function(){FSR.Hash.each(this,function(B,A){delete this[A]},this);return this}});FSR.Hash.fsr$alias("forEach","each");
FSR.$H=function(A){return new FSR.Hash(A)};FSR.$each=function(C,B,D){var A=FSR.$type(C);(A=="arguments"||A=="collection"||A=="array")?FSR.Array.each(C,B,D):FSR.Hash.each(C,B,D)
};FSR.Browser=new FSR.Hash({Type:{name:"unknown",version:""},Engine:{name:"unknown",version:""},Platform:{name:(navigator.platform.match(/mac|win32|linux/i)||["other"])[0].toLowerCase(),os:"unknown"},Features:{xpath:!!(document.evaluate),air:!!(window.runtime)},Plugins:{},searchString:function(D){for(var A=0;
A<D.length;A++){var B=D[A].s;var C=D[A].p;this.versionSearchString=D[A].v||D[A].i;if(B){if(B.indexOf(D[A].b)!=-1){return D[A].i
}}else{if(C){return D[A].i}}}},searchVersion:function(B){var A=B.indexOf(this.versionSearchString);
if(A==-1){return }return parseFloat(B.substring(A+this.versionSearchString.length+1))},dataBrowser:[{s:navigator.userAgent,b:"Chrome",i:"Chrome"},{s:navigator.vendor,b:"Apple",i:"Safari",v:"Version"},{p:window.opera,i:"Opera"},{s:navigator.userAgent,b:"Firefox",i:"Firefox"},{s:navigator.userAgent,b:"Netscape",i:"Netscape"},{s:navigator.userAgent,b:"MSIE",i:"Explorer",v:"MSIE"},{s:navigator.userAgent,b:"Gecko",i:"Mozilla",v:"rv"}],dataOS:[{s:navigator.platform,b:"Win",i:"Windows"},{s:navigator.platform,b:"Mac",i:"Mac"},{s:navigator.platform,b:"Linux",i:"Linux"}]});
if(window.opera){FSR.Browser.Engine={name:"presto",version:(document.getElementsByClassName)?950:925}
}else{if(window.ActiveXObject){FSR.Browser.Engine={name:"trident",version:(window.XMLHttpRequest)?5:4}
}else{if(!navigator.taintEnabled){FSR.Browser.Engine={name:"webkit",version:(FSR.Browser.Features.xpath)?420:419}
}else{if(document.getBoxObjectFor!=null){FSR.Browser.Engine={name:"gecko",version:(document.getElementsByClassName)?19:18}
}}}}FSR.Browser.Engine[FSR.Browser.Engine.name]=FSR.Browser.Engine[FSR.Browser.Engine.name+FSR.Browser.Engine.version]=true;
if(window.orientation!=undefined){FSR.Browser.Platform.name="ipod"}FSR.Browser.Platform[FSR.Browser.Platform.name]=true;
FSR.Browser.Plugins.Flash=(function(){var A=(FSR.$try(function(){return navigator.plugins["Shockwave Flash"].description
},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")})||"0 r0").match(/\d+/g);
return{version:parseInt(A[0]||0+"."+A[1]||0),build:parseInt(A[2]||0)}})();FSR.Browser.Type.name=FSR.Browser.searchString(FSR.Browser.dataBrowser)||"unknown";
FSR.Browser.Type.version=FSR.Browser.searchVersion(navigator.userAgent)||FSR.Browser.searchVersion(navigator.appVersion)||"unknown";
FSR.Browser.Platform.os=FSR.Browser.searchString(FSR.Browser.dataOS)||"unknown";FSR.$exec=function(B){if(!B){return B
}if(window.execScript){window.execScript(B)}else{var A=document.createElement("script");A.setAttribute("type","text/javascript");
A.text=B;document.fsr$head.appendChild(A);document.fsr$head.removeChild(A)}return B};FSR.Native.UID=1;
FSR.$uid=(FSR.Browser.Engine.trident)?function(A){return(A.fsr$uid||(A.fsr$uid=[FSR.Native.UID++]))[0]
}:function(A){return A.fsr$uid||(A.fsr$uid=FSR.Native.UID++)};FSR.Window=new FSR.Native({name:"Window",initialize:function(A){FSR.$uid(A);
return FSR.$extend(A,FSR.Window.Prototype)},afterImplement:function(B,A){window[B]=A;FSR.Window.Prototype[B]=A
}});FSR.Window.Prototype={fsr$family:{name:"window"}};new FSR.Window(window);FSR.Document=new FSR.Native({name:"Document",initialize:function(A){FSR.$uid(A);
A.fsr$head=A.getElementsByTagName("head")[0];A.fsr$html=A.getElementsByTagName("html")[0];A.fsr$window=A.defaultView||A.parentWindow;
if(FSR.Browser.Engine.trident4){FSR.$try(function(){A.execCommand("BackgroundImageCache",false,true)
})}return FSR.$extend(A,FSR.Document.Prototype)},afterImplement:function(B,A){document[B]=A;FSR.Document.Prototype[B]=A
}});FSR.Document.Prototype={fsr$family:{name:"document"}};new FSR.Document(document);FSR.Array={indexOf:function(B,D,E){var A=B.length;
for(var C=(E<0)?Math.max(0,A+E):E||0;C<A;C++){if(B[C]===D){return C}}return -1},map:function(B,E,F){var D=[];
for(var C=0,A=B.length;C<A;C++){D[C]=E.call(F,B[C],C,B)}return D},associate:function(A,D){var E={},C=Math.min(A.length,D.length);
for(var B=0;B<C;B++){E[D[B]]=A[B]}return E},contains:function(A,B,C){return FSR.Array.indexOf(A,B,C)!=-1
},extend:function(A,D){for(var C=0,B=D.length;C<B;C++){A.push(D[C])}return A},include:function(A,B){if(!FSR.Array.contains(A,B)){A.push(B)
}return A},flatten:function(B){var E=[];for(var C=0,A=B.length;C<A;C++){var D=FSR.$type(B[C]);if(!D){continue
}E=E.concat((D=="array"||D=="collection"||D=="arguments")?FSR.Array.flatten(B[C]):B[C])}return E},slice:function(){var A=Array.prototype.slice.call(arguments);
return Array.prototype.slice.apply(A.shift(),A)},forEach:function(B,D,E){for(var C=0,A=B.length;C<A;
C++){D.call(E,B[C],C,B)}},each:function(B,D,E){for(var C=0,A=B.length;C<A;C++){D.call(E,B[C],C,B)
}},toJSON:function(A){return FSR.JSON.encode(A)}};FSR.$A=function(C){if(C.item){var D=[];for(var B=0,A=C.length;
B<A;B++){D[B]=C[B]}return D}return Array.prototype.slice.call(C)};Function.fsr$implement({fsr$extend:function(A){for(var B in A){this[B]=A[B]
}return this},fsr$create:function(B){var A=this;B=B||{};return function(D){var C=B.arguments;C=(C!=undefined)?FSR.$splat(C):FSR.Array.slice(arguments,(B.event)?1:0);
if(B.event){C=FSR.Array([D||window.event],C)}var E=function(){return A.apply(B.bind||null,C)};if(B.delay){return setTimeout(E,B.delay)
}if(B.periodical){return setInterval(E,B.periodical)}if(B.attempt){return FSR.$try(E)}return E()}
},fsr$pass:function(A,B){return this.fsr$create({arguments:A,bind:B})},fsr$attempt:function(A,B){return this.fsr$create({arguments:A,bind:B,attempt:true})()
},fsr$bind:function(B,A){return this.fsr$create({bind:B,arguments:A})},fsr$bindWithEvent:function(B,A){return this.fsr$create({bind:B,event:true,arguments:A})
},fsr$delay:function(B,C,A){return this.fsr$create({delay:B,bind:C,arguments:A})()},fsr$periodical:function(A,C,B){return this.fsr$create({periodical:A,bind:C,arguments:B})()
},fsr$run:function(A,B){return this.apply(B,FSR.$splat(A))}});Number.fsr$implement({fsr$toInt:function(A){return parseInt(this,A||10)
}});String.fsr$implement({fsr$test:function(A,B){return((typeof A=="string")?new RegExp(A,B):A).test(this)
},fsr$contains:function(A,B){return(B)?(B+this+B).indexOf(B+A+B)>-1:this.indexOf(A)>-1},fsr$trim:function(){return this.replace(/^\s+|\s+$/g,"")
},fsr$clean:function(){return this.replace(/\s+/g," ").fsr$trim()},fsr$camelCase:function(){return this.replace(/-\D/g,function(A){return A.charAt(1).toUpperCase()
})},fsr$hyphenate:function(){return this.replace(/[A-Z]/g,function(A){return("-"+A.charAt(0).toLowerCase())
})},fsr$capitalize:function(){return this.replace(/\b[a-z]/g,function(A){return A.toUpperCase()})
},fsr$escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},fsr$toInt:function(A){return parseInt(this,A||10)
},fsr$stripScripts:function(B){var A="";var C=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){A+=arguments[1]+"\n";
return""});if(B===true){FSR.$exec(A)}else{if(FSR.$type(B)=="function"){B(A,C)}}return C},fsr$substitute:function(A,B){return this.replace(B||(/\\?\{([^}]+)\}/g),function(D,C){if(D.charAt(0)=="\\"){return D.slice(1)
}return(A[C]!=undefined)?A[C]:""})}});FSR.Hash.fsr$implement({has:Object.prototype.hasOwnProperty,keyOf:function(B){for(var A in this){if(this.hasOwnProperty(A)&&this[A]===B){return A
}}return null},extend:function(A){FSR.Hash.each(A,function(C,B){FSR.Hash.set(this,B,C)},this);return this
},combine:function(A){FSR.Hash.each(A,function(C,B){FSR.Hash.include(this,B,C)},this);return this
},erase:function(A){if(this.hasOwnProperty(A)){delete this[A]}return this},get:function(A){return(this.hasOwnProperty(A))?this[A]:null
},set:function(A,B){if(!this[A]||this.hasOwnProperty(A)){this[A]=B}return this},include:function(B,C){var A=this[B];
if(A==undefined){this[B]=C}return this},toQueryString:function(A){var B=[];FSR.Hash.each(this,function(F,E){if(A){E=A+"["+E+"]"
}var D;switch(FSR.$type(F)){case"object":D=FSR.Hash.toQueryString(F,E);break;case"array":var C={};
FSR.Array.each(F,function(H,G){C[G]=H});D=FSR.Hash.toQueryString(C,E);break;default:D=E+"="+encodeURIComponent(F)
}if(F!=undefined){B.push(D)}});return B.join("&")}});FSR.Hash.fsr$alias({keyOf:"indexOf",hasValue:"contains"});
FSR.Event=new FSR.Native({name:"Event",initialize:function(A,F){F=F||window;var K=F.document;A=A||F.event;
if(A.fsr$extended){return A}this.fsr$extended=true;var J=A.type;var G=A.target||A.srcElement;while(G&&G.nodeType==3){G=G.parentNode
}if(J.fsr$test(/key/)){var B=A.which||A.keyCode;var M=FSR.Event.Keys.keyOf(B);if(J=="keydown"){var D=B-111;
if(D>0&&D<13){M="f"+D}}M=M||String.fromCharCode(B).toLowerCase()}else{if(J.match(/(click|mouse|menu)/i)){K=(!K.compatMode||K.compatMode=="CSS1Compat")?K.getElementsByTagName("html")[0]:K.body;
var I={x:A.pageX||A.clientX+K.scrollLeft,y:A.pageY||A.clientY+K.scrollTop};var C={x:(A.pageX)?A.pageX-F.pageXOffset:A.clientX,y:(A.pageY)?A.pageY-F.pageYOffset:A.clientY};
if(J.match(/DOMMouseScroll|mousewheel/)){var H=(A.wheelDelta)?A.wheelDelta/120:-(A.detail||0)/3}var E=(A.which==3)||(A.button==2);
var L=null;if(J.match(/over|out/)){switch(J){case"mouseover":L=A.relatedTarget||A.fromElement;break;
case"mouseout":L=A.relatedTarget||A.toElement}if(!(function(){while(L&&L.nodeType==3){L=L.parentNode
}return true}).fsr$create({attempt:FSR.Browser.Engine.gecko})()){L=false}}}}return FSR.$extend(this,{event:A,type:J,page:I,client:C,rightClick:E,wheel:H,relatedTarget:L,target:G,code:B,key:M,shift:A.shiftKey,control:A.ctrlKey,alt:A.altKey,meta:A.metaKey})
}});FSR.Event.Keys=new FSR.Hash({enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46});
FSR.Class=new FSR.Native({name:"Class",initialize:function(B){B=B||{};var A=function(E){for(var D in this){this[D]=FSR.$unlink(this[D])
}for(var F in FSR.Class.Mutators){if(F=="extend"){continue}if(!this[F]){continue}FSR.Class.Mutators[F](this,this[F]);
delete this[F]}this.constructor=A;if(E===FSR.$empty){return this}var C=(this.initialize)?this.initialize.apply(this,arguments):this;
if(this.options&&this.options.initialize){this.options.initialize.call(this)}return C};FSR.$extend(A,this);
A.constructor=FSR.Class;A.prototype=B;return A}});FSR.Class.fsr$implement({fsr$implement:function(){FSR.Class.Mutators.Implements(this.prototype,FSR.Array.slice(arguments));
return this}});FSR.Class.Mutators={Implements:function(A,B){FSR.Array.each(FSR.$splat(B),function(C){FSR.$extend(A,(FSR.$type(C)=="class")?new C(FSR.$empty):C)
})},Extends:function(self,klass){var instance=new klass(FSR.$empty);delete instance.parent;delete instance.parentOf;
for(var key in instance){var current=self[key],previous=instance[key];if(current==undefined){self[key]=previous;
continue}var ctype=FSR.$type(current),ptype=FSR.$type(previous);if(ctype!=ptype){continue}switch(ctype){case"function":if(!arguments.callee.caller){self[key]=eval("("+String(current).replace(/\bthis\.parent\(\s*(\))?/g,function(full,close){return"arguments.callee._parent_.call(this"+(close||", ")
})+")")}self[key]._parent_=previous;break;case"object":self[key]=FSR.$merge(previous,current)}}self.parent=function(){return arguments.callee.caller._parent_.apply(this,arguments)
};self.parentOf=function(descendant){return descendant._parent_.apply(this,FSR.Array.slice(arguments,1))
}}};FSR.Events=new FSR.Class({fsr$addEvent:function(C,B,A){C=FSR.Events.removeOn(C);if(B!=FSR.$empty){this.$events=this.$events||{};
this.$events[C]=this.$events[C]||[];FSR.Array.include(this.$events[C],B);if(A){B.internal=true}}return this
},fsr$addEvents:function(A){for(var B in A){this.fsr$addEvent(B,A[B])}return this},fsr$fireEvent:function(C,B,A){C=FSR.Events.removeOn(C);
if(!this.$events||!this.$events[C]){return this}FSR.Array.each(this.$events[C],function(D){D.fsr$create({bind:this,delay:A,"arguments":B})()
},this);return this},fsr$removeEvent:function(B,A){B=FSR.Events.removeOn(B);if(!this.$events||!this.$events[B]){return this
}if(!A.internal){this.$events[B].erase(A)}return this},fsr$removeEvents:function(C){for(var D in this.$events){if(C&&C!=D){continue
}var B=this.$events[D];for(var A=B.length;A--;A){this.fsr$removeEvent(D,B[A])}}return this}});FSR.Events.removeOn=function(A){return A.replace(/^on([A-Z])/,function(B,C){return C.toLowerCase()
})};FSR.Options=new FSR.Class({setOptions:function(){this.options=FSR.$merge.fsr$run(FSR.Array.extend([this.options],arguments));
if(!this.fsr$addEvent){return this}for(var A in this.options){if(FSR.$type(this.options[A])!="function"||!(/^on[A-Z]/).test(A)){continue
}this.fsr$addEvent(A,this.options[A]);delete this.options[A]}return this}});FSR.Document.fsr$implement({fsr$newElement:function(A,B){if(FSR.Browser.Engine.trident&&B){FSR.Array.each(["name","type","checked"],function(C){if(!B[C]){return 
}A+=" "+C+'="'+B[C]+'"';if(C!="checked"){delete B[C]}});A="<"+A+">"}return $fsr.element(this.createElement(A)).fsr$set(B)
},fsr$newTextNode:function(A){return this.createTextNode(A)},fsr$getDocument:function(){return this
},fsr$getWindow:function(){return this.defaultView||this.parentWindow},fsr$purge:function(){var C=this.getElementsByTagName("*");
for(var B=0,A=C.length;B<A;B++){FSR.Browser.freeMem(C[B])}for(var D in FSR.Document.Prototype){document[D]=null
}document.fsr$uid=null;for(var D in FSR.Window.Prototype){window[D]=null}window.fsr$uid=null;document.fsr$head=null;
document.fsr$html=null;document.fsr$window=null;FSR.Element.Storage=null}});FSR.Element=new FSR.Native({name:"Element",initialize:function(A,B){var C=FSR.Element.Constructors.get(A);
if(C){return C(B)}if(typeof A=="string"){return document.fsr$newElement(A,B)}return $fsr(A).fsr$set(B)
},afterImplement:function(A,B){if(!Array[A]){FSR.Elements.fsr$implement(A,FSR.Elements.fsr$multi(A))
}FSR.Element.Prototype[A]=B}});FSR.Element.Prototype={fsr$family:{name:"element"}};FSR.Element.Constructors=new FSR.Hash;
FSR.Elements=new FSR.Native({initialize:function(F,B){B=FSR.$extend({ddup:true,cash:true},B);F=F||[];
if(B.ddup||B.cash){var G={},E=[];for(var C=0,A=F.length;C<A;C++){var D=$fsr.element(F[C],!B.cash);
if(B.ddup){if(G[D.fsr$uid]){continue}G[D.fsr$uid]=true}E.push(D)}F=E}return(B.cash)?FSR.$extend(F,this):F
}});FSR.Elements.fsr$implement({fsr$filter:function(A,B){if(!A){return this}return new FSR.Elements(FSR.Array.filter(this,(typeof A=="string")?function(C){return C.match(A)
}:A,B))}});FSR.Elements.fsr$multi=function(A){return function(){var B=[];var F=true;for(var D=0,C=this.length;
D<C;D++){var E=this[D][A].apply(this[D],arguments);B.push(E);if(F){F=(FSR.$type(E)=="element")}}return(F)?new FSR.Elements(B):B
}};FSR.Window.fsr$implement({$fsr:function(B,C){if(B&&B.fsr$family&&B.fsr$uid){return B}var A=FSR.$type(B);
return($fsr[A])?$fsr[A](B,C,this.document):null},$$fsr:function(A){if(arguments.length==1&&typeof A=="string"){return this.document.fsr$getElements(A)
}var F=[];var C=FSR.Array.flatten(arguments);for(var D=0,B=C.length;D<B;D++){var E=C[D];switch(FSR.$type(E)){case"element":E=[E];
break;case"string":E=this.document.fsr$getElements(E,true);break;default:E=false}if(E){FSR.Array.extend(F,E)
}}return new FSR.Elements(F)},fsr$getDocument:function(){return this.document},fsr$getWindow:function(){return this
}});$fsr.string=function(C,B,A){C=A.getElementById(C);return(C)?$fsr.element(C,B):null};$fsr.element=function(A,D){FSR.$uid(A);
if(!D&&!A.fsr$family&&!(/^object|embed$/i).test(A.tagName)){var B=FSR.Element.Prototype;for(var C in B){A[C]=B[C]
}}return A};$fsr.object=function(B,C,A){if(B.toElement){return $fsr.element(B.toElement(A),C)}return null
};$fsr.textnode=$fsr.whitespace=$fsr.window=$fsr.document=FSR.$arguments(0);FSR.Native.fsr$implement([FSR.Element,FSR.Document],{fsr$getElement:function(A,B){return $fsr(this.fsr$getElements(A,true)[0]||null,B)
},fsr$getElements:function(A,D){A=A.split(",");var C=[];var B=(A.length>1);FSR.Array.each(A,function(E){var F=this.getElementsByTagName(E.fsr$trim());
(B)?FSR.Array.extend(C,F):C=F},this);return new FSR.Elements(C,{ddup:B,cash:!D})}});FSR.Element.Storage={get:function(A){return(this[A]||(this[A]={}))
}};FSR.Element.Inserters=new FSR.Hash({after:function(B,A){if(!A.parentNode){return }var C=A.nextSibling;
(C)?A.parentNode.insertBefore(B,C):A.parentNode.appendChild(B)},bottom:function(B,A){A.appendChild(B)
},top:function(B,A){var C=A.firstChild;(C)?A.insertBefore(B,C):A.appendChild(B)}});FSR.Element.Inserters.inside=FSR.Element.Inserters.bottom;
FSR.Element.fsr$implement({fsr$getDocument:function(){return this.ownerDocument},fsr$getWindow:function(){return this.ownerDocument.fsr$getWindow()
},fsr$set:function(D,B){switch(FSR.$type(D)){case"object":for(var C in D){this.fsr$set(C,D[C])}break;
case"string":var A=FSR.Element.Properties.get(D);if(A&&A.set){A.set.apply(this,FSR.Array.slice(arguments,1))
}else{this.fsr$setProperty(D,B)}}return this},fsr$inject:function(B,A){FSR.Element.Inserters.get(A||"bottom")(this,$fsr(B,true));
return this},fsr$dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this
},fsr$setProperty:function(D,E){var C=FSR.Element.Attributes,B=C.Props[D],A=FSR.$defined(E);if(B&&C.Bools[D]){E=(E||!A)?true:false
}else{if(!A){return this.removeProperty(D)}}(B)?this[B]=E:this.setAttribute(D,E);return this},fsr$setProperties:function(A){for(var B in A){this.fsr$setProperty(B,A[B])
}return this}});FSR.Element.Properties=new FSR.Hash;FSR.Element.Properties.html={set:function(){return this.innerHTML=FSR.Array.flatten(arguments).join("")
}};FSR.Native.fsr$implement([FSR.Element,FSR.Window,FSR.Document],{fsr$addListener:function(B,A){if(this.addEventListener){this.addEventListener(B,A,false)
}else{this.attachEvent("on"+B,A)}return this},fsr$removeListener:function(B,A){if(this.removeEventListener){this.removeEventListener(B,A,false)
}else{this.detachEvent("on"+B,A)}return this},fsr$retrieve:function(B,A){var D=FSR.Element.Storage.get(this.fsr$uid);
var C=D[B];if(FSR.$defined(A)&&!FSR.$defined(C)){C=D[B]=A}return FSR.$pick(C)},fsr$store:function(B,A){var C=FSR.Element.Storage.get(this.fsr$uid);
C[B]=A;return this},fsr$eliminate:function(A){var B=FSR.Element.Storage.get(this.fsr$uid);delete B[A];
return this}});FSR.Element.Attributes=new FSR.Hash({Props:{html:"innerHTML","class":"className","for":"htmlFor",text:(FSR.Browser.Engine.trident)?"innerText":"textContent"},Bools:["compact","nowrap","ismap","declare","noshade","checked","disabled","readonly","multiple","selected","noresize","defer"],Camels:["value","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"]});
FSR.Browser.freeMem=function(A){if(!A){return }if(FSR.Browser.Engine.trident&&(/object/i).test(A.tagName)){for(var B in A){if(typeof A[B]=="function"){A[B]=FSR.$empty
}}FSR.Element.fsr$dispose(A)}if(A.fsr$uid&&A.fsr$removeEvents){A.fsr$removeEvents()}if(A.fsr$uid){A.fsr$uid=null
}};(function(A){var C=A.Bools,B=A.Camels;A.Bools=C=FSR.Array.associate(C,C);FSR.Hash.extend(FSR.Hash.combine(A.Props,C),FSR.Array.associate(B,FSR.Array.map(B,function(D){return D.toLowerCase()
})));A.erase("Camels")})(FSR.Element.Attributes);window.fsr$addListener("unload",function(){window.fsr$removeListener("unload",arguments.callee);
window.fsr$fireEvent("unload");document.fsr$purge();if(window.CollectGarbage){CollectGarbage()}});
FSR.Element.Properties.events={set:function(A){this.fsr$addEvents(A)}};FSR.Native.fsr$implement([FSR.Element,FSR.Window,FSR.Document],{fsr$addEvent:function(E,G){var H=this.fsr$retrieve("events",{});
H[E]=H[E]||{keys:[],values:[]};if(FSR.Array.contains(H[E].keys,G)){return this}H[E].keys.push(G);
var F=E,A=FSR.Element.Events.get(E),C=G,I=this;if(A){if(A.onAdd){A.onAdd.call(this,G)}if(A.condition){C=function(J){if(A.condition.call(this,J)){return G.call(this,J)
}return false}}F=A.base||F}var D=function(){return G.call(I)};var B=FSR.Element.NativeEvents[F]||0;
if(B){if(B==2){D=function(J){J=new FSR.Event(J,I.fsr$getWindow());if(C.call(I,J)===false){J.stop()
}}}if(F!="unload"){this.fsr$addListener(F,D)}}H[E].values.push(D);return this},fsr$removeEvent:function(D,C){var B=this.fsr$retrieve("events");
if(!B||!B[D]){return this}var G=FSR.Array.indexOf(B[D].keys,C);if(G==-1){return this}var A=B[D].keys.splice(G,1)[0];
var F=B[D].values.splice(G,1)[0];var E=FSR.Element.Events.get(D);if(E){if(E.onRemove){E.onRemove.call(this,C)
}D=E.base||D}return(FSR.Element.NativeEvents[D])?this.fsr$removeListener(D,F):this},fsr$addEvents:function(A){for(var B in A){if(A.hasOwnProperty(B)){this.fsr$addEvent(B,A[B])
}}return this},fsr$removeEvents:function(B){var A=this.fsr$retrieve("events");if(!A){return this}if(!B){for(var C in A){if(A.hasOwnProperty(C)){this.fsr$removeEvents(C)
}}A=null}else{if(A[B]){while(A[B].keys[0]){this.fsr$removeEvent(B,A[B].keys[0])}A[B]=null}}return this
},fsr$fireEvent:function(D,B,A){var C=this.fsr$retrieve("events");if(!C||!C[D]){return this}FSR.Array.each(C[D].keys,function(E){E.fsr$create({bind:this,delay:A,"arguments":B})()
},this);return this}});FSR.Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:1,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
(function(){FSR.$check=function(A){var B=A.relatedTarget;if(B==undefined){return true}if(B===false){return false
}return(FSR.$type(this)!="document"&&B!=this&&B.prefix!="xul"&&!this.fsr$hasChild(B))};FSR.Element.Events=new FSR.Hash({mouseenter:{base:"mouseover",condition:FSR.$check},mouseleave:{base:"mouseout",condition:FSR.$check},mousewheel:{base:(FSR.Browser.Engine.gecko)?"DOMMouseScroll":"mousewheel"}})
})();FSR.Element.fsr$implement({fsr$hasChild:function(A){A=$fsr(A,true);return(!!A&&FSR.Array.contains(FSR.$A(this.getElementsByTagName(A.tagName)),A))
}});(function(){FSR.Native.fsr$implement([FSR.Document,FSR.Window],{fsr$getSize:function(){var C=this.fsr$getWindow();
if(FSR.Browser.Engine.presto||FSR.Browser.Engine.webkit){return{x:C.innerWidth,y:C.innerHeight}}var B=A(this);
return{x:B.clientWidth,y:B.clientHeight}},fsr$getScroll:function(){var C=this.fsr$getWindow();var B=A(this);
return{x:C.pageXOffset||B.scrollLeft,y:C.pageYOffset||B.scrollTop}},fsr$getScrollSize:function(){var C=A(this);
var B=this.fsr$getSize();return{x:Math.max(C.scrollWidth,B.x),y:Math.max(C.scrollHeight,B.y)}}});
function A(B){var C=B.fsr$getDocument();return(!C.compatMode||C.compatMode=="CSS1Compat")?C.getElementsByTagName("html")[0]:C.body
}})();FSR.Element.Events.domready={onAdd:function(A){if(FSR.Browser.loaded){A.call(this)}}};(function(){var A=function(){if(FSR.Browser.loaded){return 
}FSR.Browser.loaded=true;window.fsr$fireEvent("domready");document.fsr$fireEvent("domready")};switch(FSR.Browser.Engine.name){case"webkit":(function(){(FSR.Array.contains(["loaded","complete"],document.readyState))?A():arguments.callee.fsr$delay(50)
})();break;case"trident":var B=document.createElement("div");(function(){(FSR.$try(function(){B.doScroll("left");
return $fsr(B).fsr$inject(document.body).fsr$set("html","temp").fsr$dispose()}))?A():arguments.callee.fsr$delay(50)
})();break;default:window.fsr$addEvent("load",A);document.fsr$addEvent("DOMContentLoaded",A)}})();
FSR.JSON=new FSR.Hash({encode:function(B){switch(FSR.$type(B)){case"string":return'"'+B.replace(/[\x00-\x1f\\"\\;]/g,FSR.JSON.$replaceChars)+'"';
case"array":return"["+String(FSR.Array.map(B,FSR.JSON.encode).fsr$filter(FSR.$defined))+"]";case"object":case"hash":var A=[];
FSR.Hash.each(B,function(E,D){var C=FSR.JSON.encode(E);if(C){A.push(FSR.JSON.encode(D)+":"+C)}});
return"{"+A+"}";case"number":case"boolean":return String(B);case false:return"null"}return null},$specialChars:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},$replaceChars:function(A){return FSR.JSON.$specialChars[A]||"\\u00"+Math.floor(A.charCodeAt()/16).toString(16)+(A.charCodeAt()%16).toString(16)
},decode:function(string,secure){if(FSR.$type(string)!="string"||!string.length){return null}if(secure&&!(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(string.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""))){return null
}return eval("("+string+")")}});FSR.Native.fsr$implement([FSR.Hash,Number],{fsr$toJSON:function(){return FSR.JSON.encode(this)
}});FSR.Cookie=new FSR.Class({Implements:FSR.Options,options:{path:false,domain:false,duration:false,secure:false,document:document},initialize:function(B,A){this.key=B;
this.setOptions(A)},write:function(B){if(FSR.encode){B=encodeURIComponent(B)}if(this.options.domain){B+="; domain="+this.options.domain
}if(this.options.path){B+="; path="+this.options.path}if(this.options.duration){var A=new Date();
A.setTime(A.getTime()+this.options.duration*24*60*60*1000);B+="; expires="+A.toGMTString()}if(this.options.secure){B+="; secure"
}this.options.document.cookie=this.key+"="+B;return this},read:function(){var A=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.fsr$escapeRegExp()+"=([^;]*)");
var B=(A)?A[1]:null;if(FSR.encode){B=(B)?decodeURIComponent(B):null}return B},dispose:function(){new FSR.Cookie(this.key,FSR.$merge(this.options,{duration:-1})).write("");
return this}});FSR.Cookie.write=function(B,C,A){return new FSR.Cookie(B,A).write(C)};FSR.Cookie.read=function(A){return new FSR.Cookie(A).read()
};FSR.Cookie.dispose=function(B,A){return new FSR.Cookie(B,A).dispose()};FSR.Hash.Cookie=new FSR.Class({Extends:FSR.Cookie,options:{autoSave:true},initialize:function(B,A){this.parent(B,A);
this.load()},save:function(){var A=FSR.JSON.encode(this.hash);if(!A||A.length>4096){return false}if(A=="{}"){this.dispose()
}else{this.write(A)}return true},load:function(){this.hash=new FSR.Hash(FSR.JSON.decode(this.read(),true));
return this}});FSR.Hash.Cookie.fsr$implement({get:function(A){return this.hash.get(A)},set:function(A,B){this.hash.set(A,B);
this.save();return this},erase:function(A){this.hash.erase(A);this.save();return this},empty:function(){this.hash.empty();
this.save();return this}});FSR.Asset=new FSR.Hash({src:function(A){var B=A;if(A.substring(0,2)=="//"){B=document.location.protocol+B
}return B},javascript:function(F,D){D=FSR.$extend({onload:FSR.$empty,document:document,check:FSR.$lambda(true)},D);
var B=new FSR.Element("script",{src:FSR.Asset.src(F),type:"text/javascript"});var E=D.onload.fsr$bind(B),A=D.check,G=D.document;
delete D.onload;delete D.check;delete D.document;B.fsr$addEvents({load:E,readystatechange:function(){if(FSR.Browser.Engine.trident&&FSR.Array.contains(["loaded","complete"],this.readyState)){E()
}}}).fsr$setProperties(D);if(FSR.Browser.Engine.webkit419){var C=(function(){if(!FSR.$try(A)){return 
}FSR.$clear(C);E()}).fsr$periodical(50)}return B.fsr$inject(document.getElementsByTagName("head")[0])
},image:function(C,B){B=FSR.$merge({onload:FSR.$empty,onabort:FSR.$empty,onerror:FSR.$empty},B);var D=new Image();
var A=$fsr(D)||new FSR.Element("img");FSR.Array.each(["load","abort","error"],function(E){var F="on"+E;
var G=B[F];delete B[F];D[F]=function(){if(!D){return }if(!A.parentNode){A.width=D.width;A.height=D.height
}D=D.onload=D.onabort=D.onerror=null;G.fsr$delay(1,A,A);A.fsr$fireEvent(E,A,1)}});D.src=FSR.Asset.src(C);
if(A.src!=D.src){A.src=D.src}if(D&&D.complete){D.onload.fsr$delay(1)}return A.fsr$setProperties(B)
},css:function(B,A){return new FSR.Element("link",FSR.$merge({rel:"stylesheet",media:"screen",type:"text/css",href:FSR.Asset.src(B)},A)).fsr$inject(document.getElementsByTagName("head")[0])
}});FSR.Browser.set("Popup",new FSR.Class({Implements:[FSR.Options,FSR.Events],options:{width:500,height:300,x:50,y:50,toolbar:0,location:0,directories:0,status:0,scrollbars:"auto",resizable:1,name:"popup",blur:false,menubar:1},initialize:function(B,A){this.url=B||false;
this.setOptions(A);if(this.url){this.openWin()}},openWin:function(B){B=B||this.url;var A="toolbar="+this.options.toolbar+",location="+this.options.location+",directories="+this.options.directories+",status="+this.options.status+",scrollbars="+this.options.scrollbars+",resizable="+this.options.resizable+",width="+this.options.width+",height="+this.options.height+",top="+this.options.y+",left="+this.options.x+",menubar="+this.options.menubar;
this.window=window.open(B,this.options.name,A);if(!this.window){this.window=window.open("",this.options.name,A);
this.window.location.href=B}if(!this.options.blur){this.focus.fsr$delay(100,this)}else{this.window.blur()
}return this},focus:function(){if(this.window){this.window.focus()}else{if(this.focusTries<10){this.focus.delay(100,this)
}else{this.blocked=true;this.fsr$fireEvent("onBlock")}}return this},focusTries:0,blocked:null,close:function(){this.window.close();
return this}}));FSR.RemoteEvent=new FSR.Class({Implements:[FSR.Events,FSR.Options],options:{host:"",path:"",url:""},initialize:function(B,A){this.setOptions(A);
this.event=B;this.ver=0},onStateChange:function(A){if(!this.running){return }this.running=false;this.status=0;
FSR.$try(function(){this.status=A}.fsr$bind(this));if(this.isSuccess()){this.success()}else{this.failure()
}},isSuccess:function(){return(this.status==1)},success:function(){this.onSuccess()},onSuccess:function(){this.fsr$fireEvent("success")
},failure:function(){this.onFailure()},onFailure:function(){if(this.ver<3){this._send()}else{this.fsr$fireEvent("failure")
}},send:function(A){this.values=A;this._send()},_send:function(){this.running=true;this.ver=this.ver+1;
var A=this;var C=FSR.Hash.toQueryString(this.values);var B=document.location.protocol+"//"+this.options.host+this.options.path+this.options.url+"?event="+this.event+"&"+C+"&uid="+FSR.$time()+"&ver="+this.ver;
new FSR.Asset.image(B,{onload:function(D){A.onStateChange(1)},onerror:function(){A.onStateChange(0)
},onabort:function(){A.onStateChange(0)}});return this}});FSR.CPPS=new FSR.Hash({set:function(B,C,D){var D=(D||FSR.c());
var A=D.get("cp")||{};A[B]=C;D.set("cp",A)},get:function(B,C){var C=(C||FSR.c());var A=C.get("cp")||{};
return A[B]},erase:function(B,C){var C=(C||FSR.c());var A=C.get("cp")||{};delete A[B];C.set("cp",A)
},append:function(B,C,D){var D=(D||FSR.c());var A=D.get("cp")||{};A[B]=A[B]?A[B]+","+C:C;D.set("cp",A)
},toQueryString:function(M){var M=(M||FSR.c());var K=M.get("sd");var J=FSR.$defined(K)?FSR.surveydefs[K]:FSR.sd;
var F=M.get("browser");var A={browser:FSR.Browser.Type.name+" "+FSR.Browser.Type.version,os:FSR.Browser.Platform.os,pv:M.get("pv"),url:M.get("c")||"",ref_url:M.get("ru")||"",locale:M.get("l")||"",site:FSR.site.name||"",section:J.section||"",referrer:M.get("r")||"",terms:M.get("st")||"",sessionid:M.get("rid")||"",replay_id:M.get("mid")||"",flash:FSR.Browser.Plugins.Flash.version};
if(FSR.$P().analytics.google){var H=FSR.Cookie.read("__utma",{path:"/",domain:FSR.site.domain||false});
var E=FSR.Cookie.read("__utmz",{path:"/",domain:FSR.site.domain||false});if(H&&H!=""){var C=H.split(".");
A.first=C[2];A.last=C[3];A.current=C[4];A.visits=C[5]}if(E&&E!=""){var B;if(B=E.match(/utmgclid=([^\|]*)/)){A.source="Google";
A.campaign="Google Adwords";A.medium="cpc"}else{if(B=E.match(/utmcsr=([^\|]*)/)){A.source=B[1]}if(B=E.match(/utmccn=([^\|]*)/)){A.campaign=B[1]
}if(B=E.match(/utmcmd=([^\|]*)/)){A.medium=B[1]}}if(B=E.match(/utmctr=([^\|]*)/)){A.keyword=B[1]}}}var G=M.get("cp")||{};
var D=new FSR.Hash(G);var I=A||{};for(k in I){D.set(k,I[k])}var L=D.toQueryString("cpp");return L
}});FSR.Service=new FSR.Class({Implements:[FSR.Events,FSR.Options],options:{},initialize:function(A){this.setOptions(A)
},onStateChange:function(A){if(!this.running){return }this.running=false;this.status=0;FSR.$try(function(){this.status=A
}.fsr$bind(this));if(this.status==1){this.success()}else{if(this.status==0){this.failure()}else{if(this.status==-1){this.error()
}}}},success:function(){this.onSuccess()},onSuccess:function(){this.fsr$fireEvent("complete").fsr$fireEvent("success")
},failure:function(){this.onFailure()},onFailure:function(){this.fsr$fireEvent("complete").fsr$fireEvent("failure")
},error:function(){this.onError()},onError:function(){this.fsr$fireEvent("complete").fsr$fireEvent("error")
},ping:function(){this.running=true;var B=this;var D=this.options.params||{};D.protocol=document.location.protocol;
D.uid=FSR.$time();var A=FSR.Hash.toQueryString(D);var C=document.location.protocol+"//"+this.options.host+this.options.path+this.options.url+"?"+A;
new FSR.Asset.image(C,{onload:function(E){if(E.width==B.options.success){B.onStateChange(1)}else{B.onStateChange(0)
}},onerror:function(){B.onStateChange(-1)},onabort:function(){B.onStateChange(0)}});return this},cancel:function(){if(!this.running){return this
}this.running=false;this.fsr$fireEvent("cancel");return this}});FSR.RR=new FSR.Hash({hasRR:function(){if(typeof robotreplay!="undefined"){return true
}return false},setOKTransmit:function(){if(this.hasRR()){var A=robotreplay.Session.rr_group_session_id;
robotreplay.Log.setOKTransmit();FSR.c().set("mid",A)}},recordEvent:function(A,B){if(this.hasRR()){robotreplay.Log.push(A,B)
}},cancelRecord:function(){if(this.hasRR()){robotreplay.Log.cancelRecord()}},getPosition:function(A){if(this.hasRR()){return robotreplay.Dom.getAbsoluteCoords(document.getElementById(A))
}else{return{position:false}}}});FSR.services={survey:{host:"survey.foreseeresults.com",path:"/survey",url:"/display"},check:{host:"controller2.foreseeresults.com",path:"/fsrSurvey",url:"/OTCImg",success:3},event:{host:"events.foreseeresults.com",path:"/rec",url:"/process"},domain:{host:"survey.foreseeresults.com",path:"/survey",url:"/FSRImg",success:3}};
FSR.UnsupportedBrowsers={Explorer:5.5,Safari:2,Firefox:1.4};FSR.SupportedPlatforms={win32:true,mac:true,linux:true,iphone:false,blackberry:false,wince:false,other:false};
FSR.$P=function(){return FSR.properties};FSR.c=function(){return new FSR.Hash.Cookie("fsr."+(FSR.site.cookie||"s"),{path:"/",domain:FSR.site.domain||false})
};FSR.log=function(D,C){if(!FSR.$P().events.enabled){return }var E=FSR.c();var A=E.get("sd");var B=FSR.$defined(A)?FSR.surveydefs[A]:FSR.sd;
new FSR.RemoteEvent("logit",{host:FSR.services.event.host,path:FSR.services.event.path,url:FSR.services.event.url}).send({cid:FSR.id,rid:E.get("rid")||"",cat:B.name,sec:B.section||"",type:E.get("q")||"",site:FSR.site.name||"",lang:E.get("l")||FSR.$S.locale||"",msg:D,param:C,tms:new Date().getTime(),tmz:new Date().getTimezoneOffset()*60000})
};FSR.popNow=function(A){FSR.pop(A,"now")};FSR.popLater=function(A){FSR.pop(A,"later")};FSR.popImmediate=function(){FSR.pop(100,"now")
};FSR.popFeedback=function(){FSR.controller.execute(FSR.controller.popFeedback)};FSR.run=function(){FSR.controller.execute(FSR.controller.run)
};FSR.pop=function(C,A,B){FSR.controller.execute(FSR.controller.popAttach,{sp:C,when:A,qualifier:B,invite:false})
};FSR.invite=function(C,A,B){FSR.controller.execute(FSR.controller.popAttach,{sp:C,when:A,qualifier:B,invite:true})
};FSR.close=function(){FSR.controller.cancelTracker()};var ForeSee={CPPS:{fsr$set:function(A,B){FSR.CPPS.set(A,B)
}}};FSR.generateid=function(){var A="";A=((new Date())-0)+"_"+Math.round(Math.random()*1000000);return A
};FSR.getParameter=function(B){B=B.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var A="[\\?&]"+B+"=([^&#]*)";
var D=new RegExp(A);var C=D.exec(window.location.href);if(C==null){return""}else{return C[1]}};FSR.staticLoadScript=function(A){document.write('<script src="',A,'" type="text/JavaScript"><\/script>')
};(function(){FSR.siteid=FSR.getParameter("siteid");FSR.site=FSR.sites[FSR.siteid];if(!FSR.site.name){FSR.site.name=FSR.getParameter("name")
}if(!FSR.site.domain){FSR.site.domain=FSR.getParameter("domain")}if(FSR.site.domain=="default"){FSR.site.domain=false
}var C=["files","js_files","image_files","html_files","css_files"];for(var B=0,A=C.length;B<A;B++){if(FSR.site[C[B]]){FSR[C[B]]=FSR.site[C[B]]
}}})();FSR.TrackerController=new FSR.Class({Implements:FSR.Options,options:{},R:{START:1,CPPS:2,END:3},initialize:function(A){this.setOptions(A);
this.surveyshown=false;FSR.controller=this},load:function(){fsr$dbug.log("Tracker: load");if(FSR.Browser.Type.name!="Chrome"){$fsr("hide").style.display="block"
}if(this.running){return this}this.running=true;var A=this;new FSR.Asset.javascript((FSR.js_files||FSR.files)+"foresee-surveydef.js",{id:"foresee-survey",onload:function(){fsr$dbug.log("Survey Definitions Loaded.");
A.run()}})},run:function(){fsr$dbug.log("Tracker: site="+FSR.site.cookie);FSR.c().set("t","1");this.setAlive();
this.palive=FSR.Cookie.read("fsr.a",{path:"/",domain:FSR.site.domain||false});this.lastseen=FSR.$time();
var A=this;this.timer=(function(){A.check()}).fsr$periodical(500);return this},unload:function(){fsr$dbug.log("Tracker: unload");
if(!this.running){return this}this.running=false;if(!this.surveyshown){FSR.log(201);FSR.$pause(1000)
}FSR.$clear(this.timer);FSR.c().erase("t");return this},check:function(){var B=FSR.Cookie.read("fsr.a",{path:"/",domain:FSR.site.domain||false});
var F=FSR.c();var D=F.get("fo")||0;var A=F.get("pa")||0;var C=F.get("to")||FSR.$P().tracker.timeout;
if(B==this.palive){try{if(window.opener.document){return }}catch(E){}if(A!="1"){fsr$dbug.log("Tracker: Blank for "+((FSR.$time()-this.lastseen)/1000)+" (timeout="+C+")");
if(((FSR.$time()-this.lastseen)/1000)>=C){FSR.$clear(this.timer);this.process()}}else{fsr$dbug.log("Tracker: Paused for "+((FSR.$time()-this.lastseen)/1000)+" (timeout="+C+")");
if(((FSR.$time()-this.lastseen)/1000)>=FSR.$P().tracker.pause){FSR.$clear(this.timer);this.process()
}}}else{if(D==1){FSR.$clear(this.timer);this.process()}else{this.palive=B;this.lastseen=FSR.$time()
}}},process:function(A){this.surveyshown=true;this.configure();switch(A){case this.R.CPPS:this.launch();
break;default:this.launch();break}},configure:function(B){var D=FSR.surveydefs;var E=FSR.c();var A=E.get("sd");
var C=D[A];C.idx=A;C.survey=FSR.$merge(FSR.$P().survey,C.survey||{});C.qualifier=FSR.$merge(FSR.$P().qualifier,C.qualifier||{});
C.pop=FSR.$merge(FSR.$P().pop,C.pop||{});this.sd=C},launch:function(){FSR.c().set("s",1);if(this.sd.pop.what!="qualifier"){this.popSurvey()
}else{this.popQualifier()}},popSurvey:function(){var I=FSR.c();FSR.log(400,I.get("c")||"");var F=FSR.services.survey;
var H=this.sd.survey;var C=(window.screen.width-H.width)/2;var K=(window.screen.height-H.height)/2;
var L=document.location.protocol;var M=F.host;var N=F.path;var B=I.get("rid")||FSR.generateid();var J=this.hash(B);
var G=I.get("c")||"";var D=new FSR.Hash({sid:this.sid(),cid:FSR.id,pattern:G,a:B,b:J,c:24*60*60*1000,version:FSR.version}).toQueryString();
var E=FSR.CPPS.toQueryString();var A=L+"//"+M+N+F.url+"?"+D+"&"+E;if(H.loading){this.page(FSR.$P().loading);
A=(FSR.html_files||FSR.files)+FSR.$P().loading.url+"?url="+A}this.pop(A,C,K,H.width,H.height)},popQualifier:function(){FSR.log(300,FSR.c().get("c")||"");
var F=this.sd.qualifier;this.page(F);var D=(window.screen.width-F.width)/2;var C=(window.screen.height-F.height)/2;
var A=(FSR.html_files||FSR.files)+(F.url.pop||F.url);var B={siteid:FSR.siteid,name:FSR.site.name,domain:FSR.site.domain};
if(this.sd.pop.later){B.when=this.sd.pop.later}var E=new FSR.Hash(B).toQueryString();A=A+"?"+E;this.pop(A,D,C,F.width,F.height)
},pop:function(B,E,D,C,A){var F=FSR.$P().tracker;if(FSR.Browser.Type.name=="Firefox"||FSR.Browser.Type.name=="Chrome"){if(F.alert.enabled){this.page(F.alert);
alert(F.alert.message)}}(function(){window.moveTo(E,D);window.resizeTo(C,A);window.focus();document.location.href=B
}).fsr$delay(0)},sid:function(){var G=FSR.c();var B=this.sd.name;var C=this.sd.site;if(C){B=B+"-"+C
}var E=this.sd.section;if(E){B=B+"-"+E}var A=this.sd.pop.later;if(A){B=B+"-"+A}var D=G.get("q");if(D){B=B+"-"+D
}var F=G.get("l");if(F){B=B+"-"+F}return B},page:function(E){var B=FSR.c().get("l");if(!B){return 
}var D=E.locales||[];for(var C=0,A=D.length;C<A;C++){if(D[C].locale==B){if(D[C].url){E.url=D[C].url
}if(D[C].message){E.message=D[C].message}if(D[C].accept){E.accept=D[C].accept}if(D[C].decline){E.decline=D[C].decline
}if(D[C].width){E.width=D[C].width}if(D[C].height){E.height=D[C].height}break}}},processCPPS:function(){var E=FSR.c();
var A=E.get("cp")||{};var C=E.get("browser");var D={browser:C.name+" "+C.version+" on "+C.platform,url:E.get("c")||"",pv:E.get("pv"),locale:E.get("l")||""};
for(k in D){A[k]=D[k]}var B=this;new FSR.RemoteEvent("processcpps",{host:FSR.services.event.host,path:FSR.services.event.path,url:FSR.services.event.url,onSuccess:function(){B.process(B.R.CPPS)
},onFailure:function(){}}).send({id:"fsr."+FSR.site.cookie,cpps:FSR.JSON.encode(A)})},setAlive:function(){var A=new Date().getTime();
document.cookie="fsr.a="+A+";path=/;domain="+FSR.site.domain+";"},hash:function(B){var A=B.split("_");
return((A[0]*3)+1357)+""+((A[1]*9)+58)}});new FSR.TrackerController({});window.fsr$addEvent("domready",function(){fsr$dbug.log("Tracker: domready");
(function(){FSR.controller.load()}).fsr$delay(1)});window.fsr$addEvent("unload",function(){fsr$dbug.log("Tracker: unload");
FSR.controller.unload()});
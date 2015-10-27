/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-applicationcache-backgroundblendmode-backgroundsize-batteryapi-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-canvas-checked-contenteditable-contextmenu-cookies-cssanimations-csscolumns-cssfilters-cssgradients-csshyphens_softhyphens_softhyphensfind-cssmask-csstransforms-displaytable-ellipsis-flexbox-fontface-htmlimports-ie8compat-json-lastchild-mediaqueries-multiplebgs-notification-nthchild-opacity-overflowscrolling-placeholder-search-svg-svgfilters-video-prefixedcss-shiv !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,a,s;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=r:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=r),y.push((r?"":"no-")+s.join("-"))}}function o(e){var t=k.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?k.className.baseVal=t:k.className=t)}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){if("object"==typeof e)for(var n in e)M(e,n)&&d(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function c(){var e=t.body;return e||(e=s(w?"svg":"body"),e.fake=!0),e}function u(e,n,i,r){var o,a,l,d,u="modernizr",f=s("div"),p=c();if(parseInt(i,10))for(;i--;)l=s("div"),l.id=r?r[i]:u+(i+1),f.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=d,k.offsetHeight):f.parentNode.removeChild(f),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?p(r,n||t):r);return!1}function h(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(a(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+a(t[r])+":"+i+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function b(e,t,r,o){function a(){c&&(delete A.style,delete A.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var d=h(e,r);if(!i(d,"undefined"))return d}for(var c,u,p,m,b,g=["modernizr","tspan"];!A.style;)c=!0,A.modElem=s(g.shift()),A.style=A.modElem.style;for(p=e.length,u=0;p>u;u++)if(m=e[u],b=A.style[m],f(m,"-")&&(m=l(m)),A.style[m]!==n){if(o||i(r,"undefined"))return a(),"pfx"==t?m:!0;try{A.style[m]=r}catch(v){}if(A.style[m]!=b)return a(),"pfx"==t?m:!0}return a(),!1}function g(e,t,n,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(a+" ")+a).split(" ");return i(t,"string")||i(t,"undefined")?b(s,t,r,o):(s=(e+" "+L.join(a+" ")+a).split(" "),m(s,t,n))}function v(e,t,i){return g(e,n,n,t,i)}var y=[],x=[],T={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("notification","Notification"in e&&"permission"in e.Notification&&"requestPermission"in e.Notification),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var k=t.documentElement;Modernizr.addTest("contextmenu","contextMenu"in k&&"HTMLMenuItemElement"in e);var w="svg"===k.nodeName.toLowerCase();w||!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,d(t)}function o(e){var t=v[e[b]];return t||(t={},g++,e[b]=g,v[g]=t),t}function a(e,n,i){if(n||(n=t),u)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():h.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||m.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),a=0,s=i(),l=s.length;l>a;a++)r.createElement(s[a]);return r}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function d(e){e||(e=t);var i=o(e);return!y.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,i),e}var c,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,u=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:d,createElement:a,createDocumentFragment:s,addElements:r};e.html5=y,d(t),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("contenteditable",function(){if("contentEditable"in k){var e=s("div");return e.contentEditable=!0,"true"===e.contentEditable}}),Modernizr.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("bgpositionshorthand",function(){var e=s("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea"));var C=function(e){function n(t,n){var r;return t?(n&&"string"!=typeof n||(n=s(n||"div")),t="on"+t,r=t in n,!r&&i&&(n.setAttribute||(n=s("div")),n.setAttribute(t,""),r="function"==typeof n[t],n[t]!==e&&(n[t]=e),n.removeAttribute(t)),r):!1}var i=!("onblur"in t.documentElement);return n}();T.hasEvent=C,Modernizr.addTest("inputsearchevent",C("search"));var S=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];T._prefixes=S,Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=S.length-1;o>r;r++)e=0===r?"to ":"",i+=t+S[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var a=s("a"),l=a.style;return l.cssText=i,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=s("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var E="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",E||_);var M;!function(){var e={}.hasOwnProperty;M=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=d}),d("htmlimports","import"in s("link"));var z=T.testStyles=u;Modernizr.addTest("checked",function(){return z("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=s("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),z("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var N=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=533>t&&e.match(/android/gi);return n||r||i}();N?Modernizr.addTest("fontface",!1):z('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}),z("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),z("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){Modernizr.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;return n})},5);var P=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=P,Modernizr.addTest("mediaqueries",P("only all"));var R="Moz O ms Webkit",j=T._config.usePrefixes?R.split(" "):[];T._cssomPrefixes=j;var B=function(t){var i,r=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var a=0;r>a;a++){var s=S[a],l=s.toUpperCase()+"_"+i;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};T.atRule=B;var L=T._config.usePrefixes?R.toLowerCase().split(" "):[];T._domPrefixes=L;var q={elem:s("modernizr")};Modernizr._q.push(function(){delete q.elem});var A={style:q.elem.style};Modernizr._q.unshift(function(){delete A.style}),T.testAllProps=g;var F=T.prefixed=function(e,t,n){return 0===e.indexOf("@")?B(e):(-1!=e.indexOf("-")&&(e=l(e)),t?g(e,t,n):g(e,"pfx"))};T.prefixedCSS=function(e){var t=F(e);return t&&a(t)};Modernizr.addTest("batteryapi",!!F("battery",navigator),{aliases:["battery-api"]}),Modernizr.addTest("backgroundblendmode",F("backgroundBlendMode","text")),T.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("bgrepeatround",v("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",v("backgroundRepeat","space")),Modernizr.addTest("bgpositionxy",function(){return v("backgroundPositionX","3px",!0)&&v("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",v("backgroundSize","cover")),Modernizr.addTest("borderimage",v("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=v("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("ellipsis",v("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return v("filter","blur(2px)");var e=s("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=s("div"),n=s("span"),i=e.style,r=0,o=0,a=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+S.join("hyphens:auto; "),a=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),a}catch(d){return!1}}function o(e,n){try{var i=s("div"),r=s("span"),o=i.style,a=0,l=!1,d=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,u),r.innerHTML="mm",a=r.offsetHeight,r.innerHTML="m"+e+"m",d=r.offsetHeight>a,n?(r.innerHTML="m<br />m",a=r.offsetWidth,r.innerHTML="m"+e+"m",c=r.offsetWidth>a):c=!0,d===!0&&c===!0&&(l=!0),t.body.removeChild(i),i.removeChild(r),l}catch(f){return!1}}function a(n){try{var i,r=s("input"),o=s("div"),a="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;if(o.innerHTML=a+n+a,t.body.insertBefore(o,d),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select()),e.find)l=e.find(a+a);else try{i=e.self.document.body.createTextRange(),l=i.findText(a+a)}catch(c){l=!1}return t.body.removeChild(o),t.body.removeChild(r),l}catch(c){return!1}}return t.body||t.getElementsByTagName("body")[0]?(d("csshyphens",function(){if(!v("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),d("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void d("softhyphensfind",function(){try{return a("&#173;")&&a("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",v("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",v("overflowScrolling","touch",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),r(),o(y),delete T.addTest,delete T.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);
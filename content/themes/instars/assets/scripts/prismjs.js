!function i(s,l,o){function c(t,e){if(!l[t]){if(!s[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=l[t]={exports:{}};s[t][0].call(r.exports,function(e){return c(s[t][1][e]||e)},r,r.exports,i,s,l,o)}return l[t].exports}for(var u="function"==typeof require&&require,e=0;e<o.length;e++)c(o[e]);return c}({1:[function(e,t,a){!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var a={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:["markup","csharp"],bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",glsl:"clike",gml:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike"],"js-extras":"javascript","js-templates":"javascript",jsonp:"json",json5:"json",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",markdown:"markup","markup-templating":"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:["clike","markup-templating"],phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],qml:"javascript",qore:"clike",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",swift:"clike",tap:"yaml",textile:"markup",tt2:["clike","markup-templating"],twig:"markup",typescript:"javascript","t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","visual-basic"],vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup",xquery:"markup"},r={html:"markup",xml:"markup",svg:"markup",mathml:"markup",js:"javascript",g4:"antlr4",adoc:"asciidoc",shell:"bash",rbnf:"bnf",cs:"csharp",dotnet:"csharp",coffee:"coffeescript",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",gamemakerlanguage:"gml",hs:"haskell",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",objectpascal:"pascal",px:"pcaxis",py:"python",robot:"robotframework",rb:"ruby",rq:"sparql",trig:"turtle",ts:"typescript",t4:"t4-cs",vb:"visual-basic",xeoracube:"xeora",yml:"yaml"},p={},e="components/",t=Prism.util.currentScript();if(t){var n=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i,i=/[\w-]+\.(?:min\.)js$/i;if(t.hasAttribute("data-autoloader-path"))e=t.getAttribute("data-autoloader-path").trim().replace(/\/?$/,"/");else{var s=t.src;n.test(s)?e=s.replace(n,"components/"):i.test(s)&&(e=s.replace(i,"components/"))}}var g=Prism.plugins.autoloader={languages_path:e,use_minified:!0,loadLanguages:d};Prism.hooks.add("complete",function(e){e.element&&e.language&&!e.grammar&&"none"!==e.language&&function(e,t){e in r&&(e=r[e]);var a=t.getAttribute("data-dependencies"),n=t.parentElement;!a&&n&&"pre"===n.tagName.toLowerCase()&&(a=n.getAttribute("data-dependencies")),d(a=a?a.split(/\s*,\s*/g):[],function(){l(e,function(){Prism.highlightElement(t)})})}(e.language,e.element)})}function d(e,t,a){"string"==typeof e&&(e=[e]);var n=e.length,r=0,i=!1;function s(){i||++r===n&&t&&t(e)}0!==n?e.forEach(function(e){l(e,s,function(){i||(i=!0,a&&a(e))})}):t&&setTimeout(t,0)}function l(l,o,c){var u=0<=l.indexOf("!");l=l.replace("!",""),l=r[l]||l;function e(){var e,t,a,n,r,i=p[l];if((i=i||(p[l]={callbacks:[]})).callbacks.push({success:o,error:c}),!u&&Prism.languages[l])m(l,"success");else if(!u&&i.error)m(l,"error");else if(u||!i.loading){i.loading=!0;var s=(r=l,g.languages_path+"prism-"+r+(g.use_minified?".min":"")+".js");e=s,t=function(){i.loading=!1,m(l,"success")},a=function(){i.loading=!1,i.error=!0,m(l,"error")},(n=document.createElement("script")).src=e,n.async=!0,n.onload=function(){document.body.removeChild(n),t&&t()},n.onerror=function(){document.body.removeChild(n),a&&a()},document.body.appendChild(n)}}var t=a[l];t&&t.length?d(t,e,c):e()}function m(e,t){if(p[e]){for(var a=p[e].callbacks,n=0,r=a.length;n<r;n++){var i=a[n][t];i&&setTimeout(i,0)}a.length=0}}}()},{}],2:[function(e,t,a){(function(e){var c=function(c){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,C={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof O?new O(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function a(e,n){var r,t,i=C.util.type(e);switch(n=n||{},i){case"Object":if(t=C.util.objId(e),n[t])return n[t];for(var s in r={},n[t]=r,e)e.hasOwnProperty(s)&&(r[s]=a(e[s],n));return r;case"Array":return(t=C.util.objId(e),n[t])?n[t]:(r=[],n[t]=r,e.forEach(function(e,t){r[t]=a(e,n)}),r);default:return e}},getLanguage:function(e){for(;e&&!u.test(e.className);)e=e.parentElement;return e?(e.className.match(u)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(t){var a=document.getElementsByTagName("script");for(var n in a)if(a[n].src==t)return a[n]}return null}}},languages:{extend:function(e,t){var a=C.util.clone(C.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(a,e,t,n){var r=(n=n||C.languages)[a],i={};for(var s in r)if(r.hasOwnProperty(s)){if(s==e)for(var l in t)t.hasOwnProperty(l)&&(i[l]=t[l]);t.hasOwnProperty(s)||(i[s]=r[s])}var o=n[a];return n[a]=i,C.languages.DFS(C.languages,function(e,t){t===o&&e!=a&&(this[e]=i)}),i},DFS:function e(t,a,n,r){r=r||{};var i=C.util.objId;for(var s in t)if(t.hasOwnProperty(s)){a.call(t,s,t[s],n||s);var l=t[s],o=C.util.type(l);"Object"!==o||r[i(l)]?"Array"!==o||r[i(l)]||(r[i(l)]=!0,e(l,a,s,r)):(r[i(l)]=!0,e(l,a,null,r))}}},plugins:{},highlightAll:function(e,t){C.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),C.hooks.run("before-all-elements-highlight",n);for(var r,i=0;r=n.elements[i++];)C.highlightElement(r,!0===t,n.callback)},highlightElement:function(e,t,a){var n=C.util.getLanguage(e),r=C.languages[n];e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+n;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(u,"").replace(/\s+/g," ")+" language-"+n);var s={element:e,language:n,grammar:r,code:e.textContent};function l(e){s.highlightedCode=e,C.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,C.hooks.run("after-highlight",s),C.hooks.run("complete",s),a&&a.call(s.element)}if(C.hooks.run("before-sanity-check",s),!s.code)return C.hooks.run("complete",s),void(a&&a.call(s.element));if(C.hooks.run("before-highlight",s),s.grammar)if(t&&c.Worker){var o=new Worker(C.filename);o.onmessage=function(e){l(e.data)},o.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else l(C.highlight(s.code,s.grammar,s.language));else l(C.util.encode(s.code))},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};return C.hooks.run("before-tokenize",n),n.tokens=C.tokenize(n.code,n.grammar),C.hooks.run("after-tokenize",n),O.stringify(C.util.encode(n.tokens),n.language)},matchGrammar:function(e,t,a,n,r,i,s){for(var l in a)if(a.hasOwnProperty(l)&&a[l]){var o=a[l];o=Array.isArray(o)?o:[o];for(var c=0;c<o.length;++c){if(s&&s==l+","+c)return;var u=o[c],p=u.inside,g=!!u.lookbehind,d=!!u.greedy,m=0,f=u.alias;if(d&&!u.pattern.global){var h=u.pattern.toString().match(/[imsuy]*$/)[0];u.pattern=RegExp(u.pattern.source,h+"g")}u=u.pattern||u;for(var k=n,y=r;k<t.length;y+=t[k].length,++k){var v=t[k];if(t.length>e.length)return;if(!(v instanceof O)){if(d&&k!=t.length-1){if(u.lastIndex=y,!(A=u.exec(e)))break;for(var b=A.index+(g&&A[1]?A[1].length:0),F=A.index+A[0].length,x=k,w=y,j=t.length;x<j&&(w<F||!t[x].type&&!t[x-1].greedy);++x)(w+=t[x].length)<=b&&(++k,y=w);if(t[k]instanceof O)continue;$=x-k,v=e.slice(y,w),A.index-=y}else{u.lastIndex=0;var A=u.exec(v),$=1}if(A){g&&(m=A[1]?A[1].length:0);F=(b=A.index+m)+(A=A[0].slice(m)).length;var S=v.slice(0,b),_=v.slice(F),E=[k,$];S&&(++k,y+=S.length,E.push(S));var P=new O(l,p?C.tokenize(A,p):A,f,A,d);if(E.push(P),_&&E.push(_),Array.prototype.splice.apply(t,E),1!=$&&C.matchGrammar(e,t,a,k,y,!0,l+","+c),i)break}else if(i)break}}}}},tokenize:function(e,t){var a=[e],n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}return C.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=C.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=C.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}},Token:O};function O(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(c.Prism=C,O.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return O.stringify(e,t)}).join("");var a={type:e.type,content:O.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var n=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,n)}C.hooks.run("wrap",a);var r=Object.keys(a.attributes).map(function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(r?" "+r:"")+">"+a.content+"</"+a.tag+">"},!c.document)return c.addEventListener&&(C.disableWorkerMessageHandler||c.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,n=t.code,r=t.immediateClose;c.postMessage(C.highlight(n,C.languages[a],a)),r&&c.close()},!1)),C;var e=C.util.currentScript();if(e&&(C.filename=e.src,e.hasAttribute("data-manual")&&(C.manual=!0)),!C.manual){function a(){C.manual||C.highlightAll()}var n=document.readyState;"loading"===n||"interactive"===n&&e&&e.defer?document.addEventListener("DOMContentLoaded",a):window.requestAnimationFrame?window.requestAnimationFrame(a):window.setTimeout(a,16)}return C}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});void 0!==t&&t.exports&&(t.exports=c),void 0!==e&&(e.Prism=c),c.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.languages.markup.tag.inside["attr-value"].inside.entity=c.languages.markup.entity,c.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(c.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:c.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:c.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:n},c.languages.insertBefore("markup","cdata",r)}}),c.languages.xml=c.languages.extend("markup",{}),c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(c),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{"class-name":[c.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),c.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,c.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:c.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:c.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:c.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:c.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),c.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.markup.tag.addInlined("script","javascript"),c.languages.js=c.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var t,a=e.getAttribute("data-src"),n=e,r=/\blang(?:uage)?-([\w-]+)\b/i;n&&!r.test(n.className);)n=n.parentNode;if(n&&(t=(e.className.match(r)||[,""])[1]),!t){var i=(a.match(/\.(\w+)$/)||[,""])[1];t=o[i]||i}var s=document.createElement("code");s.className="language-"+t,e.textContent="",s.textContent="Loading…",e.appendChild(s);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,c.highlightElement(s),e.setAttribute("data-src-loaded","")):400<=l.status?s.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:s.textContent="✖ Error: File does not exist or is empty")},l.send(null)}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,t,a){"use strict";e("prismjs"),e("prismjs/plugins/autoloader/prism-autoloader"),"undefined"!=typeof sitePrismJscomponents&&(Prism.plugins.autoloader.languages_path=sitePrismJscomponents)},{prismjs:2,"prismjs/plugins/autoloader/prism-autoloader":1}]},{},[3]);
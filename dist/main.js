var Client=function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t,o){"use strict";var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function s(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],a=0;a<e.length;a++){var r=e[a],l=t.base?r[0]+t.base:r[0],c=o[l]||0,f="".concat(l," ").concat(c);o[l]=c+1;var d=s(f),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(i[d].references++,i[d].updater(u)):i.push({identifier:f,updater:h(u,t),references:1}),n.push(f)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=o.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var f,d=(f=[],function(e,t){return f[e]=t,f.filter(Boolean).join("\n")});function u(e,t,o,n){var a=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function p(e,t,o){var n=o.css,a=o.media,r=o.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,g=0;function h(e,t){var o,n,a;if(t.singleton){var r=g++;o=m||(m=c(t)),n=u.bind(null,o,r,!1),a=u.bind(null,o,r,!0)}else o=c(t),n=p.bind(null,o,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var a=s(o[n]);i[a].references--}for(var r=l(e,t),c=0;c<o.length;c++){var f=s(o[c]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}o=r}}}},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var a=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(r).concat([a]).join("\n")}var i,s,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&a[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},function(e,t,o){var n=o(0),a=o(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(a,r);e.exports=a.locals||{}},function(e,t,o){(t=o(1)(!1)).push([e.i,'body{background:#fffff8;font-family:-apple-system,BlinkMacSystemFont,sans-serif}body #app{display:grid;grid-auto-rows:minmax(150px, auto);grid-template-columns:auto;height:110vh;background:#f23557;color:#f0d43a;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald",sans-serif}body .holder{border:#000 1px solid}body .output{background:rgba(59,74,107,.4)}body label{display:block;font-size:27px}body input{display:block;height:60px;width:320px;background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;border:none}body button{width:400px;height:100px;background:#3b4a6b;color:#f0d43a;font-size:26px;font-family:"Oswald",sans-serif;border:none;box-shadow:2px 4px 5px #444}body h1{font-size:36px}body textarea{background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;position:relative;margin-bottom:-2em}body input:focus,body select:focus,body textarea:focus,body button:focus{outline:none}body ::placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}body :-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}body ::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}',""]),e.exports=t},function(e,t,o){var n=o(0),a=o(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(a,r);e.exports=a.locals||{}},function(e,t,o){(t=o(1)(!1)).push([e.i,'.headline{display:flex;background-color:#fff;width:100%;height:100%;font-family:"Oswald",sans-serif;font-size:30px}',""]),e.exports=t},function(e,t,o){var n=o(0),a=o(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(a,r);e.exports=a.locals||{}},function(e,t,o){(t=o(1)(!1)).push([e.i,'body{background:#fffff8;font-family:-apple-system,BlinkMacSystemFont,sans-serif}#app{display:grid;grid-auto-rows:minmax(150px, auto);grid-template-columns:auto;height:110vh;background:#f23557;color:#f0d43a;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald",sans-serif}.entry{background:rgba(59,74,107,.4)}label{display:block;font-size:27px}input{display:block;height:60px;width:320px;background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;border:none}button{width:400px;height:100px;background:#3b4a6b;color:#f0d43a;font-size:26px;font-family:"Oswald",sans-serif;border:none;box-shadow:2px 4px 5px #444}h1{font-size:36px}textarea{background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;position:relative;margin-bottom:-2em}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}:-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}',""]),e.exports=t},function(e,t,o){var n=o(0),a=o(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(a,r);e.exports=a.locals||{}},function(e,t,o){(t=o(1)(!1)).push([e.i,'body{background:#fffff8;font-family:-apple-system,BlinkMacSystemFont,sans-serif}#app{display:grid;grid-auto-rows:minmax(150px, auto);grid-template-columns:auto;height:110vh;background:#f23557;color:#f0d43a;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald",sans-serif}.entry{background:rgba(59,74,107,.4)}label{display:block;font-size:27px}input{display:block;height:60px;width:320px;background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;border:none}button{width:400px;height:100px;background:#3b4a6b;color:#f0d43a;font-size:26px;font-family:"Oswald",sans-serif;border:none;box-shadow:2px 4px 5px #444}h1{font-size:36px}textarea{background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;position:relative;margin-bottom:-2em}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}:-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}',""]),e.exports=t},function(e,t,o){var n=o(0),a=o(11);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(a,r);e.exports=a.locals||{}},function(e,t,o){(t=o(1)(!1)).push([e.i,'body{background:#fffff8;font-family:-apple-system,BlinkMacSystemFont,sans-serif}#app{display:grid;grid-auto-rows:minmax(150px, auto);grid-template-columns:auto;height:110vh;background:#f23557;color:#f0d43a;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald",sans-serif}.entry{background:rgba(59,74,107,.4)}label{display:block;font-size:27px}input{display:block;height:60px;width:320px;background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;border:none}button{width:400px;height:100px;background:#3b4a6b;color:#f0d43a;font-size:26px;font-family:"Oswald",sans-serif;border:none;box-shadow:2px 4px 5px #444}h1{font-size:36px}textarea{background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;position:relative;margin-bottom:-2em}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}:-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}',""]),e.exports=t},function(e,t,o){"use strict";o.r(t),o.d(t,"performAction",(function(){return n})),o.d(t,"getDataFromGeoNames",(function(){return a})),o.d(t,"getDataFromWeatherBit",(function(){return r})),o.d(t,"getDataFromPixabay",(function(){return i})),o.d(t,"updateUI",(function(){return s})),o.d(t,"postData",(function(){return l}));const n=async()=>{const e=document.getElementById("city").value,t=document.getElementsByClassName("myInput")[0].value,o=document.getElementsByClassName("myInput")[1].value;console.log("depart "+t+"return"+o);let n=new Date;const c=Math.floor((new Date(t).getTime()-n.getTime())/864e5),f=Math.ceil((new Date(o).getTime()-new Date(t).getTime())/864e5);document.getElementById("tripInfo").innerHTML=`Your trip is ${c} days away <br> Your trip will last ${f} days`,a(e).then(e=>l("http://localhost:3030/geonames",{latitude:e.geonames[0].lat,longitude:e.geonames[0].lng})).then(e=>{console.log("return from geoNames");return{lat:e[e.length-1].latitude,lng:e[e.length-1].longitude}}).then(({lat:e,lng:t})=>r(e,t)).then(e=>l("http://localhost:3030/weatherbit",{high:e.data[0].high_temp,low:e.data[0].low_temp,description:e.data[0].weather.description})).then(()=>(console.log("after post weatherData /weatherbit"),i(e))).then(e=>(console.log("data from pixabay "+JSON.stringify(e)),l("http://localhost:3030/pixabay",{image:e.hits[0].webformatURL}).then(s())))},a=async e=>{const t=`http://api.geonames.org/searchJSON?q=${e}&maxRows=1&username=sanny_1123`,o=await fetch(t);try{const e=await o.json();return console.log("getGeonames"),e}catch(e){console.log(e)}},r=async(e,t)=>{const o=`https://api.weatherbit.io/v2.0/forecast/daily?lat=${e}&lon=${t}&key=ddd41151e0cd42b9afbdc9d717234599`,n=await fetch(o);try{const e=await n.json();return console.log("getWeatherbit"),e}catch(e){console.log(e)}},i=async e=>{const t=`https://pixabay.com/api/?key=17559182-f8032d1d13ae61f3a89baa4b4&q=${e}&image_type=photo`,o=await fetch(t);try{const e=await o.json();return console.log("getPixabay"),e}catch(e){console.log(e)}},s=async()=>{const e=await fetch("http://localhost:3030/data");try{const t=await e.json();console.log("get all data "+JSON.stringify(t)),document.getElementById("content").innerHTML=`Weather Forecast <br> High: ${t[t.length-2].high}, Low: ${t[t.length-2].low} <br>  ${t[t.length-2].description}`,document.getElementById("image").src=t[t.length-1].image}catch(e){console.log(e)}},l=async(e="",t={})=>{const o=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{return await o.json()}catch(e){console.log("error",e)}};document.getElementById("generate").addEventListener("click",n);o(2),o(4),o(6),o(8),o(10);document.getElementById("generate").addEventListener("click",n)}]);
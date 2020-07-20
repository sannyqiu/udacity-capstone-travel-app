var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],s=t.base?a[0]+t.base:a[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var f=c(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:m(d,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,g=0;function m(e,t){var n,o,r;if(t.singleton){var a=g++;n=h||(h=l(t)),o=d.bind(null,n,a,!1),r=d.bind(null,n,a,!0)}else n=l(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=s(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'body{background:#fffff8;font-family:-apple-system,BlinkMacSystemFont,sans-serif}#app{display:grid;grid-auto-rows:minmax(150px, auto);grid-template-columns:auto;height:110vh;background:#f23557;color:#f0d43a;justify-content:center;grid-gap:1em;font-size:20px;font-family:"Oswald",sans-serif}.holder{border:#000 1px solid}.entry{background:rgba(59,74,107,.4)}label{display:block;font-size:27px}input{display:block;height:60px;width:320px;background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;border:none}button{width:400px;height:100px;background:#3b4a6b;color:#f0d43a;font-size:26px;font-family:"Oswald",sans-serif;border:none;box-shadow:2px 4px 5px #444}h1{font-size:36px}textarea{background:#22b2da;color:#f0d43a;font-size:20px;font-family:"Oswald",sans-serif;position:relative;margin-bottom:-2em}input:focus,select:focus,textarea:focus,button:focus{outline:none}::placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}:-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}::-ms-input-placeholder{color:#f0d43a;font-family:"Oswald",sans-serif}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"getDataFromGeoNames",(function(){return r})),n.d(t,"performAction",(function(){return o})),n.d(t,"getDataFromWeatherBit",(function(){return a}));const o=async()=>{r("london").then(e=>i("http://localhost:3030/geonames",{latitude:e.geonames[0].lat,longitude:e.geonames[0].lng})).then(e=>{console.log(JSON.stringify(e));const t=e[0].latitude,n=e[0].longitude;return console.log(`lat:${t}&&&&lng:${n}`),{lat:t,lng:n}}).then(({lat:e,lng:t})=>(console.log(`second lat:${e}&&&&lng:${t}`),a(e,t))).then(e=>{i("http://localhost:3030/weatherbit",{high:e.data[0].high_temp,low:e.data[0].low_temp,description:e.data[0].weather.description})}).then(e=>{console.log(JSON.stringify(e))})},r=async e=>{const t=`http://api.geonames.org/searchJSON?q=${e}&maxRows=1&username=sanny_1123`,n=await fetch(t);try{const e=await n.json();return console.log("getGeoName "+e),e}catch(e){console.log(e)}},a=async(e,t)=>{const n=`https://api.weatherbit.io/v2.0/forecast/daily?lat=${e}&lon=${t}&key=ddd41151e0cd42b9afbdc9d717234599`,o=await fetch(n);try{return await o.json()}catch(e){console.log(e)}},i=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();return console.log("newData in postData"+e),e}catch(e){console.log("error",e)}};o();n(0)}]);
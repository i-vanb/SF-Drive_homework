(()=>{var e={155:()=>{},379:(e,t,n)=>{"use strict";var i,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:p(f,t),references:1}),i.push(d)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function p(e,t){var n,i,r;if(t.singleton){var o=m++;n=v||(v=c(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else n=c(t),i=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);o[r].references--}for(var c=a(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),i=n(155),r=n.n(i);t()(r(),{insert:"head",singleton:!1}),r().locals;const o=document.querySelector("#burger-menu"),s=document.querySelector("#close-menu"),a=document.querySelector("#mobile-menu");function c(){a.classList.add("is-active"),o.classList.remove("is-active")}function l(){a.classList.remove("is-active"),o.classList.add("is-active")}const d=document.getElementsByClassName("faq__collapsible");document.addEventListener("DOMContentLoaded",(function(){console.log("ВЫЗОВ ИНИТ"),o.addEventListener("click",c),s.addEventListener("click",l),function(){let e;for(e=0;e<d.length;e++)d[e].addEventListener("click",(function(){this.classList.toggle("active");const e=this.firstElementChild,t=this.lastElementChild,n=this.nextElementSibling;"block"===n.style.display?(n.style.display="none",t.classList.add("is-active"),e.classList.remove("is-active")):(n.style.display="block",t.classList.remove("is-active"),e.classList.add("is-active"))}))}()}))})()})();
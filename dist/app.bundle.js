(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(601),r=n.n(a),s=n(314),i=n.n(s)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),i.push([e.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: "Roboto", sans-serif;\n  color: #e8eaed;\n}\n\nbody {\n  display: grid;\n  min-height: 100vh;\n  place-items: center;\n  background-color: #1f1f1f;\n  font-size: 80%;\n}\n\n.container {\n  height: 100vh;\n  max-height: 648px;\n  max-width: 720px;\n  padding: 96px 128px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr min-content 4fr 3fr;\n  align-items: center;\n  border: 1px solid #333;\n  border-radius: 4px;\n}\n\n.heading-primary {\n  grid-column: span 2;\n  font-size: 24px;\n}\n\n/* INPUTS */\n\n.input-container {\n  grid-column: span 2;\n}\n\n.form {\n  display: grid;\n  /* justify-content: center; */\n  grid-template-columns: 7fr min-content;\n  gap: 8px;\n}\n\n.search__input,\n.search__btn {\n  border: 1px solid #4e4e4e;\n  border-radius: 4px;\n  background-color: #e8eaed;\n}\n\n.search__input {\n  padding: 4px;\n  font: inherit;\n  width: 100%;\n}\n\n.search__btn {\n  display: flex;\n  align-items: center;\n  padding: 4px;\n}\n\n/* CURRENT */\n.current-container {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.current__details {\n  display: flex;\n  gap: 8px;\n}\n\n.current__temp {\n  display: flex;\n  gap: 4px;\n}\n\n.temp {\n  font-size: 48px;\n}\n.celcius,\n.sep,\n.fahrenheit {\n  padding-top: 4px;\n}\n\n.celcius,\n.fahrenheit {\n  cursor: pointer;\n}\n\n.current__img {\n  padding-top: 4px;\n  img,\n  svg {\n    width: 48px;\n    height: 48px;\n  }\n}\n\n.weather__details {\n  display: flex;\n  flex-direction: column;\n  padding-top: 4px;\n  font-size: 12px;\n  text-wrap: nowrap;\n}\n\n.current__summary {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  font-size: 12px;\n}\n\n.current__summary--heading {\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.weather__details,\n.inactive {\n  color: #9e9e9e;\n}\n\n/* FORECAST */\n.forecast-container {\n  grid-column: span 2;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.forecast__day-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #333;\n  border-radius: 4px;\n  padding: 8px;\n}\n\n.forecast__img {\n  & svg,\n  img {\n    width: 40px;\n    height: 40px;\n  }\n}\n\n.forecast__temp {\n  display: flex;\n  gap: 4px;\n}\n.heading-secondary {\n  text-wrap: nowrap;\n}\n\n/* SPINNER */\n.loading-spinner {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(155, 155, 155, 0.5);\n  z-index: 9999;\n}\n\n.spinner-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner {\n  border: 16px solid #f3f3f3;\n  border-top: 16px solid #64d2ff;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .current__details {\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    padding: 16px 0;\n  }\n  .current-container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr min-content;\n  }\n  .current__summary {\n    align-items: center;\n    padding: 16px 0;\n  }\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(i[o]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var s={},i=[],c=0;c<e.length;c++){var o=e[c],d=a.base?o[0]+a.base:o[0],l=s[d]||0,p="".concat(d," ").concat(l);s[d]=l+1;var u=n(p),m={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var c=n(s[i]);t[c].references--}for(var o=a(e,r),d=0;d<s.length;d++){var l=n(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=o}}},659:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={id:a,exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),a=n(825),r=n.n(a),s=n(659),i=n.n(s),c=n(56),o=n.n(c),d=n(540),l=n.n(d),p=n(113),u=n.n(p),m=n(365),h={};h.styleTagTransform=u(),h.setAttributes=o(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=n.p+"effac42d5ff37bf91dbe.png",g=n.p+"220ce1c4b90ceec24079.png",y=n.p+"0e9d095148897471a534.png",_=n.p+"74cab8d76f469264c2a9.png",x=n.p+"2f7294331fd318341d6f.png",C=n.p+"a0c8c6f31e4aff269daf.png";class v{constructor(){this.element=this.#e()}#e=()=>{const e=document.createElement("section");e.classList.add("current-container");const t=document.createElement("div");t.classList.add("current__details");const n=document.createElement("span");n.classList.add("current__img");const a=document.createElement("img");a.classList.add("current__img--tag"),a.setAttribute("src",f),a.setAttribute("alt","weather"),t.appendChild(n),n.appendChild(a);const r=document.createElement("div");r.classList.add("current__temp");const s=document.createElement("span");s.classList.add("temp"),s.textContent=28;const i=document.createElement("span");i.classList.add("celcius"),i.textContent="°C";const c=document.createElement("span");c.classList.add("sep"),c.classList.add("inactive"),c.textContent="|";const o=document.createElement("span");o.classList.add("fahrenheit"),o.classList.add("inactive"),o.textContent="°F",r.appendChild(s),r.appendChild(i),r.appendChild(c),r.appendChild(o),t.appendChild(r);const d=document.createElement("div");d.classList.add("weather__details");const l=document.createElement("span");l.classList.add("current__precipitation"),l.textContent="Precipitation: 0%";const p=document.createElement("span");p.classList.add("current__humidity"),p.textContent="Humidity: 51%";const u=document.createElement("span");u.classList.add("current__wind"),u.textContent="Wind: 1 m/s",d.appendChild(l),d.appendChild(p),d.appendChild(u);const m=document.createElement("div");m.classList.add("current__summary");const h=document.createElement("span");h.classList.add("current__summary--heading"),h.textContent="Weather";const g=document.createElement("span");g.classList.add("current__day"),g.textContent="Thursday (06/14)";const y=document.createElement("span");return y.classList.add("current__status"),y.textContent="Sunny",m.appendChild(h),m.appendChild(g),m.appendChild(y),e.appendChild(t),t.appendChild(d),e.appendChild(m),e};#t(e){const t=new Date(e);return`${t.toLocaleDateString("en-US",{weekday:"long"})} (${String(t.getMonth()+1).padStart(2,"0")}/${String(t.getDate()).padStart(2,"0")})`}update=(e,t)=>{const n=this.element.querySelector(".fahrenheit"),a=this.element.querySelector(".celcius");"C"===t?(n.classList.add("inactive"),a.classList.remove("inactive")):(n.classList.remove("inactive"),a.classList.add("inactive"));const r=e.forecast.forecastday[0],s=this.element.querySelector(".temp"),i=this.element.querySelector(".current__precipitation"),c=this.element.querySelector(".current__humidity"),o=this.element.querySelector(".current__wind");s.textContent="C"===t?r.day.avgtemp_c:r.day.avgtemp_f,i.textContent=`Precipitation: ${r.day.daily_chance_of_rain}%`,c.textContent=`Humidity: ${r.day.avghumidity}%`,o.textContent=`Wind: ${r.day.maxwind_kph} m/s`;const d=this.element.querySelector(".current__day"),l=this.element.querySelector(".current__status"),p=this.element.querySelector(".current__img--tag");d.textContent=this.#t(r.date),l.textContent=r.day.condition.text;const u=r.day.condition.text;p.setAttribute("src",this.#n(u))};#n=e=>e.includes("rain")?_:e.includes("partly")&&e.includes("cloud")?g:e.includes("cloud")?f:e.includes("snow")?x:e.includes("thunder")?y:C}class w{constructor(){this.element=this.#e()}#e(){const e=document.createElement("section");e.classList.add("forecast-container");const t=document.createElement("div");t.classList.add("forecast__day-container"),e.appendChild(t);const n=document.createElement("span");n.classList.add("forecast__day"),n.textContent="Fri",t.appendChild(n);const a=document.createElement("span");a.classList.add("forecast__img"),t.appendChild(a);const r=document.createElement("img");r.classList.add("forecast-img-tag"),r.setAttribute("alt","Weather image"),r.setAttribute("src",g),a.appendChild(r);const s=document.createElement("div");s.classList.add("forecast__temp"),t.appendChild(s);const i=document.createElement("span");i.classList.add("forecast__temp--highest"),i.textContent="34°",s.appendChild(i);const c=document.createElement("span");c.classList.add("forecast__temp--lowest"),c.classList.add("inactive"),c.textContent="18°",s.appendChild(c);const o=document.createElement("div");o.classList.add("forecast__day-container"),e.appendChild(o);const d=document.createElement("span");d.classList.add("forecast__day"),d.classList.add("forecast__day-2"),d.textContent="Sat",o.appendChild(d);const l=document.createElement("span");l.classList.add("forecast__img"),o.appendChild(l);const p=document.createElement("img");p.classList.add("forecast-img-tag-2"),p.setAttribute("alt","Weather image"),p.setAttribute("src",y),l.appendChild(p);const u=document.createElement("div");u.classList.add("forecast__temp"),o.appendChild(u);const m=document.createElement("span");m.classList.add("forecast__temp--highest"),m.classList.add("forecast__temp--highest-2"),m.textContent="27°",u.appendChild(m);const h=document.createElement("span");return h.classList.add("forecast__temp--lowest"),h.classList.add("forecast__temp--lowest-2"),h.classList.add("inactive"),h.textContent="18°",u.appendChild(h),e}update(e,t){const n=e.forecast.forecastday[1],a=this.#a(n.date),r="C"===t?n.day.maxtemp_c:n.day.maxtemp_f,s="C"===t?n.day.mintemp_c:n.day.mintemp_f,i=n.day.condition.text,c=this.#n(i),o=this.element.querySelector(".forecast__day"),d=this.element.querySelector(".forecast__temp--highest"),l=this.element.querySelector(".forecast__temp--lowest"),p=this.element.querySelector(".forecast-img-tag");o.textContent=a,d.textContent=`${r}°`,l.textContent=`${s}°`,p.setAttribute("src",c);const u=e.forecast.forecastday[2],m=this.#a(u.date),h="C"===t?u.day.maxtemp_c:u.day.maxtemp_f,f="C"===t?u.day.mintemp_c:u.day.mintemp_f,g=u.day.condition.text,y=this.#n(g),_=this.element.querySelector(".forecast__day-2"),x=this.element.querySelector(".forecast__temp--highest-2"),C=this.element.querySelector(".forecast__temp--lowest-2"),v=this.element.querySelector(".forecast-img-tag-2");_.textContent=m,x.textContent=`${h}°`,C.textContent=`${f}°`,v.setAttribute("src",y)}#a=e=>new Date(e).toLocaleDateString("en-US",{weekday:"short"});#n=e=>e.includes("rain")?_:e.includes("partly")&&e.includes("cloud")?g:e.includes("cloud")?f:e.includes("snow")?x:e.includes("thunder")?y:C}class b{static#r="52890b893b1d49c29be04209240506";static URL="https://api.weatherapi.com/v1";constructor(){}async getCurrentWeather(e){try{const t=`${b.URL}/current.json?key=${b.#r}&q=${e}`,n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error("Failed to fetch weather:",n.status);return await n.json()}catch(e){console.log(e)}}async getForecastWeather(e){try{const t=`${b.URL}/forecast.json?key=${b.#r}&q=${e}&days=3`,n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error("Failed to fetch weather:",n.status);return await n.json()}catch(e){console.log(e),alert(e)}}}class L{wc;constructor(){this.wc=new b;const e=this.#e();return this.#s(e),e}#e=()=>{const e=document.createElement("header");e.classList.add("input-container");const t=document.createElement("form");t.classList.add("form");const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","Search a city name (i.e. Tokyo)"),n.required=!0,n.classList.add("search__input");const a=document.createElement("button");return a.classList.add("search__btn"),a.innerHTML='\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#333333" viewBox="0 0 256 256">\n      <path\n        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">\n      </path>\n    </svg>\n    ',t.appendChild(n),t.appendChild(a),e.appendChild(t),e};#s(e){const t=e.querySelector(".form"),n=e.querySelector(".search__input");t.addEventListener("submit",(t=>{t.preventDefault();const a=n.value;e.dispatchEvent(new CustomEvent("citySearch",{detail:{city:a}}))}))}}class E{constructor(){this.element=this.#e()}#e(){const e=document.createElement("div");return e.classList.add("loading-spinner"),e.innerHTML='\n      <div class="spinner-wrapper">\n        <div class="spinner"></div>\n      </div>\n    ',e}show(){this.element.style.display="block"}hide(){this.element.style.display="none"}}const S={detail:{city:"Tokyo"}};class A{constructor(){this.wc=new b,this.unit="C",this.spinner=new E}init(){this.#e(),this.#i(S)}#e(){const e=document.querySelector(".container"),t=document.createElement("h1");t.textContent="Weather app",t.classList.add("heading-primary");const n=new L;n.addEventListener("citySearch",(e=>this.#i(e)));const a=document.createElement("span");a.textContent="Results for: ",a.classList.add("heading-secondary"),this.cityName=document.createElement("strong"),this.cityName.textContent="Tokyo",a.appendChild(this.cityName),this.current=new v,this.forecast=new w,e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(this.current.element),e.appendChild(this.forecast.element),e.appendChild(this.spinner.element),this.current.element.querySelector(".celcius").addEventListener("click",(()=>{this.#c("C")})),this.current.element.querySelector(".fahrenheit").addEventListener("click",(()=>{this.#c("F")}))}async#o(e){this.spinner.show();try{this.data=await this.wc.getForecastWeather(e),this.#d(this.data)}catch(e){console.log(e)}finally{this.spinner.hide()}}async#i(e){const t=e.detail.city;await this.#o(t)}#c(e){this.unit!==e&&(this.unit=e,this.#d(this.data))}#d(e){this.cityName.textContent=`${e.location.name}, ${e.location.country}`,this.current.update(e,this.unit),this.forecast.update(e,this.unit)}}document.addEventListener("DOMContentLoaded",(()=>{(new A).init()}))})()})();
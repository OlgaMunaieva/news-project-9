var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var s=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=s);var o=s("2shzp");var a={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let r;const c=new Uint8Array(16);function i(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(c)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function d(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}var u=function(e,t,n){if(a.randomUUID&&!t&&!e)return a.randomUUID();const s=(e=e||{}).random||(e.rng||i)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return d(s)};const g=document.querySelector(".mobile_category_menu"),m=document.querySelector(".category_list"),y=document.querySelector(".dropdown"),p=document.querySelector(".dropdown_content"),v=document.querySelector(".mobile_category_list"),f=document.querySelector(".category_btn"),_=document.querySelector(".mobile_category_btn"),b=document.querySelector(".category_mob_icon"),L=document.querySelector(".mob-btn-span"),h=document.querySelector(".category_icon"),w=document.querySelector(".list-news"),k=document.querySelector(".empty");async function S(e){try{const t=`https://api.nytimes.com/svc/news/v3/content/inyt/${e}.json?api-key=AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz`;return(await o.default.get(t)).data}catch(e){console.error(e),w.innerHTML="",k.style.display="block"}}function E(e){const t=e.composedPath().includes(g);console.log(t),t||v.classList.contains("category_mobile_hidden")||"Categories"!==L.textContent?t||"Categories"===L.textContent||(v.classList.add("category_mobile_hidden"),b.classList.remove("rotate"),document.removeEventListener("click",E)):(v.classList.add("category_mobile_hidden"),_.classList.remove("is-active-category-btn"),b.classList.remove("rotate"),document.removeEventListener("click",E))}function T({section:e,display_name:t}){return`\n  <li>\n  <button type="button" data-section="${e}" data-name='${t}'> ${t}</button>\n  </li>\n  `}function q(e){const t=e.composedPath().includes(y);console.log(t),t||(p.classList.add("category_hidden"),f.classList.remove("is-active-other-btn"),h.classList.remove("rotate"),document.removeEventListener("click",q))}function A({title:e,multimedia:t,section:n,abstract:s,published_date:o,url:a}){var r;const c=u(),i=(null==t||null===(r=t[2])||void 0===r?void 0:r.url)||"";s.length>110&&(s=s.slice(0,107)+"...");const l=new Date(o);return`<li class="list-news__item" data-id="${c}">\n      <article class="item-news__article">\n        <div class="item-news__wrapper-img">\n          <img class="item-news__img" src="${i}" alt="photo">\n          <p class="item-news__category">${n}</p>\n          <button class="item-news__add-to-favorite"\n          <svg class="heart-icon">\n                <use\n                  href="./images/symbol-defs.svg#icon-heart-empty"\n                ></use></svg>Add to favorite\n          </button>\n        </div>\n        <h2 class="item-news__title">${e}</h2>\n        <p class="item-news__description">${s}</p>\n        <div class="item-news__info">\n          <span class="item-news__info-date">${`${l.getDate().toString().padStart(2,"0")}/${(l.getMonth()+1).toString().padStart(2,"0")}/${l.getFullYear().toString()}`}</span>\n          <a class="item-news__info-link" href="${a}" target="_blank" rel="noreferrer noopener">Read more</a>\n        </div>\n      </article>\n    </li>`}console.log(y),v.classList.remove("category_hidden"),v.classList.add("category_mobile_hidden"),_.addEventListener("click",(function(e){v.classList.toggle("category_mobile_hidden"),document.addEventListener("click",E),"Categories"===L.textContent?(_.classList.toggle("is-active-category-btn"),b.classList.toggle("rotate")):b.classList.toggle("rotate")})),v.addEventListener("click",(function(e){if(console.dir(e.target),"BUTTON"!==e.target.tagName)return;const t=e.target.dataset.section,n=e.target.dataset.name;v.classList.add("category_mobile_hidden"),_.classList.add("is-active-category-btn"),b.classList.remove("rotate"),b.style.fill="white",console.log(t),null!=n&&n.length<11?L.textContent=n:L.textContent=`${n.substring(0,9)}...`;S(t).then((e=>{if(null===e.results)w.innerHTML="",k.style.display="block";else{const t=e.results.reduce(((e,t)=>e+A(t)),"");k.style.display="none",w.innerHTML=t}}))})),async function(){try{const e="https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz";return(await o.default.get(e)).data}catch(e){console.error(e)}}().then((e=>{const t=e.results,n=t.reduce(((e,t)=>e+T(t)),"");v.insertAdjacentHTML("beforeend",n);const s=t.splice(0,6),o=t,a=s.reduce(((e,t)=>e+T(t)),""),r=o.reduce(((e,t)=>e+T(t)),"");m.insertAdjacentHTML("afterbegin",a),p.insertAdjacentHTML("beforeend",r)})),f.addEventListener("click",(function(e){p.classList.toggle("category_hidden"),h.classList.toggle("rotate"),f.classList.toggle("is-active-other-btn"),document.addEventListener("click",q)})),m.addEventListener("click",(function(e){if(e.target.classList.contains("category_btn")||e.target.classList.contains("desk-btn-span")||e.target.classList.contains("category_icon")||"BUTTON"!==e.target.tagName)return;p.classList.contains("category_hidden")||(p.classList.add("category_hidden"),h.classList.remove("rotate"));const t=document.querySelector(".is-active-category-btn");t&&(t.classList.remove("is-active-category-btn"),f.classList.remove("is-active-other-btn"));e.composedPath().includes(p)?(e.target.classList.add("is-active-category-btn"),f.classList.add("is-active-other-btn")):e.target.classList.add("is-active-category-btn");document.removeEventListener("click",q);S(e.target.dataset.section).then((e=>{if(null===e.results)w.innerHTML="",k.style.display="block";else{const t=e.results.reduce(((e,t)=>e+A(t)),"");k.style.display="none",w.innerHTML=t}}))})),w.addEventListener("click",(function(e){if("A"===e.target.nodeName){e.target.setAttribute("data-is-read",!0);const t=e.target.parentElement.parentElement.parentElement;console.log(t);const n=document.createElement("p");n.innerText="Already read",n.classList.add("have-read"),t.appendChild(n);t.getAttribute("data-id")}})),localStorage.setItem("cards","[]");
//# sourceMappingURL=index.8aa09510.js.map

!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o,c=a("bpxeT"),s=a("2TvXO"),i=a("dIxxU"),l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},u=new Uint8Array(16);function d(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(u)}for(var p=[],f=0;f<256;++f)p.push((f+256).toString(16).slice(1));function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}var m=function(e,t,n){if(l.randomUUID&&!t&&!e)return l.randomUUID();var r=(e=e||{}).random||(e.rng||d)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return g(r)},y="AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz",v="https://api.nytimes.com/svc/",_="news/v3/content/inyt/",b="https://api.nytimes.com/svc/news/v3/content/section-list.json?",h=document.querySelector(".category_list"),w=document.querySelector(".dropdown_content"),L=document.querySelector(".mobile_category_list"),x=document.querySelector(".category_btn"),k=document.querySelector(".mobile_category_btn"),T=document.querySelector(".category_mob_icon"),U=document.querySelector(".mob-btn-span"),S=document.querySelector(".category_icon"),q=document.querySelector(".list-news"),A=document.querySelector(".empty");function E(e){return M.apply(this,arguments)}function M(){return(M=e(c)(e(s).mark((function t(n){var r,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(v).concat(_).concat(n,".json?api-key=").concat(y),e.next=4,i.default.get(r);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function j(){return(j=e(c)(e(s).mark((function t(){var n,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(b,"api-key=").concat(y),e.next=4,i.default.get(n);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function H(e){var t=e.section,n=e.display_name;return'\n  <li>\n  <button type="button" data-section="'.concat(t,"\" data-name='").concat(n,"'> ").concat(n,"</button>\n  </li>\n  ")}function C(e){var t,n=e.title,r=e.multimedia,a=e.section,o=e.abstract,c=e.published_date,s=e.url,i=m(),l=(null==r||null===(t=r[2])||void 0===t?void 0:t.url)||"";return'<li class="list-news__item" data-id="'.concat(i,'">\n      <article class="item-news__article">\n        <div class="item-news__wrapper-img">\n          <img class="item-news__img" src="').concat(l,'" alt="photo">\n          <p class="item-news__category">').concat(a,'</p>\n          <button class="item-news__add-to-favorite" \n          <svg class="heart-icon">\n                <use\n                  href="./images/symbol-defs.svg#icon-heart-empty"\n                ></use></svg>Add to favorite\n          </button>\n        </div>\n        <h2 class="item-news__title">').concat(n,'</h2>\n        <p class="item-news__description">').concat(o,'</p>\n        <div class="item-news__info">\n          <span class="item-news__info-date">').concat(c,'</span>\n          <a class="item-news__info-link" href="').concat(s,'" target="_blank" rel="noreferrer noopener">Read more</a>\n        </div>\n      </article>\n    </li>')}k.addEventListener("click",(function(e){L.classList.toggle("category_hidden"),"Categories"===U.textContent?(k.classList.toggle("is-active"),T.classList.toggle("rotate")):T.classList.toggle("rotate")})),L.addEventListener("click",(function(e){if(console.dir(e.target),"BUTTON"!==e.target.tagName)return;var t=e.target.dataset.section,n=e.target.dataset.name;L.classList.add("category_hidden"),k.classList.add("is-active"),T.classList.remove("rotate"),T.style.fill="white",console.log(t),null!=n&&n.length<11?U.textContent=n:U.textContent="".concat(n.substring(0,9),"...");E(t).then((function(e){if(null===e.results)q.innerHTML="",A.style.display="block";else{var t=e.results.reduce((function(e,t){return e+C(t)}),"");A.style.display="none",q.innerHTML=t}}))})),function(){return j.apply(this,arguments)}().then((function(e){var t=e.results,n=t.reduce((function(e,t){return e+H(t)}),"");L.insertAdjacentHTML("beforeend",n);var r=t.splice(0,6),a=t,o=r.reduce((function(e,t){return e+H(t)}),""),c=a.reduce((function(e,t){return e+H(t)}),"");h.insertAdjacentHTML("afterbegin",o),w.insertAdjacentHTML("beforeend",c)})),x.addEventListener("click",(function(e){w.classList.toggle("category_hidden"),S.classList.toggle("rotate"),x.classList.toggle("is-active")})),h.addEventListener("click",(function(e){if(e.target.classList.contains("category_btn")||e.target.classList.contains("desk-btn-span")||e.target.classList.contains("category_icon"))return;w.classList.contains("category_hidden")||(w.classList.add("category_hidden"),S.classList.remove("rotate"));var t=e.target.dataset.section;console.log(t),E(t).then((function(e){if(null===e.results)q.innerHTML="",A.style.display="block";else{var t=e.results.reduce((function(e,t){return e+C(t)}),"");A.style.display="none",q.innerHTML=t}}))})),q.addEventListener("click",(function(e){if("A"===e.target.nodeName){e.target.setAttribute("data-is-read",!0);var t=e.target.parentElement.parentElement.parentElement;console.log(t);var n=document.createElement("p");n.innerText="Already read",n.classList.add("have-read"),t.appendChild(n);t.getAttribute("data-id")}})),localStorage.setItem("cards","[]")}();
//# sourceMappingURL=index.c0fef0cc.js.map
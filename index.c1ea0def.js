!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=r);var o,s=r("bpxeT"),c=r("2TvXO"),i=r("dIxxU"),l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},d=new Uint8Array(16);function u(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(d)}for(var g=[],v=0;v<256;++v)g.push((v+256).toString(16).slice(1));function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(g[t[e+0]]+g[t[e+1]]+g[t[e+2]]+g[t[e+3]]+"-"+g[t[e+4]]+g[t[e+5]]+"-"+g[t[e+6]]+g[t[e+7]]+"-"+g[t[e+8]]+g[t[e+9]]+"-"+g[t[e+10]]+g[t[e+11]]+g[t[e+12]]+g[t[e+13]]+g[t[e+14]]+g[t[e+15]]).toLowerCase()}var p=function(t,e,n){if(l.randomUUID&&!e&&!t)return l.randomUUID();var a=(t=t||{}).random||(t.rng||u)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return m(a)},y="AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz",f="https://api.nytimes.com/svc/",b="news/v3/content/inyt/",h="https://api.nytimes.com/svc/news/v3/content/section-list.json?",L=document.querySelector(".mobile_category_menu"),_=document.querySelector(".category_list"),w=document.querySelector(".dropdown"),k=document.querySelector(".dropdown_content"),x=document.querySelector(".mobile_category_list"),S=document.querySelector(".category_btn"),E=document.querySelector(".mobile_category_btn"),q=document.querySelector(".category_mob_icon"),C=document.querySelector(".mob-btn-span"),T=document.querySelector(".category_icon"),U=document.querySelector(".list-news"),M=document.querySelector(".empty"),A=document.querySelector(".checkbox-header__input"),j=document.querySelector(".mob-menu__checkbox-input"),D=document.querySelector(".weather-card");function H(t){return N.apply(this,arguments)}function N(){return(N=t(s)(t(c).mark((function e(n){var a,r;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat(f).concat(b).concat(n,".json?api-key=").concat(y),t.next=4,i.default.get(a);case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),U.innerHTML="",M.style.display="block",D.style.display="none";case 14:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function I(){return(I=t(s)(t(c).mark((function e(){var n,a;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(h,"api-key=").concat(y),t.next=4,i.default.get(n);case 4:return a=t.sent,t.abrupt("return",a.data);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function O(t){var e=t.composedPath().includes(L);console.log(e),e||x.classList.contains("category_mobile_hidden")||"Categories"!==C.textContent?e||"Categories"===C.textContent||(x.classList.add("category_mobile_hidden"),q.classList.remove("rotate"),document.removeEventListener("click",O)):(x.classList.add("category_mobile_hidden"),E.classList.remove("is-active-category-btn"),q.classList.remove("rotate"),document.removeEventListener("click",O))}function R(t){var e=t.section,n=t.display_name;return'\n  <li>\n  <button class="cat-menu-btn" type="button" data-section="'.concat(e,"\" data-name='").concat(n,"'> ").concat(n,"</button>\n  </li>\n  ")}function B(t,e,n){var a=!0,r=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(a=(s=c.next()).done);a=!0)btn=s.value,btn.classList.toggle("dark-categories-btn")}catch(t){r=!0,o=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}e.classList.toggle("dark-categories-btn"),n.classList.toggle("dark-categories-btn")}function V(t){var e=t.composedPath().includes(w);console.log(e),e||S.classList.contains("has-active-button-inside")?!e&&S.classList.contains("has-active-button-inside")&&(k.classList.add("category_hidden"),S.classList.add("is-active-other-btn"),T.classList.remove("rotate"),document.removeEventListener("click",V),console.log("Закриваю меню з активною кнопкою всередині")):(k.classList.add("category_hidden"),S.classList.remove("is-active-other-btn"),T.classList.remove("rotate"),document.removeEventListener("click",V),console.log("Закриваю меню без активної кнопки всередині"))}function z(t){var e,n=t.title,a=t.multimedia,r=t.section,o=t.abstract,s=t.published_date,c=t.url,i=p(),l=(null==a||null===(e=a[2])||void 0===e?void 0:e.url)||"";o.length>110&&(o=o.slice(0,107)+"...");var d=new Date(s),u=d.getDate().toString().padStart(2,"0"),g=(d.getMonth()+1).toString().padStart(2,"0"),v=d.getFullYear().toString(),m="".concat(u,"/").concat(g,"/").concat(v);return'<li class="list-news__item" data-id="'.concat(i,'" >\n            <article class="item-news__article">\n              <div class="item-news__wrapper-img">\n                <img class="item-news__img" src="').concat(l,'" alt="photo">\n                <p class="item-news__category">').concat(r,'</p>\n                <div class="article_flag">\n                  <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                </div>\n              </div>\n              <h2 class="item-news__title">').concat(n,'</h2>\n              <p class="item-news__description">').concat(o,'</p>\n              <div class="item-news__info">\n                <span class="item-news__info-date">').concat(m,'</span>\n                <a class="item-news__info-link" href="').concat(c,'" target="_blank" rel="noreferrer noopener">Read more</a>\n              </div>\n            </article>\n          </li>')}console.log(D),x.classList.remove("category_hidden"),x.classList.add("category_mobile_hidden"),E.addEventListener("click",(function(t){x.classList.toggle("category_mobile_hidden"),document.addEventListener("click",O),"Categories"===C.textContent?(E.classList.toggle("is-active-category-btn"),q.classList.toggle("rotate")):q.classList.toggle("rotate")})),x.addEventListener("click",(function(t){if(console.dir(t.target),"BUTTON"!==t.target.tagName)return;var e=t.target.dataset.section,n=t.target.dataset.name;x.classList.add("category_mobile_hidden"),E.classList.add("is-active-category-btn"),q.classList.remove("rotate"),q.style.fill="white",console.log(e),null!=n&&n.length<11?C.textContent=n:C.textContent="".concat(n.substring(0,9),"...");H(e).then((function(t){if(null===t.results)U.innerHTML="",M.style.display="block";else{var e=t.results.reduce((function(t,e){return t+z(e)}),"");M.style.display="none",U.innerHTML=e}}))})),function(){return I.apply(this,arguments)}().then((function(t){var e=t.results,n=e.reduce((function(t,e){return t+R(e)}),"");x.insertAdjacentHTML("beforeend",n);var a=e.splice(0,6),r=e,o=a.reduce((function(t,e){return t+R(e)}),""),s=r.reduce((function(t,e){return t+R(e)}),"");_.insertAdjacentHTML("afterbegin",o),k.insertAdjacentHTML("beforeend",s);var c=document.querySelectorAll(".cat-menu-btn");if(JSON.parse(localStorage.getItem("isDarkMode"))){var i=!0,l=!1,d=void 0;try{for(var u,g=c[Symbol.iterator]();!(i=(u=g.next()).done);i=!0)btn=u.value,btn.classList.add("dark-categories-btn")}catch(t){l=!0,d=t}finally{try{i||null==g.return||g.return()}finally{if(l)throw d}}S.classList.add("dark-categories-btn"),E.classList.add("dark-categories-btn")}A.addEventListener("click",(function(){B(c,S,E)})),j.addEventListener("click",(function(){B(c,S,E)}))})),S.addEventListener("click",(function(t){k.classList.toggle("category_hidden"),T.classList.toggle("rotate"),S.classList.toggle("is-active-other-btn"),document.addEventListener("click",V)})),_.addEventListener("click",(function(t){if(t.target.classList.contains("category_btn")||t.target.classList.contains("desk-btn-span")||t.target.classList.contains("category_icon")||"BUTTON"!==t.target.tagName)return;k.classList.contains("category_hidden")||(k.classList.add("category_hidden"),T.classList.remove("rotate"));var e=document.querySelector(".is-active-category-btn");e&&(e.classList.remove("is-active-category-btn"),S.classList.remove("is-active-other-btn"),S.classList.remove("has-active-button-inside"));t.composedPath().includes(k)?(t.target.classList.add("is-active-category-btn"),S.classList.add("is-active-other-btn"),S.classList.add("has-active-button-inside")):t.target.classList.add("is-active-category-btn");document.removeEventListener("click",V),H(t.target.dataset.section).then((function(t){if(null===t.results)U.innerHTML="",M.style.display="block",D.style.display="none";else{var e=t.results.reduce((function(t,e){return t+z(e)}),"");M.style.display="none",D.style.display="block",U.innerHTML=e}}))})),U.addEventListener("click",(function(t){if("A"===t.target.nodeName){t.target.setAttribute("data-is-read",!0);var e=t.target.parentElement.parentElement.parentElement;console.log(e);var n=document.createElement("p");n.innerText="Already read",n.classList.add("have-read"),e.appendChild(n);e.getAttribute("data-id")}}))}();
//# sourceMappingURL=index.c1ea0def.js.map

const e=document.querySelector(".empty"),t=document.querySelector(".favorite-container"),n=localStorage.getItem("cards");"[]"===n&&(e.style.display="block",t.style.padding=0);const s=JSON.parse(n),a=document.querySelector(".list-news");function i(e){a.innerHTML=e}function r(e){return e.map((e=>function({title:e,imageUrl:t,section:n,id:s,abstract:a,published_date:i,url:r}){return`<li class="list-news__item" data-id="${s}">\n      <article class="item-news__article">\n        <div class="item-news__wrapper-img">\n          <img class="item-news__img" src="${t}" alt="photo">\n          <p class="item-news__category">${n}</p>\n           <div class="article_flag">\n          <button class="article_flag--add is-hidden"><span class="article_flag_text">Add to favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  <button class="article_flag--remove "><span class="article_flag_text">Remove from favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  </div>\n        </div>\n        <h2 class="item-news__title">${e}</h2>\n        <p class="item-news__description">${a}</p>\n        <div class="item-news__info">\n          <span class="item-news__info-date">${i}</span>\n          <a class="item-news__info-link" href="${r}" target="_blank" rel="noreferrer noopener">Read more</a>\n        </div>\n      </article>\n    </li>`}(e))).join("")}a.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName&&"SPAN"!==e.target.tagName&&"SVG"!==e.target.tagName)return;e.target;const t=e.target.closest("li.list-news__item").dataset.id;let n=localStorage.getItem("cards");!function(e,t){const n=e.reduce(((e,n)=>(n.id===t||e.push(n),e)),[]),s=JSON.stringify(n);localStorage.setItem("cards",s);const a=JSON.parse(localStorage.getItem("cards"));i(r(a))}(JSON.parse(n),t)}));i(r(s));
//# sourceMappingURL=favorite.895365b4.js.map
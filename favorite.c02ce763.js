const t=localStorage.getItem("cards"),e=JSON.parse(t),s=document.querySelector(".card_list");function i(t){s.innerHTML=t}function n(t){return t.map((t=>function({title:t,imageUrl:e,section:s,id:i,abstract:n,published_date:a,url:c}){return`<li class="list-news__item" data-id="${i}">\n      <article class="item-news__article">\n        <div class="item-news__wrapper-img">\n          <img class="item-news__img" src="${e}" alt="photo">\n          <p class="item-news__category">${s}</p>\n          <button checked="true" class="item-news__add-to-favorite">Add to favorite\n            \x3c!-- сердечко --\x3e\n          </button>\n        </div>\n        <h2 class="item-news__title">${t}</h2>\n        <p class="item-news__description">${n}</p>\n        <div class="item-news__info">\n          <span class="item-news__info-date">${a}</span>\n          <a class="item-news__info-link" href="${c}" target="_blank" rel="noreferrer noopener">Read more</a>\n        </div>\n      </article>\n    </li>`}(t)))}s.addEventListener("click",(function(t){if("BUTTON"!==t.target.tagName)return;let e;e=t.target;const s=t.target.closest("li.list-news__item").dataset.id;if(t.target.hasAttribute("checked")){e.removeAttribute("checked");let t=localStorage.getItem("cards");return void function(t,e){const s=t.reduce(((t,s)=>(s.id===e||t.push(s),t)),[]),a=JSON.stringify(s);localStorage.setItem("cards",a);const c=JSON.parse(localStorage.getItem("cards"));i(n(c))}(JSON.parse(t),s)}e.setAttribute("checked",!0);const a=t.target.closest("li.list-news__item").dataset.id,c=t.target.closest("div"),r=c.childNodes[1].src,l=c.childNodes[3].textContent,o=t.target.closest("article"),d=o.childNodes[3].textContent,_=o.childNodes[5].textContent,m=o.childNodes[7].childNodes[1].textContent,g=o.childNodes[7].childNodes[3].href;let u=localStorage.getItem("cards");const h={id:a,imageUrl:r,section:l,title:d,abstract:_,published_date:m,url:g},p=JSON.parse(u);p.push(h);const f=JSON.stringify(p);localStorage.setItem("cards",f)}));i(n(e));
//# sourceMappingURL=favorite.c02ce763.js.map

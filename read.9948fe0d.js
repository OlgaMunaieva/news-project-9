const e=document.querySelector(".form-header__icon-search"),t=document.querySelector(".form-header__input");e.addEventListener("click",(function(){document.documentElement.clientWidth<768&&(t.classList.toggle("leaving-input"),e.style.position="absolute",e.style.top="5px",e.style.left="14px");t.classList.contains("leaving-input")||(e.style.position="")}));document.querySelector(".form-header__checkbox");const s=document.querySelector(".checkbox-header__input"),n=document.querySelector(".form-header__icon-sun"),o=document.querySelector(".form-header__icon-moon"),a=document.querySelector(".form-header__dark"),r=document.querySelector(".form-header__light"),c=document.querySelector(".icon-mob-menu"),d=document.querySelector(".header"),i=document.getElementById("searchClear"),l=document.querySelector(".mob-menu__checkbox-input"),m=document.querySelector(".mob-nav-menu"),u=document.querySelector(".mob-icon-sun"),_=document.querySelector(".mob-icon-moon"),h=document.querySelector(".button-menu__icon-close"),k=document.querySelector(".footer__svg-globe");function p(){document.body.classList.add("body--dark"),n.classList.add("form-header__icon-sun--dark"),o.classList.add("form-header__icon-moon--dark"),a.classList.add("form-header__dark--dark"),r.classList.add("form-header__light--dark"),t.classList.add("form-header__input--dark"),e.classList.add("form-header__icon-search--dark"),c.classList.add("icon-mob-menu--dark"),d.classList.add("header--dark"),i.classList.add("search__clear--dark"),m.classList.add("mob-nav-menu--dark"),u.classList.add("mob-icon-sun--dark"),_.classList.add("mob-icon-moon--dark"),k.classList.add("icon__web--dark")}function g(){document.body.classList.remove("body--dark"),n.classList.remove("form-header__icon-sun--dark"),o.classList.remove("form-header__icon-moon--dark"),a.classList.remove("form-header__dark--dark"),r.classList.remove("form-header__light--dark"),t.classList.remove("form-header__input--dark"),e.classList.remove("form-header__icon-search--dark"),c.classList.remove("icon-mob-menu--dark"),d.classList.remove("header--dark"),i.classList.remove("search__clear--dark"),m.classList.remove("mob-nav-menu--dark"),u.classList.remove("mob-icon-sun--dark"),_.classList.remove("mob-icon-moon--dark"),h.classList.add("button-menu__icon-close--dark"),k.classList.remove("icon__web--dark")}function f(e){e?(p(),s.checked=!0,l.checked=!0):(g(),s.checked=!1,l.checked=!1),localStorage.setItem("isDarkMode",e)}s.addEventListener("change",(function(){f(s.checked)})),l.addEventListener("change",(function(){const e=l.checked;e?(p(),s.checked=!0):(s.checked=!1,g());l.setAttribute("checked","checked"),localStorage.setItem("isDarkMode",e)}));f(JSON.parse(localStorage.getItem("isDarkMode"))||!1);JSON.parse(localStorage.getItem("isDarkMode"))?(l.checked=!0,s.checked=!0,p()):(l.checked=!1,s.checked=!1,g());const v=window.location.pathname,y=document.getElementById("home__link"),L=document.getElementById("favorite__link"),b=document.getElementById("read__link");v.includes("/index.html")?y.classList.add("current"):v.includes("/favorite.html")?L.classList.add("current"):v.includes("/read.html")?b.classList.add("current"):y.classList.add("current");const w=document.querySelector(".form-header"),S=document.querySelector(".list-news");w.addEventListener("submit",(function(e){e.preventDefault();const s=t.value.trim(),n=document.querySelector(".calendar__input").dataset.date.split("."),o=`${n[2]}-${n[1].padStart(2,"0")}-${n[0].padStart(2,"0")}`;if(""===s)S.innerHTML="";else{(function(e,t){return fetch(`\n  https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=Oibsmafk4s4CtvFNxqESgOWZuCdEVskz&q=${e}&fq=pub_date:(${t})`).then((e=>{if(404===e.status)throw new Error(e.status);return e.json()}))})(s,o).then((e=>{const t=e.response.docs;console.log(t),S.innerHTML=t.map((e=>{const t=e.headline.main;let s=e.lead_paragraph;s.length>110&&(s=s.slice(0,107)+"...");const n=e.web_url,o=new Date(e.pub_date),a=`${o.getDate().toString().padStart(2,"0")}/${(o.getMonth()+1).toString().padStart(2,"0")}/${o.getFullYear().toString()}`,r=e._id,c=e.section_name;return`<li class="list-news__item" data-id="${r}">\n  <article class="item-news__article">\n       <div class="item-news__wrapper-img">\n <img class="item-news__img" src="${e.multimedia.length>0?`https://www.nytimes.com/${e.multimedia[0].url}`:"https://source.unsplash.com/featured/?nature"}" alt="photo">\n<p class="item-news__category">${c}</p>\n<div class="article_flag">\n                  <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                </div>\n         </div>\n         <h2 class="item-news__title">${t}</h2>\n         <p class="item-news__description">${s}</p>\n         <div class="item-news__info">\n           <span class="item-news__info-date">${a}</span>\n           <a class="item-news__info-link" href="${n}" target="_blank" rel="noreferrer noopener">Read more</a>\n         </div>\n       </article>\n     </li>`})).join(""),localStorage.setItem("nytimesNews",JSON.stringify(e.response.docs))})).catch((e=>console.log(e)))}}));const q=document.getElementById("searchClear");console.log(q),t.addEventListener("input",(()=>{t.value&&document.documentElement.clientWidth>768?q.style.display="block":q.style.display="none"})),q.addEventListener("click",(()=>{t.value="",q.style.display="none"}));
//# sourceMappingURL=read.9948fe0d.js.map

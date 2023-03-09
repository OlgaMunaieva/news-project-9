!function(){var e=document.querySelector(".form-header__icon-search"),t=document.querySelector(".form-header__input"),a=window.location.pathname,n=document.getElementById("home__link"),o=document.getElementById("favorite__link"),c=document.getElementById("read__link");a.includes("/index.html")||a.includes("/read.html")||a.includes("/favorite.html")||a.includes("/index.html"),e.addEventListener("click",(function(){document.documentElement.clientWidth<768&&(t.classList.toggle("leaving-input"),e.style.position="absolute",e.style.top="5px",e.style.left="14px");t.classList.contains("leaving-input")||(e.style.position="")}));document.querySelector(".form-header__checkbox");var r=document.querySelector(".checkbox-header__input"),s=document.querySelector(".form-header__icon-sun"),d=document.querySelector(".form-header__icon-moon"),l=document.querySelector(".form-header__dark"),i=document.querySelector(".form-header__light"),m=document.querySelector(".icon-mob-menu"),u=document.querySelector(".header"),h=document.getElementById("searchClear"),_=document.querySelector(".mob-menu__checkbox-input"),k=document.querySelector(".mob-nav-menu"),p=document.querySelector(".mob-icon-sun"),f=document.querySelector(".mob-icon-moon"),g=document.querySelector(".button-menu__icon-close"),v=document.querySelector(".footer__svg-globe"),y=document.querySelector(".accordion"),L=document.querySelector(".calendar__input");if(a.includes("/read.html")&&"[]"!==localStorage.getItem("read-more")&&null!==y){y.addEventListener("click",(function(){"matrix(1, 0, 0, 1, 0, 0)"===getComputedStyle(y,"::after").getPropertyValue("transform")?y.style.setProperty("--rotate","rotate(180deg)"):y.style.setProperty("--rotate","rotate(0deg)")}))}function b(){document.body.classList.add("body--dark"),s.classList.add("form-header__icon-sun--dark"),d.classList.add("form-header__icon-moon--dark"),l.classList.add("form-header__dark--dark"),i.classList.add("form-header__light--dark"),t.classList.add("form-header__input--dark"),e.classList.add("form-header__icon-search--dark"),m.classList.add("icon-mob-menu--dark"),u.classList.add("header--dark"),h.classList.add("search__clear--dark"),k.classList.add("mob-nav-menu--dark"),p.classList.add("mob-icon-sun--dark"),f.classList.add("mob-icon-moon--dark"),v.classList.add("icon__web--dark"),a.includes("/read.html")&&"[]"!==localStorage.getItem("read-more")&&null!==y&&y.classList.add("accordion--dark"),a.includes("/index.html")&&L.classList.add("calendar__input--dark")}function S(){document.body.classList.remove("body--dark"),s.classList.remove("form-header__icon-sun--dark"),d.classList.remove("form-header__icon-moon--dark"),l.classList.remove("form-header__dark--dark"),i.classList.remove("form-header__light--dark"),t.classList.remove("form-header__input--dark"),e.classList.remove("form-header__icon-search--dark"),m.classList.remove("icon-mob-menu--dark"),u.classList.remove("header--dark"),h.classList.remove("search__clear--dark"),k.classList.remove("mob-nav-menu--dark"),p.classList.remove("mob-icon-sun--dark"),f.classList.remove("mob-icon-moon--dark"),g.classList.add("button-menu__icon-close--dark"),v.classList.remove("icon__web--dark"),a.includes("/read.html")&&"[]"!==localStorage.getItem("read-more")&&null!==y&&y.classList.remove("accordion--dark"),a.includes("/index.html")&&L.classList.remove("calendar__input--dark")}function w(e){e?(b(),r.checked=!0,_.checked=!0):(S(),r.checked=!1,_.checked=!1),localStorage.setItem("isDarkMode",e)}r.addEventListener("change",(function(){w(r.checked)})),_.addEventListener("change",(function(){var e=_.checked;e?(b(),r.checked=!0):(r.checked=!1,S());_.setAttribute("checked","checked"),localStorage.setItem("isDarkMode",e)})),w(JSON.parse(localStorage.getItem("isDarkMode"))||!1),JSON.parse(localStorage.getItem("isDarkMode"))?(_.checked=!0,r.checked=!0,b()):(_.checked=!1,r.checked=!1,S()),a.includes("/index.html")?n.classList.add("current"):a.includes("/favorite.html")?o.classList.add("current"):a.includes("/read.html")?c.classList.add("current"):n.classList.add("current");var q=document.querySelector(".form-header"),x=document.querySelector(".list-news"),E=document.querySelector(".empty"),I=document.querySelector(".weather-card");q.addEventListener("submit",(function(e){e.preventDefault();var n=t.value.trim();if(a.includes("/index.html")){var o=document.querySelector(".calendar__input").dataset.date.split("."),c="".concat(o[2],"-").concat(o[1].padStart(2,"0"),"-").concat(o[0].padStart(2,"0"));if(""===n)x.innerHTML="",E.style.display="block",I.style.display="none";else(function(e,t){return fetch("\n  https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=".concat(C,"&q=").concat(e,"&fq=pub_date:(").concat(t,")")).then((function(e){if(404===e.status)throw new Error(e.status);return e.json()}))})(n,c).then((function(e){if(console.log(e),e.response.docs.length){E.style.display="none",I.style.display="block";var t=e.response.docs;console.log(t),x.innerHTML=t.map((function(e){var t=e.headline.main,a=e.lead_paragraph;a.length>110&&(a=a.slice(0,107)+"...");var n=e.web_url,o=new Date(e.pub_date),c=o.getDate().toString().padStart(2,"0"),r=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear().toString(),d="".concat(c,"/").concat(r,"/").concat(s),l=e._id,i=e.section_name,m=e.multimedia.length>0?"https://www.nytimes.com/".concat(e.multimedia[0].url):"https://source.unsplash.com/featured/?nature";return'<li class="list-news__item" data-id="'.concat(l,'">\n  <article class="item-news__article">\n       <div class="item-news__wrapper-img">\n <img class="item-news__img" src="').concat(m,'" alt="photo">\n<p class="item-news__category">').concat(i,'</p>\n<div class="article_flag">\n                  <button class="article_flag--add"><span class="article_flag_text">Add to favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440f7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                  <button class="article_flag--remove is-hidden"><span class="article_flag_text">Remove from favorite</span>\n                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#4b48da" stroke="#4b48da" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n                  </button>\n                </div>\n         </div>\n         <h2 class="item-news__title">').concat(t,'</h2>\n         <p class="item-news__description">').concat(a,'</p>\n         <div class="item-news__info">\n           <span class="item-news__info-date">').concat(d,'</span>\n           <a class="item-news__info-link" href="').concat(n,'" target="_blank" rel="noreferrer noopener">Read more</a>\n         </div>\n       </article>\n     </li>')})).join(""),localStorage.setItem("nytimesNews",JSON.stringify(e.response.docs))}else E.style.display="block",I.style.display="none",x.innerHTML=""})).catch((function(e){return console.log(e)}))}}));var C="Oibsmafk4s4CtvFNxqESgOWZuCdEVskz";var M=document.getElementById("searchClear");console.log(M),t.addEventListener("input",(function(){t.value&&document.documentElement.clientWidth>768?M.style.display="block":M.style.display="none"})),M.addEventListener("click",(function(){t.value="",M.style.display="none"}))}();
//# sourceMappingURL=read.bc145db2.js.map

const t=document.querySelector(".category_list"),e=(document.querySelector(".dropdown"),document.querySelector(".dropdown_content")),n=document.querySelector(".mobile_category_list"),o=document.querySelector(".category_btn"),s=document.querySelector(".mobile_category_btn"),c=document.querySelector(".category_mob_icon"),a=document.querySelector(".mob-btn-span"),r=document.querySelector(".category_icon");document.querySelector(".desk-btn-span"),document.querySelector(".content");function i({section:t,display_name:e}){return`\n  <li>\n  <button type="button" data-section="${t}" data-name='${e}'> ${e}</button>\n  </li>\n  `}s.addEventListener("click",(function(t){console.log(t.target),n.classList.toggle("category_hidden"),"Categories"===a.textContent?(s.classList.toggle("is-active"),c.classList.toggle("rotate")):c.classList.toggle("rotate")})),n.addEventListener("click",(function(t){if(console.dir(t.target),"BUTTON"!==t.target.tagName)return;const e=t.target.dataset.section,o=t.target.dataset.name;n.classList.add("category_hidden"),s.classList.add("is-active"),c.classList.remove("rotate"),c.style.fill="white",console.log(e),null!=o&&o.length<11?a.textContent=o:a.textContent=`${o.substring(0,9)}...`})),fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz").then((t=>t.json())).then((o=>{const s=o.results,c=s.reduce(((t,e)=>t+i(e)),"");n.insertAdjacentHTML("beforeend",c);const a=s.splice(0,6),r=s,l=a.reduce(((t,e)=>t+i(e)),""),d=r.reduce(((t,e)=>t+i(e)),"");t.insertAdjacentHTML("afterbegin",l),e.insertAdjacentHTML("beforeend",d)})),o.addEventListener("click",(function(t){e.classList.toggle("category_hidden"),r.classList.toggle("rotate"),o.classList.toggle("is-active")})),t.addEventListener("click",(function(t){if(t.target.classList.contains("category_btn")||t.target.classList.contains("desk-btn-span")||t.target.classList.contains("category_icon"))return;e.classList.contains("category_hidden")||(e.classList.add("category_hidden"),r.classList.remove("rotate"));console.log(t.target);const n=t.target.dataset.section;t.target.dataset.name;console.log(n)}));
//# sourceMappingURL=index.fdbe05f4.js.map

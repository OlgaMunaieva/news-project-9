const e=document.querySelector(".calendar__container"),t=document.querySelector(".calendar__input"),a=document.querySelector(".calendar__calendar"),n=document.querySelector(".calendar__icon");t.placeholder=(new Date).toLocaleDateString(),t.addEventListener("click",(function(){e.classList.toggle("is-hidden"),t.style.backgroundColor="#4440F6",t.style.border="1px solid #4440f6;",n.style.fill="#ffffff"})),a.addEventListener("click",(function(a){const n=a.target;if("DIV"===n.tagName&&n.classList.contains("day")||n.classList.contains("calendar__today")){const a=r.getFullYear(),l=r.getMonth(),c=parseInt(n.innerText),d=new Date(a,l,c);t.value=d.toLocaleDateString(),e.classList.add("is-hidden")}}));const r=new Date,l=()=>{r.setDate(1);const e=document.querySelector(".calendar__days"),t=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),a=new Date(r.getFullYear(),r.getMonth(),0).getDate(),n=r.getDay(),l=7-new Date(r.getFullYear(),r.getMonth()+1,0).getDay()-1;document.querySelector(".calendar__date h1").innerHTML=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],document.querySelector(".calendar__date h2").innerHTML=r.getFullYear();let c="";for(let e=n;e>0;e-=1)c+=`<div class='calendar__prev-date'>${a-e+1}</div>`;for(let e=1;e<=t;e+=1)e===(new Date).getDate()&&r.getMonth()===(new Date).getMonth()?c+=`<div class='calendar__today'>${e}</div>`:c+=`<div class='day'>${e}</div>`;for(let t=1;t<=l;t+=1)c+=`<div class='calendar__next-date'>${t}</div>`,e.innerHTML=c};document.querySelector(".calendar__prev").addEventListener("click",(()=>{r.setMonth(r.getMonth()-1),l()})),document.querySelector(".calendar__next").addEventListener("click",(()=>{r.setMonth(r.getMonth()+1),l()})),l(),document.querySelector(".calendar__prev-year").addEventListener("click",(()=>{r.setFullYear(r.getFullYear()-1),l()})),document.querySelector(".calendar__next-year").addEventListener("click",(()=>{r.setFullYear(r.getFullYear()+1),l()}));
//# sourceMappingURL=index.b0f8c3aa.js.map

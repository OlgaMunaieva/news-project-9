!function(){var e=document.querySelector(".calendar__container"),t=document.querySelector(".calendar__input"),a=document.querySelector(".calendar__calendar"),n=document.querySelector(".calendar__icon");t.placeholder=(new Date).toLocaleDateString(),t.addEventListener("click",(function(){e.classList.toggle("is-hidden"),t.style.backgroundColor="#4440F6",t.style.border="1px solid #4440f6;",n.style.fill="#ffffff"})),a.addEventListener("click",(function(a){var n=a.target;if("DIV"===n.tagName&&n.classList.contains("day")||n.classList.contains("calendar__today")){var c=r.getFullYear(),l=r.getMonth(),o=parseInt(n.innerText),d=new Date(c,l,o);t.value=d.toLocaleDateString(),e.classList.add("is-hidden")}}));var r=new Date,c=function(){r.setDate(1);var e=document.querySelector(".calendar__days"),t=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),a=new Date(r.getFullYear(),r.getMonth(),0).getDate(),n=r.getDay(),c=7-new Date(r.getFullYear(),r.getMonth()+1,0).getDay()-1;document.querySelector(".calendar__date h1").innerHTML=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()],document.querySelector(".calendar__date h2").innerHTML=r.getFullYear();for(var l="",o=n;o>0;o-=1)l+="<div class='calendar__prev-date'>".concat(a-o+1,"</div>");for(var d=1;d<=t;d+=1)d===(new Date).getDate()&&r.getMonth()===(new Date).getMonth()?l+="<div class='calendar__today'>".concat(d,"</div>"):l+="<div class='day'>".concat(d,"</div>");for(var i=1;i<=c;i+=1)l+="<div class='calendar__next-date'>".concat(i,"</div>"),e.innerHTML=l};document.querySelector(".calendar__prev").addEventListener("click",(function(){r.setMonth(r.getMonth()-1),c()})),document.querySelector(".calendar__next").addEventListener("click",(function(){r.setMonth(r.getMonth()+1),c()})),c(),document.querySelector(".calendar__prev-year").addEventListener("click",(function(){r.setFullYear(r.getFullYear()-1),c()})),document.querySelector(".calendar__next-year").addEventListener("click",(function(){r.setFullYear(r.getFullYear()+1),c()}))}();
//# sourceMappingURL=index.bcc284eb.js.map

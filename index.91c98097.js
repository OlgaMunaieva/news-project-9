const e=document.querySelector(".city-name"),t=document.querySelector(".temperature"),n=document.querySelector(".description"),o=document.querySelector(".weather-icon"),r=(document.querySelector(".date"),document.querySelector(".week-day")),a=document.querySelector(".month-year"),i=document.querySelector(".weather-card"),c=document.querySelector(".week-weather-btn"),d=document.querySelector(".today-forecast-btn"),s=document.querySelector(".week-forecast"),u=document.querySelector(".week-forecast-list"),l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];navigator.geolocation.getCurrentPosition((function(r){!function(r,a){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${r}&lon=${a}&appid=e47ed3661eb61aefd3a2374eeeb0d76d&units=metric`).then((e=>{if(!e.ok)throw new Error(error);return e.json()})).then((r=>{const a=`https://openweathermap.org/img/w/${r.weather[0].icon}.png`;e.insertAdjacentHTML("beforeend",r.name),t.innerHTML=`${Math.round(r.main.temp)}&deg`,n.textContent=r.weather[0].description,o.setAttribute("src",a)})).catch((e=>{console.log(e)}))}(r.coords.latitude,r.coords.longitude)}),(function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=e47ed3661eb61aefd3a2374eeeb0d76d").then((e=>{if(!e.ok)throw new Error(error);return e.json()})).then((r=>{const a=`https://openweathermap.org/img/w/${r.weather[0].icon}.png`;e.textContent="Kyiv",t.innerHTML=`${Math.round(r.main.temp)}&deg`,n.textContent=r.weather[0].description,o.setAttribute("src",a)})).catch((e=>{console.error(e)}))})),function(){const e=new Date,t=l[e.getDay()],n=e.getDate().toString().padStart(2,"0"),o=h[e.getMonth()],i=e.getFullYear();r.textContent=t,a.textContent=`${n} ${o} ${i}`}(),c.addEventListener("click",(()=>{i.style.display="none",s.style.display="block";function e(e){const t=`https://api.weatherbit.io/v2.0/forecast/daily?lat=${e.latitude}&lon=${e.longitude}&key=aded7e3553934d64aa846631cabf27f3`;return fetch(t).then((e=>e.json())).then((e=>e.data))}new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition((t=>{e({latitude:t.coords.latitude,longitude:t.coords.longitude})}),(e=>{t(e)}))})).then((t=>e(t))).catch((()=>e({latitude:"50.45466",longitude:"30.5238"}))).then((e=>function(e){const t=e.map((e=>{const t=new Date(e.valid_date).toLocaleDateString(),n=e.min_temp,o=e.max_temp,r=e.weather.description;return`\n        <li class="week-weather-item">\n          <div class="week-weather-date">${t}</div>\n          <div class="week-weather-body">\n            <div class="week-weather-icon">\n              <img src="https://www.weatherbit.io/static/img/icons/${e.weather.icon}.png" width=60px>\n            </div>\n            <div class="week-weather-temp">${n}° - ${o}°</div>\n            <div class="week-weather-desc">${r}</div>\n          </div>\n        </li>\n      `})).join("");u.innerHTML=t}(e)))})),d.addEventListener("click",(()=>{s.style.display="none",i.style.display="block"}));
//# sourceMappingURL=index.91c98097.js.map

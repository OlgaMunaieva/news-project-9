!function(){!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("active"),e.menu.classList.toggle("is-hidden"),document.body.classList.toggle("lock")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)}();var e=window.location.pathname,t=document.getElementById("mob-home__link"),n=document.getElementById("mob-favorite__link"),d=document.getElementById("mob-read__link");"/index.html"===e?t.classList.add("selected-menu"):"/favorite.html"===e?n.classList.add("selected-menu"):"/read.html"===e?d.classList.add("selected-menu"):t.classList.add("selected-menu")}();
//# sourceMappingURL=read.d9cebde3.js.map

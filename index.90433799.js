!function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function o(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o)}();var headerIconSearch=document.querySelector(".form-header__icon-search"),headerInput=document.querySelector(".form-header__input");function onHeaderIconSearchClick(){document.documentElement.clientWidth<768&&(headerInput.classList.toggle("leaving-input"),headerIconSearch.style.position="absolute",headerIconSearch.style.top="5px",headerIconSearch.style.left="14px"),headerInput.classList.contains("leaving-input")||(headerIconSearch.style.position="")}headerIconSearch.addEventListener("click",onHeaderIconSearchClick);var checkbox=document.querySelector(".form-header__checkbox"),checkboxInput=document.querySelector(".checkbox-header__input"),headerIconSun=document.querySelector(".form-header__icon-sun"),headerIconMoon=document.querySelector(".form-header__icon-moon"),headerDark=document.querySelector(".form-header__dark"),headerLight=document.querySelector(".form-header__light"),iconMobMenu=document.querySelector(".icon-mob-menu");function onCheckBoxClick(){var e=checkboxInput.checked;e?(document.body.classList.add("body--dark"),headerIconSun.classList.add("form-header__icon-sun--dark"),headerIconMoon.classList.add("form-header__icon-moon--dark"),headerDark.classList.add("form-header__dark--dark"),headerLight.classList.add("form-header__light--dark"),headerInput.classList.add("form-header__input--dark"),headerIconSearch.classList.add("form-header__icon-search--dark"),iconMobMenu.classList.add("icon-mob-menu--dark")):(document.body.classList.remove("body--dark"),headerIconSun.classList.remove("form-header__icon-sun--dark"),headerIconMoon.classList.remove("form-header__icon-moon--dark"),headerDark.classList.remove("form-header__dark--dark"),headerLight.classList.remove("form-header__light--dark"),headerInput.classList.remove("form-header__input--dark"),headerIconSearch.classList.remove("form-header__icon-search--dark"),iconMobMenu.classList.remove("icon-mob-menu--dark")),checkboxInput.setAttribute("checked","checked"),localStorage.setItem("isDarkMode",e)}checkboxInput.addEventListener("change",onCheckBoxClick);var isDarkMode=JSON.parse(localStorage.getItem("isDarkMode"));isDarkMode?(checkboxInput.checked=!0,document.body.classList.add("body--dark"),headerIconSun.classList.add("form-header__icon-sun--dark"),headerIconMoon.classList.add("form-header__icon-moon--dark"),headerDark.classList.add("form-header__dark--dark"),headerLight.classList.add("form-header__light--dark"),headerInput.classList.add("form-header__input--dark"),headerIconSearch.classList.add("form-header__icon-search--dark"),iconMobMenu.classList.add("icon-mob-menu--dark")):(checkboxInput.checked=!1,document.body.classList.remove("body--dark"),headerIconSun.classList.remove("form-header__icon-sun--dark"),headerIconMoon.classList.remove("form-header__icon-moon--dark"),headerDark.classList.remove("form-header__dark--dark"),headerLight.classList.remove("form-header__light--dark"),headerInput.classList.remove("form-header__input--dark"),headerIconSearch.classList.remove("form-header__icon-search--dark"),iconMobMenu.classList.remove("icon-mob-menu--dark"));var mob=document.querySelector(".mob-menu__checkbox-input"),menu=document.querySelector(".mob-menu"),sun=document.querySelector(".mob-icon-sun"),mobMoon=document.querySelector(".mob-icon-moon");function onMobClick(){var e=mob.checked;e?(menu.classList.add("mob-menu--dark"),sun.classList.add("mob-icon-sun--dark"),mobMoon.classList.add("mob-icon-moon--dark")):(menu.classList.remove("mob-menu--dark"),sun.classList.remove("mob-icon-sun--dark"),mobMoon.classList.remove("mob-icon-moon--dark")),mob.setAttribute("checked","checked"),localStorage.setItem("isDarkMode",e)}mob.addEventListener("click",onMobClick);var isDarkModeMob=JSON.parse(localStorage.getItem("isDarkMode"));isDarkModeMob?(mob.checked=!0,menu.classList.add("mob-menu--dark"),sun.classList.add("mob-icon-sun--dark"),mobMoon.classList.add("mob-icon-moon--dark")):(mob.checked=!1,menu.classList.remove("mob-menu--dark"),sun.classList.remove("mob-icon-sun--dark"),mobMoon.classList.remove("mob-icon-moon--dark"));
//# sourceMappingURL=index.90433799.js.map

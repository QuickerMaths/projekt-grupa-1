(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".menu__text"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",o),n.addEventListener("click",o),c.forEach((e=>{e.addEventListener("click",o)})),window.matchMedia("(min-width: 1280px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.da6b8df2.js.map

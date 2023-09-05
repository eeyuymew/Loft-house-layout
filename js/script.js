const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
   const menuBody = document.querySelector(".menu__body");

   menuBody.addEventListener("click", (e) => {
      e.preventDefault();
      const blockId = e.target.getAttribute("href");
      if (blockId != "#") {
         const blockEl = document.querySelector(blockId);
         blockEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
         document.body.classList.remove("_lock");
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
      }
   });

   iconMenu.addEventListener("click", (e) => {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
   });
}

function menuBodyActions(body) {}

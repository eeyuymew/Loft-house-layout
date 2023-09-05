const animItem = document.querySelector(".header__title-img");
/*Анимация мышки */

if (animItem) {
   window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
         animItem.classList.add("_active");
      } else {
         animItem.classList.remove("_active");
      }
   });
}

/*Настройки анимации при скролле */

const animItems = document.querySelectorAll(".anim");

if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItemOne = animItems[i];
         const animItemOneHeight = animItemOne.offsetHeight;
         const animItemOneOffset = offset(animItemOne).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemOneHeight / animStart;

         if (animItemOneHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if (
            pageYOffset > animItemOneOffset - animItemPoint &&
            pageYOffset < animItemOneOffset + animItemOneHeight
         ) {
            animItemOne.classList.add("active");
         } else {
            animItemOne.classList.remove("active");
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }
   animOnScroll();
}

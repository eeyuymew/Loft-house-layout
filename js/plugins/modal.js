const modalOpenLinks = document.querySelectorAll("#cardsOpenModal");

if (modalOpenLinks.length > 0) {
   for (let i = 0; i < modalOpenLinks.length; i++) {
      const modalLink = modalOpenLinks[i];
      const modalImg = modalLink.querySelector("#cardsImg");

      modalLink.addEventListener("click", (e) => {
         e.preventDefault();
         const myModal = createModal(modalImg);
         modalActions(myModal);
      });
   }
}

function createModal(img) {
   const modal = document.createElement("div");
   modal.classList.add("modal");
   modal.insertAdjacentHTML(
      "afterbegin",
      `
	<div class="modal__overlay" data-close="true">
            <div class="modal__body">
               <div class="modal__content" data-content>
                  <a href="" class="modal__close" data-close="true">&times;</a>
                  <img
                     src="${img.currentSrc}"
                     alt="Номер слайда"
                     class="modal__img"
                  />
               </div>
            </div>
         </div>`
   );

   document.body.appendChild(modal);
   return modal;
}

function modalActions(modal) {
   _modalOpen(modal);

   modal.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.dataset.close) {
         _modalClose(modal);
      }
   });
}

function _modalOpen(modal) {
   setTimeout(() => {
      modal.classList.add("_open");
      document.body.classList.add("locked");
   }, 1);
}

function _modalClose(modal) {
   modal.classList.remove("_open");
   document.body.classList.remove("locked");

   setTimeout(() => {
      modal.parentNode.removeChild(modal);
   }, 400);
}

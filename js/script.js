const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
   const menuBody = document.querySelector(".menu__body");

   iconMenu.addEventListener("click", (e) => {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
   });

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
}

function menuBodyActions(body) {}

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
   // Создание карты.
   var map = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [59.943543, 30.338928],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
   });

   var myPlacemark = new ymaps.Placemark(
      [59.943543, 30.33892],
      {
         balloonContent: `
			<div class="balloon">
				<div class="balloon__address"> Наб. реки Фонтанки 10-15</div>
				<div class="balloon__contacts">
					<a href="tel:+78121234567">+7 (812) 123-45-67</a>
				</div>
			</div>
			`,
      },
      {
         iconLayout: "default#image",
         iconImageHref: "./../img/main/map/icon.svg",
         icon_imagesize: [40, 40],
         iconImageOffset: [-20, -40],
      }
   );

   map.controls.remove("geolocationControl");
   map.controls.remove("searchControl");
   map.controls.remove("trafficControl");
   map.controls.remove("typeSelector");
   map.controls.remove("rulerControl");
   map.behaviors.disable(["scrollZoom"]);

   map.geoObjects.add(myPlacemark);
   myPlacemark.balloon.open();
}

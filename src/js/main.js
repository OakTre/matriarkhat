import documentReady from "./helpers/documentReady";
import LazyLoad from "vanilla-lazyload";
import { initMobileMenu } from "./blocks/mobile_menu";
import { initSlider } from "./blocks/second-sec";
import { initTabs } from "./blocks/tabs";
import { fourthSecAnim } from "./blocks/fourth-sec"
import { initContatsSlider } from "./blocks/contats-slider"

documentReady(() => {
	let lazyLoad = new LazyLoad();
	lazyLoad.update();


	initMobileMenu();
	initSlider();
	initTabs();
	fourthSecAnim();
	initContatsSlider();
})


;(function() {
	if (typeof ymaps === 'undefined') {
	  return;
	}

	ymaps.ready(function () {
	  var myMap = new ymaps.Map('ymap', {
			  center: [55.780937, 37.580167],
			  zoom: 16
		  }, {
			  searchControlProvider: 'yandex#search'
		  }),

		  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			  balloonContent: 'Москва, 3-я улица Ямского поля, 9 к. 3'
		  }, {
			  iconLayout: 'default#image',
			  iconImageHref: '../img/sprite/marker.svg',
			  iconImageSize: [40, 63.2],
			  iconImageOffset: [-50, -38]
		  });

	  myMap.geoObjects.add(myPlacemark);

	  myMap.behaviors.disable('scrollZoom');
  });


})();

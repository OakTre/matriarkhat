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

	const myInput = document.querySelectorAll(".consultation-form__input");
	const myTextArea = document.querySelector(".consultation-form__textearea");
	const myFileInput = document.querySelector(".consultation-form__input-file");

	myInput.forEach(function(el){
		el.addEventListener("change", function(){
			let inputLabel = el.closest(".consultation-form__label");

			if (!el.value) {
				inputLabel.querySelector(".consultation-form__legend-text").classList.remove("_active");
				inputLabel.querySelector(".icon").classList.remove("_active");
			} else {
				inputLabel.querySelector(".consultation-form__legend-text").classList.add("_active");
				inputLabel.querySelector(".icon").classList.add("_active");
			}

		})
	});

	myTextArea.addEventListener("change", function(){
		let textareaLabel = this.closest(".consultation-form__label");

		if(!this.value) {
			textareaLabel.querySelector(".icon").classList.remove("_active");
		} else {
			textareaLabel.querySelector(".icon").classList.add("_active");
		}
	});

	var splitText = function (str) {
		return str.split('\\').pop().split('/').pop();
	}

	myFileInput.addEventListener("change", function(){
		let fileInputLabel = this.closest(".consultation-form__file-label");

		if(this.value) {
			let fileName = splitText(this.value);

			fileInputLabel.querySelector(".consultation-form__file-label-text").innerText = "Файл '"+`${fileName}`+"' загружен.";
			console.log(this.value);
		} else {
			fileInputLabel.querySelector(".consultation-form__file-label-text").innerText = "Файл не выбран";
			console.log(this.value);
		}
	});

	// скопировать текст в буфер обмена
	const copyText = document.querySelector(".js--copied-text");
	const copyTextButton = document.querySelector(".js--copy-text-button");
	const copyTextTooltipText = document.querySelector(".contacts__tooltip-text");
	const copyTextTooltip = document.querySelector(".contacts__tooltip");

	copyTextButton.addEventListener("click", function(e){
		e.preventDefault();
		copyingText();
	});

	let copyingText = function() {
		copyText.select();
		document.execCommand("copy");

		copyTextTooltipText.innerText = copyText.value;
		copyTextTooltip.style.opacity = "1";
		copyTextTooltip.style.visibility = "visible";

		setTimeout(function(){
			copyTextTooltip.style.opacity = "0";
			copyTextTooltip.style.visibility = "hidden";
		}, 1500)
	}

})

// яндекс карты
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

import Swiper from 'swiper';
import gsap from 'gsap';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function initContatsSlider() {
	const iconLike = document.querySelectorAll(".icon-like");

	let test = function() {
		iconLike.forEach(function(el){

			gsap.to(el, {
				y: -25,
				opacity: 1,
				duration: 1.8,
				// yoyo:true,
				repeat: -1
			})

		})
	}

	const swiper = new Swiper('.contacts__gallery', {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		spaceBetween: 32,
		speed: 3000,
		autoplay: {
			delay: 100,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			500: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			960: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1025: {
				slidesPerView: 6,
				spaceBetween: 32,
			},
		},
		on: {
			init: function () {
				test();
			}
		},
	});
}

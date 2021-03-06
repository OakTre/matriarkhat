import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

export function initSlider() {
	const swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		speed: 800,
		navigation: {
			nextEl: ".examples__slider-nav-btn_right",
			prevEl: ".examples__slider-nav-btn_left"
		},
		pagination: {
			el: ".examples__slider-pagination",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});
}

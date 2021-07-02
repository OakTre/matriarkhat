import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export function initContatsSlider() {
	const swiper = new Swiper('.contacts__gallery', {
		slidesPerView: 3,
		spaceBetween: 20,
		centeredSlides: true,
		loop: true,
		spaceBetween: 32,
		speed: 900,
		autoplay: {
			delay: 900,
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
	});
}

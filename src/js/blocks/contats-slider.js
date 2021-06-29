import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

export function initContatsSlider() {
	const swiper = new Swiper('.contacts__gallery', {
		slidesPerView: 6,
		centeredSlides: true,
		loop: true,
		spaceBetween: 32,
		speed: 700,
		autoplay: {
			delay: 700,
			disableOnInteraction: false,
		},
	});
}

import gsap from "gsap";

export function initMobileMenu() {
	const buttonOpen = document.querySelector(".header__burger");
	const mobileMenu = document.querySelector(".mobile-menu");
	const buttonClose = document.querySelector(".mobile-menu__button");

	const timeline = gsap.timeline({
		paused: true,
		reversed: true,
	});

	timeline
		.to(mobileMenu, {
			top: 0,
			duration: 0.7
		})
		.to(".mobile-menu__location", {
			y: 0,
			duration: 0.3
		}, "-=0.1")
		.to(".mobile-menu__call", {
			y: 0,
			duration: 0.3
		}, "-=0.1")
		.to(".mobile-menu__button-call", {
			y: 0,
			duration: 0.3
		}, "-=0.1")


	buttonOpen.addEventListener("click", function() {
		timeline.play();
	})

	buttonClose.addEventListener("click", function() {
		timeline.reverse();
	})
}

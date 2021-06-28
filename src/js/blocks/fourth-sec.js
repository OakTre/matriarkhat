import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fourthSecAnim() {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".dreams",
			start: "50% bottom"
		}
	})

	const unsetEvents = () => {
		let el = document.querySelectorAll(".dreams__list-item");

		el.forEach(function(e){
			e.classList.remove("_events-none")
		})

	}

	// tl.to(".dreams__list-item_top", {
	// 	paddingTop: 591,
	// 	duration: 0.7,
	// 	onComplete: unsetEvents
	// })


}

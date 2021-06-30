import gsap from "gsap";

export function initTabs() {
	const tabs = document.querySelectorAll(".tabs");
	const tabsButton = document.querySelectorAll(".tabs__button");
	const tabsContent = document.querySelectorAll(".tabs__content");
	const timeline = gsap.timeline({
		paused: true,
		reversed: true
	})

	if (tabs) {
		tabs.forEach(function(el){
			let parent = el;
			el.addEventListener("click", function(e){
				if(e.target.classList.contains("tabs__button")) {
					const tabsPath = e.target.dataset.tabsParent;
					console.log(tabsPath);
					el.querySelectorAll(".tabs__button").forEach(function(el){ el.classList.remove("_active") })
					el.querySelector(`[data-tabs-parent="${tabsPath}"]`).classList.add("_active");

					let currentNavItem = el.querySelector(`[data-tabs-parent="${tabsPath}"]`);
					let currentContentItem = el.querySelector(`[data-tabs-child="${tabsPath}"]`);
					let tabsImg = currentContentItem.querySelector(".tabs__image");

					timeline
						.fromTo(tabsImg, {
							scaleX: 0.5,
							scaleY: 0.5,
							duration: 0.4
						}, {
							scaleX: 1,
							scaleY: 1,
							duration: 0.4
						})
						.fromTo(currentContentItem.querySelector("h3"), {
							y: -100,
						},
						{
							y: 0,
							duration: 0.4
						}, "-=0.4")
						.fromTo(currentContentItem.querySelector("p"), {
							y: 120,
						},
						{
							y: 0,
							duration: 0.4
						}, "-=0.4")

					el.querySelectorAll(".tabs__button").forEach(function(el) {el.classList.remove("_active")});
					currentNavItem.classList.add("_active");

					el.querySelectorAll(".tabs__content").forEach(function(el) {
						el.classList.remove("_active");

						timeline.reverse();
					});
					currentContentItem.classList.add("_active");

					timeline.play();
				}
			});
		})
	}
}

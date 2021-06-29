import gsap from "gsap";

export function initTabs() {
	const tabs = document.querySelector(".tabs");
	const tabsButton = document.querySelectorAll(".tabs__button");
	const tabsContent = document.querySelectorAll(".tabs__content");
	const timeline = gsap.timeline({
		paused: true,
		reversed: true
	})

	if (tabs) {
		tabs.addEventListener("click", function(e){
			if(e.target.classList.contains("tabs__button")) {
				const tabsPath = e.target.dataset.tabsParent;
				console.log(tabsPath);
				tabsButton.forEach(function(el){ el.classList.remove("_active") })
				document.querySelector(`[data-tabs-parent="${tabsPath}"]`).classList.add("_active");
				tabsHandler(tabsPath);
			}
		});
	}

	function tabsHandler(path) {
		let currentNavItem = document.querySelector(`[data-tabs-parent="${path}"]`);
		let currentContentItem = document.querySelector(`[data-tabs-child="${path}"]`);
		let tabsImg = currentContentItem.querySelector(".innovation__content-item-img");

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

		tabsButton.forEach(function(el) {el.classList.remove("_active")});
		currentNavItem.classList.add("_active");

		tabsContent.forEach(function(el) {
			el.classList.remove("_active");

			timeline.reverse();
		});
		currentContentItem.classList.add("_active");

		timeline.play();
	}


}

import documentReady from "./helpers/documentReady";
import LazyLoad from "vanilla-lazyload";
import { initMobileMenu } from "./blocks/mobile_menu";
import { initSlider } from "./blocks/second-sec";
import { initTabs } from "./blocks/tabs";
import { fourthSecAnim } from "./blocks/fourth-sec"

documentReady(() => {
	let lazyLoad = new LazyLoad();
	lazyLoad.update();


	initMobileMenu();
	initSlider();
	initTabs();
	fourthSecAnim();
})



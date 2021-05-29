import Vue from "vue";
import Options from "./components/Options.vue";
import ChromeStorage from "./modules/chromeStorage";
import PatternStorage from "./modules/patternStorage";

const chromeStorage = new ChromeStorage();
const storage = new PatternStorage(chromeStorage);

new Vue({
	el: "#root",
	render: renderComponent => renderComponent(Options, {
		props: { storage }
	})
});

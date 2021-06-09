import Vue from "vue";
import Options from "./components/Options.vue";
import ChromeManager from "./modules/chromeManager";
import ChromeStorage from "./modules/chromeStorage";
import ConfigurationManager from "./modules/configurationManager";
import PatternStorage from "./modules/patternStorage";

const chromeStorage = new ChromeStorage();
const storage = new PatternStorage(chromeStorage);

const chromeManager = new ChromeManager();
const configurationManager = new ConfigurationManager(storage, chromeManager);

new Vue({
	el: "#root",
	render: renderComponent => renderComponent(Options, {
		props: { storage, configurationManager }
	})
});

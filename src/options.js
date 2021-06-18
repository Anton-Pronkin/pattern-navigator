import Vue from "vue";
import OptionsPage from "./components/OptionsPage.vue";
import ChromeManager from "./modules/chrome/chromeManager";
import ChromeStorage from "./modules/chrome/chromeStorage";
import ConfigurationManager from "./modules/configurationManager";
import PatternStorage from "./modules/patternStorage";

const chromeStorage = new ChromeStorage();
const storage = new PatternStorage(chromeStorage);

const chromeManager = new ChromeManager();
const configurationManager = new ConfigurationManager(storage, chromeManager);

new Vue({
	el: "#root",
	render: renderComponent => renderComponent(OptionsPage, {
		props: { storage, configurationManager }
	})
});

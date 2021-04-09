import Vue from "vue";
import App from "./components/Options.vue";

new Vue({
	render: renderElement => renderElement(App),
}).$mount("#root");

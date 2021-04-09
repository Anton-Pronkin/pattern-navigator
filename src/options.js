import Vue from "vue";
import Options from "./components/Options.vue";

const testData = {
	patterns: [{
		id: 1,
		name: "Issue tracker",
		regexp: "ISSUE-\\d{1,5}",
		title: "Open $1 in my issue traker",
		url: "my-tracker/issues/$1"
	}, {
		id: 2,
		name: "Improvement tracker",
		regexp: "IMPROVEMENT_\\d{1,3}",
		title: "Go to $1 improvement",
		url: "other-tracker/?improvementNumber=$1"
	}]
}

new Vue({
	el: "#root",
	render: renderComponent => renderComponent(Options, {
		props: { ...testData }
	})
});

var app = new Vue({
	el: "#app",
	data: {
		message: "Hello From Vue!",
	},
});

var app2 = new Vue({
	el: "#app2",
	data: {
		message: "Just some tooltip info",
	},
});

var app3 = new Vue({
	el: "#app3",
	data: {
		todos: [
			"Make a repo",
			"Connect Vue via CDN",
			"Make your first element",
			"Play around with vue directives",
		],
	},
});

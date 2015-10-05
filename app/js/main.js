require.config({
	paths: {
		"jquery": "libs/jquery/dist/jquery",
		"underscore": "libs/underscore/underscore",
		"backbone": "libs/backbone/backbone",
		"bootstrap": "libs/bootstrap/js/bootstrap",
		"text": "libs/text/text",
		"templates": "../templates"
	}
});

require(['app'], function(App) {
		new App.initialize();
})	
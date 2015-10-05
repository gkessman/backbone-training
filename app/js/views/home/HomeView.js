define([
	'jquery',
	'underscore',
	'backbone',
	], function($, _, Backbone) {

	var HomeView = Backbone.View.extend({

		render: function() {

			console.log("This is the Home View!");

		}
	});

	return HomeView;

});
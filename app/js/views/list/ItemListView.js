define([
	'jquery',
	'underscore',
	'backbone',
	], function($, _, Backbone) {

	var ItemListView = Backbone.View.extend({

		render: function() {

			console.log("This is the Item List View!");

		}
	});

	return ItemListView;

});
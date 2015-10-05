define([
	'jquery',
	'underscore',
	'backbone',
	], function($, _, Backbone) {

	var ItemEditView = Backbone.View.extend({

		render: function() {

			console.log("This is the Item Edit View!");

		}
	});

	return ItemEditView;

});
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/list/listViewTemplate.html'
	], function($, _, Backbone, listTemplate) {

	var ItemListView = Backbone.View.extend({

		el: $('.page'),

		render: function() {

			this.$el.html(listTemplate);
			console.log("This is the Item List View!");

		}
	});

	return ItemListView;

});
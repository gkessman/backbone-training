define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/list/listEditTemplate.html'
	], function($, _, Backbone, editTemplate) {

	var ItemEditView = Backbone.View.extend({

		el: $('.page'),

		render: function() {

			this.$el.html(editTemplate);
			console.log("This is the Item Edit View!");

		}
	});

	return ItemEditView;

});
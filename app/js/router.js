define([
	'jquery', 
	'underscore', 
	'backbone', 
	'views/home/HomeView',
	'views/list/ItemListView', 
	'views/list/ItemEditView'
	], function($, _, Backbone, HomeView, ItemListView, ItemEditView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			'list': 'showList',
			'edit': 'editItem',

			// Default
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){

		var app_router = new AppRouter;

		app_router.on('route:showList', function() {

			var listView = new ItemListView();
			listView.render();

		});

		app_router.on('route:editItem', function() {

			var editView = new ItemEditView();
			editView.render();

		});

		app_router.on('route:defaultAction', function(actions) {

			var homeView = new HomeView();
			homeView.render();

		});

		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});
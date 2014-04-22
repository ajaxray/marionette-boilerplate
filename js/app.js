/*global define */

define([
    'backbone',
	'marionette',
	'collections/Nav',
	'views/MenuView',
	'views/Footer'
], function (Backbone, Marionette, Nav, MenuView,  Footer) {
	'use strict';

	var app = new Marionette.Application();

    app.pages = new Nav([
        {title: 'Home', name: 'home', active: true},
        {title: 'About', name: 'about'},
        {title: 'Contact', name: 'contact'}
    ]);

	var footer = new Footer();
    var menu = new MenuView({collection: app.pages});

	app.addRegions({
		menu: '#main-nav',
		main: '#main',
		footer: '#footer'
	});

	app.addInitializer(function () {
        app.menu.show(menu);
		app.footer.show(footer);
	});


//	app.listenTo(todoList, 'all', function () {
//		app.main.$el.toggle(todoList.length > 0);
//		app.footer.$el.toggle(todoList.length > 0);
//	});

	app.vent.on('menu:activate', function (activePageModel) {
        menu.collection.findWhere({active: true})
            .set('active', false);
        activePageModel.set('active', true);
        menu.render();
	});

	return window.app = app;
});

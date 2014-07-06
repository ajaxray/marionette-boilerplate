/*global define */

define([
	'app',
    'views/HomeView',
    'views/PageView'
], function (app, HomeView, PageView) {
	'use strict';

	return {
		showPage: function (pageName) {
            if(pageName == null) pageName = 'home';

            console.log('Router => Showing page: ' + pageName);
			var pageModel = app.pages.findWhere({name: pageName});

            app.vent.trigger('menu:activate', pageModel);
            if(pageName == 'home') {
                app.main.show(new HomeView({model: pageModel}));
            } else {
                app.main.show(new PageView({model: pageModel}));
            }

            if(pageName == 'about') {
                console.log('Example of on demand module loading..');
                require(['modules/Example'], function(Example) {
                    Example.start();
                });
            }
		},
        hello: function() {
            console.log('In route /hi');
        }
	};
});

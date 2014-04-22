/*global define */

define([
	'app',
    'views/PageView'
], function (app, PageView) {
	'use strict';

	return {
		showPage: function (pageName) {
            if(pageName == null) pageName = 'home';

            console.log('Router => Showing page: ' + pageName);
			var pageModel = app.pages.findWhere({name: pageName});

            app.vent.trigger('menu:activate', pageModel);
            app.main.show(new PageView({model: pageModel}));
		},
        hello: function() {
            console.log('In route /hi');
        }
	};
});

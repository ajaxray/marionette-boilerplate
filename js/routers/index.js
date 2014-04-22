/*global define */

define([
	'marionette'
], function (Marionette) {
	'use strict';

	return Marionette.AppRouter.extend({
		appRoutes: {
			'': 'showPage',
			'page/:pageName': 'showPage',
            'hi': 'hello'
		}
	});
});

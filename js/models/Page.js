/*global define */

define([
	'backbone'
], function (Backbone) {
	'use strict';

	return Backbone.Model.extend({

		defaults: {
			title: 'Page title',
			content: 'Page content',
            acive: false,
            name: '404'
		},

		initialize: function () {
			//this.set('content', _.result(templates.pages, this.get('name')));
		}
	});
});


/*global define */

define([
	'backbone',
	'models/Page'
], function (Backbone, Page) {
	'use strict';

	return Backbone.Collection.extend({
		model: Page
	});
});

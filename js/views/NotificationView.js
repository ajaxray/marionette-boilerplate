/*global define */

define([
	'marionette',
    'tpl!templates/notification.html'
], function (Marionette, notificationTpl) {
	'use strict';

	return Marionette.ItemView.extend({
        template: notificationTpl,
		events: {
            'click .dismiss': function(e) {
                e.preventDefault();
                this.trigger('notification:close');
            }
        }
	});
});

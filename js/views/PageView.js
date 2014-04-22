/*global define */

define([
	'marionette',
	'templates',
    'underscore',
], function (Marionette, templates, _) {
	'use strict';

	return Marionette.ItemView.extend({
		template: templates.page,

        ui: {
            header: 'h2'
        },

        onBeforeRender: function(){
            this.model.set('content', _.result(templates.pages, this.model.get('name')))
        },

        onRender: function() {
            if(this.model.get('name') == 'home') {
                this.ui.header.remove();
            }
        }

	});
});

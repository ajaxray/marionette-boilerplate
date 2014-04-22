/*global define */

define([
	'marionette',
	'templates',
    'models/Page',
    'views/PageView'
], function (Marionette, templates, Page, PageView) {
	'use strict';

	return Marionette.ItemView.extend({
		template: templates.menuItem,
        tagName: 'li',
        model: Page,

		ui: {
			link: 'a'
		},

		events: {
			'click a': 'activateMenu'
		},
        modelEvents: {
            "change:active": function() {
                this.render();
            }
        },

        activateMenu: function (event) {
            window.app.vent.trigger('menu:activate', this.model);
            window.app.main.show(new PageView({model: this.model}));
		},

        onRender: function() {
            if(this.model.get('active')) this.$el.addClass('active');
        }

	});
});

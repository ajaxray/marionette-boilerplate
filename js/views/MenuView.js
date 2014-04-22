/*global define */

define([
	'marionette',
    'views/MenuItemView'
], function (Marionette, MenuItemView) {
	'use strict';

	return Marionette.CollectionView.extend({
        itemView: MenuItemView,
        tagName: 'ul',
        className: 'nav nav-pills pull-right'
	});

});

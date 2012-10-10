var App = App || {};

require.config({

	// Maximum load time for scripts.
	waitSeconds: 45,

	baseUrl: "/javascripts",

	paths: {

		// Core Libraries
		'jquery': 'lib/jquery-1.7.2.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone-min',

		// Backbone Submodules
		'global-configs': 'app/global/config/index',
		'global-routers': 'app/global/router/index',
		'global-models': 'app/global/model/index',
		'global-collections': 'app/global/collection/index',
		'global-views': 'app/global/view/index',
		'global-templates': 'app/global/template/index',

		// Singleton Method Collections
		'app-utilities': 'app/global/app.utilities',
		'app-analytics': 'app/global/app.analytics',
		'app-global': 'app/global/index'

	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {

		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone' //attaches 'Backbone' to the window object
		}

	}

});

define(['jquery', 'backbone', 'app-global'], function($, Backbone, AppGlobal) {

	return function() {

		AppGlobal.utilities.init();
		AppGlobal.init();

	}

});
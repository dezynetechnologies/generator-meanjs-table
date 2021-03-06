'use strict';

module.exports = {
	app: {
		title: '<%= appName %>',
		description: '<%= appDescription %>',
		keywords: '<%= appKeywords %>'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				//'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/bootstrap-material-design/dist/css/roboto.min.css',
				'public/lib/bootstrap-material-design/dist/css/material.min.css',
				'public/lib/bootstrap-material-design/dist/css/ripples.min.css',
				'public/lib/ng-table/ng-table.min.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', <% if (angularCookies) { %>
				'public/lib/angular-cookies/angular-cookies.js', <% } if (angularAnimate) { %>
				'public/lib/angular-animate/angular-animate.js', <% } if (angularTouch) { %>
				'public/lib/angular-touch/angular-touch.js', <% } if (angularSanitize) { %>
				'public/lib/angular-sanitize/angular-sanitize.js', <% } %>
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'//code.jquery.com/jquery-1.10.2.min.js',
				'public/lib/bootstrap-material-design/dist/js/ripples.min.js',
				'public/lib/bootstrap-material-design/dist/js/material.min.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/ng-table/ng-table.min.js',
				'public/lib/api-check/dist/apiCheck.min.js',
				'public/lib/angular-formly/dist/formly.min.js',
				'public/lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};

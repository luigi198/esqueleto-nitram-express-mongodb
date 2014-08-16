var path = require('path'),
	rootPath = path.resolve(__dirname + '../..'),
	title = '[TODO: title]';

// -----------------------
// Expose config
// -----------------------

// root: directorio root del proyecto
// publicdir: directorio donde están los assets
// title: título base para el sitio
// fbappid: Facebook App ID (cambiarlo también en fb.js)
// gaid: Google Analytics property ID

module.exports = {
	development: {
		root: rootPath,
		publicdir: '/public',
		title: '[dev] ' + title,
		style: '/css/style.css',
		main: '/js/main.js',
		fbappid: '[TODO: Facebook App ID]',
		gaid: '[TODO: UA]',
		domain: '[TODO: domain]',
		db: 'mongodb://localhost/test'
	},
	staging: {
		root: rootPath,
		publicdir: '/public',
		title: title,
		style: '/css/style.css',
		main: '/js/main.js',
		fbappid: '[TODO: Facebook App ID]',
		gaid: '[TODO: UA]',
		domain: '[TODO: Domain]',
		db: process.env.MONGOHQ_URL
	},
	production: {
		root: rootPath,
		publicdir: '/public',
		title: title,
		style: '/css/style.css',
		main: '/js/main.js',
		fbappid: '[TODO: Facebook App ID]',
		gaid: '[TODO: UA]',
		domain: '[TODO: Domain]',
		db: process.env.MONGOHQ_URL
	}
}
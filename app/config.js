
'use strict'


// Export

module.exports = {

	app: {
		name: 'Demo',
	},

	use: {
		templates: '.html',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
		imagemin: [ 'png', 'jpg','svg' ],
		sourcemaps: [ 'js', 'scss' ],
		autoprefixer: [ 'last 3 versions', 'ie 10', 'ie 11' ],
		// Путь от корня сборки до файла с переменными
		globalStyles: ['app/blocks/develop/app/styles/variables.scss', 'app/blocks/develop/app/styles/common.scss', 'app/blocks/develop/app/styles/normalize.scss', 'app/blocks/develop/app/styles/mixin.scss', 'app/blocks/develop/app/styles/placeholders.scss'],
	},

	autoCreate: {
		onlyOnWatch: false,
	},

	dist: {
		styles: 'styles',
		fonts: 'static/fonts',
		img: 'static/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},

	HTMLBeautify: {
		preserve_newlines: false,
	},

}


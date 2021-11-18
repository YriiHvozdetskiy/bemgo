'use strict'

module.exports = {

	nodes: [],

	modules: [
		{
			from: './app/blocks/develop/app/scripts', // расположение модуля (CDN или путь от корня сборки)
			inject: ['jquery-3.6.0.min.js'],
		},
		{
			from: './app/blocks/develop/app/scripts/plugins',
			inject: ['jquery.validate.min.js', 'additional-methods.min.js'],
		},
	],

}

'use strict';

module.exports = {

	nodes: [],

	modules: [
		// так ці файли підключаються ПІД app.css
		// {
		// 	from: 'app/blocks/develop/app/plugins/fancybox',
		// 	inject: ['fancybox.css'],
		// },
		// {
		// 	from: 'app/blocks/develop/app/plugins/swiper',
		// 	inject: ['swiper.min.css'],
		// },
		// {
		// 	from: 'app/blocks/develop/app/plugins/jquery-ui',
		// 	inject: ['jquery-ui.min.css'],
		// },
		{
			// цей імпорт буде в всіх файлах до всіх сторінок (bemgo-yarn/dist/styles/app.css)
			// import: ['normalize.css', 'swiper.scss', 'fancybox.css', 'jquery-ui.min.css'],//'variable.scss'-- не додавати
			import: ['normalize.css'],
		},
		// подключення через node_modules
		// {
		// 	from: 'node_modules/@fancyapps/ui/dist',// подключим fancybox из node_modules, буде на всіх сторінках в всіх css файлах і в ФІНАЛЬНІЙ збірці теж (npm run do)
		// 	import: ['fancybox.css'],
		// }
		{
			from: 'app/blocks/develop/app/assets',
			inject: ['jquery-3.6.0.min.js'],
		},
		{
			from: 'app/blocks/develop/app/plugins/swiper',
			inject: ['swiper.min.js'],
		},
		{
			from: 'app/blocks/develop/app/plugins/fancybox',
			inject: ['jquery.fancybox.min.js'],
		},
		{
			from: 'app/blocks/develop/app/plugins/jquery-ui',
			inject: ['jquery-ui.min.js'],
		},
		// так ці файли з розширенняс css підключаються ПІД app.css варіант 2.0
		// {
		// 	from: 'app/blocks/develop/app/plugins/swiper',
		// 	inject: ['swiper.min.js', 'swiper.min.css'],
		// },
		// {
		// 	from: 'app/blocks/develop/app/plugins/fancybox',
		// 	inject: ['jquery.fancybox.min.js','fancybox.css'],
		// },
		// {
		// 	from: 'app/blocks/develop/app/plugins/jquery-ui',
		// 	inject: ['jquery-ui.min.js', 'jquery-ui.min.css'],
		// },
		{
			from: 'app/blocks/develop/app/plugins/validate',
			inject: ['jquery.validate.min.js'],
			// function filter - можем підключати файли тільки на ту сторінку яка нам потрібна
			filter(file, node, type, page) {
				// проверка includes( '[імя сторіки на якій підключати файл]' )
				// пишем в page <div class="app app_no_js [index]">
				return node.attrs.class.split(' ').includes('index'); // буде підключений тільки на сторінці 'index'
			},
		},
		//можем підключати в загаліний файл окремі файли з кодом для select_dropdown наприклад чи слайдера (всі ці файли будуть в одному app.js)
		{
			//from: 'app/blocks/develop/app', - якщо немає, то пошук буде йти з app/blocks/develop/app/assets
			import: ['refs.js'],
		},
		{
			import: ['validate_script.js'],
		},
		{
			import: ['select_dropdown.js'],
		},
		{
			import: ['sliders.js'],
		},
	],

};

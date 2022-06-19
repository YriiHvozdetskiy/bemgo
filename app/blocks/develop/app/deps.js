'use strict'

module.exports = {

	nodes: [],

	modules: [
		{
			// цей імпорт буде в всіх файлах до всіх сторінок
			import: ['normalize.css', 'swiper.scss', 'fancybox.min.css']//'variable.scss'-- не додавати
		},
		// подключення через node_modules
		// {
		// 	from: 'node_modules/@fancyapps/ui/dist',// подключим fancybox из node_modules, буде на всіх сторінках в всіх css файлах і в ФІНАЛЬНІЙ збірці теж (npm run do)
		// 	import: ['fancybox.css'],
		// }
		{
			from: 'app/blocks/develop/app',
			inject: ['jquery-3.6.0.min.js'],
		},
		{
			from: 'app/blocks/develop/app',
			inject: ['swiper.min.js'],
		},
		{
			from: 'app/blocks/develop/app',
			inject: ['jquery.fancybox.min.js'],
		},
		{
			from: 'app/blocks/develop/app',
			inject: ['jquery.validate.min.js'],
			// function filter - можем підключати файли тільки на ту сторінку яка нам потрібна
			filter(file, node, type, page) {
				// проверка includes( '[імя сторіки на якій підключати файл]' )
				// пишем в page <div class="app app_no_js [index]">
				return node.attrs.class.split(' ').includes('index') // буде підключений тільки на сторінці 'index'
			}
		},
		//можем підключати в загаліний файл окремі файли з кодом для select_dropdown наприклад чи слайдера (всі ці файли будуть в одному app.js)
		// всі елементи з DOM
		{
			from: 'app/blocks/develop/app',
			import: ['refs.js'],
		},
		{
			from: 'app/blocks/develop/app',
			import: ['validate_script.js'],
		},
		{
			from: 'app/blocks/develop/app',
			import: ['select_dropdown.js'],
		},
		{
			from: 'app/blocks/develop/app',
			import: ['sliders.js'],
		},
	],

}

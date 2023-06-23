'use strict';

module.exports = {

   nodes: [],

   modules: [
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

      // якщо потрібно підключити js бібліотеки через async, defer н-д: jquery.min.js@async, jquery.min.js@defer

      // =================== CDN ===================

      //   ===== jquery =====
      {
         from: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/',
         inject: ['jquery.min.js'],
      },
      //    ===== swiper =====
      // {
      //    from: 'https://cdn.jsdelivr.net/npm/swiper@9/',
      //    inject: ['swiper-bundle.min.js', 'swiper-bundle.min.css'],
      // },

      //    ===== fancybox v3.5.7=====
      {
         from: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/',
         inject: ['jquery.fancybox.min.js', 'jquery.fancybox.min.css'],
      },

      //    ===== Fancybox UI v5=====
      //    url:https://fancyapps.com/fancybox/
      // {
      //    from: 'https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.15/fancybox/',
      //    inject: ['fancybox.umd.js', 'fancybox.min.css'],
      // },
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/fancyapps-ui/5.0.19/fancybox/fancybox.umd.js"
      //         integrity="sha512-pNE1z7qc25DcfLqSEIjqhtd2r2V5asx07lJZn8ZDCy7sBEmVgUWiDwdTvvhplJnaVDwQSL0V6TWdSsqz+7ALYg=="
      //         crossOrigin="anonymous"
      //         referrerpolicy="no-referrer">
      // </script>

      //    ===== jquery-validate =====
      // {
      // 	from: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/',
      // 	inject: ['jquery.validate.min.js'],
      // },

      // //  ===== jqueryui =====
      // {
      // 	from: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/',
      // 	inject: ['jquery-ui.min.js'],
      // },
      // {
      // 	from: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/',
      // 	inject: ['jquery-ui.min.css'],
      // },

      // =================== / CDN ===================

      // {
      //    from: 'app/blocks/develop/app/assets',
      //    inject: ['jquery-3.6.0.min.js'],
      // },
      // {
      //    from: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/',
      //    inject: ['lodash.min.js'],
      // },
      // {
      //    from: 'app/blocks/develop/app/assets',
      //    inject: ['lodash.js'],
      // },
      // {
      //    from: 'app/blocks/develop/app/assets',
      //    inject: ['lodashDebounce.js'],
      // },
      // {
      //    from: 'app/blocks/develop/app/plugins/swiper',
      //    inject: ['swiper.min.js', 'swiper.min.css'],
      // },
      // {
      //    from: 'app/blocks/develop/app/plugins/fancybox',
      //    inject: ['jquery.fancybox.min.js', 'fancybox.css'],
      // },
      // {
      // 	from: 'app/blocks/develop/app/plugins/jquery-ui',
      // 	inject: ['jquery-ui.min.js', 'jquery-ui.min.css'],
      // },
      // {
      //    from: 'app/blocks/develop/app/plugins/validate',
      //    inject: ['jquery.validate.min.js'],
      //    // function filter - можем підключати файли тільки на ту сторінку яка нам потрібна
      //    filter(file, node, type, page) {
      //       // проверка includes( '[імя сторіки на якій підключати файл]' )
      //       // пишем в page <div class="app app_no_js [index]">
      //       return node.attrs.class.split(' ').includes('index'); // буде підключений тільки на сторінці 'index'
      //    },
      // },
      //можем підключати в загаліний файл окремі файли з кодом для select_dropdown наприклад чи слайдера (всі ці файли будуть в одному app.js)
      {
         //from: 'app/blocks/develop/app', - якщо немає, то пошук буде йти з app/blocks/develop/app/assets
         // файли будуть підклбчені в dist/scripts/app.js  в тій послідовності які знаходяться в масиві
         import: ['refs.js'],
      },
      // 'sliders.js'
      // 'dynamicAdapt.js'
      // 'validate.js'
      // 'selectDropdown.js'
      // 'fancybox.js'
      // 'validate.js'

      // альтернатива підключення

      // {
      //    import: ['dynamicAdapt.js'],
      // },
      // {
      //    import: ['validate.js'],
      // },
      // {
      //    import: ['selectDropdown.js'],
      // },
      // {
      //    import: ['sliders.js'],
      // },
      // {
      //    import: ['fancybox.js'],
      // },
   ],

};

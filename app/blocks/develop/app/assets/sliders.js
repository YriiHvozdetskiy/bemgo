/* ============================ sliders.js START ================================================================= */
const sliderHome = new Swiper('.slider-home', {
	//кастомна поогінація
	pagination: {
		el: '.swiper-pagination', clickable: true, renderBullet: (index, className) => `
         <div class="${className}">
            <div class="slider-home__line">
               <div class="slider-home__progress-line"></div>
             </div>
         </div>`,
	},
})
/* ============================ sliders.js END ================================================================= */


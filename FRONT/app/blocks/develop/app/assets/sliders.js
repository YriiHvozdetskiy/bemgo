/* ============================ sliders.js START ================================================================= */
const slider = new Swiper('.swiper', {
   // Default parameters
   //the number of slides it shows
   slidesPerView: 1,
   //turning off if there are fewer slides than needed
   watchOverflow: true,
   //indents between slides
   spaceBetween: 10,
   //slide show speed
   speed: 300,
   //number of scrollable slides
   slidesPerGroup: 1,
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper__scrollbar',
      draggable: true,
   },
   pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
      //кастомні булети
      renderBullet: (index, className) => `
         <div class="${className}">
            <div class="slider-home__line">
               <div class="slider-home__progress-line"></div>
             </div>
         </div>`,
   },
   autoplay: {
      //switching speed
      delay: 5000,
      //end on the last slide
      stopOnLastSlide: true,
      //disable after manual switching
      disableOnInteraction: false,
   },
   <!-- hold this slide for 2 seconds -->
   // <div class="swiper-slide" data-swiper-autoplay="2000">
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   // on:{
   //    init:function (swiper){
   //       if ((swiper.params.loop && swiper.slides.length === 3) || (!swiper.params.loop && swiper.slides.length === 1)) {
   //          swiper.disable()
   //          swiper.destroy()
   //       }
   //    }
   // },
   //accessibility
   a11y: {
      //turn on/turn off
      enabled: true,
      //message
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'this is the first slider',
      lastSlideMessage: 'this is the last slider',
      paginationBulletMessage: 'Go to slide {{index}}',
      notificationClass: 'swiper-notification',
   },

})
/* ============================ sliders.js END ================================================================= */


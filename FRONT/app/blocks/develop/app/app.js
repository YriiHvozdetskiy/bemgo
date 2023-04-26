$(document).ready(function () {
   console.log('ready');
   handleTabs()
   handleBurgerMenu()
   // searchElDropdown() // hide the selected value in the select-dropdown list
});

$(window).on('load', function () {
   console.log('load')
})

const handleTabs = () => {
   $(document).on('click', '.look__tabs', function () {
      // doing something
   });
};

const handleBurgerMenu = () => {

   // $(document).on('click', '.burger-menu', function () {
   // 	$('.menu').toggleClass('menu-open');
   // 	$(this).toggleClass('open')
   // 	$('body').toggleClass('no-scroll')
   // });

   // or

   $(document).on('click', '.hamburger__label', function () {
      $('.menu')
         .toggleClass('menu-open')
      $('body').toggleClass('no-scroll');
   });
};

function debounceHandler() {
   let searchTimeout;

   $(document).on('input', '==name-class==', onChangeSearch);

   function onChangeSearch() {
      clearTimeout(searchTimeout);

      searchTimeout = setTimeout(function () {
         console.log('search')
      }, 500)
   }
}

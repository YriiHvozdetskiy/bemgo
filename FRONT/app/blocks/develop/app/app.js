// TODO прибрати після розробки !!!!!!
// document.body.contentEditable = true;

// let blurred = false;
// let initialWindowHeight = window.innerHeight;
//
// window.onblur = function () {
//    blurred = true;
// };
//
// window.onresize = function () {
//    if (window.innerHeight !== initialWindowHeight) {
//       blurred = false;
//    }
// };
//
// window.onfocus = function () {
//    console.log('onfocus')
//    if (blurred) {
//       window.location.reload();
//    }
//    blurred = false;
// };
$(document).ready(function () {
   console.log('ready');
   handleTabs()
   handleBurgerMenu()
   // searchElDropdown() // hide the selected value in the select-dropdown list
});

$(window).on('load', function () {
   console.log('load')
})

function handleTabs() {
   $(document).on('click', '.look__tabs', function () {
      // doing something
   });
}

function handleBurgerMenu() {

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
}

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

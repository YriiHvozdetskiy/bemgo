/* ============================ selectDropdown.js START ================================================================= */
$(document).on('click', '.dropdown__button', function() {
   refs.dropDownList.toggleClass('dropdown__list_visible')
   refs.dropDownBtn.toggleClass('active')
})

$(document).on('click', '.dropdown__list', function(e) {
   const target = $(e.target)
   const textElem = target.text()
   const dataValueElem = target.data('value')

   refs.dropDownBtn.text(textElem)
   refs.dropDownInput.val(dataValueElem)
   refs.dropDownList.toggleClass('dropdown__list_visible')

   searchElDropdown();
})

// hides the selected language from the list
const searchElDropdown = () => {
   const valueBtn = refs.dropDownBtn.text().toUpperCase()

   refs.dropDownItems.each(function() {
      const ths = this
      const valueEl = ths.textContent.toUpperCase()
      if (valueEl === valueBtn) ths.classList.add('hidden')
      if (valueEl !== valueBtn) ths.classList.remove('hidden')
   })
}

// Click on Escape. Close dropdown
$(document).on('keydown', function(e) {
   if (e.key === 'Escape') {
      refs.dropDownList.removeClass('dropdown__list_visible')
      refs.dropDownBtn.removeClass('active')
   }
});

// Click outside the dropdown. Close dropdown
$(document).on('click', function(e) {
   const dropDownBtn = document.querySelector('.dropdown__button');

   if (e.target !== dropDownBtn) {
      refs.dropDownList.removeClass('dropdown__list_visible')
      refs.dropDownBtn.removeClass('active')
   }
});
/* ============================ selectDropdown.js END ================================================================= */





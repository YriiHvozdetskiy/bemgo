$(document).on('click', '.dropdown__button', () => {
	refs.dropDownList.toggleClass('dropdown__list_visible')
	refs.dropDownBtn.toggleClass('active')
})

$(document).on('click', '.dropdown__list', (e) => {
	const target = $(e.target)
	const textElem = target.text()
	const dataValueElem = target.data('value')

	refs.dropDownBtn.text(textElem)
	refs.dropDownInput.val(dataValueElem)
	refs.dropDownList.toggleClass('dropdown__list_visible')
})

// приховує з списку мову яку вибрали
const searchElDropdown = () => {
	const valueBtn = refs.dropDownBtn.text().toUpperCase()

	refs.dropDownItems.each(function () {
		const ths = this
		const valueEl = ths.textContent.toUpperCase()
		if (valueEl === valueBtn) ths.classList.add('hidden')
	})
}

// Нажатие на Escape. Закрыть дропдаун
$(document).on('keydown', (e) => {
	if (e.key === 'Escape') {
		refs.dropDownList.removeClass('dropdown__list_visible')
		refs.dropDownBtn.removeClass('active')
	}
});

// Клик снаружи дропдауна. Закрыть дропдаун
$(document).on('click', (e) => {
	//TODO як переписати це на JQ ?
	// const target = $(e.target)
	// console.log('e.target',e.target)
	// console.log('refs.dropDownBtn',refs.dropDownBtn)
	// console.log('target',target)
	const dropDownBtn = document.querySelector('.dropdown__button');

	if (e.target !== dropDownBtn) {
		refs.dropDownList.removeClass('dropdown__list_visible')
		refs.dropDownBtn.removeClass('active')
	}
});

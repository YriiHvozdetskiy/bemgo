$(document).ready(function () {
	console.log('ready')
})

$(window).on('load', function () {
	console.log('load')
})

const refs = {
	dropDownList: $('.dropdown__list'),
	dropDownBtn: $('.dropdown__button'),
	dropDownItems: $('.dropdown__item'),
	dropDownInput: $('.dropdown__input-hidden'),
}

// ========= select START ==========

$(document).on('click', '.dropdown__button', () => {
	refs.dropDownList.toggleClass('dropdown__list_visible')
})

$(document).on('click', '.dropdown__list', (e) => {
	const target = $(e.target)
	const textElem = target.text()
	const dataValueElem = target.data('value')

	refs.dropDownBtn.text(textElem)
	refs.dropDownInput.val(dataValueElem)
	refs.dropDownList.toggleClass('dropdown__list_visible')
})

// Нажатие на Escape. Закрыть дропдаун
$(document).on('keydown', (e) => {
	if (e.key === 'Escape') {
		refs.dropDownList.removeClass('dropdown__list_visible')
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
	}
});

// ========= select END ==========

// ========= стилі написання JS функцій (обгортаємо все в функцію) ============

const handleTabs = () => {
	$(document).on('click', '.look__tabs', () => {
		// щось робем
	})
}

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

// ========= стилі написання JS функцій (обгортаємо все в функцію) ============

const handleTabs = () => {
	$(document).on('click', '.look__tabs', () => {
		// щось робем
	})
}

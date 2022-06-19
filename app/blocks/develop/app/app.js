$(document).ready(function () {
	console.log('ready')
	handleTabs()
	searchElDropdown()
})

$(window).on('load', function () {
	console.log('load')
})


// ========= стилі написання JS функцій (обгортаємо все в функцію) ============

const handleTabs = () => {
	$(document).on('click', '.look__tabs', () => {
		// щось робем
	})
}

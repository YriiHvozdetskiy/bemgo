$(document).ready(function () {
	console.log('ready')
	handleTabs()
	searchElDropdown();
	handleBurgerMenu();
})

$(window).on('load', function () {
	console.log('load');
});

// ========= стилі написання JS функцій (обгортаємо все в функцію) ============

const handleTabs = () => {
	$(document).on('click', '.look__tabs', function () {
		// щось робем
	});
};

const handleBurgerMenu = () => {

	$(document).on('click', '.burger-menu', function () {
		$(this).toggleClass('open');
	});
};

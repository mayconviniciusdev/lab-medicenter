function initMenu() {
	const button = document.querySelector(".button-menu");
	const menu = document.querySelector(".menu nav ul");

	if (button && menu) {
		button.addEventListener("click", function() {
			if (menu.style.display == 'flex') { menu.style.display = 'none'; } 
			else { menu.style.display = 'flex'; }
		});
	}
}
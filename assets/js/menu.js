window.onload = function(){
	document.querySelector(".button-menu").addEventListener("click", function(){
		if(document.querySelector(".menu nav ul").style.display == 'flex') {
			document.querySelector(".menu nav ul").style.display = 'none';
		} else {
			document.querySelector(".menu nav ul").style.display = 'flex';
		}
	});
};
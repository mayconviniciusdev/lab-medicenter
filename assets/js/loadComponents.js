document.addEventListener("DOMContentLoaded", () => {
	fetch('../../components/header-menu.html')
	.then(res => res.text())
	.then(data => {
		const header = document.getElementById('header');
		header.innerHTML = data;

		initMenu();
	})
	.catch(err => console.error('Erro ao carregar header:', err));

    fetch('../../components/footer.html')
		.then(res => res.text())
		.then(data => { document.getElementById('footer').innerHTML = data; })
		.catch(err => console.error('Erro ao carregar footer:', err));
});
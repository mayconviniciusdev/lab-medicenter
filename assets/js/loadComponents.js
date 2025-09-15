document.addEventListener("DOMContentLoaded", () => {
  const basePath = window.location.pathname.includes('/html/') ? '../' : '';

  function loadComponent(selector, path) {
    fetch(`${basePath}${path}`)
      .then(res => res.text())
      .then(data => {
        const element = document.querySelector(selector);
        if (!element) return;
        element.innerHTML = data;

        if (selector === '#header') {
          element.querySelectorAll('a[href^="html/"]').forEach(link => {
            link.href = basePath + link.getAttribute('href');
          });

          const logoImg = element.querySelector('.logo img');
          if (logoImg) logoImg.src = basePath + 'assets/images/medicenter-logo.png';

					const logoLink = element.querySelector('.logo a');
					if (logoLink) logoLink.href = basePath + 'index.html';

          if (typeof initMenu === 'function') initMenu();
        }
      })
      .catch(err => console.error(`Erro ao carregar ${selector}:`, err));
  }

  loadComponent('#header', 'components/header-menu.html');
  loadComponent('#footer', 'components/footer.html');
});
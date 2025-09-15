document.addEventListener("DOMContentLoaded", () => {
  const basePath = window.location.pathname.includes('/html/') ? '../' : '';

  function loadComponent(selector, path) {
    fetch(`${basePath}${path}`)
      .then(res => res.text())
      .then(data => {
        const element = document.querySelector(selector);
        if (element) element.innerHTML = data;
      })
      .catch(err => console.error(`Erro ao carregar ${selector}:`, err));
  }

  loadComponent('#header', 'components/header-menu.html');
  if (typeof initMenu === 'function') initMenu();

  loadComponent('#footer', 'components/footer.html');
});

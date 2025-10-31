// ===============================
// ACESSIBILIDADE E NAVEGAÇÃO POR TECLADO
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const hamburger = document.querySelector('.hamburger');
  const app = document.getElementById('app');

  // 🔹 Atalhos de teclado (Alt + número)
  const atalhos = {
    1: 'home',
    2: 'sobre',
    3: 'projetos',
    4: 'voluntariado',
    5: 'transparencia',
    6: 'contato',
    7: 'blog'
  };

  document.addEventListener('keydown', e => {
    if (e.altKey && atalhos[e.key]) {
      e.preventDefault();
      const page = atalhos[e.key];
      const link = document.querySelector(`[data-page="${page}"]`);
      if (link) {
        link.click();
        link.focus();
      }
    }

    // 🔹 Esc fecha menu lateral (mobile)
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });

  // 🔹 Quando a navegação SPA muda, reposiciona o foco no título principal
  const focusOnMainTitle = () => {
    setTimeout(() => {
      const titulo = app.querySelector('h1, h2');
      if (titulo) titulo.focus({ preventScroll: false });
    }, 200);
  };

  // Intercepta a função navigateTo existente
  const originalNavigateTo = window.navigateTo;
  if (typeof originalNavigateTo === 'function') {
    window.navigateTo = function (page) {
      originalNavigateTo(page);
      focusOnMainTitle();
    };
  }

  // 🔹 Acessibilidade de foco visível
  document.body.addEventListener('keyup', e => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
    }
  });

  document.body.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
  });

  // 🔹 Anuncia navegação no leitor de tela
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('class', 'sr-only');
  document.body.appendChild(liveRegion);

  if (typeof window.navigateTo === 'function') {
    const originalNav = window.navigateTo;
    window.navigateTo = function (page) {
      originalNav(page);
      focusOnMainTitle();
      liveRegion.textContent = `Página ${page} carregada`;
    };
  }
});

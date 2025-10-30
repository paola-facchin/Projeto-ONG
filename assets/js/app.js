document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // 🔹 Função principal de navegação SPA
  function navigateTo(page) {
    switch (page) {
      case 'home':
        app.innerHTML = homeTemplate();
        break;

      case 'sobre':
        app.innerHTML = sobreTemplate();
        break;

      case 'projetos':
        app.innerHTML = projetosTemplate();
        if (typeof initFormProjetos === 'function') initFormProjetos();
        break;

      case 'voluntariado':
        app.innerHTML = voluntariadoTemplate();
        if (typeof initFormVoluntario === 'function') initFormVoluntario();
        break;

      case 'doacoes':
        app.innerHTML = doacoesTemplate();
        if (typeof initFormDoacao === 'function') initFormDoacao();
        break;

      case 'transparencia':
        app.innerHTML = transparenciaTemplate();
        if (typeof initGraficos === 'function') initGraficos();
        break;

      case 'contato':
        app.innerHTML = contatoTemplate();
        if (typeof initFormContato === 'function') initFormContato();
        break;

      case 'blog':
        app.innerHTML = blogTemplate();
        if (typeof initBlog === 'function') initBlog(); // 🔹 Ativa botões "Leia mais"
        if (typeof initFormNewsletter === 'function') initFormNewsletter();
        break;

      case 'post1':
        app.innerHTML = post1Template();
        if (typeof initPost === 'function') initPost();
        break;

      case 'post2':
        app.innerHTML = post2Template();
        initPost2(); // inicializa scripts do post se houver
        break;


      case 'post3':
        app.innerHTML = post3Template();
        if (typeof initPost === 'function') initPost();
        break;

      default:
        app.innerHTML = `<h2>Página não encontrada</h2>`;
    }

    // 🔹 Sempre rola pro topo
    window.scrollTo(0, 0);
  }

  // 🔹 Eventos do menu principal
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
    });
  });

  // 🔹 Delegação de eventos global (pega os "Leia mais" e "Voltar ao blog")
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-post], [data-page]');
    if (btn) {
      e.preventDefault();
      const page = btn.dataset.post || btn.dataset.page;
      navigateTo(page);
    }
  });

  // 🔹 Carrega a página inicial
  navigateTo('home');
});

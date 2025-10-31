function post1Template() {
  return `
  <section class="container blog-post">
    <div class="post-header">
      <p class="post-data">14 de outubro de 2025</p>
      <h1 class="post-titulo">5 Anos Transformando Vidas</h1>
    </div>

    <figure class="post-figure">
      <img src="assets/images/foto1.webp" alt="Equipe da ONG comemorando">
      <figcaption>Equipe da ONG comemorando 5 anos de atuação</figcaption>
    </figure>

    <div class="post-conteudo">
      <p>Em 2025, a ONG Caminhar Juntos comemora 5 anos de atuação. Durante esse período, desenvolvemos e ampliamos nossos projetos em educação, saúde e geração de renda.</p>

      <p>O impacto é real: mais de 10 mil pessoas beneficiadas diretamente, centenas de voluntários engajados e dezenas de parcerias com escolas, empresas e organizações da sociedade civil.</p>

      <p>Seguimos comprometidos com nossa missão: caminhar lado a lado com as comunidades, respeitando seus saberes e construindo soluções conjuntas para uma vida mais digna.</p>
    </div>

    <div class="post-footer">
      <a href="#" class="btn liquid" data-page="blog"><span>Voltar ao Blog</span></a>
    </div>
  </section>
  `;
}

function initPost() {
  const backBtn = document.querySelector('[data-page="blog"]');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('blog');
    });
  }
}

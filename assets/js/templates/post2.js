function post2Template() {
  return `
    <main class="container blog-post">
      <article>
        <div class="post-header">
          <p class="post-data">5 de outubro de 2025</p>
          <h1 class="post-titulo">História de Superação: Conheça a Ana</h1>
        </div>

        <figure class="post-figure">
          <img src="assets/images/foto(4).webp" alt="Ana estudando com apoio da ONG">
          <figcaption>Ana, de 17 anos, apoiada pela ONG em seu reforço escolar</figcaption>
        </figure>

        <div class="post-conteudo">
          <p>Ana, de 17 anos, encontrou no reforço escolar da ONG o apoio que precisava para concluir o ensino médio.</p>
          <p>Hoje, ela sonha em cursar pedagogia e se tornar voluntária, ajudando outras crianças e jovens a também transformarem suas vidas.</p>
        </div>

        <div class="post-footer">
          <button data-page="blog" class="btn liquid"><span>Voltar ao Blog</span></button>
        </div>
      </article>
    </main>
  `;
}

function initPost2() {
}

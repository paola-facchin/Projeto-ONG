function post3Template() {
  return `
    <main class="container blog-post">
      <article>
        <div class="post-header">
          <p class="post-data">22 de setembro de 2025</p>
          <h1 class="post-titulo">Campanha de Adoção Animal: 12 Novos Lares</h1>
        </div>

        <figure class="post-figure">
          <video controls class="post-video">
            <source src="assets/videos/video3.mp4" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <figcaption>Evento de adoção de cães e gatos da ONG Caminhar Juntos</figcaption>
        </figure>

        <div class="post-conteudo">
          <p>Nosso último evento de adoção foi um sucesso: 12 cães e gatos encontraram lares amorosos.</p>
          <p>Um verdadeiro exemplo de amor e solidariedade que transforma vidas, tanto dos animais quanto das famílias.</p>
        </div>

        <div class="post-footer">
          <button data-page="blog" class="btn liquid"><span>Voltar ao Blog</span></button>
        </div>
      </article>
    </main>
  `;
}

function initPost3() {
  const video = document.querySelector('.post-video');
  if (video) {
    window.addEventListener('spa:navigate', () => video.pause());
  }
}

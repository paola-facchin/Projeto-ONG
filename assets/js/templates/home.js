function homeTemplate() {
  return `
  <div class="container">
    <section aria-labelledby="missao-titulo" class="secao-missao">
      <h1 id="missao-titulo">Nossa Missão</h1>
      <p>Transformar vidas por meio de projetos sociais, promovendo inclusão, educação e cidadania para comunidades em situação de vulnerabilidade.</p>
    </section>

    <div class="galeria" aria-label="Galeria de imagens de projetos sociais">
      <picture>
        <img src="assets/images/foto1.webp" alt="Foto de projeto social" loading="lazy">
      </picture>
    </div>

    <section aria-labelledby="projetos-destaque" class="secao-projetos">
      <h2 id="projetos-destaque">Projetos em Destaque</h2>
      <div class="galeria">
        <article class="card">
          <h3>Projeto Sementes do Amanhã</h3>
          <p>Aulas de reforço escolar e atividades lúdicas para crianças de 4 a 17 anos.</p>
          <a href="#" onclick="navigateTo('projetos')" class="btn btn-primary">Ver Mais</a>
        </article>
        <article class="card">
          <h3>Saúde na Comunidade</h3>
          <p>Atendimentos gratuitos com médicos voluntários e distribuição de kits de higiene.</p>
          <a href="#" onclick="navigateTo('projetos')" class="btn btn-primary">Ver Mais</a>
        </article>
      </div>
    </section>

    <section aria-labelledby="chamada-voluntariado" class="secao-voluntariado">
      <h2 id="chamada-voluntariado">Junte-se a nós!</h2>
      <p>Descubra oportunidades para fazer a diferença como voluntário.</p>
      <a href="#" onclick="navigateTo('voluntariado')" class="btn btn-primary">Saiba Mais</a>
    </section>
  </div>
  `;
}

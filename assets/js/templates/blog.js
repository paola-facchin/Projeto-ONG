function blogTemplate() {
  return `
  <section class="container">
    <h1>Blog Caminhar Juntos</h1>

    <div class="blog-grid">
      <div class="post-blog">
        <p class="post-data">14 de outubro de 2025</p>
        <h2>5 Anos Transformando Vidas</h2>
        <p>Em 2025, a ONG Caminhar Juntos comemora 10 anos de atuação. Mais de 10 mil pessoas foram impactadas por nossos projetos de educação, saúde e geração de renda.</p>
        <a href="#" class="btn-post" data-page="post1">Leia mais</a>
      </div>

      <div class="post-blog">
        <p class="post-data">5 de outubro de 2025</p>
        <h2>História de Superação: Conheça a Ana</h2>
        <p>Ana, de 17 anos, encontrou no reforço escolar da ONG o apoio que precisava para concluir o ensino médio. Hoje, ela sonha em cursar pedagogia e se tornar voluntária.</p>
        <a href="#" class="btn-post" data-page="post2">Leia mais</a>
      </div>

      <div class="post-blog">
        <p class="post-data">22 de setembro de 2025</p>
        <h2>Campanha de Adoção Animal: 12 Novos Lares</h2>
        <p>Nosso último evento de adoção foi um sucesso: 12 cães e gatos encontraram lares amorosos. Um verdadeiro exemplo de amor e solidariedade.</p>
        <a href="#" class="btn-post" data-page="post3">Leia mais</a>
      </div>

      <div class="post-blog">
        <p class="post-data">10 de setembro de 2025</p>
        <h2>Voluntariado em Ação: Mutirão de Limpeza</h2>
        <p>Mais de 40 voluntários revitalizaram a praça do Jardim Esperança. O espaço agora é um ambiente mais seguro e bonito para a comunidade se reunir.</p>
        <a href="#" class="btn-post" data-page="post4">Leia mais</a>
      </div>

      <div class="post-blog">
        <p class="post-data">1 de setembro de 2025</p>
        <h2>Dicas: Como Ajudar sua Comunidade</h2>
        <p>Doe tempo, ouça quem precisa, compartilhe conhecimento. Pequenas atitudes mudam vidas e fortalecem laços de solidariedade no dia a dia.</p>
        <a href="#" class="btn-post" data-page="post5">Leia mais</a>
      </div>
    </div>
  </section>

  <form action="#" method="post" novalidate class="formulario">
    <fieldset class="form-group">
      <legend>Assinar Newsletter:</legend>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        class="input-text"
        autocomplete="email"
      />
    </fieldset>

    <fieldset class="form-group">
      <legend>Conteúdo de interesse:</legend>
      <select id="preferencias" name="preferencias" multiple required class="select-multiple" size="4">
        <option value="eventos">Eventos</option>
        <option value="projetos">Projetos</option>
        <option value="transparencia">Prestação de Contas</option>
        <option value="oportunidades">Vagas para Voluntários</option>
      </select>
    </fieldset>

    <button type="submit" class="btn liquid"><span>Enviar Cadastro</span></button>
  </form>
  `;
}

function initBlog() {
  // ✅ Validação simples do formulário
  const form = document.querySelector('.formulario');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('#email').value.trim();
      const preferencias = Array.from(form.querySelectorAll('#preferencias option:checked')).map(opt => opt.value);

      if (!email || preferencias.length === 0) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      // Simula envio e salva no localStorage
      localStorage.setItem('newsletter', JSON.stringify({ email, preferencias }));
      alert('Cadastro realizado com sucesso! Obrigado por se inscrever.');
      form.reset();
    });
  }

  // ✅ Liga os botões “Leia mais” ao sistema SPA
  document.querySelectorAll('.btn-post').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.dataset.page;
      if (page) navigateTo(page);
    });
  });
}

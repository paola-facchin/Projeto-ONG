function projetosTemplate() {
  return `
  <div class="container">
    <section aria-labelledby="projetos-titulo">
      <h1 id="projetos-titulo">Nossos Projetos</h1>

      <article class="card" id="sementes">
        <h2>Sementes do Amanhã</h2>
        <p>Voltado para crianças de 4 a 17 anos, esse projeto oferece aulas de reforço escolar, atividades de alfabetização, apoio pedagógico e recreação lúdica. O objetivo é reduzir a evasão escolar, melhorar o desempenho dos alunos e despertar o gosto pelo aprendizado desde cedo. As aulas acontecem no contraturno escolar, com acompanhamento individualizado e merenda inclusa.</p>
      </article>

      <article class="card" id="oficinas">
        <h2>Mulheres em Ação</h2>
        <p>Capacitação profissional e empoderamento feminino com oficinas práticas de costura, culinária, estética e empreendedorismo para mulheres em situação de vulnerabilidade. Mentorias, certificações e feiras locais auxiliam na autonomia financeira e autoestima.</p>
      </article>

      <article class="card" id="cultura">
        <h2>Cultura que Transforma</h2>
        <p>Oficinas gratuitas de dança, teatro, música e grafite para jovens da periferia. Os participantes se apresentam em eventos públicos, festivais culturais e produzem conteúdos autorais, promovendo inclusão e transformação social.</p>
      </article>

      <article class="card" id="saude">
        <h2>Saúde na Comunidade</h2>
        <p>Atendimentos voluntários, campanhas de prevenção e distribuição de kits de higiene e autocuidado, aproximando serviços essenciais de saúde das comunidades com pouco acesso a atendimento médico.</p>
      </article>

      <article class="card" id="animais">
        <h2>Amigos de Patas</h2>
        <p>Promoção do bem-estar animal com resgates, castração, vacinação, doação de alimentos e oficinas sobre cuidados e adoção responsável.</p>
      </article>
    </section>

    <section aria-labelledby="galeria-titulo">
      <h2 id="galeria-titulo">Galeria dos Projetos</h2>
      <div class="galeria" aria-label="Galeria de imagens de projetos sociais">
        <picture><img src="assets/images/foto(4).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(5).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(6).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(7).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(8).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(9).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(11).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(12).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(13).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(14).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(15).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(16).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(17).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(18).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(19).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(21).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(22).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(23).webp" alt="Foto de projeto social" loading="lazy"></picture>
        <picture><img src="assets/images/foto(25).webp" alt="Foto de projeto social" loading="lazy"></picture>
      </div>
    </section>

    <section aria-labelledby="form-titulo">
      <h2 id="form-titulo">Inscreva-se em um Projeto</h2>
      
      <form id="form-projeto" class="formulario" novalidate>
        <fieldset class="form-group">
          <legend>Formulário de Inscrição</legend>

          <label for="nome-projeto">Nome completo:</label>
          <input type="text" id="nome-projeto" name="nome" class="input-text" required>

          <label for="email-projeto">Email:</label>
          <input type="email" id="email-projeto" name="email" class="input-text" required>

          <label for="experiencia">Você já participou de ações sociais?</label>
          <select id="experiencia" name="experiencia" class="select-multiple" required>
            <option value="" disabled selected>Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          <label for="motivacao">Por que você quer participar?</label>
          <textarea id="motivacao" name="motivacao" class="input-text" rows="5" required></textarea>

          <button type="submit" class="btn liquid">Enviar Inscrição</button>
        </fieldset>
      </form>

      <div id="mensagem-erro" class="mensagem-erro"></div>
      <div id="mensagem-sucesso" class="mensagem-sucesso"></div>
    </section>
  </div>
  `;
}

// Função que ativa a validação assim que a página "projetos" é carregada
function initFormProjetos() {
  const form = document.getElementById('form-projeto');
  if (!form) return;

  const erro = document.getElementById('mensagem-erro');
  const sucesso = document.getElementById('mensagem-sucesso');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    erro.textContent = '';
    sucesso.textContent = '';

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const experiencia = form.experiencia.value;
    const motivacao = form.motivacao.value.trim();

    // Validações básicas
    if (nome.length < 3) {
      erro.textContent = 'Por favor, insira um nome válido (mínimo 3 caracteres).';
      return;
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      erro.textContent = 'Por favor, insira um e-mail válido.';
      return;
    }

    if (!experiencia) {
      erro.textContent = 'Selecione uma opção de experiência.';
      return;
    }

    if (motivacao.length < 10) {
      erro.textContent = 'Explique sua motivação em pelo menos 10 caracteres.';
      return;
    }

    // Salvar dados no localStorage (demonstração)
    const inscricao = { nome, email, experiencia, motivacao, data: new Date().toLocaleString() };
    localStorage.setItem('ultimaInscricao', JSON.stringify(inscricao));

    sucesso.textContent = 'Inscrição enviada com sucesso!';
    form.reset();
  });
}

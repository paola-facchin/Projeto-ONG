function voluntariadoTemplate() {
  return `
  <div class="container">
    <section aria-labelledby="seja-voluntario">
      <h1 id="seja-voluntario">Seja um Voluntário</h1>
      <article>
        <p>Você pode fazer parte dessa transformação! Temos diversas oportunidades nas áreas de educação, cultura, saúde, eventos, comunicação e logística.</p>
        <video controls>
          <source src="assets/videos/video2.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </article>

      <article>
        <h2>Como funciona:</h2>
        <ol type="1">
          <li>Cadastre-se em nosso formulário</li>
          <li>Escolha as áreas com as quais se identifica</li>
          <li>Participe da seleção e capacitação online</li>
          <li>Comece a atuar!</li>
        </ol>
      </article>

      <h2 style="text-align:center;">Formulário de Cadastro</h2>
      <form id="form-voluntario" class="formulario" novalidate>
        <fieldset class="form-group">
          <legend>Dados Pessoais</legend>

          <label for="nome">Nome completo:</label>
          <input type="text" id="nome" name="nome" required minlength="3" maxlength="100" class="input-text" />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required class="input-text" />

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required class="input-text" />

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" required class="input-text" />

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" placeholder="00000-000" required class="input-text" />
        </fieldset>

        <fieldset class="form-group">
          <legend>Habilidades</legend>
          <label><input type="checkbox" name="habilidades" value="ensino" /> Ensino</label>
          <label><input type="checkbox" name="habilidades" value="logistica" /> Logística</label>
          <label><input type="checkbox" name="habilidades" value="saude" /> Saúde</label>
          <label><input type="checkbox" name="habilidades" value="comunicacao" /> Comunicação</label>
        </fieldset>

        <fieldset class="form-group">
          <legend>Disponibilidade</legend>
          <label for="dias">Dia disponível:</label>
          <select id="dias" name="dias" multiple required class="select-multiple" size="5">
            <option value="segunda">Segunda-feira</option>
            <option value="terca">Terça-feira</option>
            <option value="quarta">Quarta-feira</option>
            <option value="quinta">Quinta-feira</option>
            <option value="sexta">Sexta-feira</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
          </select>
        </fieldset>

        <button type="submit" class="btn liquid">Enviar Cadastro</button>
      </form>

      <div id="mensagem-erro" class="mensagem-erro"></div>
      <div id="mensagem-sucesso" class="mensagem-sucesso"></div>
    </section>
  </div>
  `;
}

function initFormVoluntario() {
  const form = document.getElementById("form-voluntario");
  if (!form) return;

  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    erro.textContent = "";
    sucesso.textContent = "";

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const cep = form.cep.value.trim();
    const habilidades = Array.from(form.querySelectorAll('input[name="habilidades"]:checked')).map(el => el.value);
    const dias = Array.from(form.dias.selectedOptions).map(opt => opt.value);

    // Verificações simples
    if (nome.length < 3) return erro.textContent = "Digite um nome válido (mínimo 3 caracteres).";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return erro.textContent = "Digite um e-mail válido.";
    if (!/^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$/.test(cpf)) return erro.textContent = "Digite um CPF válido no formato 000.000.000-00.";
    if (!/^\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}$/.test(telefone)) return erro.textContent = "Digite um telefone válido no formato (00) 00000-0000.";
    if (!/^\\d{5}-\\d{3}$/.test(cep)) return erro.textContent = "Digite um CEP válido no formato 00000-000.";
    if (habilidades.length === 0) return erro.textContent = "Selecione pelo menos uma habilidade.";
    if (dias.length === 0) return erro.textContent = "Selecione pelo menos um dia disponível.";

    // Salvar no localStorage
    const voluntario = {
      nome,
      email,
      cpf,
      telefone,
      cep,
      habilidades,
      dias,
      dataCadastro: new Date().toLocaleString()
    };

    localStorage.setItem("ultimoVoluntario", JSON.stringify(voluntario));

    sucesso.textContent = "Cadastro enviado com sucesso!";
    form.reset();
  });
}

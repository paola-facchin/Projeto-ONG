function contatoTemplate() {
  return `
  <div class="container">
    <section>
      <h2>Entre em Contato</h2>
      <p>Dúvidas, sugestões ou parcerias? Fale conosco!</p>
    </section>

    <form id="form-contato" class="formulario" novalidate>
      <fieldset class="form-group">
        <legend>Fale Conosco</legend>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required minlength="3" maxlength="100" class="input-text" />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required class="input-text" />

        <label for="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          pattern="\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}"
          placeholder="(00) 00000-0000"
          required
          class="input-text"
        />

        <label for="anexo">Anexo (Opcional):</label>
        <input type="file" id="anexo" name="anexo" accept=".pdf,.doc,.jpg,.png" />

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="6" minlength="3" maxlength="300" class="input-text" required></textarea>

        <button type="submit" class="btn liquid" style="background-color: rgba(25, 118, 210, 0.7);">
          <span>Enviar Mensagem</span>
        </button>
      </fieldset>
    </form>

    <div id="mensagem-erro" class="mensagem-erro"></div>
    <div id="mensagem-sucesso" class="mensagem-sucesso"></div>

    <section class="container">
      <h3>Informações de Contato</h3>
      <p><strong>Endereço:</strong> Rua Esperança, 123 – Bairro da União, São Paulo – SP</p>
      <p><strong>Telefone:</strong> (11) 91234-5678</p>
      <p><strong>E-mail:</strong> <a href="mailto:contato@caminharjuntos.org.br">contato@caminharjuntos.org.br</a></p>
      <p><strong>Atendimento:</strong> Segunda a Sexta, das 9h às 17h</p>
    </section>
  </div>
  `;
}

function initFormContato() {
  const form = document.getElementById("form-contato");
  if (!form) return;

  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    erro.textContent = "";
    sucesso.textContent = "";

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const mensagem = form.mensagem.value.trim();

    // Validação de consistência dos dados
    if (nome.length < 3) return (erro.textContent = "O nome deve ter pelo menos 3 caracteres.");
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return (erro.textContent = "Digite um e-mail válido.");
    if (!/^\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}$/.test(telefone))
      return (erro.textContent = "Digite um telefone no formato (00) 00000-0000.");
    if (mensagem.length < 10) return (erro.textContent = "A mensagem deve ter pelo menos 10 caracteres.");

    // Criar objeto com dados do formulário
    const contato = {
      nome,
      email,
      telefone,
      mensagem,
      data: new Date().toLocaleString(),
    };

    // Armazenar no localStorage
    localStorage.setItem("ultimoContato", JSON.stringify(contato));

    // Mensagem de sucesso
    sucesso.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve. 💬";

    // Resetar formulário
    form.reset();
  });
}

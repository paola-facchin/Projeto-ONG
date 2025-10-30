function doacoesTemplate() {
  return `
  <div class="container">
    <section aria-labelledby="apoie-titulo">
      <h1 id="apoie-titulo">Apoie com uma Doação</h1>
      <p>Toda doação é fundamental para manter nossos projetos vivos.</p>
      <p>Doe com segurança e acompanhe como os recursos são utilizados.</p>
    </section>

    <section aria-labelledby="dados-titulo">
      <h2 id="dados-titulo">Dados para Doação</h2>
      <ul>
        <li>PIX (CNPJ): 12.345.678/0001-99</li>
        <li>Chave e-mail: doacao@ongcaminharjuntos.org.br</li>
        <li>Banco: 000 - Banco Social</li>
        <li>Agência: 1234</li>
        <li>Conta: 56789-0</li>
      </ul>
    </section>

    <section aria-labelledby="form-titulo">
      <h2 id="form-titulo">Formulário de Doação</h2>

      <form id="form-doacao" class="formulario" novalidate>
        <fieldset class="form-group">
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" class="input-text" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" class="input-text" required>

          <label for="valor">Valor da Doação:</label>
          <select id="valor" name="valor" class="select-multiple" required>
            <option value="">Selecione um valor</option>
            <option value="10">R$10</option>
            <option value="20">R$20</option>
            <option value="50">R$50</option>
            <option value="100">R$100</option>
            <option value="outro">Outro valor</option>
          </select>

          <label for="outro_valor">Outro valor (R$):</label>
          <input type="number" id="outro_valor" name="outro_valor" class="input-text" min="1" step="1" placeholder="Ex: 25" disabled>

          <fieldset class="form-group">
            <legend>Tipo de Doação</legend>
            <label class="radio-label">
              <input type="radio" name="tipo-doacao" value="unica" checked> Doação Única
            </label>
            <label class="radio-label">
              <input type="radio" name="tipo-doacao" value="mensal"> Doação Mensal
            </label>
          </fieldset>

          <label for="projeto-destino">Projeto de Destino:</label>
          <select id="projeto-destino" name="projeto-destino" class="select-multiple">
            <option value="geral">Onde for mais necessário</option>
            <option value="educacao">Sementes do Amanhã</option>
            <option value="mulheres">Mulheres em Ação</option>
            <option value="cultura">Cultura que Transforma</option>
            <option value="saude">Saúde na Comunidade</option>
            <option value="animais">Amigos de Patas</option>
          </select>

          <label for="pagamento">Forma de Pagamento:</label>
          <select id="pagamento" name="pagamento" class="select-multiple" required>
            <option value="">Selecione</option>
            <option value="pix">PIX</option>
            <option value="cartao">Cartão de Crédito</option>
            <option value="boleto">Boleto Bancário</option>
          </select>

          <button type="submit" class="btn liquid" style="margin-top: 1.5rem;">Fazer Doação</button>
        </fieldset>
      </form>

      <div id="mensagem-erro" class="mensagem-erro"></div>
      <div id="mensagem-sucesso" class="mensagem-sucesso"></div>
    </section>
  </div>
  `;
}

function initFormDoacao() {
  const form = document.getElementById("form-doacao");
  if (!form) return;

  const erro = document.getElementById("mensagem-erro");
  const sucesso = document.getElementById("mensagem-sucesso");
  const valorSelect = document.getElementById("valor");
  const outroValor = document.getElementById("outro_valor");

  // Ativa o campo de outro valor apenas se selecionado
  valorSelect.addEventListener("change", () => {
    outroValor.disabled = valorSelect.value !== "outro";
    if (outroValor.disabled) outroValor.value = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    erro.textContent = "";
    sucesso.textContent = "";

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const valor = valorSelect.value === "outro" ? outroValor.value.trim() : valorSelect.value;
    const tipo = form.querySelector('input[name="tipo-doacao"]:checked')?.value;
    const projeto = form["projeto-destino"].value;
    const pagamento = form.pagamento.value;

    // Verificações simples
    if (nome.length < 3) return erro.textContent = "Digite seu nome completo.";
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) return erro.textContent = "Digite um e-mail válido.";
    if (!valor || isNaN(valor) || valor <= 0) return erro.textContent = "Informe um valor de doação válido.";
    if (!pagamento) return erro.textContent = "Escolha uma forma de pagamento.";

    const doacao = {
      nome,
      email,
      valor: `R$${valor}`,
      tipo,
      projeto,
      pagamento,
      data: new Date().toLocaleString()
    };

    localStorage.setItem("ultimaDoacao", JSON.stringify(doacao));

    sucesso.textContent = "Doação registrada com sucesso! Obrigado por apoiar nossos projetos 💚";
    form.reset();
    outroValor.disabled = true;
  });
}

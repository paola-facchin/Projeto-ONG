const botao = document.getElementById('btn-contraste');
botao.addEventListener('click', () => {
  const html = document.documentElement;
  const ativo = html.classList.toggle('high-contrast');
  botao.setAttribute('aria-pressed', ativo);
});

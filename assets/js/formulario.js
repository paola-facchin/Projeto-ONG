// Habilita o campo "Outro valor" somente quando a opção correspondente for selecionada
document.addEventListener("DOMContentLoaded", function () {
  const valorSelect = document.getElementById('valor');
  const outroInput = document.getElementById('outro_valor');

  if (valorSelect && outroInput) {
    valorSelect.addEventListener('change', function () {
      if (this.value === 'outro') {
        outroInput.disabled = false;
        outroInput.required = true;
        outroInput.focus();
      } else {
        outroInput.disabled = true;
        outroInput.required = false;
        outroInput.value = '';
      }
    });
  }
});

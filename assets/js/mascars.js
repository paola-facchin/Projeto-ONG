function aplicarMascaraCPF(cpf) { 
  cpf.value = cpf.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function aplicarMascaraTelefone(telefone) {
  telefone.value = telefone.value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15); // aqui precisa ser atribuído de volta!
}

function aplicarMascaraCEP(cep) {
  cep.value = cep.value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2')
    .slice(0, 9);
}

document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (cpf) cpf.addEventListener('input', () => aplicarMascaraCPF(cpf));
  if (telefone) telefone.addEventListener('input', () => aplicarMascaraTelefone(telefone));
  if (cep) cep.addEventListener('input', () => aplicarMascaraCEP(cep));
});

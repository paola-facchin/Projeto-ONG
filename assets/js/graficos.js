console.log("graficos.js carregado");

const canvasRecursos = document.getElementById('grafico-recursos');
const canvasOrigem = document.getElementById('graficoOrigemDoacoes');

console.log("Canvas recursos:", canvasRecursos);
console.log("Canvas origem:", canvasOrigem);

if (canvasRecursos) {
  const ctxAplicacao = canvasRecursos.getContext('2d');
  new Chart(ctxAplicacao, {
    type: 'pie',
    data: {
      labels: ['Educação', 'Mulheres em Ação', 'Cultura que Transforma', 'Saúde na Comunidade'],
      datasets: [{
        data: [104340, 78240, 52170, 65220],
        backgroundColor: ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0'],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Aplicação dos Recursos (R$)'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let valor = context.parsed;
              return `${context.label}: R$ ${valor.toLocaleString('pt-BR')}`;
            }
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });
} else {
  console.error("Canvas para gráfico de aplicação não encontrado!");
}

if (canvasOrigem) {
  const ctxOrigem = canvasOrigem.getContext('2d');
  new Chart(ctxOrigem, {
    type: 'bar',
    data: {
      labels: ['Pessoas Físicas', 'Empresas Parceiras', 'Editais e Parcerias Públicas'],
      datasets: [{
        label: 'Valor (R$)',
        data: [180000, 90000, 30000],
        backgroundColor: ['#2196F3', '#4CAF50', '#FFC107'],
        borderRadius: 5
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Origem das Doações (R$)'
        },
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let valor = context.parsed.x;
              return `${context.label}: R$ ${valor.toLocaleString('pt-BR')}`;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            callback: value => 'R$ ' + value.toLocaleString('pt-BR')
          },
          title: {
            display: true,
            text: 'Valores em reais'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Fonte'
          }
        }
      }
    }
  });
} else {
  console.error("Canvas para gráfico de origem de doações não encontrado!");
}

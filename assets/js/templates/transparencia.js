function transparenciaTemplate() {
  return `
  <div class="container">
    <section aria-labelledby="transparencia-titulo">
      <h1 id="transparencia-titulo">Transparência e Compromisso</h1>
      <p>Na Caminhar Juntos, acreditamos que a confiança é construída com ações claras e responsabilidade. Por isso, mostramos como os recursos são aplicados e de onde vêm as doações que mantêm nossos projetos ativos.</p>
    </section>

    <section aria-labelledby="resumo-financeiro">
      <h2 id="resumo-financeiro">Resumo Financeiro 2025</h2>
      <ul>
        <li><strong>Total arrecadado:</strong> R$ 300.000,00</li>
        <li><strong>Origem das doações:</strong>
          <ul>
            <li>Pessoas físicas: R$ 180.000,00 (60%)</li>
            <li>Empresas parceiras: R$ 90.000,00 (30%)</li>
            <li>Editais e parcerias públicas: R$ 30.000,00 (10%)</li>
          </ul>
        </li>
        <li><strong>Aplicação dos recursos:</strong>
          <ul>
            <li>Educação: R$ 104.340,00 (34,78%)</li>
            <li>Mulheres em Ação: R$ 78.240,00 (26,08%)</li>
            <li>Cultura que Transforma: R$ 52.170,00 (17,39%)</li>
            <li>Saúde na Comunidade: R$ 65.220,00 (21,74%)</li>
          </ul>
        </li>
      </ul>
    </section>

    <section aria-labelledby="graficos-titulo">
      <h2 id="graficos-titulo">Distribuição de Recursos</h2>
      <div style="max-width: 500px; margin: 0 auto;">
        <canvas id="grafico-recursos"></canvas>
      </div>
    </section>

    <section aria-labelledby="origem-doacoes-titulo">
      <h2 id="origem-doacoes-titulo">Origem das Doações</h2>
      <div style="max-width: 500px; margin: 0 auto;">
        <canvas id="grafico-origem"></canvas>
      </div>
    </section>

    <section aria-labelledby="relatorios-titulo">
      <h2 id="relatorios-titulo">Relatórios e Documentos</h2>
      <ul>
        <li><a href="#">Relatório Anual 2024 (PDF)</a></li>
        <li><a href="#">Balanço Financeiro Semestral</a></li>
        <li><a href="#">Declaração de Utilidade Pública</a></li>
        <li><a href="#">Estatuto Social da ONG</a></li>
      </ul>
    </section>

    <section aria-labelledby="depoimento-titulo">
      <blockquote>
        "Transparência não é apenas publicar números. É respeitar quem acredita no nosso trabalho e mostrar com orgulho onde cada centavo é investido."
        <cite>— Equipe Caminhar Juntos</cite>
      </blockquote>
    </section>
  </div>
  `;
}

// Função para inicializar os gráficos
function initGraficos() {
  const ctx1 = document.getElementById('grafico-recursos');
  const ctx2 = document.getElementById('grafico-origem');

  if (!ctx1 || !ctx2) return;

  // Gráfico 1: Aplicação dos recursos
  new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: ['Educação', 'Mulheres em Ação', 'Cultura', 'Saúde'],
      datasets: [{
        data: [34.78, 26.08, 17.39, 21.74],
        backgroundColor: ['#1976D2', '#43A047', '#FBC02D', '#E53935']
      }]
    },
    options: { responsive: true }
  });

  // Gráfico 2: Origem das doações
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Pessoas Físicas', 'Empresas Parceiras', 'Parcerias Públicas'],
      datasets: [{
        data: [60, 30, 10],
        backgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
      }]
    },
    options: { responsive: true }
  });
}

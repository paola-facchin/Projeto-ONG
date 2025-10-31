🌿 Projeto ONG Caminhar Juntos






🎯 Visão Geral

A ONG Caminhar Juntos é uma plataforma web desenvolvida para promover gestão social, engajamento de voluntários e transparência das ações.
O projeto segue rigorosamente os padrões de acessibilidade (WCAG 2.1 AA) e está totalmente otimizado para produção, com HTML, CSS, JS e imagens minificados.

📂 Estrutura do Projeto
Projeto-ONG/
│
├─ assets/
│  ├─ css/
│  │  ├─ style.css
│  │  └─ min/style.min.css
│  ├─ js/
│  │  ├─ app.js
│  │  ├─ templates/
│  │  └─ min/*.min.js
│  └─ images/
│     ├─ min/
│     └─ min/webp/
│
├─ index.html
├─ index.min.html
├─ compress-images.js
├─ package.json
└─ README.md

⚙️ Tecnologias Utilizadas

HTML5 semântico

CSS3 → minificação com clean-css

JavaScript ES6+ → minificação com terser

Node.js para automação de tarefas de build

Otimização de imagens com:

imagemin

mozjpeg

pngquant

imagemin-webp

Google Fonts (Inter)

Chart.js para gráficos dinâmicos

🛠️ Funcionalidades

✅ Acessibilidade total:

Navegação por teclado em todos os componentes

Contraste mínimo de 4.5:1 e modo alto contraste

Compatível com leitores de tela

Estrutura semântica e responsiva

🧩 Sistema de templates para páginas internas

⚡ Otimização para produção:

CSS, JS e HTML minificados

Imagens comprimidas e convertidas para WebP

🚀 Como Executar o Projeto
🔧 Pré-requisitos

Node.js >= 16

npm instalado

📥 Instalação
# Clonar o repositório
git clone https://github.com/paola-facchin/Projeto-ONG.git

# Acessar o diretório
cd Projeto-ONG

# Instalar dependências
npm install

⚙️ Build / Produção

Para gerar os arquivos otimizados e minificados:

npm run build


Saídas:

JS minificado → assets/js/min/

CSS minificado → assets/css/min/style.min.css

HTML minificado → index.min.html

Imagens otimizadas → assets/images/min/ e assets/images/min/webp/

🧾 Versionamento e Commits

Padrão de commits semântico:
feat, fix, chore, docs, refactor, style, release, etc.

Versionamento semântico (SemVer):
Exemplo → v1.0.0, v1.1.0, v2.0.0

Exemplo de commit final:

git add .
git commit -m "chore(release): versão final minificada e otimizada para produção"
git tag v1.0.0
git push origin main --tags

🖼️ Imagens

Todas as imagens devem seguir o padrão:

<img src="assets/images/min/nome-da-imagem.png" alt="Descrição da imagem">


Ou, para versão otimizada WebP:

<picture>
  <source srcset="assets/images/min/webp/nome-da-imagem.webp" type="image/webp">
  <img src="assets/images/min/nome-da-imagem.png" alt="Descrição da imagem">
</picture>

📜 Licença

Este projeto está licenciado sob a ISC License.
Consulte o arquivo LICENSE
 para mais detalhes.

![Acessibilidade AA](https://img.shields.io/badge/Acessibilidade-WCAG%202.1%20AA-brightgreen)

👩‍💻 Autora

Kesia Paola Facchin
📫 GitHub

💚 Contribuindo

Sinta-se à vontade para enviar issues, sugestões ou pull requests.
Toda contribuição é bem-vinda para tornar o projeto mais acessível e impactante!
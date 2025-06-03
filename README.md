# cat-tips
# 🐱 Plataforma Web de Adestramento Felino

Projeto desenvolvido como parte da disciplina **Usabilidade, Desenvolvimento Web, Mobile e Jogos**, com foco em Front-End utilizando React. A plataforma tem como objetivo oferecer dicas e informações sobre adestramento felino de forma intuitiva, responsiva e acessível.

## 👥 Integrantes do grupo

- João Victor de Sousa Pessoa

## 🚀 Funcionalidades previstas

- Página inicial com boas-vindas e objetivo do site
- Seção de dicas práticas sobre adestramento
- Curiosidades sobre comportamento felino
- Interface responsiva e amigável
- Integração futura com Back End via `axios`

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) — Para criação do esqueleto do projeto
- [Axios](https://axios-http.com/) — Para comunicação HTTP com o Back End (futuro)
- [CSS Modules] ou [Tailwind]

## 🗂️ Estrutura do repositório

```bash
src/
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis
├── pages/           # Telas principais
├── styles/          # Estilos globais
└── App.jsx          # Componente raiz

## 🗺️ Manual

Manual de Instalação e Execução
Este projeto consiste em duas partes principais:

Back-End (Express)

Front-End (React com Vite)

Abaixo estão as instruções para clonar, configurar e executar ambas as partes localmente.

Pré-requisitos
Node.js (versão 16 ou superior)

npm (geralmente instalado junto com o Node.js)

Acesso à internet para instalação de pacotes e uso de EmailJS (no front-end)

1. Clonar o repositório
No terminal, rode:

bash
Copiar
Editar
git clone https://github.com/vjctor/cat-tips.git
cd cat-tips
Você terá a seguinte estrutura:

pgsql
Copiar
Editar
cat-tips/
├── backend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── package-lock.json
└── README.md
2. Configurar e Executar o Back-End
Navegue até a pasta backend/:

bash
Copiar
Editar
cd backend
Instale as dependências:

bash
Copiar
Editar
npm install
Verifique que dentro de backend/ exista um arquivo chamado index.cjs (ou index.js) com o seguinte conteúdo mínimo:

js
Copiar
Editar
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Endpoint de teste
app.get('/hello-world', (_req, res) => {
  res.send('Hello, World!');
});

// Endpoint de dicas
app.get('/dicas', (_req, res) => {
  const listaDicas = [
    { id: 1, titulo: 'Use reforço positivo', descricao: 'Recompense bons comportamentos com petiscos.' },
    { id: 2, titulo: 'Mantenha uma rotina', descricao: 'Horários regulares ajudam o gato a se sentir seguro.' },
    { id: 3, titulo: 'Evite punições físicas', descricao: 'Elas geram medo e dificultam o aprendizado.' }
  ];
  res.json(listaDicas);
});

app.listen(PORT, () => {
  console.log(`Back-end rodando em http://127.0.0.1:${PORT}`);
});
Caso o arquivo seja index.js, acrescente "type": "module" no package.json ou renomeie para index.cjs.

Rode o servidor:

bash
Copiar
Editar
node index.cjs
Você deverá ver no terminal:

arduino
Copiar
Editar
Back-end rodando em http://127.0.0.1:3001
Teste os endpoints em outra aba do terminal:

bash
Copiar
Editar
curl http://127.0.0.1:3001/hello-world
Retornará:

Copiar
Editar
Hello, World!
E:

bash
Copiar
Editar
curl http://127.0.0.1:3001/dicas
Retornará o JSON com as dicas.

3. Configurar e Executar o Front-End
No terminal, volte para a raiz do projeto:

bash
Copiar
Editar
cd ..
Instale as dependências do front-end:

bash
Copiar
Editar
npm install
Configure o EmailJS (para o formulário de contato):

Acesse https://www.emailjs.com/ e crie uma conta gratuita.

Em Email Services, conecte seu e-mail (Gmail, Outlook, etc.) e copie o Service ID.

Em Email Templates, crie um template com os placeholders from_name, reply_to e message e copie o Template ID.

Em Account → User ID, copie o User ID.

No painel do EmailJS, em Integration → Authorized domains, adicione http://localhost:5173.

No arquivo src/components/ContactForm.jsx, substitua as variáveis pelos seus valores:

diff
Copiar
Editar
// emailjs.sendForm(serviceID, templateID, formRef.current, userID)

- emailjs.sendForm('service_xyz', 'template_abc', formRef.current, 'user_12345')
+ emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', formRef.current, 'SEU_USER_ID')
Inicie o servidor de desenvolvimento do front-end:

bash
Copiar
Editar
npm run dev
O Vite mostrará no terminal algo como:

arduino
Copiar
Editar
VITE v4.x.x  ready in 300 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Abra o navegador em http://localhost:5173/ para ver o site funcionando.

4. Fluxo de Execução Completo
Back-End:

Acesse cat-tips/backend

Rode npm install

Execute node index.cjs

Verifique no terminal: Back-end rodando em http://127.0.0.1:3001

Front-End:

Na pasta raiz (cat-tips), rode npm install

Abra src/components/ContactForm.jsx e configure os IDs do EmailJS

Execute npm run dev

Acesse http://localhost:5173/ no navegador

5. Estrutura Final do Projeto
pgsql
Copiar
Editar
cat-tips/
├── backend/
│   ├── index.cjs
│   ├── package.json
│   └── package-lock.json
├── public/
│   ├── index.html
│   └── images/
│       ├── banner-cat.jpg
│       ├── clicker.jpg
│       ├── guia.jpg
│       └── petiscos.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Tips.jsx
│   │   ├── Products.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Videos.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── Home.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── package-lock.json
└── README.md
6. Observações Finais
Caso altere a porta do back-end, atualize a chamada Axios em src/components/Tips.jsx para apontar para http://127.0.0.1:<SUA_PORTA>/dicas.

Se usar outra porta no front-end, ajuste o domain autorizado no painel EmailJS para refletir http://localhost:<SUA_PORTA>.

Para dispor o projeto em produção, é necessário configurar ambiente (variáveis de ambiente para IDs do EmailJS, build do Vite e implantação em servidor).

Com esse manual, você conseguirá rodar e visualizar todas as funcionalidades (dicas dinâmicas, formulário de contato funcional, vídeos incorporados, produtos com imagem, header fixo etc.). Qualquer dúvida, basta revisar cada etapa em sequência para confirmar que não faltou nenhuma configuração.

🐱 Cat-Tips – Plataforma Web de Adestramento Felino
Projeto desenvolvido como parte da disciplina Usabilidade, Desenvolvimento Web, Mobile e Jogos, com foco em Front-End usando React e Vite. A plataforma tem como objetivo oferecer dicas e informações sobre adestramento felino de forma intuitiva, responsiva e acessível.

👥 Integrante
João Victor de Sousa Pessoa

🚀 Funcionalidades Previstas
Página inicial com boas-vindas e objetivo do site

Seção de Dicas de Adestramento

Seção de Produtos Recomendados

Seção de Depoimentos

Seção de Vídeos Tutoriais

Formulário de Contato integrado ao EmailJS

Interface responsiva e amigável

Integração com Back-End via Axios

🛠️ Tecnologias Utilizadas
React

Vite

Axios

Express (Back-End)

EmailJS (formulário de contato)

CSS puro (sem frameworks, mas já preparado para futuros ajustes com Tailwind ou CSS Modules)

📂 Estrutura do Repositório
pgsql
Copiar
Editar
cat-tips/
├── backend/
│   ├── index.cjs           # Servidor Express (Hello-World e /dicas)
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
├── package.json            # Dependências do Front-End
├── package-lock.json
└── README.md               # Este arquivo
🗺️ Manual de Instalação e Execução
Este projeto é composto de dois módulos: o Back-End (Express) e o Front-End (React com Vite). A seguir, estão as instruções para configurar, instalar e executar cada parte localmente.

1. Pré-requisitos
Node.js (versão 16 ou superior)

npm (geralmente instalado junto com o Node.js)

Internet para instalar pacotes e usar o EmailJS

2. Clonar o Repositório
No terminal, execute:

bash
Copiar
Editar
git clone https://github.com/vjctor/cat-tips.git
cd cat-tips
3. Configurar e Executar o Back-End
Acesse a pasta backend:

bash
Copiar
Editar
cd backend
Instale as dependências:

bash
Copiar
Editar
npm install
Verifique que exista o arquivo index.cjs (caso seja .js, ele deve conter "type": "module" no package.json). O conteúdo mínimo de index.cjs deve ser:

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
Inicie o servidor Express:

bash
Copiar
Editar
node index.cjs
Você deverá ver a mensagem:

arduino
Copiar
Editar
Back-end rodando em http://127.0.0.1:3001
Teste os endpoints em outra aba do terminal:

bash
Copiar
Editar
# Testa o /hello-world
curl http://127.0.0.1:3001/hello-world
# Saída esperada: Hello, World!

# Testa o /dicas
curl http://127.0.0.1:3001/dicas
# Saída esperada: JSON com a lista de dicas
4. Configurar e Executar o Front-End
Retorne à raiz do projeto:

bash
Copiar
Editar
cd ..
Instale as dependências do Front-End:

bash
Copiar
Editar
npm install
Configure o EmailJS para o formulário de contato. No painel do EmailJS (https://www.emailjs.com/):

Em Email Services, conecte seu e-mail (Gmail, Outlook, etc.) e copie o Service ID.

Em Email Templates, crie um template com os campos from_name, reply_to e message. Copie o Template ID.

Em Account → User ID, copie o User ID.

Em Integration → Authorized domains, adicione http://localhost:5173.

Abra o arquivo src/components/ContactForm.jsx e substitua os placeholders pelos seus valores do EmailJS:

diff
Copiar
Editar
// Antes:
emailjs.sendForm('service_xyz', 'template_abc', formRef.current, 'user_12345')
// Depois:
emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', formRef.current, 'SEU_USER_ID')
Inicie o servidor de desenvolvimento do Front-End:

bash
Copiar
Editar
npm run dev
O Vite mostrará algo como:

arduino
Copiar
Editar
VITE v4.x.x  ready in 300 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
Abra o navegador e acesse http://localhost:5173/ para visualizar o site.

5. Fluxo Completo de Execução
Back-End

cd backend

npm install

node index.cjs

Verificar “Back-end rodando em http://127.0.0.1:3001”

Front-End

Na raiz: npm install

Configurar IDs do EmailJS em src/components/ContactForm.jsx

npm run dev

Acessar http://localhost:5173/

6. Estrutura Final do Projeto
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
7. Observações Finais
Se você alterar a porta do Back-End, lembre-se de atualizar as chamadas Axios em src/components/Tips.jsx para apontar para a nova porta (por exemplo, http://127.0.0.1:4000/dicas).

Caso mude a porta do Front-End (Vite), ajuste também o domínio autorizado no painel do EmailJS (http://localhost:<SUA_PORTA>).

Para disponibilizar em produção, será necessário:

Configurar variáveis de ambiente para os IDs do EmailJS (não deixar em texto puro).

Executar npm run build no Front-End (gera a pasta dist/).

Configurar um servidor web (Nginx, Vercel, Netlify etc.) para servir a pasta dist/ e expor o Back-End.

Pronto! Agora você consegue clonar, instalar, configurar e executar tanto o Back-End quanto o Front-End do Cat-Tips localmente. Qualquer dúvida, consulte os passos acima ou abra uma issue. 😊

// backend/index.cjs
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Array de dicas
const dicas = [
  {
    id: 1,
    titulo: 'Use reforço positivo',
    descricao: 'Recompense bons comportamentos com petiscos.',
    categoria: 'Comportamento'
  },
  {
    id: 2,
    titulo: 'Mantenha uma rotina',
    descricao: 'Horários regulares ajudam o gatinho a se sentir seguro.',
    categoria: 'Rotina'
  },
  {
    id: 3,
    titulo: 'Evite punições físicas',
    descricao: 'Elas geram medo e dificultam o aprendizado.',
    categoria: 'Bem-Estar'
  }
];

// Rota teste
app.get('/hello-world', (req, res) => {
  res.send('Hello, World!');
});

// Rota /dicas
app.get('/dicas', (req, res) => {
  res.json(dicas);
});

const PORT = 3001; // ou 8080 se for a porta que funcionou para você
app.listen(PORT, () => {
  console.log(`Back-end rodando em http://127.0.0.1:${PORT}`);
});

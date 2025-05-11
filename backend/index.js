const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const dicas = [
  { id: 1, titulo: 'Use reforço positivo', descricao: 'Recompense bons comportamentos com petiscos.' },
  { id: 2, titulo: 'Mantenha uma rotina', descricao: 'Horários regulares ajudam o gato a se sentir seguro.' },
  { id: 3, titulo: 'Evite punições físicas', descricao: 'Elas geram medo e dificultam o aprendizado.' }
];

app.get('/dicas', (req, res) => res.json(dicas));
app.get('/hello-world', (req, res) => res.send('Hello, World!'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("Back-end rodando em http://localhost:" + PORT);
});

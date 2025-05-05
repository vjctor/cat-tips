import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import './Dicas.css'

const dicas = [
  { id: 1, titulo: 'Use reforço positivo', descricao: 'Recompense bons comportamentos com petiscos.' },
  { id: 2, titulo: 'Mantenha uma rotina', descricao: 'Horários regulares ajudam o gato a se sentir seguro.' },
  { id: 3, titulo: 'Evite punições físicas', descricao: 'Elas geram medo e dificultam o aprendizado.' }
];

export default function Dicas() {
  return (
    <div>
      <Header />
      <main className="dicas-container">
        <h2>Dicas de Adestramento</h2>
        <div className="dicas-grid">
          {dicas.map(d => (
            <div key={d.id} className="dica-card">
              <h3>{d.titulo}</h3>
              <p>{d.descricao}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

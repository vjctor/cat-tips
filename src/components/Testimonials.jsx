// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Home.css';

export default function Testimonials() {
  return (
    <div id="testimonials" className="container">
      <section>
        <h2>Depoimentos</h2>
        <blockquote className="home-blockquote">
          “O Cat-Tips mudou completamente o comportamento do meu gatinho.
          Agora ele é mais obediente e feliz!” – Ana M.
        </blockquote>
        <blockquote className="home-blockquote">
          “As dicas são fáceis de aplicar e os resultados aparecem rápido. Recomendo!” – Pedro R.
        </blockquote>
      </section>
    </div>
  );
}

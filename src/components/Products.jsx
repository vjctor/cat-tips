// src/components/Products.jsx
import React from 'react';
import '../styles/Home.css';

export default function Products() {
  return (
    <div className="container">
      <section>
        <h2>Produtos Recomendados</h2>
        <div className="grid grid-3">
          <div className="home-card">
            <img src="https://via.placeholder.com/300x200" alt="Produto 1" />
            <h4>Biscoitos Naturais</h4>
            <p>Petiscos saudáveis para treinamento felino.</p>
          </div>
          <div className="home-card">
            <img src="https://via.placeholder.com/300x200" alt="Produto 2" />
            <h4>Guia Anti-Puxão</h4>
            <p>Ideal para passeios sem estresse.</p>
          </div>
          <div className="home-card">
            <img src="https://via.placeholder.com/300x200" alt="Produto 3" />
            <h4>Brinquedo Interativo</h4>
            <p>Estimula o gato enquanto aprende truques.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

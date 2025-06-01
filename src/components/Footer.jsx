// src/components/Footer.jsx
import React from 'react';
import '../styles/Home.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2025 Cat-Tips. Todos os direitos reservados.</p>
        <p>
          Siga-nos nas redes sociais:
          <a href="#" target="_blank" rel="noreferrer"> Facebook</a> |
          <a href="#" target="_blank" rel="noreferrer"> Instagram</a> |
          <a href="#" target="_blank" rel="noreferrer"> YouTube</a>
        </p>
      </div>
    </footer>
  );
}

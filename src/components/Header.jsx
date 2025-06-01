// src/components/Header.jsx
import React from 'react';
import '../styles/Home.css';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <nav className="header-nav">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#tips">Dicas</a>
          <a href="#testimonials">Depoimentos</a>
          <a href="#videos">Vídeos</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}

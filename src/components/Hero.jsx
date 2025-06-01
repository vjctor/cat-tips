// src/components/Hero.jsx
import React from 'react';
import '../styles/Home.css';

export default function Hero() {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1>Bem-vindo ao Cat-Tips</h1>
        <p>Transforme a vida do seu gatinho com adestramento profissional</p>
        <a href="#tips" className="btn">Comece Agora</a>
      </div>
    </div>
  );
}

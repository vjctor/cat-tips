import React from 'react';
import { FaHome, FaInfoCircle, FaLightbulb, FaComments, FaVideo, FaEnvelope, FaShoppingBag } from 'react-icons/fa';
import '../styles/Home.css';

export default function Header() {
  return (
    <header style={{ background: '#85a3da', width: '125%' }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#fff' }}>CAT-TIPS🐾</h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>
            <FaHome style={{ verticalAlign: 'middle', marginRight: '4 px' }} /> Início
          </a>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>
            <FaInfoCircle style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Sobre
          </a>
          <a href="#tips" style={{ color: '#fff', textDecoration: 'none' }}>
            <FaLightbulb style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Dicas
          </a>

        <a href="#products" style={{ color: '#fff', textDecoration: 'none' }}>          
          <FaShoppingBag style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Produtos
          </a>
          <a href="#testimonials" style={{ color: '#fff', textDecoration: 'none' }}>
            <FaComments style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Depoimentos
          </a>
          <a href="#videos" style={{ color: '#fff', textDecoration: 'none' }}>
            <FaVideo style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Vídeos
          </a>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>
            <FaEnvelope style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

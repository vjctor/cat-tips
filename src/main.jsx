// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Dicas from './pages/Dicas.jsx'; // rota de lista de dicas, se ainda quiser manter

import './index.css'; // pode ficar vazio ou conter resets
import './styles/Home.css'; // para carregar as fontes/globals

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dicas" element={<Dicas />} />
    </Routes>
  </BrowserRouter>
);

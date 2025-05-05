import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home  from './pages/Home.jsx'
import Dicas from './pages/Dicas.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/"      element={<Home  />} />
      <Route path="/dicas" element={<Dicas />} />
    </Routes>
  </BrowserRouter>
)

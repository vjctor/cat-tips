import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import theme from './theme';

import Home  from './pages/Home';
import Dicas from './pages/Dicas';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Home  />} />
        <Route path="/dicas" element={<Dicas />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// src/components/Tips.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

export default function Tips() {
  const [dicas, setDicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/dicas')
      .then(res => {
        setDicas(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Falha ao carregar dicas.');
        setLoading(false);
      });
  }, []);

  return (
    <div id="tips" className="container">
      <section>
        <h2>Dicas de Adestramento</h2>

        {loading && (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <span>Carregando dicas…</span>
          </div>
        )}

        {error && (
          <p style={{ color: 'red', textAlign: 'center', padding: '1rem 0' }}>
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-3">
            {dicas.map(d => (
              <div key={d.id} className="home-card">
                <h3>{d.titulo}</h3>
                <p>{d.descricao}</p>
              </div>
            ))}
            {dicas.length === 0 && (
              <p style={{ textAlign: 'center', width: '100%', marginTop: '2rem' }}>
                Nenhuma dica disponível no momento.
              </p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

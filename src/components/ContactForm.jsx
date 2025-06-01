// src/components/ContactForm.jsx
import React, { useState } from 'react';
import '../styles/Home.css';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('Obrigado pela sua mensagem! Em breve entraremos em contato.');
    e.target.reset();
    // Limpa a mensagem após 5 segundos
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div id="contact" className="container">
      <section>
        <h2>Contato</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu Nome"
            className="contact-input"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu Email"
            className="contact-input"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Sua Mensagem"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" className="btn">
            Enviar Mensagem
          </button>
        </form>
        {status && (
          <p style={{ marginTop: '1rem', color: '#4CAF50', textAlign: 'center' }}>
            {status}
          </p>
        )}
      </section>
    </div>
  );
}

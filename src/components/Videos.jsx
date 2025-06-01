// src/components/Videos.jsx
import React from 'react';
import '../styles/Home.css';

export default function Videos() {
  return (
    <div id="videos" className="container">
      <section>
        <h2>Vídeos Tutoriais</h2>
        <div className="grid grid-3">
          <div className="home-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID1"
              title="Vídeo 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4>Como ensinar o comando deitado</h4>
          </div>
          <div className="home-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID2"
              title="Vídeo 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4>Treino de socialização felina</h4>
          </div>
          <div className="home-card">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/VIDEO_ID3"
              title="Vídeo 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4>Controle de miados</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { FaTimes, FaHeadphones, FaPlay } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ art, onClose, onPlayAudio }) => {
  // A descrição de áudio relacionada pode ser estática ou buscada dinamicamente
  // Neste exemplo, mantive uma descrição estática para simplificar,
  // mas o Home.jsx já busca o áudio real pelo título.
  const relatedAudioInfo = {
    title: `Descrição da Obra: ${art.title}`,
    artist: `Curadoria ArteVision`,
    duration: "Variável" // A duração real virá do áudio se for tocado
  };

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Fechar ao clicar no overlay */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Impedir propagação para não fechar */}
        <div className="modal-header">
          <h3>Detalhes da Obra</h3>
          <button className="close-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <div className="art-detail">
            <div className="art-image">
              <img src={art.image} alt={art.title} />
            </div>
            <div className="art-description">
              <h2 className="art-title">{art.title}</h2>
              <span className="artist">{art.artist}</span>
              <p className="art-text">{art.description}</p>
              <div className="art-meta">
                <div className="meta-item">
                  <h4>Data</h4>
                  <p className="art-date">{art.year}</p>
                </div>
                <div className="meta-item">
                  <h4>Técnica</h4>
                  <p className="art-technique">{art.technique}</p>
                </div>
                <div className="meta-item">
                  <h4>Dimensões</h4>
                  <p className="art-dimensions">{art.dimensions}</p>
                </div>
                <div className="meta-item">
                  <h4>Localização</h4>
                  <p className="art-location">{art.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="related-audio">
            <h3><FaHeadphones /> Áudio Relacionado</h3>
            <div className="audio-card-modal"> {/* Usar uma classe diferente para o estilo do modal */}
              <div className="audio-cover-modal">
                <FaHeadphones className="audio-icon-modal" />
              </div>
              <div className="audio-info-modal">
                <h3 className="audio-title-modal">{relatedAudioInfo.title}</h3>
                <p className="audio-artist-modal">{relatedAudioInfo.artist}</p>
                <button 
                  className="btn play-audio-btn"
                  onClick={onPlayAudio} // Chama a função do Home para tocar o áudio relacionado
                >
                  <FaPlay className="play-icon" /> Ouvir Descrição
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
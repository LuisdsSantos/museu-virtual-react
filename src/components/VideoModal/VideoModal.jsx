import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import './VideoModal.css';

const VideoModal = ({ video, onClose }) => {
  const videoRef = useRef(null);

  // Pausa o vídeo quando o modal é fechado
  useEffect(() => {
    const currentVideo = videoRef.current;
    return () => {
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0; // Opcional: reinicia o vídeo
      }
    };
  }, []);

  if (!video) return null; // Não renderiza se não houver vídeo

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <h3>{video.title}</h3>
          <button className="close-video-modal" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="video-modal-body">
          {video.videoUrl ? (
            <video
              ref={videoRef}
              controls
              autoPlay // Inicia automaticamente
              className="video-player"
            >
              <source src={video.videoUrl} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          ) : (
            <p>O vídeo não está disponível.</p>
          )}
          <div className="video-details">
            <p><strong>Artista/Canal:</strong> {video.artist}</p>
            {video.description && <p>{video.description}</p>} {/* Adicione descrição se tiver */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
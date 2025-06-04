import React from 'react';
import { FaHeadphones, FaPlay } from 'react-icons/fa';
import './AudioCard.css';

const AudioCard = ({ audio, onPlay }) => {
  return (
    <div className="audio-card">
      <div className="audio-cover">
        {audio.artImage ? (
          <img src={audio.artImage} alt={audio.title} />
        ) : (
          <FaHeadphones className="audio-icon" />
        )}
      </div>
      <div className="audio-info">
        <h3 className="audio-title">{audio.title}</h3>
        <p className="audio-meta">{audio.artist} • {audio.duration}</p>
        <button 
          className="play-button"
          onClick={(e) => {
            e.stopPropagation();
            onPlay(audio); 
          }}
        >
          <FaPlay className="play-icon" /> Ouvir
        </button>
      </div>
    </div>
  );
};

export default AudioCard;
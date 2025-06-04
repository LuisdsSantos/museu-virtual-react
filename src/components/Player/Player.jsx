import React, { useEffect, useRef, forwardRef } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaTimes, FaMusic } from 'react-icons/fa';
import './Player.css';

const Player = forwardRef(({
  currentAudio,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  onClose,
  progress,
  currentTime,
  duration,
  onProgressClick,
  onTimeUpdate,
  onLoadedMetadata
}, ref) => {
  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play().catch(e => console.error("Erro ao tentar reproduzir áudio:", e));
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying, currentAudio, ref]);

  return (
    <div className={`player-container ${currentAudio ? 'active' : ''}`}>
      <audio
        ref={ref}
        src={currentAudio?.src}
        onEnded={onNext}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
      />

      {currentAudio && (
        <>
          <div className="player-art">
            {currentAudio.artImage ? (
              <img src={currentAudio.artImage} alt={currentAudio.title} />
            ) : (
              <FaMusic className="music-icon" />
            )}
          </div>
          <div className="player-info">
            <h4>{currentAudio.title}</h4>
            <p>{currentAudio.artist}</p>
          </div>
          <div className="player-progress" onClick={onProgressClick}>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="time">
              <span className="current-time">{currentTime}</span>
              <span className="duration">{duration}</span>
            </div>
          </div>
          <div className="player-controls">
            <button className="control-btn" onClick={onPrev}>
              <FaStepBackward />
            </button>
            <button className="control-btn play-btn" onClick={onPlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className="control-btn" onClick={onNext}>
              <FaStepForward />
            </button>
          </div>
          <button className="close-player" onClick={onClose}>
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
});

export default Player;
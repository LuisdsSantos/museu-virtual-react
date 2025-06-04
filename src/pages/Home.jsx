import React, { useState, useRef } from 'react';
import { artPieces, audioContent, videoContent } from '../data/content';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ArtCard from '../components/ArtCard/ArtCard';
import AudioCard from '../components/AudioCard/AudioCard';
import VideoCard from '../components/VideoCard/VideoCard';
import Player from '../components/Player/Player';
import Modal from '../components/Modal/Modal';
import VideoModal from '../components/VideoModal/VideoModal'; 
const Home = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [selectedArt, setSelectedArt] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  const [selectedVideo, setSelectedVideo] = useState(null); 
  const [showVideoModal, setShowVideoModal] = useState(false); 

  const audioPlayerRef = useRef(null); 

  const openArtModal = (art) => {
    setSelectedArt(art);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedArt(null);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };

  // Funções para o modal de vídeo
  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setShowVideoModal(false);
  };

  const playAudio = (index) => {
    const audio = audioContent[index];
    setCurrentAudioIndex(index);
    setCurrentAudio(audio);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = (currentAudioIndex + 1) % audioContent.length;
    playAudio(nextIndex);
  };

  const playPrev = () => {
    const prevIndex = (currentAudioIndex - 1 + audioContent.length) % audioContent.length;
    playAudio(prevIndex);
  };

  const closePlayer = () => {
    setCurrentAudio(null);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime('0:00');
    setDuration('0:00');
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  const handleTimeUpdate = () => {
    if (audioPlayerRef.current) {
      const { currentTime, duration } = audioPlayerRef.current;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
      setCurrentTime(formatTime(currentTime));
      setDuration(formatTime(duration));
    }
  };

  const handleLoadedMetadata = () => {
    if (audioPlayerRef.current) {
      setDuration(formatTime(audioPlayerRef.current.duration));
    }
  };

  const handleProgressClick = (e) => {
    if (audioPlayerRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const percentage = (clickPosition / progressBarWidth);
      
      const newTime = audioPlayerRef.current.duration * percentage;
      audioPlayerRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="home-page">
      <Header />

      <main>
        <Hero />

        <section className="featured-art">
          <h2 className="section-title">Obras em Destaque</h2>
          <div className="art-grid">
            {artPieces.map((art) => (
              <ArtCard
                key={art.id}
                art={art}
                onOpenModal={openArtModal}
              />
            ))}
          </div>
        </section>

        <section className="audio-section">
          <h2 className="section-title">Áudio Descrição</h2>
          <div className="audio-list">
            {audioContent.map((audio, index) => (
              <AudioCard
                key={audio.id}
                audio={audio}
                onPlay={() => playAudio(index)}
              />
            ))}
          </div>
        </section>

        <section className="video-section">
          <h2 className="section-title">Vídeos Relacionados</h2>
          <div className="video-list">
            {videoContent.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => openVideoModal(video)}
              />
            ))}
          </div>
        </section>
      </main>

      <Player
        currentAudio={currentAudio}
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        onNext={playNext}
        onPrev={playPrev}
        onClose={closePlayer}
        progress={progress}
        currentTime={currentTime}
        duration={duration}
        onProgressClick={handleProgressClick}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        ref={audioPlayerRef}
      />

      {showModal && selectedArt && (
        <Modal 
          art={selectedArt} 
          onClose={closeModal}
          onPlayAudio={() => {
            const relatedAudioIndex = audioContent.findIndex(a => a.title.includes(selectedArt.title));
            if (relatedAudioIndex >= 0) {
              playAudio(relatedAudioIndex);
            } else {
              alert('Nenhum áudio relacionado encontrado para esta obra.');
            }
          }}
        />
      )}

      {/* Renderizar o VideoModal se showVideoModal for true e houver um vídeo selecionado */}
      {showVideoModal && selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={closeVideoModal}
        />
      )}
    </div>
  );
};

export default Home;
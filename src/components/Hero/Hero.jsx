import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import './Hero.css';

const images = [
  `${process.env.PUBLIC_URL}/assets/images/arte-01.png`,
  `${process.env.PUBLIC_URL}/assets/images/arte-02.png`,
  `${process.env.PUBLIC_URL}/assets/images/arte-03.png`,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval); // limpeza do intervalo ao desmontar
  }, []);

  const backgroundImage = images[currentIndex];

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="hero-content">
        <h1>Exposição: Arte Clássica</h1>
        <p>Explore as obras mais sublimes da arte clássica que moldaram a civilização.</p>
        <div className="btn-group">
          <button className="btn">Visitar Exposição</button>
          <button className="btn btn-outline">
            <FaPlay className="play-icon" /> Assistir Documentário
          </button>
        </div>
      </div>
    </section>
  );
};


export default Hero;

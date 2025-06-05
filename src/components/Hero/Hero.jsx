import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/assets/images/arte-03.png`;

  return (
    <section 
      className="hero-section" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
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

import React from 'react';
import './ArtCard.css';

const ArtCard = ({ art, onOpenModal }) => {
  return (
    <div className="art-card" onClick={() => onOpenModal(art)}>
      <img src={art.image} alt={art.title} />
      <div className="art-info">
        <h3>{art.title}</h3>
        <p>{art.artist}, {art.year}</p>
        <div className="art-tags">
          {art.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
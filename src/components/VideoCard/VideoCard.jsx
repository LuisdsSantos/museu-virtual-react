import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './VideoCard.css';

const VideoCard = ({ video, onClick }) => {
  return (
    <div className="video-card" onClick={() => onClick(video)}> 
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <div className="play-overlay">
          <FaPlay className="play-icon" />
        </div>
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-meta">{video.artist} • {video.duration}</p>
      </div>
    </div>
  );
};

export default VideoCard;
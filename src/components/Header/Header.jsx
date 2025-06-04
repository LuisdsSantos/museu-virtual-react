import React from 'react';
import { FaPalette, FaHome, FaCompass, FaBookmark, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <FaPalette className="logo-icon" />
        <span>ArteVision</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><button className="nav-link"><FaHome className="nav-icon" /> Início</button></li>
          <li><button className="nav-link"><FaCompass className="nav-icon" /> Explorar</button></li>
          <li><button className="nav-link"><FaBookmark className="nav-icon" /> Coleções</button></li>
          <li><button className="nav-link"><FaCalendarAlt className="nav-icon" /> Eventos</button></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar artistas, obras..." />
        <button className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
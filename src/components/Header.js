import React from 'react';
import './Header.css';
import backgroundImage from '../resimler/background2.jpg';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header
      id="header"
      style={{
        backgroundImage: `url(${backgroundImage})`,  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100vh',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <nav style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
          <img src={require('../resimler/logo.png')} className="logo" alt="Logo" />
          
          {/* Sosyal medya ikonları */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/in/meri%C3%A7-%C3%A7apar-770ba3159/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/mericcapar" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <ul style={{ display: 'flex', marginLeft: '20px' }}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">Hakkımda</a></li>
            <li><a href="#skills">Beceriler</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <p>Junior Developer</p>
          <h1>Merhaba, Ben Meriç</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;

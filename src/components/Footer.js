import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Finally, I want to add one of my favorite songs. Thank you for visiting!</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x4LmWbxPBkE?autoplay=1&mute=1&controls=1" 
          title="Favorite song"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Meriç Çapar</p>
        <p>+90 536 211 7030</p> 
      </div>
    </footer>
  );
}

export default Footer;

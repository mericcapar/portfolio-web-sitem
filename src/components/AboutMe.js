import React from 'react';
import './AboutMe.css';
import vesikaImage from '../resimler/vesika.jpg';

function AboutMe() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
          <img src={vesikaImage} alt="Vesika Fotoğrafı" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
            I am a forth year Computer Engineering student with various volunteer experiences in different NGOs. I had a
            chance to develop my leadership and teamwork skills through experience working on complex initiatives with
            cross-functional teams in a very fast-moving environment. I'm deeply passionate about machine learning and
            artificial intelligence, and I aspire to specialize in this field. My enthusiasm for machine learning and artificial
            intelligence drives me to continually develop myself and seize every opportunity that comes my way. I am
            committed to becoming an expert in this field and contributing meaningfully to its advancement. SunExpress and
            TÜBİTAK internships, where I worked on ABAP, significantly enhanced my programming, SQL, and clean code
            skills. These experiences have further strengthened my technical foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

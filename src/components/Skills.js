import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="skills">
      <div className="container">
        <h1 className="sub-title">Skills</h1>
        <div className="tab-titles">
          <p 
            className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
            onClick={() => openTab('skills')}
          >
            Skills
          </p>
          <p 
            className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} 
            onClick={() => openTab('experience')}
          >
            Experience
          </p>
          <p 
            className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
            onClick={() => openTab('education')}
          >
            Education
          </p>
        </div>

        <div className="tab-contents">
          {activeTab === 'skills' && (
            <div className="tab-content active-tab" id="skills-content">
              <ul>
                <li><span>Python</span><br />Numpy, Pandas, Tensorflow</li>
                <li><span>SQL</span><br />Database Management</li>
                <li><span>Swift</span><br />IOS Development</li>
                <li><span>Locker Studio</span></li>
                <li><span>SAP ABAP</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="tab-content active-tab" id="experience-content">
              <ul>
                <li><span>2023-Present</span><br />Burlington - Technical Support</li>
                <li><span>08.2024-09.2024</span><br />TÜBİTAK BİLGEM - SAP ABAP Intern</li>
                <li><span>07.2024-08.2024</span><br />SunExpress - SAP ABAP Intern</li>
                <li><span>2020-2023</span><br />BIDB - Computer Technician</li>
              </ul>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="tab-content active-tab" id="education-content">
              <ul>
                <li><span>2020-2025</span><br />SDU - Computer Engineering</li>
                <li><span>08.2024</span><br />DataAI Team - Python OpenCV ile Görüntü İşleme (Gİ-1)</li>
                <li><span>02.2024</span><br />Istanbul Data Science Academy - Data Analyst V2 Boostcamp</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;

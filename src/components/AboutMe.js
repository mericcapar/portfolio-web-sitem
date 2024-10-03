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
            <h1 className="sub-title">Ben kimim?</h1>
            <p>
            Ben, dördüncü sınıf bir Bilgisayar Mühendisliği öğrencisi Meriç. Hızla değişen bir ortamda, karmaşık girişimlerde, farklı disiplinlerden ekiplerle çalışma deneyimim sayesinde liderlik ve takım çalışması becerilerimin iyi olduğunu düşünüyorum. 
            Makine öğrenimi ve yapay zekaya ilgim var ve bu alanda uzmanlaşmayı hedefliyorum. Makine öğrenimi ve yapay zekaya olan tutkum, kendimi sürekli geliştirmemi ve önüme çıkan her fırsatı değerlendirmemi sağlıyor. Ayrıca SunExpress ve TÜBİTAK stajlarım, ABAP üzerinde çalışarak programlama, SQL ve clean kod becerilerimi önemli ölçüde geliştirdi. Bu deneyimler, teknik temellerimi daha da güçlendirdi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

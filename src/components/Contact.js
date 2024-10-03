import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    konu: '',
    mesaj: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Teşekkürler ${formData.name}, mesajınız alındı!`);
  };

  return (
    <div id="contact">
      <div className="container">
        <h1 className="sub-title">Benimle İletişime Geçin</h1>
        <div className="row">
          <div className="contact-left">
            <p><i className="fas fa-paper-plane"></i> mericcaparrr@gmail.com</p>
            <p><i className="fas fa-phone"></i> 05362117597</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/meric-capar/"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/mericcapar"><i className="fab fa-github"></i></a>
            </div>
            <a href="/constants/[CV] Meriç ÇAPAR.pdf" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="İsim" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} />
              <input type="text" name="konu" placeholder="Konu" required value={formData.konu} onChange={handleChange} />
              <textarea name="mesaj" rows="5" placeholder="Mesaj" value={formData.mesaj} onChange={handleChange}></textarea>
              <button type="submit" className="btn btn1">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

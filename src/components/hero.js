import React from 'react';
import './Styles/Hero.css';
import profileImg from '../assets/profile.jpg'; // Replace with your image

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="text">
          <h1>Hello...!!!</h1>
          <h2>I'm <span className="name">Tanuja Randave</span></h2>
          <p className="position">
            <strong>Position:</strong> <span className="role">Software Developer</span>
          </p>
          <p className="description">
            I specialize in developing modern, responsive, and user-friendly web applications.
            I am passionate about backend systems, AI integration, and delivering complete full-stack solutions.
            I believe in continuous learning and leveraging technology to solve real-world problems.
          </p>
        </div>

        <div className="image-wrapper">
          <img src={profileImg} alt="Tanuja Randave" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

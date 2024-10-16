import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h2>About the Author</h2>
      <p>
        <a href="https://www.linkedin.com/in/v-i-k-r-a-m-c-113339322" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:vdmvikram755@gmail.com" target="_blank" rel="noreferrer">
          <i className="fas fa-envelope"></i> Gmail
        </a>
        <a href="https://www.instagram.com/vkrmoo7/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://github.com/Vkrmoo7" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </p>
      <p>
        This calculator collection was developed by D4x. I am a web developer with a passion for creating useful applications that help people in their daily lives.
      </p>
    </div>
  );
}

export default About;

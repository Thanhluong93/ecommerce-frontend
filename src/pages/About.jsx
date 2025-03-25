import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>We are a team of passionate developers building great web applications.</p>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="member">
            <h3>John Doe</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="member">
            <h3>Jane Smith</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
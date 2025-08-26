import React from 'react';
import './Styles/Skills.css'; // Create this file for styling
import { FaServer, FaDatabase, FaLeaf, FaCode } from 'react-icons/fa';

const SkillBadge = () => {
  return (
    <section className="skills-section">
      <div className="skills-left">
        <button className="glow-btn">Certification</button>
        <button className="glow-btn">Projects</button>
        <button className="glow-btn">Notes</button>
        <button className="glow-btn">Download CV</button>
      </div>

      <div className="skills-right">
        <div className="glow-box">
          <h2>Java Web Development</h2>
          <ul>
            <li><FaServer className="icon" /> <strong>Servlet:</strong> Handle dynamic web requests & responses.</li>
            <li><FaDatabase className="icon" /> <strong>JDBC:</strong> Manage database operations seamlessly.</li>
            <li><FaLeaf className="icon" /> <strong>Spring:</strong> Build scalable enterprise web apps.</li>
            <li><FaCode className="icon" /> <strong>Full Stack:</strong> End-to-end development using Java.</li>
          </ul>
          <p className="read-more">Read More</p>
        </div>
      </div>
    </section>
  );
};

export default SkillBadge;

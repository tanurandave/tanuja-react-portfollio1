import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../components/Styles/Home.css';
import '../components/Styles/Skills.css';
import profileImg from '../assets/profile_pic.jpg';
import SVERI_Pandharpur_logo from '../assets/images/sverilogo.jpg';
import poly_logo from '../assets/images/diploma_logo.jpg';
import school_logo from '../assets/images/school_logo.jpg';
import cert7 from "../assets/images/cert7.jpg";
import Tanuja_Resume from '../assets/pdf/Tanuja_Resume.pdf';

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLinux,FaDownload ,FaLinkedin, FaCertificate
,FaProjectDiagram} from "react-icons/fa";
import { SiMysql, SiFirebase,SiSupabase, SiMongodb, SiPostgresql, SiAndroidstudio, SiFlutter, SiDart, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


import { FaServer, FaDatabase, FaLeaf, FaCode } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';


const positions = [
  "Software Engineer",
  "Full Stack Web Developer",
  "Backend Developer",
  "Frontend Developer",
  "ull Stack Java Programmer",
  "Cloud Computing Explorer",
  "Problem Solver",
  "Web Application Developer"
];

const Home = () => {
    const navigate = useNavigate();
  const [showDesc, setShowDesc] = useState(false);

const toggleDescription = () => {
  setShowDesc((prev) => !prev);
};

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = positions[index % positions.length];
    const speed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      setText(
        isDeleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(typing);
  }, [text, isDeleting, index]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>Hello...!!!</h1>
          <h2>I'm <span className="name-highlight">Tanuja Randave</span></h2>
          <h3>
            <strong>Position:</strong>{' '}
            <span className="position-highlight">{text}</span>
          </h3>
          <p>
            I specialize in developing modern, responsive, and user-friendly web
            applications. I am passionate about backend systems, AI integration,
            and delivering complete full-stack solutions. I believe in continuous
            learning and leveraging technology to solve real-world problems.
          </p>
        </div>

        <div className="hero-right">
          <div className="image-glow">
            <img src={profileImg} alt="Tanuja Randave" />
          </div>
        </div>
      </section>
<section className="skills-sectionA" id="skillsA">
      <h2 className="skills-titleA">Skills</h2>
      <p className="skills-subtitleA">
        Here are some of my skills on which I have been working for the past 2 years.
      </p>
      <div className="skills-containerA">
        {/* Frontend */}
        <div className="skills-cardA">
          <h3>Frontend</h3>
          <div className="skills-iconsA">
            <span><FaReact /> React JS</span>
            <span><FaHtml5 /> HTML</span>
            <span><FaCss3Alt /> CSS</span>
            <span><FaJsSquare /> JavaScript</span>
            <span><FaBootstrap /> Bootstrap</span>
            
          </div>
        </div>

        {/* Backend */}
        <div className="skills-cardA">
          <h3>Backend</h3>
          <div className="skills-iconsA">
            <span><FaNodeJs /> Node JS</span>
            <span><FaPython /> Python</span>
            <span><SiMysql /> MySQL</span>
            <span><SiSupabase /> SupaBase</span>
            <span><SiFirebase /> Firebase</span>
            <span><SiMongodb /> MongoDB</span>
            <span><SiPostgresql /> PostgreSQL</span>
            <span> Supabase</span>
            
          </div>
        </div>

        {/* Android */}
        <div className="skills-cardA">
          <h3>Android</h3>
          <div className="skills-iconsA">
            <span><FaJava /> Java</span>
            <span><FaCode  /> XML</span>
            <span><SiAndroidstudio /> Android Studio</span>
          </div>
        </div>

        {/* Others */}
        <div className="skills-cardA">
          <h3>Others</h3>
          <div className="skills-iconsA">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><VscVscode /> VS Code</span>
            <span>ChatGPT</span>
            <span><SiFigma /> Figma</span>
            <span>DevOps</span>
            <span>Agile</span>
            <span><FaLinux /> Linux</span>
          </div>
        </div>
      </div>
    </section>
{/* SKILLS SECTION */}
<section className="skills-sectionAb">
  {/* Left Action Cards */}
  <div className="skills-leftAb">
    <div className="action-card" onClick={() => navigate("/certification")}>
      <FaCertificate className="action-icon" />
      <span className="action-label">Certification</span>
    </div>
   
    <a
      href="https://www.linkedin.com/in/tanuja-randave-b691292a3"
      target="_blank"
      rel="noopener noreferrer"
      className="action-card"
    >
      <FaLinkedin className="action-icon" />
      <span className="action-label">LinkedIn</span>
    </a>
    <div
      className="action-card"
      onClick={() => {
        const link = document.createElement("a");
        link.href = Tanuja_Resume;
        link.download = "Tanuja_Resume.pdf";
        link.click();
      }}
    >
      <FaDownload className="action-icon" />
      <span className="action-label">Download CV</span>
    </div>
    
  </div>

  {/* Right Skill Card (Modern Glassmorphism) */}
  <div className="skills-right">
    <div className="glass-card">
      <span className="badge">Java Web Development</span>

      <h2>Skills & Expertise</h2>
      <p className="subtitle">
        Handle dynamic web requests, database operations, and build scalable enterprise apps.
      </p>

      <ul className="skill-list">
        <li><FaServer className="icon" /> <strong>Servlet:</strong> Handle dynamic web requests & responses.</li>
        <li><FaDatabase className="icon" /> <strong>JDBC:</strong> Manage database operations seamlessly.</li>
        <li><FaLeaf className="icon" /> <strong>Spring:</strong> Build scalable enterprise web apps.</li>
        <li><FaCode className="icon" /> <strong>Full Stack:</strong> End-to-end development using Java.</li>
      </ul>

      <div className="card-actions">
        <a
          href="https://dev.java/learn/"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</section>

      {/* EDUCATION SECTION */}
      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        <div className="timeline">

          {/* CARD 1 */}
          <div className="education-wrapper group">
            <div className="timeline-marker hidden group-hover:flex">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="education-card glow-card">
              <img src={SVERI_Pandharpur_logo} alt="SVERI Logo" className="edu-logo" />
              <div className="edu-details">
                <h3><span className="highlight-yellow">SVERI College Engineering, Pandharpur</span></h3>
                <p>Bachelor of Technology – BTech, Computer Science and Engineering</p>
                <p><strong>Nov 2023 – Aug 2026</strong></p>
                <p><strong>CGPA:</strong> 8.98</p>
               <p className="edu-summary">
 I am currently pursuing a Bachelor's degree in Computer Science and Engineering at SVERI College of Engineering,
</p>
<p className="edu-more">
  Pandharpur. 
  I have completed 2nd year and have a CGPA of 8.98. I have taken courses in Data Structures, Object-Oriented Programming, 
  and Computer Networks, among others.
</p>
 </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="education-wrapper group">
            <div className="timeline-marker hidden group-hover:flex">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="education-card glow-card">
              <img src={poly_logo} alt="VVP Polytechnic" className="edu-logo" />
              <div className="edu-details">
                <h3><span className="highlight-yellow">Vidya Vikas Pratishthan Polytechnic, Solapur</span></h3>
                <p>Diploma</p>
                <p><strong>June 2020 – May 2023</strong></p>
                <p><strong>Percentage:</strong> 87.83%</p>
                <p>I completed my Diploma in Computer Science with a focus on core programming languages like C++, Java etc.</p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="education-wrapper group">
            <div className="timeline-marker hidden group-hover:flex">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>
            <div className="education-card glow-card">
              <img src={school_logo}alt="School Logo" className="edu-logo" />
              <div className="edu-details">
                <h3><span className="highlight-yellow">Kai Shanakrav Bajirav Patil Vidyalay Angar</span></h3>
                <p>SSC</p>
                <p><strong>Jun 2019 – March 2020</strong></p>
                <p><strong>Percentage:</strong> 90%</p>
                <p>I completed my class 10th education at Kai Shanakrav Bajirav Patil Vidyalay Angar.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

       <section className="journey-section" id="journey" data-aos="fade-up">
      <h2 className="journey-title">My Developer Journey</h2>
      <p className="journey-subtitle">Every step taught me something new...</p>

      <div className="journey-container">
       <div className="journey-card" data-aos="zoom-in" data-aos-delay="100">
  <div className="card-inner">
    <div className="card-front">
      <h3>2021</h3>
      <p>Diploma Journey Begins 🎓</p>
    </div>
    <div className="card-back">
      <p>
        Started my diploma and entered the world of programming.
        Learned fundamentals of <b>Core Java</b>, <b>OOPs concepts</b>,
        and basic problem-solving using <b>C++</b>.
      </p>
    </div>
  </div>
</div>


       <div className="journey-card" data-aos="zoom-in" data-aos-delay="200">
  <div className="card-inner">
    <div className="card-front">
      <h3>2022</h3>
      <p>Web & Software Development 🚀</p>
    </div>
    <div className="card-back">
      <p>
        Expanded my skills into <b>Web Development</b> and
        <b>Software Development</b>. Worked with
        <b>HTML, CSS, JavaScript, PHP, Bootstrap</b>,
        <b>MySQL & SQL</b>, along with
        <b>Advanced Java</b> and <b>Android App Development</b>.
        Also gained basics of <b>software testing</b>.
      </p>
    </div>
  </div>
</div>


        <div className="journey-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="card-inner">
           {/* FRONT SIDE */}
<div className="card-front">
  {/* Optional image */}
  {/* <img src={certWisoTech} alt="Wiso-Tech 2K23 Certificate" className="achievement-img" /> */}

  <h3>2023</h3>
  <p>1st Prize – National Level 🏆</p>
</div>

           {/* BACK SIDE */}
<div className="card-back">
  <h4>Wiso-Tech-2K23</h4>

  <p>
    Secured <b>1st Prize</b> in the <b>National Level Project Competition</b>
    organized by V.V.P. Polytechnic, Solapur.
  </p>

  <p className="org">
    Vidya Vikas Pratishthan’s<br />
    V.V.P. Polytechnic, Solapur
  </p>

  <p className="date">
    April 2023
  </p>
</div>

          </div>
        </div>
<div className="journey-card" data-aos="zoom-in" data-aos-delay="300">
  <div className="card-inner">
    
    {/* FRONT SIDE */}
    <div className="card-front">
        {/* <img src={cert7} alt="Best Poster Award" className="achievement-img"/> */}
     
      <h3>2024</h3>
      <p>Best Poster Award 🏆</p>
    </div>

    {/* BACK SIDE */}
    <div className="card-back">
      <h4>Techno-Societal 2024</h4>
      <p>
        Won <b>Best Poster Award</b> at the 5th International Conference on
        Advanced Technologies for Societal Applications.
      </p>
      <p className="org">
        SVERI’s College of Engineering, Pandharpur
      </p>
       <p className="date">
    December 2024
  </p>
    </div>

  </div>
</div>
<div className="journey-card" data-aos="zoom-in" data-aos-delay="300">
  <div className="card-inner">
    <div className="card-front">
      <h3>2025</h3>
      <p>Advanced Full-Stack & AI 🚀</p>
    </div>

    <div className="card-back">
      <p>
        Actively working on <b>real-world, production-level projects</b>.
        Developing full-stack applications using
        <b>React, Node.js, MongoDB</b> and
        <b>Spring Boot</b> with secure authentication and REST APIs.
        Exploring <b>AI-powered features</b>, cloud deployment,
        system design, and building scalable applications like
        <b>e-commerce platforms</b>, <b>helpdesk systems</b>,
        and <b>AI-based tools</b>.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>

    {/* Services Section */}
<section className="services-section" data-aos="fade-up">
  <div className="services-heading-wrapper">
    <h2 className="glow-title">💻 My Superpowers</h2>
    <p className="typing-subtitle" id="typing-services"></p>
  </div>

  <div className="services-container">
    {/* Frontend Developer */}
    <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
      <i className="fas fa-code service-icon"></i>
      <h3>Frontend Developer</h3>
      <p>Responsive UI/UX with HTML, CSS, JavaScript & React JS.</p>
    </div>

    {/* Java Backend Developer */}
    <div className="service-card expandable-card" data-aos="zoom-in" data-aos-delay="200" onClick={() => toggleDescription()}>
      <i className="fas fa-database service-icon"></i>
      <h3> Backend Developer</h3>
      <p>
        Expert in Java, Spring Boot, JDBC, and REST API development...<br />
      </p>
      <p className="click-note">Click to learn more</p>
      <div className={`expanded-description ${showDesc ? 'show' : ''}`} id="backendDesc">
        <p>
          🛡️ Focused on scalable, secure, and modular backend systems.<br />
          📡 Experience with MySQL, MongoDB, SupaBase, and real-time data integration.
        </p>
      </div>
    </div>

    {/* Content Creation */}
    <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
      <i className="fas fa-pen-nib service-icon"></i>
      <h3>Content Creation</h3>
      <p>Creative content for social media, blogs, and branding.</p>
    </div>
  </div>
</section>

      {/* 👇 Add the CTA Section here */}
      <section className="cta-section">
        <h2 className="cta-title">Have projects in mind?</h2>
        <p className="cta-subtitle">Let's work together</p>
        <a href="/contact" className="cta-button">Book A Call →</a>
      </section>
    </>
  );
};

export default Home;

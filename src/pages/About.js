import React from "react";
import "../components/Styles/About.css";

const About = () => {
  const toggleCard = (card) => {
    card.classList.toggle("active");
  };

  return (
    <>
      <div className="about-container">
        <h2 className="about-heading">Hi, I’m Tanuja Randave 👋</h2>
        <p className="about-desc">
          I'm a passionate Full-Stack Developer and Java programmer with strong problem-solving skills.
          I specialize in building responsive web applications, dynamic interfaces, and secure backends.
          With a strong foundation in Java, React.js, Node.js, and databases like MongoDB and MySQL,
          I aim to deliver impactful tech solutions.
        </p>
        <p className="about-desc">
          💡 Winner of a National-level project competition | 📜 Certified in Java, MongoDB, and Web Development |
          🚀 Eager to work on innovative, real-world projects.
        </p>
      </div>

      <div className="skills">
        <h3 className="skill-heading">MY SKILLS</h3>
        <div className="skill-cards">

          {/* HTML & CSS */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            HTML & CSS
            <div className="card-content">
              HTML is the standard markup language for creating web pages and web applications.<br /><br />
              CSS styles HTML pages, making websites beautiful and responsive.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://tanujarportfollio.netlify.app/" target="_blank" rel="noreferrer">Portfolio Website</a></li>
                  <li><a href="https://68510cecd3bd9c6de8d0ab34--bucolic-pegasus-b00315.netlify.app/" target="_blank" rel="noreferrer">Landing Page Design</a></li>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">E-commerce Website</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            JavaScript
            <div className="card-content">
              JavaScript adds interactivity and dynamic behavior to websites.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://685117ff1860d22857b4a9ca--heartfelt-paletas-beb0e7.netlify.app/" target="_blank" rel="noreferrer">Weather App</a></li>
                  <li><a href="https://6851190ed3bd9c96afd0ab4b--sage-taffy-e9add8.netlify.app/" target="_blank" rel="noreferrer">To-Do List</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Node.js */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            Node.js
            <div className="card-content">
              Node.js is a JavaScript runtime built on Chrome's V8 engine.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">Chat Application</a></li>
                  <li><a href="https://ai-diet-planner-gamma.vercel.app/" target="_blank" rel="noreferrer">AI Diet Planner</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            MongoDB
            <div className="card-content">
              MongoDB is a NoSQL database storing data as flexible documents.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://ai-diet-planner-gamma.vercel.app/" target="_blank" rel="noreferrer">AI Diet Planner</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Java */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            Java
            <div className="card-content">
              Java is a versatile language used in web, mobile, and enterprise applications.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://github.com/tanurandave/restorant-billing-sysyem" target="_blank" rel="noreferrer">Restorant Billing System</a></li>
                  <li><a href="https://github.com/tanurandave/chat-application-java" target="_blank" rel="noreferrer">Chatting Application</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Java */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            Advanced Java
            <div className="card-content">
              Covers Servlets, JSP, JDBC for enterprise apps.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">Weather Web App</a></li> 
              <li><a href="https://github.com/tanurandave/restorant-billing-sysyem" target="_blank" rel="noreferrer">Restorant Billing System</a></li>
                
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile App Dev */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            Mobile App Dev
            <div className="card-content">
              Building Android/iOS apps using Java, Kotlin, Flutter.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">Event Management App</a></li>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">Smart Calculator App</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* SQL */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            SQL
            <div className="card-content">
              Standard language for relational databases.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://github.com/tanurandave/smart-health-care-system" target="_blank" rel="noreferrer">Smart Health Care</a></li>
                  <li><a href="result.html" target="_blank" rel="noreferrer">College Website</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* PHP */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            PHP
            <div className="card-content">
              PHP is a scripting language for server-side web development.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://github.com/tanurandave/smart-health-care-system" target="_blank" rel="noreferrer">Health Care System</a></li>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">College Website</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* React JS */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            React JS
            <div className="card-content">
              React is a JS library for building dynamic UIs.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="#" target="_blank" rel="noreferrer">Portfolio Web App</a></li>
              <li><a href="https://technical-igtbxto6h-tanujas-projects-0f9a9030.vercel.app/" target="_blank" rel="noreferrer">Technical Website</a></li>
              <li><a href="https://example.com" target="_blank" rel="noreferrer">E-commerce Website</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spring */}
          <div className="card" onClick={(e) => toggleCard(e.currentTarget)}>
            Spring
            <div className="card-content">
              Spring is a Java framework for enterprise-level apps.
              <div className="projects">
                <h4>Projects:</h4>
                <ul>
                  <li><a href="https://example.com" target="_blank" rel="noreferrer">Student Management</a></li>
                  <li><a href="https://github.com/tanurandave/employee-management/" target="_blank" rel="noreferrer">Employee System</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;

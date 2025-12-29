import React, { useState } from "react";
import "../components/Styles/Project.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectData = [
     {
      title: "Smart HealthCare System",
      short: "Full-stack health system with appointment & prescriptions.",
      description:
        "An smart health portal built with the PHP. Patients can book doctor appointments, receive digital prescriptions, and store medical history. Admin dashboard manages doctors and patients. It provides chat-based assistance and maintains secure data records.",
      frontend: "HTML, CSS, JS",
      backend: "PHP, MYSQL",
      features: "Appointments, Digital Prescriptions, Admin Dashboard",
      visitLink: "https://github.com/tanurandave/smart-health-care-system",
      images: [
        "/images/health1.jpg",
        "/images/health2.jpg",
        "/images/health3.jpg",
        "/images/health4.jpg",
        "/images/health5.jpg",
        "/images/health6.jpg",
        "/images/health7.jpg",
      ],
    },
    {
  title: "Static E-Commerce Website",
  short: "Responsive online store with modern design & product showcase.",
  description:
    "A fully static e-commerce website built using HTML, CSS, and JavaScript. It showcases products with interactive cards, hover effects, sliders, and category filters. Designed with a clean UI, responsive layout for desktop and mobile, and smooth animations for a modern shopping experience.",
  frontend: "HTML, CSS, JavaScript",
  backend: "None (Static Website)",
  features: "Product Showcase, Responsive Design, Sliders & Animations, Hover Effects",
  visitLink: "https://happy-fxjmzu2cz-tanujas-projects-0f9a9030.vercel.app",
  images: [
    "/images/ecommerce1.png",
    "/images/ecommerce2.png",
    "/images/ecommerce3.png",
    "/images/ecommerce4.png",
    "/images/ecommerce5.png",
  ],
},

    {
      title: "Restaurant Billing System",
      short: "Java Swing desktop hotel billing & order management with MySQL.",
      description:
        "A complete restaurant billing and order processing system developed in Java using Swing for the interface and MySQL for data management. Staff can input orders, generate itemized bills, and automatically compute GST and discounts. It also includes daily sales reporting and stores order history securely.",
      frontend: "Java Swing",
      backend: "MySQL",
      features: "Dynamic Bill Generation, Order History, Secure Storage",
      visitLink: "https://github.com/tanurandave/restorant-billing-sysyem",
      images: [
        "/images/hotel1.png",
        "/images/hotel2.png",
        "/images/hotel3.png",
        "/images/hotel4.png",
        "/images/hotel5.png",
        "/images/hotel6.png",
      ],
    },
   {
      title: "Event Management System App",
      short: "Full event planning & booking system with admin dashboards.",
      description:
        "A complete mobile-based event platform that enables users to browse, book, and manage events seamlessly. Admins can monitor user activity, update events, and manage bookings. Built with XML layouts, Java backend, and SQLite database for real-time event handling and data storage.",
      frontend: "XML (Android Studio)",
      backend: "Java, SQLite",
      features: "Event Booking, Real-Time Updates, Admin Dashboard",
      visitLink: "#",
      images: [
        "/images/event8.png",
        "/images/event7.png",
        "/images/event1.jpg",
        "/images/event2.jpg",
        "/images/event3.jpg",
        "/images/event4.jpg",
        "/images/event5.jpg",
        "/images/event6.jpg",
      ],
    },
    {
      title: "Chat Application",
      short: "Real-time Java socket-based messaging with GUI.",
      description:
        "A peer-to-peer real-time chat app created with Java using socket programming. Features include private messaging, typing indicators, GUI with Swing, and file sharing. Supports online/offline detection and multi-client communication in a secure environment.",
      frontend: "Java Swing",
      backend: "Socket Programming",
      features: "Private Messaging, File Transfer, Multi-user Support",
      visitLink: "https://github.com/tanurandave/chat-application-java",
      images: [
        "/images/chat1.png",
        "/images/chat2.png",
        "/images/chat3.png",
        "/images/chat4.png",
      ],
    },
    {
      title: "AI Diet Planner",
      short: "AI-based personalized diet generator using OpenAI API.",
      description:
        "A smart diet planning app using OpenAI API to create weekly meal charts based on user preferences like vegetarian/non-veg, weight goals, and health issues. It displays recipes and nutritional info with a sleek form interface using React and Node.js backend.",
      frontend: "React.js",
      backend: "Node.js, OpenAI API",
      features: "AI Meal Plan Generator, Recipes, Health Condition Filter",
      visitLink: "https://ai-diet-planner-gamma.vercel.app/",
      images: [
        "/images/diet1.png",
        "/images/diet2.png",
        "/images/diet3.png",
        "/images/diet4.png",
        "/images/diet5.png",
        "/images/diet6.png",
      ],
    },
    {
      title: "Portfolio Website",
      short: "React portfolio with animation, contact form & responsive UI.",
      description:
        "An interactive developer portfolio made with React, styled using CSS and Framer Motion animations. Includes contact form (EmailJS), technology filters, project popups, certificate carousel, and mobile responsiveness for a complete self-branding solution.",
      frontend: "React.js, Framer Motion",
      backend: "EmailJS",
      features: "Project Tabs, Animations, Responsive Layout",
      visitLink: "https://tanuja-randave-portfollio.vercel.app/",
      images: [
        "/images/portfolio1.png",
        "/images/portfolio2.png",
        "/images/portfolio3.png",
        "/images/portfolio4.png",
        "/images/portfolio5.png",
      ],
    },
   {
  title: "Elderly Medicine Reminder App",
  short: "Flutter-based medicine reminder app with AI interaction checking.",
  description:
    "A user-friendly cross-platform mobile application developed using Flutter and Dart to help elderly users manage their medication schedules efficiently. The app allows users to add, edit, and delete medicines with dosage time and frequency, sends timely reminders via notifications, and uses AI-based interaction checking to warn users about potential drug interactions and side effects. Supabase is used for secure authentication and real-time database management, ensuring reliable and safe medication tracking.",
  frontend: "Flutter, Dart",
  backend: "Supabase (Auth & Database), AI/NLP APIs",
  features:
    "Medicine Scheduling, Timely Notifications, Add/Edit/Delete Medicines, AI Interaction Check, Secure Authentication, Cross-Platform Support",
  visitLink: "https://github.com/tanurandave/ELDERLY_MED_REMINDER",
  images: [
    "/images/med1.png",
    "/images/med2.png",
    "/images/med3.png",
    "/images/med4.png",
  ],
}
,
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) %
      selectedProject.images.length
    );
  };

  return (
    <div className="projects-section" id="projects">
     <br/><br/> <h2> Explore My Tech Creations</h2>
      <div className="project-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.short}</p>
            <button className="more-btn" onClick={() => openModal(project)}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-body">
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <p><strong>Frontend:</strong> {selectedProject.frontend}</p>
                <p><strong>Backend:</strong> {selectedProject.backend}</p>
                <p><strong>Features:</strong> {selectedProject.features}</p>
                <a
                  href={selectedProject.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </div>
              <div className="modal-slider">
                <span className="prev" onClick={prevImage}>
                  &#10094;
                </span>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt="Project Slide"
                />
                <span className="next" onClick={nextImage}>
                  &#10095;
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

// src/components/Contact.js
import React from "react";
import "../components/Styles/Contact.css";
import contactIllustration from "../assets/images/contact.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_zbusjgf",            // Your EmailJS service ID
      "template_xt1q55l",           // Your EmailJS template ID
      event.target,                 // The form element
      "K5EPThDbiM-c-PNdO"           // Your public key
    )
    .then(
      () => {
        alert("Message sent successfully!");
        event.target.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.log(error);
      }
    );
  };

  return (
    <div className="contact-section">
      <div className="contact-hero">
        <div className="contact-image">
          <img src={contactIllustration} alt="Contact Illustration" />
        </div>
        <div className="contact-text-block">
          <h1>Get in Touch</h1>
          <p>
            We're excited to hear from you! Whether you have a project idea or
            just want to say hello, drop us a message.
          </p>
          <a href="#contact-form">
            <button className="send-button">Start Conversation</button>
          </a>
        </div>
      </div>

      <div className="contact-form-area">
        <h2>Contact Us</h2>
        <p>
          Please provide the following information and we’ll connect you with
          the right person.
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name*</label>
            <input type="text" name="name" required placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Phone number" />
          </div>
          <div className="form-group">
            <label>Your Message*</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useEffect } from "react";
import "../components/Styles/certification.css";
import { FaHeart, FaShareAlt, FaDownload } from "react-icons/fa";

// ✅ Import images properly from src/assets/images
import cert1 from "../assets/images/cert1.png";
import cert2 from "../assets/images/cert2.jpg";
import cert3 from "../assets/images/cert3.jpg";
import cert4 from "../assets/images/cert4.png";
import cert5 from "../assets/images/cert5.png";
import cert6 from "../assets/images/cert6.jpg";
import cert7 from "../assets/images/cert7.jpg";
import cert8 from "../assets/images/cert8.jpg";
import cert9 from "../assets/images/cert9.jpg";
import cert10 from "../assets/images/cert10.jpg";
import cert11 from "../assets/images/cert11.jpg";
import cert12 from "../assets/images/cert12.jpg";
import cert13 from "../assets/images/cert13.jpg";
import cert14 from "../assets/images/cert14.jpg";
import cert15 from "../assets/images/cert15.jpg";

// ✅ Import slider images too
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";
import slider4 from "../assets/images/slider4.jpg";
import slider5 from "../assets/images/slider5.jpg";

const Certification = () => {
  useEffect(() => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    document.querySelectorAll(".card img").forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }, []);

  const like = (e, title) => {
    const element = e.currentTarget;
    let key = "liked_" + title;
    if (localStorage.getItem(key)) {
      alert("You have already liked this certification.");
      return;
    }
    let count = parseInt(element.getAttribute("data-count")) + 1;
    element.setAttribute("data-count", count);
    element.nextElementSibling.innerText = count;
    element.style.color = "red";
    localStorage.setItem(key, true);
  };

  const share = (imageUrl) => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Certification",
          text: "Check out my certificate!",
          url: imageUrl,
        })
        .catch((err) => console.log(err));
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  const certifications = [
    { img: cert1, title: "Web Developemt", file: cert1 },
    { img: cert2, title: "Hands On React Js From Beginner to Expert", file: cert2 },
    { img: cert3, title: "Flutter & Dart", file: cert3 },
    { img: cert4, title: "Cyber Security Fundamentals", file: cert4 },
    { img: cert5, title: "AWS For Beginners", file: cert5 },
    { img: cert6, title: "Industrial Trainning MERN Stack Developer", file: cert6 },
    { img: cert7, title: "Best Poster Award", file: cert7 },
    { img: cert8, title: "AWS Academy Cloud Fundation", file: cert8 },
    { img: cert9, title: "Java Programming with JDBC", file: cert9 },
    { img: cert10, title: "Cyber Security Fundamentals", file: cert10 },
    { img: cert11, title: "AI & ML Learning", file: cert11 },
    { img: cert12, title: "Winner of Wiso Tech 2K23", file: cert12 },
    { img: cert13, title: "Full Stack Development Trainning using PhP", file: cert13 },
    { img: cert14, title: "C and C++ Workshop ", file: cert14 },
    { img: cert15, title: "Participation on Hackathon", file: cert15 },
  ];

  return (
    <>
      {/* Slider */}
      <div className="slider">
        <div className="slides">
          <img src={slider2} alt="Slide 2" />
          <img src={slider3} alt="Slide 3" />
          <img src={slider5} alt="Slide 5" />
          <img src={slider4} alt="Slide 4" />
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="container">
        {certifications.map((cert, index) => (
          <div className="cardd" key={index}>
            <img src={cert.img} alt={cert.title} />
            <div className="title">{cert.title}</div>
            <div className="actions">
              <div>
                <FaHeart
                  onClick={(e) => like(e, cert.title)}
                  data-count="0"
                  style={{ cursor: "pointer" }}
                />
                <span>0</span>
              </div>
              <FaShareAlt onClick={() => share(cert.file)} style={{ cursor: "pointer" }} />
              <a href={cert.file} download>
                <FaDownload />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div id="imageModal">
        <span id="closeModal">&times;</span>
        <img id="modalImage" alt="certificate preview" />
      </div>
    </>
  );
};

export default Certification;

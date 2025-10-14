import React from "react";
import { FaLinkedin, FaGithub, FaItchIo, FaCat, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="social__media">
        <div className="social__media--wrap">
          <div className="social__icons">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zduncan93@gmail.com"
              className="social__icons--links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/z4kkd/"
              className="social__icons--links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Z4KKD"
              className="social__icons--links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://z4kkd.itch.io/"
              className="social__icons--links"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaItchIo />
            </a>
          </div>
          <p className="website__rights">
            © Z4KKD 2025. All Rights Reserved <FaCat />
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useTranslation } from "react-i18next";
import "/src/styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="footer-logo-text">HC Digital</h2>
          <p className="footer-slogan">{t("footer.slogan")}</p>
        </div>

        <div className="footer-links">
          <h3>{t("footer.links.title")}</h3>
          <ul>
            <li><a href="/offres">{t("footer.links.offres")}</a></li>
            <li><a href="/projets">{t("footer.links.projets")}</a></li>
            <li><a href="/contact">{t("footer.links.contact")}</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>{t("footer.social.title")}</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="social-images">
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/snap.webp" alt="Snapchat" className="social-image" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/linkedin.webp" alt="LinkedIn" className="social-image" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="./src/assets/insta.webp" alt="Instagram" className="social-image" />
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <h3>{t("footer.legal.title")}</h3>
          <ul>
            <li><a href="/confidentialite">{t("footer.legal.rgpd")}</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;

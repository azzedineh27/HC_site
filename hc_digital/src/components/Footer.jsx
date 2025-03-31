import React from "react";
import "/src/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Section du logo et du slogan */}
        <div className="footer-logo">
          <h2 className="footer-logo-text">HC Digital</h2>
          <p className="footer-slogan">Innover pour un avenir digital.</p>
        </div>

        {/* Section des liens rapides */}
        <div className="footer-links">
          <h3>Liens Rapides</h3>
          <ul>
            <li><a href="/offres">Nos Offres</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/nos_sites">Nos Projets</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Section des réseaux sociaux */}
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>

          {/* Conteneur des images réseaux */}
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

        {/* Nouvelle section Application Mobile */}
        <div className="footer-app">
          <h3>Notre Application</h3>
          <p>Téléchargez notre application sur votre mobile pour une meilleure expérience.</p>
          <div className="app-buttons">
            <a href="#" className="app-link">
              <img src="./src/assets/apple_store.png" alt="Télécharger sur l'App Store" />
            </a>
            <a href="#" className="app-link">
              <img src="./src/assets/play_store.png" alt="Disponible sur Google Play" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright et crédits */}
      <div className="footer-bottom">
        <p>&copy; 2024 HC Digital. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

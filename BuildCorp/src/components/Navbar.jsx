import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);

  const toggleLangMenu = () => {
    setShowLangMenu((prev) => !prev);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <a href="/" className="nav-link">Accueil</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/offres" className="nav-link">Offres</a>
        <a href="/projets" className="nav-link">Projets</a>
        <a href="/contact" className="nav-link">Contact</a>

        {/* ✅ Menu Langue contrôlé */}
        <div className="language-dropdown">
          <button className="lang-btn" onClick={toggleLangMenu}>
            FR <span style={{ fontSize: "0.8em" }}>▼</span>
          </button>

          {showLangMenu && (
            <ul className="lang-menu">
              <li className="lang-item"><a href="#" className="lang-option">🇫🇷 Français</a></li>
              <li className="lang-item"><a href="#" className="lang-option">🇬🇧 English</a></li>
              <li className="lang-item"><a href="#" className="lang-option">🇪🇸 Español</a></li>

            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

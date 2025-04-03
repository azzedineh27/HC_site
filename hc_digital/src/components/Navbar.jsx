import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLangMenu = () => setShowLangMenu((prev) => !prev);
  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="/" className="nav-link">{t("navbar.home")}</a>
          <a href="/services" className="nav-link">{t("navbar.services")}</a>
          <a href="/offres" className="nav-link">{t("navbar.offres")}</a>
          <a href="/projets" className="nav-link">{t("navbar.projets")}</a>
          <a href="/contact" className="nav-link">{t("navbar.contact")}</a>
        </div>

        <div className="language-dropdown">
          <button className="lang-btn" onClick={toggleLangMenu}>
            {i18n.language.toUpperCase()} <span style={{ fontSize: "0.8em" }}>▼</span>
          </button>

          {showLangMenu && (
            <ul className="lang-menu">
              <li className="lang-item"><span className="lang-option" onClick={() => changeLang("fr")}>🇫🇷 Français</span></li>
              <li className="lang-item"><span className="lang-option" onClick={() => changeLang("en")}>🇬🇧 English</span></li>
              <li className="lang-item"><span className="lang-option" onClick={() => changeLang("es")}>🇪🇸 Español</span></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

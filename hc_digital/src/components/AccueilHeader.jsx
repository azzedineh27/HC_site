import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AccueilHeader.css";

const AccueilHeader = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-background-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{t("accueilHeader.title")}</h1>
        <p className="hero-subtitle">{t("accueilHeader.subtitle")}</p>
        <a href="#explore-section" className="hero-btn">
          {t("accueilHeader.button")}
        </a>
      </div>
    </section>
  );
};

export default AccueilHeader;

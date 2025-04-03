import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AccueilExplore.css";

const AccueilExplore = () => {
  const { t } = useTranslation();

  return (
    <section className="explore-section" id="explore-section">
      {/* Texte en arrière-plan */}
      <div className="big-text">{t("accueilExplore.bgText")}</div>

      {/* Contenu principal */}
      <div className="explore-content">
        <h2 className="explore-title">{t("accueilExplore.title")}</h2>
        <p className="explore-text">{t("accueilExplore.description")}</p>
        <a href="/services" className="explore-btn">
          {t("accueilExplore.button")}
        </a>
      </div>
    </section>
  );
};

export default AccueilExplore;

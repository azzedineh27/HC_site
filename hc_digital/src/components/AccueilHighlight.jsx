import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AccueilHighlight.css";
import projetImage from "../assets/projet.jpg";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-highlight-section">
      <div className="projects-content">
        <h2 className="projects-title">{t("accueilHighlight.title")}</h2>
        <p className="projects-text">{t("accueilHighlight.text")}</p>
        <a href="/projets" className="projects-btn">
          {t("accueilHighlight.button")}
        </a>
      </div>
      <div className="projects-image">
        <img src={projetImage} alt="Aperçu de nos sites" className="projects-preview" />
      </div>
    </section>
  );
};

export default ProjectsSection;

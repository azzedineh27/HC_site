import React from "react";
import "../styles/AccueilHighlight.css";
import projetImage from "../assets/projet.jpg"; // Import correct de l'image

const ProjectsSection = () => {
  return (
    <section className="projects-highlight-section">
      <div className="projects-content">
        <h2 className="projects-title">Découvrez nos Réalisations</h2>
        <p className="projects-text">
          Explorez nos projets les plus impressionnants, où chaque réalisation
          reflète notre expertise et notre passion pour l'innovation. Que ce
          soit des projets locaux ou internationaux, BuildCorp transforme les
          idées en réalité.
        </p>
        <a href="projets.html" className="projects-btn">
          Voir nos sites
        </a>
      </div>
      <div className="projects-image">
        <img src={projetImage} alt="Aperçu de nos sites" className="projects-preview" />
      </div>
    </section>
  );
};

export default ProjectsSection;

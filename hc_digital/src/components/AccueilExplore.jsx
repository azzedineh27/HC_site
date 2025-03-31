import React from "react";
import "../styles/AccueilExplore.css";

const AccueilExplore = () => {
  return (
    <section className="explore-section">
      {/* Texte en arrière-plan */}
      <div className="big-text">Création</div>

      {/* Contenu principal */}
      <div className="explore-content">
        <h2 className="explore-title">Explorez notre univers</h2>
        <p className="explore-text">
          Chez HC Digital, nous mettons un point d'honneur à créer des solutions
          numériques innovantes. Que vous soyez un candidat curieux ou un
          client à la recherche de partenariats, découvrez un monde où la
          technologie rencontre l'innovation. De la conception de sites web sur
          mesure à l'intégration d'applications complexes, notre expertise
          s'étend sur tous les domaines du digital.
        </p>
        <a href="/services" className="explore-btn">
          Explorer
        </a>
      </div>
    </section>
  );
};

export default AccueilExplore;

import React from "react";
import "../styles/AccueilOffres.css";
import offreImage from "../assets/projet.jpg"; // à adapter selon ton image

const AccueilOffres = () => {
  return (
    <section className="offres-section">
      <div className="offres-content">
        <h2 className="offres-title">Des offres pensées pour vous</h2>
        <p className="offres-text">
          Que vous soyez une startup, une PME ou une grande entreprise, BuildCorp propose des formules adaptées à vos objectifs. De la création de site vitrine à la gestion de plateformes complexes, nos offres sont modulables et transparentes.
        </p>
        <a href="/services" className="offres-btn">Voir nos offres</a>
      </div>
      <div className="offres-image">
        <img src={offreImage} alt="Offres BuildCorp" className="offres-preview" />
      </div>
    </section>
  );
};

export default AccueilOffres;

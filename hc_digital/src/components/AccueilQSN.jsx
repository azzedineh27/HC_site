import React from "react";
import "../styles/AccueilQSN.css";

const AccueilQSN = () => {
  return (
    <section className="presentation-section">
      <div className="presentation-text-container">
        <h2 className="presentation-title">Qui sommes-nous ?</h2>
        <p className="presentation-text">
          HC Digital est une entreprise de solutions digitales qui repousse les
          limites de l'innovation et de la créativité. Depuis notre création,
          nous avons accompagné des entreprises de toutes tailles dans leur
          transformation numérique grâce à des technologies de pointe et des
          designs sur mesure.
        </p>
        <a href="/services" className="presentation-btn">
          En savoir plus
        </a>
      </div>
      <div className="presentation-image">
        <img src="./src/assets/qsn.jpg" alt="Présentation de HC Digital" className="presentation-img" />
      </div>
    </section>
  );
};

export default AccueilQSN;

import React from "react";
import "../styles/AccueilInspiration.css";

const AccueilInspiration = () => {
  return (
    <section className="inspiration-section">
      <div className="inspiration-container">
        <h2 className="inspiration-title">Notre Vision</h2>
        <blockquote className="inspiration-quote">
        "Le futur appartient à ceux qui osent l'imaginer."
        </blockquote>
        <p className="inspiration-subtext">
        Avec HC Digital, l’innovation n’attend pas demain.
        </p>
      </div>
    </section>
  );
};

export default AccueilInspiration;

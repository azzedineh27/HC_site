import React from "react";
import "../styles/AccueilOffres.css";
import { Layers, Code2, Server, Smartphone } from "lucide-react";

const AccueilOffres = () => {
  return (
    <section className="offres-section split-layout">
      <div className="offres-left">
        <h2 className="offres-title">Des offres pensées pour vous</h2>
        <p className="offres-text">
          Que vous soyez une startup, une PME ou une grande entreprise, nos services s’adaptent à vos ambitions. Chaque offre est pensée pour allier performance, clarté et personnalisation.
        </p>
        <a href="/offres" className="offres-btn">Voir nos offres</a>
      </div>

      <div className="offres-right">
        <div className="offres-grid">
          <div className="offre-card">
            <Layers className="offre-icon" />
            <h3 className="offre-label">Site Vitrine</h3>
          </div>
          <div className="offre-card">
            <Code2 className="offre-icon" />
            <h3 className="offre-label">App sur mesure</h3>
          </div>
          <div className="offre-card">
            <Server className="offre-icon" />
            <h3 className="offre-label">Infrastructure</h3>
          </div>
          <div className="offre-card">
            <Smartphone className="offre-icon" />
            <h3 className="offre-label">Mobile & UX</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccueilOffres;

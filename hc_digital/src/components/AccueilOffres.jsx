import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AccueilOffres.css";
import { Layers, Code2, Server, Smartphone } from "lucide-react";

const AccueilOffres = () => {
  const { t } = useTranslation();

  return (
    <section className="offres-section split-layout">
      <div className="offres-left">
        <h2 className="offres-title">{t("accueilOffres.title")}</h2>
        <p className="offres-text">{t("accueilOffres.text")}</p>
        <a href="/offres" className="offres-btn">
          {t("accueilOffres.button")}
        </a>
      </div>

      <div className="offres-right">
        <div className="offres-grid">
          <div className="offre-card">
            <Layers className="offre-icon" />
            <h3 className="offre-label">{t("accueilOffres.cards.site")}</h3>
          </div>
          <div className="offre-card">
            <Code2 className="offre-icon" />
            <h3 className="offre-label">{t("accueilOffres.cards.app")}</h3>
          </div>
          <div className="offre-card">
            <Server className="offre-icon" />
            <h3 className="offre-label">{t("accueilOffres.cards.infra")}</h3>
          </div>
          <div className="offre-card">
            <Smartphone className="offre-icon" />
            <h3 className="offre-label">{t("accueilOffres.cards.mobile")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccueilOffres;

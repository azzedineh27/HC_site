import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AccueilQSN.css";

const AccueilQSN = () => {
  const { t } = useTranslation();

  return (
    <section className="presentation-section">
      <div className="presentation-text-container">
        <h2 className="presentation-title">{t("accueilQSN.title")}</h2>
        <p className="presentation-text">{t("accueilQSN.text")}</p>
        <a href="/services" className="presentation-btn">
          {t("accueilQSN.button")}
        </a>
      </div>
      <div className="presentation-image">
        <img src="./src/assets/qsn.jpg" alt="Présentation de HC Digital" className="presentation-img" />
      </div>
    </section>
  );
};

export default AccueilQSN;

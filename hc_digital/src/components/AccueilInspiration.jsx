import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/AccueilInspiration.css";

const AccueilInspiration = () => {
  const { t } = useTranslation();

  return (
    <section className="inspiration-section">
      <div className="inspiration-container">
        <h2 className="inspiration-title">{t("accueilInspiration.title")}</h2>
        <blockquote className="inspiration-quote">{t("accueilInspiration.quote")}</blockquote>
        <p className="inspiration-subtext">{t("accueilInspiration.subtext")}</p>
      </div>
    </section>
  );
};

export default AccueilInspiration;

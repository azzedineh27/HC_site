import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/ServicesAudit.css";

const ServicesAudit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="audit-invite-section">
      <div className="audit-invite-content">
        <h2 className="audit-invite-title">{t("servicesAudit.title")}</h2>
        <p className="audit-invite-subtitle">{t("servicesAudit.subtitle")}</p>
        <button className="audit-invite-button" onClick={() => navigate("/contact")}>
          {t("servicesAudit.button")}
        </button>
      </div>
    </section>
  );
};

export default ServicesAudit;

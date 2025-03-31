import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ServicesAudit.css";

const ServicesAudit = () => {
  const navigate = useNavigate();

  return (
    <section className="audit-invite-section">
      <div className="audit-invite-content">
        <h2 className="audit-invite-title">
          Envie de savoir si vous êtes bien préparé numériquement ?
        </h2>
        <p className="audit-invite-subtitle">
          Parlons-en. On vous guide avec clarté et sans jargon.
        </p>
        <button className="audit-invite-button" onClick={() => navigate("/contact")}>
          Nous contacter
        </button>
      </div>
    </section>
  );
};

export default ServicesAudit;

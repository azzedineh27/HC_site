import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/ContactForm.css";
import Navbar from "../components/Navbar";

const ContactForm = () => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  const [formData, setFormData] = useState({ fullname: "", email: "", tel: "", message: "" });
  const [quoteData, setQuoteData] = useState({ name: "", email: "", formula: "", feature: "", budget: "", details: "" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(".form-front")?.classList.add("loaded");
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  const handleContactChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleQuoteChange = (e) => setQuoteData({ ...quoteData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.success"));
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-box-left">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.subtitle")}</p>
          <div className="contact-highlight">
            <p>📞 +33 7 49 08 20 57</p>
            <p>📧 contact@hcdigital.com</p>
          </div>
          <button className="switch-btn" onClick={() => setIsFlipped(!isFlipped)}>
            {isFlipped ? t("contact.buttonFlipToContact") : t("contact.buttonFlipToQuote")}
          </button>
        </div>

        <div className={`form-flip-container ${isFlipped ? "flipped" : ""}`}>
          <div className="form-inner">
            <form onSubmit={handleSubmit} className="contact-form form-front">
              <h2 className="contact-title">{t("contact.form.title")}</h2>
              <input name="fullname" placeholder={t("contact.form.name")} value={formData.fullname} onChange={handleContactChange} required />
              <input name="email" type="email" placeholder={t("contact.form.email")} value={formData.email} onChange={handleContactChange} required />
              <input name="tel" placeholder={t("contact.form.tel")} value={formData.tel} onChange={handleContactChange} required />
              <textarea name="message" placeholder={t("contact.form.message")} value={formData.message} onChange={handleContactChange} rows="4" required />
              <button type="submit" className="contact-button">{t("contact.form.send")}</button>
            </form>

            <form onSubmit={handleSubmit} className="contact-form form-back">
              <h2 className="contact-title">{t("contact.quote.title")}</h2>
              <input name="name" placeholder={t("contact.quote.company")} value={quoteData.name} onChange={handleQuoteChange} required />
              <input name="email" type="email" placeholder="Email" value={quoteData.email} onChange={handleQuoteChange} required />
              <select name="formula" value={quoteData.formula} onChange={handleQuoteChange} required>
                <option value="" disabled>{t("contact.quote.formulaPlaceholder")}</option>
                <option value="standard">{t("contact.quote.formulas.standard")}</option>
                <option value="pro">{t("contact.quote.formulas.pro")}</option>
                <option value="surmesure">{t("contact.quote.formulas.surmesure")}</option>
              </select>
              <textarea name="details" placeholder={t("contact.quote.details")} value={quoteData.details} onChange={handleQuoteChange} rows="4" required />
              <button type="submit" className="contact-button">{t("contact.form.send")}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

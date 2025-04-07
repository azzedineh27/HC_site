import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/ContactForm.css";
import Navbar from "../components/Navbar";

const ContactForm = () => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [quoteErrors, setQuoteErrors] = useState({});
  const [errorBanner, setErrorBanner] = useState(null);

  const [formData, setFormData] = useState({ fullname: "", email: "", tel: "", message: "" });
  const [quoteData, setQuoteData] = useState({ name: "", email: "", formula: "", details: "" });

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(".form-front")?.classList.add("loaded");
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  const handleContactChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleQuoteChange = (e) => setQuoteData({ ...quoteData, [e.target.name]: e.target.value });

  const showErrorBanner = (message) => {
    setErrorBanner(message);
    setTimeout(() => {
      setErrorBanner(null);
    }, 2000); // 2 secondes
  };
  
  const sanitizeInput = (value) => {
    return value.replace(/<[^>]*>?/gm, ""); // supprime toutes les balises HTML
  };
  
  const validateContactForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telRegex = /^[0-9]{8,15}$/;
    const nameRegex = /^[^0-9]+$/;
    const messageMinLength = 10;
  
    if (!formData.fullname.trim()) {
      errors.fullname = "Nom requis";
    } else if (!nameRegex.test(formData.fullname)) {
      errors.fullname = "Le nom ne doit pas contenir de chiffres";
    }
  
    if (!emailRegex.test(formData.email)) {
      errors.email = "Email invalide";
    }
  
    if (!telRegex.test(formData.tel)) {
      errors.tel = "Le numéro doit contenir uniquement des chiffres (8 à 15 chiffres)";
    }
  
    if (!formData.message.trim()) {
      errors.message = "Message requis";
    } else if (formData.message.length < messageMinLength) {
      errors.message = "Le message doit contenir au moins 10 caractères";
    }
  
    return errors;
  };
  

  const validateQuoteForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[^0-9]+$/;
  
    if (!quoteData.name.trim()) {
      errors.name = "Nom requis";
    } else if (!nameRegex.test(quoteData.name)) {
      errors.name = "Le nom ne doit pas contenir de chiffres";
    }
  
    if (!emailRegex.test(quoteData.email)) {
      errors.email = "Email invalide";
    }
  
    if (!quoteData.formula) {
      errors.formula = "Veuillez choisir une formule";
    }
  
    if (!quoteData.details.trim()) {
      errors.details = "Détail requis";
    }
  
    return errors;
  };
  
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
  
    const errors = validateContactForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorMessage = Object.values(errors)[0];
      showErrorBanner(firstErrorMessage);
      return;
    }
    
  
    setFormErrors({});
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullname: sanitizeInput(formData.fullname),
          email: sanitizeInput(formData.email),
          tel: sanitizeInput(formData.tel),
          message: sanitizeInput(formData.message)
        })
      });
      
    
      const data = await response.json();
    
      if (data.success) {
        toast.success(t("contact.success"));
        setFormData({ fullname: "", email: "", tel: "", message: "" });
      } else {
        toast.error("❌ Une erreur est survenue : " + data.error);
      }
    } catch (err) {
      console.error("Erreur serveur :", err);
      toast.error("🚨 Erreur de connexion au serveur.");
    }    
  };
  
  
  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
  
    const errors = validateQuoteForm();
    if (Object.keys(errors).length > 0) {
      setQuoteErrors(errors);
      const firstErrorMessage = Object.values(errors)[0];
      showErrorBanner(firstErrorMessage);
      return;
    }
    
  
    setQuoteErrors({});
  
    try {
      const response = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: sanitizeInput(quoteData.name),
          email: sanitizeInput(quoteData.email),
          formula: quoteData.formula,
          details: sanitizeInput(quoteData.details)
        })
      });
      
    
      const data = await response.json();
    
      if (data.success) {
        toast.success("🎉 Devis envoyé avec succès !");
        setQuoteData({
          name: "",
          email: "",
          formula: "",
          details: ""
        });
      } else {
        toast.error("❌ Une erreur est survenue : " + data.error);
      }
    } catch (err) {
      console.error("Erreur serveur :", err);
      toast.error("🚨 Erreur de connexion au serveur.");
    }    
  };
  
  
  
  return (
    <div className="contact-page">
      <Navbar />
      {errorBanner && (
        <div className="custom-error-banner">{errorBanner}</div>
      )}

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
            {/* === FORMULAIRE CONTACT === */}
            <form onSubmit={handleContactSubmit} className="contact-form form-front">
              <h2 className="contact-title">{t("contact.form.title")}</h2>

              <input
                name="fullname"
                placeholder={t("contact.form.name")}
                value={formData.fullname}
                onChange={handleContactChange}
                className={formErrors.fullname ? "input-error" : ""}
              />

              <input
                name="email"
                type="text"
                placeholder={t("contact.form.email")}
                value={formData.email}
                onChange={handleContactChange}
                className={formErrors.email ? "input-error" : ""}
              />

              <input
                name="tel"
                placeholder={t("contact.form.tel")}
                value={formData.tel}
                onChange={handleContactChange}
                className={formErrors.tel ? "input-error" : ""}
              />

              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                value={formData.message}
                onChange={handleContactChange}
                rows="4"
                className={formErrors.message ? "input-error" : ""}
              />

              <button type="submit" className="contact-button">{t("contact.form.send")}</button>
            </form>

            {/* === FORMULAIRE DEVIS === */}
            <form onSubmit={handleQuoteSubmit} className="contact-form form-back">
              <h2 className="contact-title">{t("contact.quote.title")}</h2>

              <div className="form-grid">
                <div className="input-group">
                  <input
                    name="name"
                    placeholder={t("contact.quote.company")}
                    value={quoteData.name}
                    onChange={handleQuoteChange}
                    className={quoteErrors.name ? "input-error" : ""}
                  />
                </div>

                <div className="input-group">
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    className={quoteErrors.email ? "input-error" : ""}
                  />
                </div>

                <div className="input-group full-width">
                  <select
                    name="formula"
                    value={quoteData.formula}
                    onChange={handleQuoteChange}
                    className={quoteErrors.formula ? "input-error" : ""}
                  >
                    <option value="" disabled>{t("contact.quote.formulaPlaceholder")}</option>
                    <option value="standard">{t("contact.quote.formulas.standard")}</option>
                    <option value="pro">{t("contact.quote.formulas.pro")}</option>
                    <option value="surmesure">{t("contact.quote.formulas.surmesure")}</option>
                  </select>
                </div>

                <div className="input-group full-width">
                  <textarea
                    name="details"
                    placeholder={t("contact.quote.details")}
                    value={quoteData.details}
                    onChange={handleQuoteChange}
                    rows="4"
                    className={quoteErrors.details ? "input-error" : ""}
                  />
                </div>
              </div>

              <button type="submit" className="contact-button">{t("contact.form.send")}</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;

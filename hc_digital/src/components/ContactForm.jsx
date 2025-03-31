import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css";
import Navbar from "../components/Navbar";

const ContactForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    tel: "",
    message: "",
  });

  const [quoteData, setQuoteData] = useState({
    name: "",
    email: "",
    formula: "",
    budget: "",
    details: "",
  });  

  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(".form-front")?.classList.add("loaded");
    }, 50); // petit délai pour que le DOM soit prêt
  
    return () => clearTimeout(timeout);
  }, []);
  

  const handleContactChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleQuoteChange = (e) =>
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-box-left">
          <h2>Restons connectés</h2>
          <p>Une idée, un projet ou besoin d’un devis ?</p>
          <div className="contact-highlight">
            <p>📞 +33 1 23 45 67 89</p>
            <p>📧 contact@hcdigital.com</p>
          </div>
          <button className="switch-btn" onClick={() => setIsFlipped(!isFlipped)}>
            {isFlipped ? "Nous Contacter" : "Demander un Devis"}
          </button>
        </div>
  
        {/* ✅ Flip container */}
        <div className={`form-flip-container ${isFlipped ? "flipped" : ""}`}>
          <div className="form-inner">
            {/* Face avant - Contact */}
            <form onSubmit={handleSubmit} className="contact-form form-front">
              <h2 className="contact-title">Contactez-nous</h2>
              <input
                name="fullname"
                placeholder="Nom complet"
                value={formData.fullname}
                onChange={handleContactChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleContactChange}
                required
              />
              <input
                name="tel"
                placeholder="Téléphone"
                value={formData.tel}
                onChange={handleContactChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleContactChange}
                rows="4"
                required
              />
              <button type="submit" className="contact-button">Envoyer</button>
            </form>
  
            {/* Face arrière - Devis */}
            <form onSubmit={handleSubmit} className="contact-form form-back">
              <h2 className="contact-title">Demande de Devis</h2>
              <input
                name="name"
                placeholder="Nom de l'entreprise"
                value={quoteData.name}
                onChange={handleQuoteChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={quoteData.email}
                onChange={handleQuoteChange}
                required
              />
              <select
                name="formula"
                value={quoteData.formula}
                onChange={handleQuoteChange}
                className="quote-select"
                required
              >
                <option value="">Choisissez une formule</option>
                <option value="standard">Standard</option>
                <option value="pro">Pro</option>
                <option value="surmesure">Sur-mesure</option>
              </select>
              <textarea
                name="details"
                placeholder="Détails"
                value={quoteData.details}
                onChange={handleQuoteChange}
                rows="4"
                required
              />
              <button type="submit" className="contact-button">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

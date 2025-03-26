import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
    setFormData({ fullname: "", email: "", tel: "", message: "" });
  };

  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-wrapper">
        <div className="contact-box-left">
          <h2>Restons connectés</h2>
          <p>
            Une idée, une question ou un projet à nous confier ? Remplissez ce
            formulaire, on vous recontacte rapidement.
          </p>
          <div className="contact-highlight">
            <p>📞 +33 1 23 45 67 89</p>
            <p>📧 contact@buildcorp.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="contact-title">Contactez-nous</h2>

          <input
            type="text"
            name="fullname"
            placeholder="Nom complet"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder="Téléphone"
            value={formData.tel}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
      </div>

      <Chatbot />
    </div>
  );
};

export default ContactForm;

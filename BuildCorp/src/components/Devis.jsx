// QuoteForm.jsx
import React from "react";
import "../styles/Devis.css";

const Devis = () => {
  return (
    <section className="quote-form-section">
      <h2>Demandez Votre Devis</h2>
      <form className="quote-form">
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" placeholder="Votre nom complet" required />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" placeholder="Votre adresse email" required />

        <label htmlFor="site-type">Type de site :</label>
        <select id="site-type" name="site-type" required>
          <option value="standard">Site Standard</option>
          <option value="medium">Site Medium</option>
          <option value="premium">Site Premium</option>
        </select>

        <label htmlFor="features">Sujet du site et description :</label>
        <textarea id="features" name="features" placeholder="Description du site (couleurs, formes, utilité etc..)"></textarea>

        <button type="submit" className="quote-submit-btn">Envoyer</button>
      </form>
    </section>
  );
};

export default Devis;
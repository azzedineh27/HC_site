// 📁 src/components/OffersList.jsx
import "../styles/OffersList.css";
import { FaRocket, FaGem, FaStar } from "react-icons/fa";

const offers = [
  {
    title: "Starter",
    icon: <FaRocket className="offer-icon" />,
    price: "29€/mois",
    description: "Pour les petites entreprises en démarrage",
    button: "Sélectionner",
    highlight: false,
  },
  {
    title: "Pro",
    icon: <FaGem className="offer-icon" />,
    price: "59€/mois",
    description: "Pour les entreprises en croissance",
    button: "Sélectionner",
    highlight: true,
  },
  {
    title: "Sur-mesure",
    icon: <FaStar className="offer-icon" />,
    price: "Contactez-nous",
    description: "Pour une solution personnalisée et adaptée",
    button: "Nous contacter",
    highlight: false,
  },
];

const OffersList = () => {
  return (
    <section className="offers-section">
      <h1 className="offers-main-title">Nos Formules</h1>
      <p className="offers-subtitle">
        Choisissez la formule qui vous convient et faites passer votre entreprise au niveau supérieur.
      </p>
      <div className="offers-container">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`offer-card ${offer.highlight ? "highlight" : ""}`}
          >
            {offer.icon}
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-price">{offer.price}</p>
            <p className="offer-description">{offer.description}</p>
            <button className={`offer-btn ${offer.title === "Sur-mesure" ? "secondary" : ""}`}>
              {offer.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersList;
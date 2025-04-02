// 📁 src/components/OffersList.jsx
import "../styles/OffersList.css";
import { FaRocket, FaGem, FaStar } from "react-icons/fa";

const offers = [
  {
    title: "Starter",
    icon: <FaRocket className="offer-icon" />,
    description: "Une base solide pour démarrer votre projet digital.",
    features: [
      "Site vitrine 3 pages",
      "Formulaire de contact",
      "Design responsive",
    ],
    button: "Demander un devis",
    highlight: false,
  },
  {
    title: "Pro",
    icon: <FaGem className="offer-icon" />,
    description: "Pensé pour les entreprises en pleine croissance.",
    features: [
      "Site complet jusqu’à 10 pages",
      "Blog / CMS intégré",
      "Optimisation SEO",
      "Maintenance 3 mois incluse",
    ],
    button: "Demander un devis",
    highlight: true,
  },
  {
    title: "Sur-mesure",
    icon: <FaStar className="offer-icon" />,
    description: "Une solution taillée pour vos besoins spécifiques.",
    features: [
      "Cahier des charges personnalisé",
      "Fonctionnalités sur demande",
      "Accompagnement UX/UI",
      "Devis sur mesure",
    ],
    button: "Demander un devis",
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
            <p className="offer-description">{offer.description}</p>
              <ul className="offer-features">
                {offer.features && offer.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

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
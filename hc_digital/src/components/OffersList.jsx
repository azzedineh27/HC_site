import "../styles/OffersList.css";
import { FaRocket, FaGem, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const OffersList = () => {
  const { t } = useTranslation();

  const offers = [
    {
      key: "starter",
      icon: <FaRocket className="offer-icon" />
    },
    {
      key: "pro",
      icon: <FaGem className="offer-icon" />
    },
    {
      key: "surmesure",
      icon: <FaStar className="offer-icon" />
    }
  ];

  return (
    <section className="offers-section" id="offers-section">
      <h1 className="offers-main-title">{t("offersList.title")}</h1>
      <p className="offers-subtitle">{t("offersList.subtitle")}</p>

      <div className="offers-container">
        {offers.map((offer, index) => {
          const offerData = t(`offersList.offers.${offer.key}`, { returnObjects: true });

          return (
            <div key={index} className={`offer-card ${offer.key === "pro" ? "highlight" : ""}`}>
              {offer.icon}
              <h2 className="offer-title">{offerData.title}</h2>
              <p className="offer-description">{offerData.description}</p>
              <ul className="offer-features">
                {offerData.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`offer-btn ${offer.key === "surmesure" ? "secondary" : ""}`}>
                {offerData.button}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OffersList;

import "../styles/OffersProducts.css";
import { useTranslation } from "react-i18next";

const OffersProducts = () => {
  const { t } = useTranslation();
  const products = t("offersProducts.products", { returnObjects: true });

  return (
    <section className="extra-section">
      <h2 className="extra-title">{t("offersProducts.title")}</h2>
      <p className="extra-subtitle">{t("offersProducts.subtitle")}</p>

      <div className="extra-grid">
        {products.map((product, index) => (
          <div key={index} className="extra-card">
            <div className="extra-icon">{product.icon}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersProducts;

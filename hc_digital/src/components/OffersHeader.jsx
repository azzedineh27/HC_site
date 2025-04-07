import "../styles/OffersHeader.css";
import { useTranslation } from "react-i18next";

const OffersHeader = () => {
  const { t } = useTranslation();

  const handleScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById("offers-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="offers-hero">
      <h1 className="offers-hero-title">{t("offersHeader.title")}</h1>
      <p className="offers-hero-subtitle">{t("offersHeader.subtitle")}</p>
      <a href="#offers-section" className="offers-scroll-btn">
        {t("offersHeader.button")}
      </a>
    </section>
  );
};

export default OffersHeader;

import "../styles/OffersHelp.css";
import { useTranslation } from "react-i18next";

const OffersHelp = () => {
  const { t } = useTranslation();

  return (
    <section className="help-section">
      <h2 className="help-title">{t("offersHelp.title")}</h2>
      <p className="help-text">{t("offersHelp.text")}</p>
      <a href="/contact" className="help-btn">{t("offersHelp.button")}</a>
    </section>
  );
};

export default OffersHelp;

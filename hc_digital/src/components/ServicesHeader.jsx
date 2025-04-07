import "../styles/ServicesHeader.css";
import { useTranslation } from "react-i18next";

const ServicesHeader = () => {
  const { t } = useTranslation();

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetSection = document.querySelector("#services-detail");

    if (targetSection) {
      const topOffset = targetSection.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="services-header">
      <div>
        <h1>{t("servicesHeader.title")}</h1>
        <p>{t("servicesHeader.subtitle")}</p>
        <a className="explorer" href="#services-detail">
          <span></span><span></span><span></span><span></span>
          {t("servicesHeader.button")}
        </a>
      </div>
    </section>
  );
};

export default ServicesHeader;

import "../styles/ServicesDetail.css";
import { useTranslation } from "react-i18next";

const ServicesDetail = () => {
  const { t } = useTranslation();
  const services = t("servicesDetail.items", { returnObjects: true });

  const images = [
    "./src/assets/dev.jpg",
    "./src/assets/application.jpg",
    "./src/assets/seo.jpg",
    "./src/assets/maintenance.jpg"
  ];

  return (
    <section id="services-detail" className="detailed-services">
      <h2>{t("servicesDetail.title")}</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={images[index]} alt={service.title} />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetail;

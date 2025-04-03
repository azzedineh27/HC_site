import "../styles/ServicesAvis.css";
import { useTranslation } from "react-i18next";

const ServicesAvis = () => {
  const { t } = useTranslation();
  const testimonials = t("servicesAvis.testimonials", { returnObjects: true });

  return (
    <section className="testimonials">
      <h2>{t("servicesAvis.title")}</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAvis;

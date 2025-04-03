import "../styles/ServicesSteps.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import { useTranslation } from "react-i18next";

const ServicesSteps = () => {
  const { t } = useTranslation();
  const steps = t("servicesSteps.steps", { returnObjects: true });
  const images = [slider1, slider2, slider3, slider4];

  return (
    <div className="wrapper">
      <h2>{t("servicesSteps.title")}</h2>
      <div className="container">
        {steps.map((step, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${images[index]})` }}>
            <div className="description">
              <h4>{index + 1}. {step}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSteps;

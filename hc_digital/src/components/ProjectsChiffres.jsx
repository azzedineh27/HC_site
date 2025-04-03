import "../styles/ProjectsChiffres.css";
import { useTranslation } from "react-i18next";

const KeyMetrics = () => {
  const { t } = useTranslation();
  const metrics = t("projectsChiffres.cards", { returnObjects: true });

  return (
    <section className="key-metrics-section">
      <h2 className="key-metrics-title">{t("projectsChiffres.title")}</h2>
      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.value}</h3>
            <p>{metric.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyMetrics;

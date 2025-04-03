import "../styles/ProjectsTimeline.css";
import { useTranslation } from "react-i18next";

const ProjectsTimeline = () => {
  const { t } = useTranslation();
  const events = t("projectsTimeline.events", { returnObjects: true });

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">{t("projectsTimeline.title")}</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{event.year} - {event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsTimeline;

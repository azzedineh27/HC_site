import "../styles/ProjectsHeader.css";
import { useTranslation } from "react-i18next";

const ProjectsHeader = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-header">
      <video autoPlay muted loop id="background-video">
        <source src="./src/assets/video_services.mp4" type="video/mp4" />
      </video>

      <div className="header-content">
        <h1 className="intro-title">{t("projectsHeader.title")}</h1>
        <p className="intro-text">{t("projectsHeader.text")}</p>
        <a href="#nos-projets" className="intro-btn">{t("projectsHeader.button")}</a>
      </div>
    </section>
  );
};

export default ProjectsHeader;

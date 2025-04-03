import "../styles/ProjectsList.css";
import { useState } from "react";
import ProjectLightbox from "./ProjectLightbox";
import { useTranslation } from "react-i18next";

const ProjectsList = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(null);

  const projects = [
    { src: "./src/assets/FA_image.png", alt: t("projectsList.images.0.alt") },
    { src: "./src/assets/outil_renta.png", alt: t("projectsList.images.1.alt") },
    { src: "./src/assets/idrymen_image.png", alt: t("projectsList.images.2.alt") },
    { src: "./src/assets/etudeplus_project.png", alt: t("projectsList.images.3.alt") },
    { src: "./src/assets/coming_soon.png", alt: t("projectsList.images.4.alt") },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="nos-projets" className="project-section-wrapper">
      <section className="project-header">
        <h1>{t("projectsList.title")}</h1>
      </section>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => setCurrentIndex(index)}>
            <img src={project.src} alt={project.alt} />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <ProjectLightbox
          image={projects[currentIndex].src}
          onClose={() => setCurrentIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default ProjectsList;

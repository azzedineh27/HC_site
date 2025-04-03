import "../styles/ProjectsList.css";
import { useState } from "react";
import ProjectLightbox from "./ProjectLightbox";

const projects = [
  { src: "./src/assets/FA_image.png", alt: "Projet 1" },
  { src: "./src/assets/outil_renta.png", alt: "Projet 2" },
  { src: "./src/assets/idrymen_image.png", alt: "Projet 3" },
  { src: "./src/assets/etudeplus_project.png", alt: "Projet 4" },
  { src: "./src/assets/coming_soon.png", alt: "Coming Soon" },
];

const ProjectsList = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

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
        <h1>Nos Projets Réalisés</h1>
      </section>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setCurrentIndex(index)}
          >
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

import "../styles/ProjectsHeader.css";

const ProjectsHeader = () => {
  return (
    <section className="projects-header">
      <video autoPlay muted loop id="background-video">
        <source src="./src/assets/video_services.mp4" type="video/mp4" />
      </video>

      <div className="header-content">
        <h1 className="intro-title">Découvrez notre parcours</h1>
        <p className="intro-text">Explorez les projets qui ont façonné notre histoire et notre expertise.</p>
        <a href="#nos-projets" className="intro-btn">Voir nos projets</a>
      </div>
    </section>
  );
};

export default ProjectsHeader;

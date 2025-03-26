import "../styles/ProjectsLightbox.css";

const ProjectLightbox = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="lightbox active" onClick={onClose}>
      <button className="arrow arrow-left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        &#10094;
      </button>
      <img src={image} alt="Aperçu du projet" />
      <button className="arrow arrow-right" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        &#10095;
      </button>
    </div>
  );
};

export default ProjectLightbox;
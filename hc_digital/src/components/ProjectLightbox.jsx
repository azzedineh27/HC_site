import "../styles/ProjectsLightbox.css";
import { useTranslation } from "react-i18next";

const ProjectLightbox = ({ image, onClose, onNext, onPrev }) => {
  const { t } = useTranslation();

  return (
    <div className="lightbox active" onClick={onClose}>
      <button className="arrow arrow-left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        &#10094; <span className="visually-hidden">{t("lightbox.prev")}</span>
      </button>
      <img src={image} alt={t("lightbox.alt")} />
      <button className="arrow arrow-right" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        &#10095; <span className="visually-hidden">{t("lightbox.next")}</span>
      </button>
    </div>
  );
};

export default ProjectLightbox;

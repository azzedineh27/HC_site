import "../styles/ServicesHeader.css";

const ServicesHeader = () => {
  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetSection = document.querySelector("#services-detail");

    if (targetSection) {
      const topOffset = targetSection.offsetTop; // Récupère la position exacte de la section
      window.scrollTo({
        top: topOffset,
        behavior: "smooth", // Défilement fluide activé
      });
    }
  };

  return (
    <section className="services-header">
      <div>
        <h1>Nos Services</h1>
        <p>Découvrez comment HC Digital peut propulser votre entreprise avec des solutions digitales sur-mesure</p>
        <a className="explorer" href="#services-detail">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Explorer
        </a>
      </div>
    </section>
  );
};

export default ServicesHeader;

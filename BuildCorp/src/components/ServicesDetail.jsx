// ServicesDetail.jsx
import "../styles/ServicesDetail.css";

const ServicesDetail = () => {
  return (
    <section id="services-detail" className="detailed-services">
      <h2>Nos Services en Détail</h2>
      <div className="services-container">
        <div className="service-card">
          <img src="./src/assets/design.jpg" alt="Design UX/UI" />
          <div className="service-info">
            <h3>Design UX/UI</h3>
            <p>Nous concevons des interfaces modernes et intuitives pour une expérience utilisateur optimisée.</p>
          </div>
        </div>
        <div className="service-card">
          <img src="./src/assets/dev.jpg" alt="Développement Web" />
          <div className="service-info">
            <h3>Développement Web</h3>
            <p>Des sites performants et responsifs adaptés à vos besoins professionnels.</p>
          </div>
        </div>
        <div className="service-card">
          <img src="./src/assets/seo.jpg" alt="SEO & Performance" />
          <div className="service-info">
            <h3>SEO & Performance</h3>
            <p>Optimisation pour le référencement et la rapidité de chargement de votre site.</p>
          </div>
        </div>
        <div className="service-card">
          <img src="./src/assets/maintenance.jpg" alt="Maintenance & Sécurité" />
          <div className="service-info">
            <h3>Maintenance & Sécurité</h3>
            <p>Suivi régulier et sécurisation des données pour une tranquillité d'esprit totale.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
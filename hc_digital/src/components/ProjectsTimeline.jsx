import "../styles/ProjectsTimeline.css";

const timelineEvents = [
  { year: "2018", title: "Création de HC Digital", description: "Naissance de HC Digital avec une vision d'innovation technologique." },
  { year: "2020", title: "Premier Grand Projet", description: "Nous avons collaboré avec une startup pour développer une plateforme SaaS." },
  { year: "2022", title: "Expansion Internationale", description: "Ouverture de notre premier bureau à l'étranger et croissance de notre équipe." },
  { year: "2024", title: "Innovation & IA", description: "Intégration de l'Intelligence Artificielle dans nos solutions pour optimiser les performances." },
];

const ProjectsTimeline = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">L'Évolution de HC Digital</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
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

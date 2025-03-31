import "../styles/ProjectsChiffres.css";

const KeyMetrics = () => {
  return (
    <section className="key-metrics-section">
      <h2 className="key-metrics-title">Nos chiffres clés</h2>
      <div className="metrics-container">
        <div className="metric-card">
          <h3>+500</h3>
          <p>Projets réalisés</p>
        </div>
        <div className="metric-card">
          <h3>+300</h3>
          <p>Clients satisfaits</p>
        </div>
        <div className="metric-card">
          <h3>5</h3>
          <p>Pays couverts</p>
        </div>
        <div className="metric-card">
          <h3>+10</h3>
          <p>Années d'expérience</p>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;

import "../styles/OffersComparison.css";

const OffersComparison = () => {
  return (
    <section className="offers-comparison">
      <h2 className="comparison-title">Comparez Nos Offres</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Fonctionnalités</th>
            <th>Starter</th>
            <th>Pro</th>
            <th>Sur-mesure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design responsive</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Nom de domaine inclus</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Support prioritaire</td>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Modules personnalisés</td>
            <td>❌</td>
            <td>🔸</td>
            <td>💯</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default OffersComparison;

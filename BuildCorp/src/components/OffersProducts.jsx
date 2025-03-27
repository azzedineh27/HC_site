import "../styles/OffersProducts.css";

const extraProducts = [
  {
    title: "Application Mobile",
    description: "Profitez de notre expertise pour créer des applications mobiles modernes et efficaces",
    icon: "📱",
  },
  {
    title: "Outil de Visualisation",
    description: "Suivez vos statistiques en temps réel avec notre tableau de bord interactif.",
    icon: "📊",
  },
  {
    title: "Assistants Chatbot",
    description: "Bénéficiez d’une aide intelligente pour vos décisions stratégiques.",
    icon: "🤖",
  },
];

const OffersProducts = () => {
  return (
    <section className="extra-section">
      <h2 className="extra-title">Produits en plus</h2>
      <p className="extra-subtitle">
        Découvrez nos outils complémentaires pour booster votre productivité.
      </p>

      <div className="extra-grid">
        {extraProducts.map((product, index) => (
          <div key={index} className="extra-card">
            <div className="extra-icon">{product.icon}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersProducts;

import "../styles/OffersHelp.css";

const OffersHelp = () => {
  return (
    <section className="help-section">
      <h2 className="help-title">Vous hésitez ? On vous aide !</h2>
      <p className="help-text">
        Dites-nous ce que vous recherchez, et on vous oriente vers l'offre la plus adaptée.
      </p>
      <a href="/contact" className="help-btn">Discutons ensemble</a>
    </section>
  );
};

export default OffersHelp;

import "../styles/OffersHeader.css";

const OffersHeader = () => {
  const handleScroll = (e) => {
    e.preventDefault(); // empêche le saut instantané du href
    const section = document.getElementById("offers-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="offers-hero">
      <h1 className="offers-hero-title">Nos Offres</h1>
      <p className="offers-hero-subtitle">
        Des solutions adaptées à chaque projet, du lancement à la performance.
      </p>
      <a
        href="#offers-section"
        className="offers-scroll-btn"
        onClick={handleScroll}
      >
        ↓ Découvrir nos formules
      </a>
    </section>
  );
};

export default OffersHeader;

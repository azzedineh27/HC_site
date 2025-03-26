// 📁 src/pages/OffersPage.jsx
import OffersHero from "../components/OffersHero";
import OffersList from "../components/OffersList";
import OffersComparison from "../components/OffersComparaison";
import OffersHelp from "../components/OffersHelp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/OffersPage.css";

const OffersPage = () => {
  return (
    <div className="offers-page">
      <Navbar/>
      <OffersHero />
      <OffersList />
      <OffersComparison />
      <OffersHelp />
      <Footer/>
    </div>
  );
};

export default OffersPage;
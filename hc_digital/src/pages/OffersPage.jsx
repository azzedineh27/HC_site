import OffersHeader from "../components/OffersHeader";
import OffersList from "../components/OffersList";
import OffersQuiz from "../components/OffersQuiz";
import OffersHelp from "../components/OffersHelp";
import OffersProducts from "../components/OffersProducts";
import Chatbot from "../components/Chatbot";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/OffersPage.css";

const OffersPage = () => {
  return (
    <div className="offers-page">
      <Navbar/>
      <OffersHeader />
      <OffersList />
      <OffersProducts />
      <OffersQuiz />
      <OffersHelp />
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default OffersPage;
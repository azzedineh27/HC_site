import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHeader from "../components/ServicesHeader";
import ServicesDetail from "../components/ServicesDetail";
import StepsSection from "../components/StepsSection";
import Testimonials from "../components/Testimonials";
import Chatbot from "../components/Chatbot";

import "../styles/global.css";
import "../styles/ServicesPages.css";

function ServicesPage() {
  return (
    <div className="services-page">
      <Navbar />
      <ServicesHeader />
      <ServicesDetail />
      <StepsSection />
      <Testimonials />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default ServicesPage;

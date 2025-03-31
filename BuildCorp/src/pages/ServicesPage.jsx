import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHeader from "../components/ServicesHeader";
import ServicesDetail from "../components/ServicesDetail";
import ServicesAudit from "../components/ServicesAudit";
import ServicesSteps from "../components/ServicesSteps";
import Testimonials from "../components/Testimonials";
import Chatbot from "../components/Chatbot";
import "../styles/global.css";
import "../styles/ServicesPages.css";
import CursorParticles from "../components/CursorParticles";

function ServicesPage() {
  return (
    <div className="services-page">
      <CursorParticles />
      <Navbar />
      <ServicesHeader />
      <ServicesDetail />
      <ServicesAudit />      
      <ServicesSteps />
      <Testimonials />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default ServicesPage;

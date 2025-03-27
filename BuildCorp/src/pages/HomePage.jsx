import Navbar from "../components/Navbar";
import AccueilFront from "../components/AccueilFront";
import AccueilQSN from "../components/AccueilQSN";
import AccueilExplore from "../components/AccueilExplore";
import AccueilHighlight from "../components/AccueilHighlight";
import AccueilInspiration from "../components/AccueilInspiration";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import "../styles/global.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <AccueilFront />
      <AccueilQSN />
      <AccueilExplore />
      <AccueilHighlight />
      <AccueilInspiration/>
      <Chatbot />
      <Footer />
    </>
  );
}

export default HomePage;
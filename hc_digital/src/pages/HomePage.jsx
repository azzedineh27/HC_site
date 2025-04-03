import { useState, useEffect } from "react";
import CursorParticles from "../components/CursorParticles";
import Navbar from "../components/Navbar";
import AccueilFront from "../components/AccueilFront";
import AccueilQSN from "../components/AccueilQSN";
import AccueilExplore from "../components/AccueilExplore";
import AccueilHighlight from "../components/AccueilHighlight";
import AccueilOffres from "../components/AccueilOffres";
import AccueilInspiration from "../components/AccueilInspiration";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import LoadingScreen from "../components/LoadingScreen";
import "../styles/global.css";
import "../styles/AccueilPage.css";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("hasVisitedHome");
    if (!alreadyVisited) {
      setIsLoading(true);
      sessionStorage.setItem("hasVisitedHome", "true");
      const timeout = setTimeout(() => setIsLoading(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <>
      <CursorParticles />
      <Navbar />
      <AccueilFront />
      <AccueilQSN />
      <AccueilExplore />
      <AccueilOffres />      
      <AccueilHighlight />
      <AccueilInspiration />
      <Chatbot />
      <Footer />
    </>
  );
}

export default HomePage;

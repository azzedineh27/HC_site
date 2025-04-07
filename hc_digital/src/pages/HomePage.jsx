import { useState, useEffect } from "react";
import CursorParticles from "../components/CursorParticles";
import Navbar from "../components/Navbar";
import AccueilHeader from "../components/AccueilHeader";
import AccueilQSN from "../components/AccueilQSN";
import AccueilExplore from "../components/AccueilExplore";
import AccueilHighlight from "../components/AccueilHighlight";
import AccueilOffres from "../components/AccueilOffres";
import AccueilInspiration from "../components/AccueilInspiration";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import "../styles/global.css";
import "../styles/AccueilPage.css";

function HomePage() {
  return (
    <>
      <CursorParticles />
      <Navbar />
      <AccueilHeader />
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

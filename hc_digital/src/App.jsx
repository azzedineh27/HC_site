import { useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import OffersPage from "./pages/OffersPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false); // 👈 évite le flash
  const location = useLocation();
  const timerRef = useRef(null);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded");

    if (!alreadyLoaded) {
      setShowLoading(true);
      sessionStorage.setItem("alreadyLoaded", "true");

      timerRef.current = setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }

    // 👇 Empêche le rendu tant qu’on n’a pas fini le check
    setTimeout(() => setInitialCheckDone(true), 10);
    
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleFinishLoading = () => {
    clearTimeout(timerRef.current);
    setShowLoading(false);
  };

  // ✅ Pendant qu’on décide s’il faut afficher le loader ou non : rien ne s’affiche
  if (!initialCheckDone) return null;

  if (showLoading) {
    return <LoadingScreen onFinish={handleFinishLoading} />;
  }

  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/offres" element={<OffersPage />} />
      <Route path="/projets" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;

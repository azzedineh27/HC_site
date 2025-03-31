import { useEffect } from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timeout = setTimeout(onFinish, 3000);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="spiral-loader"></div>
        <p className="loading-text">Ouverture de HC DIGITAL</p>
        <button className="skip-button" onClick={onFinish}>Skip</button>
      </div>
    </div>
  );
};

export default LoadingScreen;

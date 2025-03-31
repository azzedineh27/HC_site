import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const CursorParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // ✅ plus léger et compatible
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 1 },
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          size: { value: { min: 1, max: 4 } },
          opacity: {
            value: 0.5,
            animation: { enable: true, speed: 2, minimumValue: 0.2, sync: false }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "out" },
            random: true,
            straight: false
          }
        },
        
        
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.4 }
            }
          }
        },
        background: {
          color: "transparent"
        }
      }}
    />
  );
};

export default CursorParticles;

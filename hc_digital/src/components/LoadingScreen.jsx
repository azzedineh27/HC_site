import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code2, Palette, Cpu, Settings, Cloud,
  Lightbulb, BarChart3, Layers, Package, Ruler
} from "lucide-react";
import "../styles/LoadingScreen.css";

const icons = [Code2, Palette, Cpu, Settings, Cloud, Lightbulb, BarChart3, Layers, Package, Ruler];

const LoadingScreen = ({ onFinish }) => {
  const { t } = useTranslation();
  const [showIcons, setShowIcons] = useState(false);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    const startIcons = setTimeout(() => setShowIcons(true), 200);
    const startExplosion = setTimeout(() => setExplode(true), 2000);
    const finish = setTimeout(onFinish, 3000);

    return () => {
      clearTimeout(startIcons);
      clearTimeout(startExplosion);
      clearTimeout(finish);
    };
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="blur-background"></div>
      <div className="icon-container">
        <div className="icon-ring">
          {icons.map((Icon, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const radius = 110;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="icon-wrapper"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  showIcons
                    ? explode
                      ? { opacity: 0, scale: 0.2, x: 0, y: 0 }
                      : { opacity: 1, scale: 1, x, y }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ delay: index * 0.05, duration: 0.4, ease: "easeInOut" }}
              >
                <Icon size={28} className="icon-constellation" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {showIcons && (
        <motion.p className="loading-text" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {t("loading.text")}
        </motion.p>
      )}

      {showIcons && (
        <motion.button className="skip-button" onClick={onFinish} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>
          {t("loading.skip")}
        </motion.button>
      )}
    </div>
  );
};

export default LoadingScreen;

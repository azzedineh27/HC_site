import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/OffersQuiz.css";

const OffersQuiz = () => {
  const { t } = useTranslation();

  const questions = t("offersQuiz.questions", { returnObjects: true });
  const resultData = t("offersQuiz.result", { returnObjects: true });

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleSelect = (value) => {
    const updatedAnswers = [...answers, value];
    if (step < questions.length - 1) {
      setAnswers(updatedAnswers);
      setStep(step + 1);
    } else {
      const count = { starter: 0, pro: 0, surmesure: 0 };
      updatedAnswers.forEach((val) => count[val]++);
      const max = Object.entries(count).reduce((a, b) => (a[1] > b[1] ? a : b));
      setResult(resultData[max[0]]);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section className="quiz-section">
      <div className="quiz-container">
        <div className="quiz-header">
          <span className="quiz-icon">🧭</span>
          <h1 className="quiz-title">{t("offersQuiz.title")}</h1>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="quiz-card"
            >
              <h2 className="quiz-question">{questions[step].question}</h2>
              <div className="quiz-options">
                {questions[step].options.map((label, idx) => {
                  const value = ["starter", "pro", "surmesure"][idx];
                  return (
                    <button key={idx} className="quiz-option-btn" onClick={() => handleSelect(value)}>
                      {label}
                    </button>
                  );
                })}
              </div>
              <p className="quiz-progress">
                {t("offersQuiz.progress", { current: step + 1, total: questions.length })}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="quiz-card result"
            >
              <h2 className="quiz-result-title">{result.title}</h2>
              <p className="quiz-result-desc">{result.description}</p>
              <a href="#offers-section" className="quiz-btn">
                {t("offersQuiz.result.button")}
              </a>
              <button className="quiz-restart" onClick={resetQuiz}>
                {t("offersQuiz.result.restart")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OffersQuiz;

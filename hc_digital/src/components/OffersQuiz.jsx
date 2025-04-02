// 📁 src/components/OffersQuiz.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/OffersQuiz.css";

const questions = [
  {
    question: "Quel est votre besoin principal ?",
    options: [
      { label: "Créer un site simple et rapide", value: "starter" },
      { label: "Développer une solution évolutive", value: "pro" },
      { label: "Obtenir une solution totalement personnalisée", value: "surmesure" },
    ],
  },
  {
    question: "Quel est votre niveau de maturité numérique ?",
    options: [
      { label: "Débutant", value: "starter" },
      { label: "Intermédiaire", value: "pro" },
      { label: "Avancé / Expert", value: "surmesure" },
    ],
  },
  {
    question: "À quelle vitesse souhaitez-vous lancer le projet ?",
    options: [
      { label: "Le plus vite possible", value: "starter" },
      { label: "Dans 1 à 2 mois", value: "pro" },
      { label: "Quand tout est parfaitement cadré", value: "surmesure" },
    ],
  },
];

const resultMap = {
  starter: {
    title: "Formule Starter",
    description: "Idéal pour vous lancer rapidement avec l’essentiel.",
    link: "/offres#starter",
  },
  pro: {
    title: "Formule Pro",
    description: "Pensé pour les projets sérieux en pleine croissance.",
    link: "/offres#pro",
  },
  surmesure: {
    title: "Formule Sur-Mesure",
    description: "Parfait si vous avez besoin d’un projet 100% personnalisé.",
    link: "/offres#surmesure",
  },
};

const OffersQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleSelect = (value) => {
    const updatedAnswers = [...answers, value];
    if (step < questions.length - 1) {
      setAnswers(updatedAnswers);
      setStep(step + 1);
    } else {
      // Calcule le résultat
      const count = { starter: 0, pro: 0, surmesure: 0 };
      updatedAnswers.forEach((val) => count[val]++);
      const max = Object.entries(count).reduce((a, b) => (a[1] > b[1] ? a : b));
      setResult(resultMap[max[0]]);
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
          <h1 className="quiz-title">Quel pack est fait pour vous ?</h1>
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
                {questions[step].options.map((opt, idx) => (
                  <button key={idx} className="quiz-option-btn" onClick={() => handleSelect(opt.value)}>
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="quiz-progress">Question {step + 1} / {questions.length}</p>
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
              <a href={result.link} className="quiz-btn">Voir l’offre</a>
              <button className="quiz-restart" onClick={resetQuiz}>Recommencer</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OffersQuiz;

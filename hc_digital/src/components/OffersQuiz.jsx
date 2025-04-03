// 📁 src/components/OffersQuiz.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/OffersQuiz.css";

const questions = [
  {
    question: "Pourquoi souhaitez-vous un site web ?",
    options: [
      { label: "Pour avoir une présence en ligne rapidement", value: "starter" },
      { label: "Pour développer mon activité / vendre mes services", value: "pro" },
      { label: "Pour proposer une expérience digitale unique et impactante", value: "surmesure" },
    ],
  },
  {
    question: "Votre entreprise est…",
    options: [
      { label: "En création ou très jeune", value: "starter" },
      { label: "En développement actif", value: "pro" },
      { label: "Bien installée avec des besoins avancés", value: "surmesure" },
    ],
  },
  {
    question: "Avez-vous besoin de fonctionnalités spécifiques ?",
    options: [
      { label: "Juste du contenu", value: "starter" },
      { label: "Blog, formulaire, newsletter", value: "pro" },
      { label: "Paiement en ligne, CRM, espace client, etc.", value: "surmesure" },
    ],
  },
  {
    question: "Quel est votre délai idéal ?",
    options: [
      { label: "Moins d’un mois", value: "starter" },
      { label: "1 à 2 mois", value: "pro" },
      { label: "+ de 2 mois, avec phase de cadrage", value: "surmesure" },
    ],
  },
  {
    question: "Votre cible est plutôt…",
    options: [
      { label: "Locale / régionale", value: "starter" },
      { label: "Nationale", value: "pro" },
      { label: "Internationale", value: "surmesure" },
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

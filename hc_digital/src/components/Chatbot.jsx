import React, { useState } from "react";
import "../styles/Chatbot.css";
import chatbotIcon from "../assets/chatbot-icon.png"; // Image pour la bulle du chatbot

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Bonjour ! Comment puis-je vous aider ?", sender: "bot" },
  ]);

  const questions = [
    "Quels sont vos services ?",
    "Comment vous contacter ?",
    "Quels sont vos tarifs ?",
    "Avez-vous des références ?",
  ];

  const responses = {
    "Quels sont vos services ?": "Nous proposons du développement web, du design UX/UI, du SEO et de la maintenance.",
    "Comment vous contacter ?": "Contactez-nous via notre formulaire de contact ou par email à contact@HC Digital.com.",
    "Quels sont vos tarifs ?": "Nos tarifs varient selon les projets. Contactez-nous pour un devis personnalisé.",
    "Avez-vous des références ?": "Oui ! Consultez nos réalisations dans la section 'Nos Projets'.",
  };

  const handleQuestionClick = (question) => {
    setMessages([...messages, { text: question, sender: "user" }, { text: responses[question], sender: "bot" }]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-bubble" onClick={() => setIsOpen(!isOpen)}>
        <img src={chatbotIcon} alt="Chatbot" />
      </div>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chatbot HC Digital</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-questions">
            {questions.map((question, index) => (
              <button key={index} className="question-btn" onClick={() => handleQuestionClick(question)}>
                {question}
              </button>
            ))}
          </div>

          <p className="chatbot-contact">
            ❓ Vous n'avez pas trouvé ce que vous cherchez ? <a href="/contact">Contactez-nous !</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

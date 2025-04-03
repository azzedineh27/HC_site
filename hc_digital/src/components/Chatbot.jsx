import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Chatbot.css";
import chatbotIcon from "../assets/chatbot-icon.png";

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: t("chatbot.greeting"), sender: "bot" }
  ]);

  const questions = t("chatbot.questions", { returnObjects: true });
  const responses = t("chatbot.responses", { returnObjects: true });

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
            {t("chatbot.fallback")} <a href="/contact">{t("chatbot.contactLink")}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

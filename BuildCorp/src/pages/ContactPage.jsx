import ContactForm from "../components/ContactForm";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";
import "../styles/ContactForm.css";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <ContactForm />
        <Chatbot />
        <Footer/>
      </div>
    </>
  );
};

export default ContactPage;

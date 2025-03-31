import "../styles/Testimonials.css";

const testimonialsData = [
  {
    name: "Jean Dupont",
    feedback: "BuildCorp a complètement transformé notre site web et augmenté notre trafic de 300% !"
  },
  {
    name: "Marie Lefevre",
    feedback: "Un service client réactif et des solutions digitales sur-mesure !"
  },
  {
    name: "Thomas Martin",
    feedback: "Leur équipe est incroyablement professionnelle et toujours à l'écoute."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Ce que disent nos clients</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

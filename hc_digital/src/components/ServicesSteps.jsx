import "../styles/ServicesSteps.css"; 
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

const steps = [
  { title: "Conception", image: slider1 },
  { title: "Développement Web", image: slider2 },
  { title: "Tests & Optimisation", image: slider3 },
  { title: "Lancement & Maintenance", image: slider4 }
];

const ServicesSteps = () => {
  return (
    <div className="wrapper">
      <h2>Les étapes de création de votre site</h2>
      <div className="container">
        {steps.map((step, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${step.image})` }}>
            <div className="row">
              <div className="icon">{index + 1}</div>
              <div className="description">
                <h4>{step.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSteps;

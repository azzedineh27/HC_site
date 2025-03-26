import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsList from "../components/ProjectsList";
import ProjectsTimeline from "../components/ProjectsTimeline";
import ProjectsChiffres from "../components/ProjectsChiffres";
import Chatbot from "../components/Chatbot";
import "../styles/global.css";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Navbar />
      <ProjectsHeader />
      <ProjectsList />
      <ProjectsTimeline />
      <ProjectsChiffres/>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default ProjectsPage;

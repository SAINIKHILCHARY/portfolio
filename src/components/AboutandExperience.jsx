import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import zomato from "../assets/zomato.jpeg";
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import edunet from "../assets/edunet.png";
import celebal from "../assets/CSI GIF.gif";
import Skills from "./Skills";
import "./AboutandExperience.css";

const experiences = [
  {
    company: "Edunet Foundation",
    date: "March 2025 – Present",
    logo: edunet,
    role: "Internship",
    desc: "Virtual Internship at Edunet Foundation, where I have learned popular topics about MERN Stack Web Development."
  },
  {
    company: "Celebal Tech",
    date: "May 2025 – Present",
    logo: celebal,
    role: "Summer Internship",
    desc: "Virtual Internship at Celebal Tech, where I have learned about Microsoft SQL Server."
  }
];

const projects = [
  {
    name: "Zomato Web Application",
    desc: "Zomato is a Clone web application where users can order food online, search for restaurants, view menus, and place orders for delivery or pickup. It provides a user-friendly interface for browsing restaurants, viewing food items, and managing orders. Users can also create accounts, log in, and manage their profiles. The application is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js.",
    image: zomato
  }
];

const AboutandExperience = () => {
  const navigate = useNavigate();

  return (
    <div className="ae-container">
      {/* Top Section: About Me & Experience */}
      <div className="ae-top-section">
        <div className="ae-card">
          <div className="ae-header">
            <h1>About Me</h1>
            <Link to="/about-me" className="ae-link">
              View More <FaArrowRightLong />
            </Link>
          </div>
          <p className="ae-description">
            Highly motivated and passionate Computer Science and Engineering (AI) student, seeking a Web Developer position to apply my strong skills in MERN stack, React, and database management. Eager to contribute to innovative projects, enhance user experiences, and grow alongside a forward-thinking organization. Committed to continuous learning and delivering high-quality solutions that drive business success.
          </p>
          <button onClick={() => navigate("/about-me")} className="ae-button">
            Read More <FaAngleRight />
          </button>
        </div>
        <div className="ae-card">
          <div className="ae-header">
            <h1>Latest Experience</h1>
            <Link to="/experience" className="ae-link">
              Browse all <FaArrowRightLong />
            </Link>
          </div>
          {experiences.map((exp, index) => (
            <div className="ae-exp-item" key={index}>
              <img src={exp.logo} alt={exp.company} className="ae-exp-logo" />
              <div className="ae-exp-info">
                <div className="ae-exp-row">
                  <p className="ae-exp-company">{exp.company}</p>
                  <p className="ae-exp-date">{exp.date}</p>
                </div>
                <p className="ae-exp-role">{exp.role}</p>
                <p className="ae-exp-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Me On Section */}
      <div className="ae-card ae-follow">
        <h2 className="ae-follow-title">Follow me on</h2>
        <p className="ae-follow-desc">
          Please view my most recent work videos and images by clicking on the links below.
        </p>
        <div className="ae-social-icons">
          <a href="https://www.instagram.com/madupu_sainikhil/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/madupu-sainikhil-151928275/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Latest Projects Section */}
      <div className="ae-card ae-projects">
        <div className="ae-header">
          <h1>Latest Projects</h1>
          <Link to="/projects" className="ae-link">
            Browse all <FaArrowRightLong />
          </Link>
        </div>
        <p className="ae-description">
          Take a look at my standout projects crafted with the MERN Stack.
        </p>
        {projects.map((project, idx) => (
          <div className="ae-project-item" key={idx}>
            <img src={project.image} alt={project.name} className="ae-project-image" loading="lazy" />
            <div className="ae-project-info">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Skills />
    </div>
  );
};

export default AboutandExperience;
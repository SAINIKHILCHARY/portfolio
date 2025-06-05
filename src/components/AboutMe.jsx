import "./AboutMe.css";
import profile_pic from "../assets/profile_pic.png";
import { Link } from "react-router-dom";
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import Comapnies from "./Comapnies";
import Skills from "./Skills";
import EducationSection from "./EducationSection";

const AboutMe = () => {
  return (
    <>
      <div className="about-container">
        {/* LEFT DIV */}
        <div className="left-section">
          <div className="card">
            <div>
              <img
                src={profile_pic}
                alt="Profile"
                className="profile-img"
              />
            </div>
            <div className="section-heading">
              <h1>My story</h1>
            </div>
            <div className="section-content">
              <p>
                Highly motivated and passionate Computer Science and Engineering (AI) student,
                seeking a Web Developer position to apply my strong skills in MERN stack, React,
                and database management. Eager to contribute to innovative projects, enhance user
                experiences, and grow alongside a forward-thinking organization. Committed to
                continuous learning and delivering high-quality solutions that drive business success.
              </p>
            </div>
          </div>

          <div className="follow-card">
            <h1 className="follow-title">Follow me</h1>
            <p className="follow-text">
              Please view my most recent work videos and images by clicking on
              the links below.
            </p>
            <div className="social-links">
              <Link
                to={"https://www.instagram.com/madupu_sainikhil/"}
                target="_blank"
              >
                <img src={insta} alt="Instagram" className="social-icon" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/madupu-sainikhil-151928275/"}
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn" className="social-icon" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <EducationSection />
      </div>

      <div className="skills-companies-section">
        <Skills />
        <Comapnies />
      </div>
    </>
  );
};

export default AboutMe;

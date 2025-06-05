import header_image from "../assets/website1.png";
import profile_pic from "../assets/profile_pic.png";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image-section">
        <img
          src={header_image}
          alt=""
          className="header-bg-image"
        />
        <img
          src={profile_pic}
          alt=""
          className="header-profile-pic"
        />
      </div>
      <div className="header-content-section">
        <div className="header-info">
          <h1 className="header-name">
            Madupu Sai Nikhil
          </h1>
          <h1 className="header-role">
            I&apos;m a Full Stack Developer based in India
          </h1>
          <div className="header-skills-section">
            <div className="header-skill-group">
              <button className="header-skill-btn react">
                <FaReact />
                React JS
              </button>
              <button className="header-skill-btn angular">
                <FaAngular />
                Angular JS
              </button>
              <button className="header-skill-btn js">
                <IoLogoJavascript />
                JavaScript
              </button>
              <button className="header-skill-btn express">
                <SiExpress />
                Express JS
              </button>
              <button className="header-skill-btn mongo">
                <SiMongodb />
                MongoDB
              </button>
              <button className="header-skill-btn node">
                <FaNodeJs />
                Node JS
              </button>
              <button className="header-skill-btn github">
                <FaGithub />
                Git/Github
              </button>
            </div>
          </div>
        </div>
        <div className="header-actions">
          <a href="mailto:madupusainikhil@gmail.com">
            <button className="header-action-btn">
              <MdEmail />
            </button>
          </a>
          <Link
            className="header-resume-link"
            to={
              "https://drive.google.com/drive/u/0/folders/1wCxO5ccaUZTAoO6fhnZeUzmNfOyudxdm"
            }
            target="_blank"
          >
            <IoMdDownload />
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
import { FaReact, FaNodeJs, FaGithub, FaCss3, FaJava, FaHtml5, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiMongodb } from "react-icons/si";
import { MdDataObject } from "react-icons/md";
import { FaAngular } from "react-icons/fa6";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-description">
        Take a comprehensive look at the full range of my skills.
      </p>
      <div className="skills-grid">
        <div className="skills-column">
          <button className="skill-button react"><FaReact /> React JS</button>
          <button className="skill-button angular"><FaAngular /> Angular JS</button>
          <button className="skill-button js"><IoLogoJavascript /> JavaScript</button>
          <button className="skill-button express"><SiExpress /> Express JS</button>
          <button className="skill-button mongo"><SiMongodb /> MongoDB</button>
          <button className="skill-button node"><FaNodeJs /> Node JS</button>
        </div>
        <div className="skills-column">
          <button className="skill-button github"><FaGithub /> Git/Github</button>
          <button className="skill-button css"><FaCss3 /> CSS</button>
          <button className="skill-button java"><FaJava /> Java</button>
          <button className="skill-button html"><FaHtml5 /> HTML</button>
          <button className="skill-button dsa"><FaDatabase /> Data Structures</button>
          <button className="skill-button firebase"><IoLogoFirebase /> Firebase</button>
        </div>
      </div>
    </div>
  );
};

export default Skills;

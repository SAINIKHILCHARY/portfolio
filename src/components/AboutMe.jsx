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
      <div className="mt-20 w-full h-full flex gap-10 justify-between min-h-[700px] md:flex-col flex-col lg:flex-row">
        {/* LEFT DIV */}
        <div className="lg:w-2/5 md:w-full w-full min-h-[600px]">
          <div className="shadow-xl h-fit bg-white rounded-2xl p-10">
            <div>
              <img
                src={profile_pic}
                alt=""
                className="w-20 rounded-full border border-gray-300 p-1 bg-white left-12"
              />
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-gray-700 text-lg">My story</h1>
            </div>
            <div className="mt-5">
              <p className="text-gray-600">
                Highly motivated and passionate Computer Science and Engineering (AI) student, seeking a Web Developer position to apply my strong skills in MERN stack, React, and database management. Eager to contribute to innovative projects, enhance user experiences,
 and grow alongside a forward-thinking organization. Committed to continuous learning and delivering high-quality solutions that drive
 business success.
              </p>
            </div>
          </div>
          <div className="mt-5 w-full h-fit shadow-lg rounded-2xl bg-white p-10 pb-7">
            <h1 className="text-xl font-semibold">Follow me </h1>
            <p className="mt-3 text-gray-600">
              Please view my most recent work videos and images by clicking on
              the links below.
            </p>
            <div className="mt-4 flex gap-5">
              <Link
                to={"https://www.instagram.com/madupu_sainikhil/"}
                target="_blank"
              >
                <img src={insta} alt="" className="w-10 h-10" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/madupu-sainikhil-151928275/"}
                target="_blank"
              >
                <img src={linkedin} alt="" className="w-10 h-10" />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <EducationSection />
      </div>

      <div className="w-full mt-20 h-fit">
        {/* //!Skill Section Starts */}
        <Skills />
        {/* //!Skill Section Ends */}

        {/* Worked With Start */}
        <Comapnies />
        {/* Worked With Start */}
      </div>
    </>
  );
};

export default AboutMe;

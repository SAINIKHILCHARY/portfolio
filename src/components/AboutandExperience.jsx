import { FaAngleRight } from "react-icons/fa6";
import zomato from "../assets/zomato.jpeg";
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import edunet from "../assets/edunet.png";
// import octanet from "../assets/octanet.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
// import logoRoomee from "../assets/logo_name.png";
// import logoCodetex from "../assets/logo_codetex.png";
// import tcsion from "../assets/tcsion.webp";

import celebal from "../assets/CSI GIF.gif";
import Skills from "./Skills";

const AboutandExperience = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 w-full flex flex-col">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full h-full p-5 justify-center">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">About Me</h1>
            <Link
              to={"/about-me"}
              className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600"
            >
              View More
              <FaArrowRightLong />
            </Link>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white lg:p-16 md:p-16 p-10 pb-7 ">
            <p className="text-gray-600 lg:flex md:flex hidden  leading-[25px]  text-pretty lg:text-justify w-full md:text-justify  lg:tracking-normal md:tracking-normal tracking-tight text-justify">
              Highly motivated and passionate Computer Science and Engineering (AI) student, seeking a Web Developer position to apply my strong skills in MERN stack, React, and database management. Eager to contribute to innovative projects, enhance user experiences,
 and grow alongside a forward-thinking organization. Committed to continuous learning and delivering high-quality solutions that drive
 business success.
            </p>
            <p className="text-gray-600   leading-[30px]   text-justify lg:hidden flex md:hidden">
              Highly motivated and passionate Computer Science and Engineering (AI) student, seeking a Web Developer position to apply my strong skills in MERN stack, React, and database management. Eager to contribute to innovative projects, enhance user experiences,
 and grow alongside a forward-thinking organization. Committed to continuous learning and delivering high-quality solutions that drive
 business success.
            </p>
            <button
              onClick={() => navigate("/about-me")}
              className="mt-5 flex items-center gap-1 p-3 border rounded-xl font-semibold text-blue-500 hover:translate-y-1 duration-300 "
            >
              Read More
              <FaAngleRight />
            </button>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white lg:p-10 md:p-10 p-5 pb-7">
            <h1 className="text-xl font-semibold">Follow me on</h1>
            <p className="mt-3 text-gray-600">
              Please view my most recent work videos and images by clicking on
              the links below.
            </p>
            <div className="lg:mt-4 md:mt-6 mt-8 flex gap-5">
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

        <div className="lg:w-1/2 w-full h-full p-5 mt-10 lg:mt-0 md:mt-10 ">
          <div className="flex justify-between flex-col gap-3 lg:flex-row lg:gap-0 md:flex-row md:gap-0">
            <h1 className="lg:text-3xl text-3xl md:text-3xl font-semibold">
              Latest Experience
            </h1>
            <Link
              className="flex items-center gap-1 text-blue-400 text-lg lg:text-base md:text-base cursor-pointer hover:text-blue-600"
              to={"/experience"}
            >
              Browse all
              <FaArrowRightLong />
            </Link>
          </div>

          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-8 pb-7">
            <div className=" flex flex-col ">
              <div className="flex lg:flex-row flex-col md:flex-row gap-5 lg:gap-0 md:gap-0">
                <div className="lg:w-1/6 w-full md:w-1/6 flex justify-center">
                  <img
                    src={edunet}
                    alt=""
                    className="lg:w-20 w-34 lg:h-7 h-auto md:w-20 md:h-11 object-cover"
                  />
                </div>
                <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                  <div className="flex justify-between w-full lg:flex-row flex-col md:flex-row gap-3 lg:gap-0 md:gap-0 items-center">
                    <p className="text-xl font-bold">Edunet Foundation</p>
                    <p className="font-bold text-sm text-gray-500">
                      March 2025 - Present
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500 text-center mt-2 mb-3 lg:text-start lg:mt-0 lg:mb-0 md:text-start md:mt-0 md:mb-0">
                    Intership 
                  </p>
                  <div className="flex justify-center lg:justify-start md:justify-start">
                    <p className="font-normal text-sm text-justify text-gray-500 lg:w-5/6 md:w-5/6 w-fit  lg:text-start md:text-start">
                      Virtual Internship at Edunet Foundation, where I have Learn popular topics about MERN Stack Web Development.
                    </p>
                  </div>
                  <hr className="mt-5 mb-5" />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col md:flex-row gap-5 lg:gap-0 md:gap-0">
                <div className="lg:w-1/6 w-full md:w-1/6 flex justify-center">
                  <img
                    src={celebal}
                    alt=""
                    className="lg:w-20 w-32 lg:h-11 h-auto md:w-20 md:h-11 object-contain"
                  />
                </div>
                <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                  <div className="flex justify-between w-full lg:flex-row flex-col md:flex-row gap-3 lg:gap-0 md:gap-0 items-center">
                    <p className="text-xl font-bold">Celebal Tech</p>
                    <p className="font-bold text-sm text-gray-500">
                      May 2025 - Present
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500 text-center mt-2 mb-3 lg:text-start lg:mt-0 lg:mb-0 md:text-start md:mt-0 md:mb-0">
                    Summer Internship
                  </p>
                  <div className="flex justify-center lg:justify-start md:justify-start">
                    <p className="font-normal text-sm text-gray-500 lg:w-5/6 md:w-5/6 w-fit text-justify lg:text-start md:text-start">
                      Virtual Internship at Celebal Tech, where I have Learn popular topics about Microsoft SQL Server.
                    </p>
                  </div>
                  <hr className="mt-5 mb-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //!Project Section */}
      <div className="mt-20 w-full h-full p-5">
        <h1 className="text-3xl font-semibold">Latest Projects</h1>
        <div className="flex justify-between flex-col gap-3 lg:flex-row md:flex-row">
          <p className="mt-2 text-lg font-medium text-gray-500">
            Take a look at my standout projects crafted with the MERN Stack.
          </p>
          <Link className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600">
            Browse all
            <FaArrowRightLong />
          </Link>
        </div>
        <div className="flex justify-start lg:gap-10 gap-10 mt-5 md:flex-col lg:flex-row flex-col w-full">
          <div className="lg:w-1/2 w-full border h-full bg-white rounded-2xl p-8 flex flex-col gap-3 justify-between">
      
            <div className="flex gap-7 lg:gap-5 md:gap-5 items-center flex-col lg:flex-row md:flex-row">
              <div className="lg:w-1/6 md:w-1/6 w-1/4">
                <img src={zomato} alt="" />
              </div>
              <div className="flex flex-col gap-2 lg:w-4/5 md:w-4/5 w-full text-center lg:text-start">
                <h1 className="text-xl font-semibold">Zomato Web Application</h1>
                <p className="font-medium text-gray-600">
                  Zomato is a Clone web application where user can Order food
                  online, search for restaurants, view menus, and place orders
                  for delivery or pickup. It provides a user-friendly interface
                  for browsing restaurants, viewing food items, and managing
                  orders. Users can also create accounts, log in, and manage
                  their profiles. The application is built using the MERN stack,
                  which includes MongoDB, Express.js, React.js, and Node.js.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* Skill Section */}
      <Skills />
      {/* Skill Section */}
    </div>
  );
};

export default AboutandExperience;

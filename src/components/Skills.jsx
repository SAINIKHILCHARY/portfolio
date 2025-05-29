import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdDataObject } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAngular } from "react-icons/fa6";

const Skills = () => {
  return (
    <div>
      {/* //!Skill Section Starts */}
      <div className="mt-20 w-full h-full p-5">
        <h1 className="text-3xl font-semibold">My Skills</h1>
        <p className="mt-2 text-lg font-medium text-gray-500">
          Take a comprehensive look at the full range of my skills.
        </p>
        <div>
          <div className=" flex lg:flex-wrap gap-5 mt-3 lg:w-3/4 md:w-full w-full justify-between flex-row">
            <div className="w-1/2  flex flex-col gap-4 lg:flex-row lg:gap-3 lg:w-full lg:h-fit">
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#5ed4f3] hover:translate-y-1 duration-300 font-[500] rounded-md  ">
                <FaReact />
                React JS
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:translate-y-1 duration-300 font-[500] rounded-md hover:bg-[#d6052f] hover:text-white">
                <FaAngular />
                Angular JS
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-yellow-300 hover:translate-y-1 duration-300 font-[500] rounded-md">
                <IoLogoJavascript />
                JavaScript
              </button>
              
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <SiExpress />
                Express JS
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#4db33d] hover:translate-y-1 duration-300 font-[500] rounded-md">
                <SiMongodb />
                MongoDB
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md">
                <FaNodeJs />
                Node JS
              </button>
            
            </div>
            <div className="w-1/2 flex flex-col gap-4 lg:flex-row lg:gap-3 lg:w-full lg:h-fit">
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <FaGithub />
                Git/Github
              </button>
              {/* //!icons */}
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#264de4] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <FaCss3 />
                CSS
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#f89820] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <FaJava />
                Java
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#e34c26] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <FaHtml5 />
                HTML
              </button>
              
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <FaDatabase />
                Data structure and algorithm
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <MdDataObject />
                Object Oriented Programming
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#f5820D] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <IoLogoFirebase />
                Firebase
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //!Skill Section Ends */}
    </div>
  );
};

export default Skills;

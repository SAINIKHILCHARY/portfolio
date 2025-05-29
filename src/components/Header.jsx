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
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lg:w-full w-full h-full rounded-2xl flex flex-col shadow-xl ">
      <a href="" download={true}></a>
      <div className="w-full rounded-2xl h-full relative">
        <img
          src={header_image}
          alt=""
          className="w-full lg:h-52 h-52 object-cover rounded-2xl rounded-b-none"
        />
        <img
          src={profile_pic}
          alt=""
          className=" w-28 absolute top-36 rounded-full border border-gray-300 p-1 bg-white lg:left-12 left-32 md:left-[310px]"
        />
      </div>
      <div className="w-full rounded-2xl flex-col md:flex-col lg:flex-row rounded-t-none h-full lg:p-16 pb-6 pt-16 lg:pl-14 flex bg-white gap-4 lg:gap-0">
        <div className="lg:w-2/3 w-full p-5">
          <h1 className="lg:text-3xl text-2xl font-semibold text-center lg:text-start">
            Madupu Sai Nikhil
          </h1>
          <h1 className="mt-2 text-lg text-gray-600 text-center lg:text-start">
            I&apos;m a Full Stack Developer based in India
          </h1>
          <div className=" flex flex-wrap gap-5 mt-3 w-full justify-around lg:justify-start">
            <div className="md:w-full flex flex-col lg:flex-row md:flex-row h-fit gap-5 md:justify-between lg:justify-start">
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#5ed4f3] hover:translate-y-1 duration-300 font-[500] rounded-md ">
                <FaReact />
                React JS
              </button>
              <button className=" shadow-sm border p-2 flex items-center gap-1 hover:bg-[#d6052f] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white ">
                <FaAngular />
                Angular JS
              </button>
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-yellow-300 hover:translate-y-1 duration-300 font-[500] rounded-md">
                <IoLogoJavascript />
                JavaScript
              </button>
              
              <button className="shadow-sm border p-2 lg:flex hidden items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
                <SiExpress />
                Express JS
              </button>
            </div>
            <div className="flex flex-col gap-5  lg:flex-row h-fit md:flex-row md:justify-between md:w-full lg:justify-start lg:w-fit">
              <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white lg:hidden">
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
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaGithub />
              Git/Github
            </button>
          </div>
        </div>

        <div className="lg:w-1/3 w-full flex items-center gap-10 justify-center">
          <a href="mailto:madupusainikhil@gmail.com">
            <button className="text-3xl p-3 hover:bg-black hover:text-white border rounded-lg hover:translate-y-1 duration-300">
              <MdEmail />
            </button>
          </a>
          <div className="flex">
            <Link
              className="flex items-center p-3 gap-1 text-lg font-semibold rounded-xl border shadow-sm hover:translate-y-1 duration-300 hover:bg-black hover:text-white cursor-pointer"
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
    </div>
  );
};

export default Header;

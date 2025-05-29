import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaAngleRight, FaLinkedin } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* //!Contact section Start */}
      <div className="flex lg:flex-row md:flex-col flex-col mt-20 ">
        <div className="lg:w-1/2 md:w-full w-full h-full p-5 justify-center">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Contact Me</h1>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-10 pb-7">
            <form className="flex flex-col gap-5" netlify method="POST">
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="w-1/6 font-bold lg:flex md:flex hidden"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Name Here"
                  id="name"
                  name="name"
                  className="p-5 outline-none border rounded-2xl lg:w-5/6 md:w-5/6 w-full font-semibold text-gray-600"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="w-1/6 font-bold lg:flex md:flex hidden"
                >
                  Mobile No.
                </label>
                <input
                  type="number"
                  required
                  placeholder="Enter Ph. Number Here"
                  id="name"
                  name="mobile"
                  className="p-5 outline-none border rounded-2xl lg:w-5/6 md:w-5/6 w-full font-semibold text-gray-600"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="w-1/6 font-bold lg:flex md:flex hidden"
                >
                  Email Id
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter Email Here"
                  id="email"
                  name="email"
                  className="p-5 outline-none border rounded-2xl lg:w-5/6 md:w-5/6 w-full font-semibold text-gray-600"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="purpose"
                  className="w-1/6 font-bold lg:flex md:flex hidden"
                >
                  Message
                </label>

                <textarea
                  required
                  name="purpose"
                  id="purpose"
                  cols="30"
                  rows="5"
                  className="p-5 outline-none border rounded-2xl lg:w-5/6 md:w-5/6 w-full font-semibold text-gray-600"
                  placeholder="Enter Message Here"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="mt-5 flex items-center gap-1 p-3 border rounded-xl font-semibold text-blue-500 hover:translate-y-1 duration-300 "
                  type="submit"
                >
                  Submit
                  <FaAngleRight />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full w-full h-full p-5 md:mt-10 lg:mt-0 mt-10">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Contact Details</h1>
          </div>
          {/* <div className="mt-5 w-full h-72 shadow-none rounded-2xl bg-white p-0 pb-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21409.55296664267!2d77.50436460396814!3d28.474503399700538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7b8e76ec31%3A0x25d218e7796434f4!2sAlpha%201%20Market!5e0!3m2!1sen!2sin!4v1706821764215!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full  rounded-2xl shadow-xl h-72"
            ></iframe>
          </div> */}
          <div className="mt-2 w-full h-72 shadow-lg rounded-2xl bg-white p-8 pb-7 flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-5  font-semibold text-gray-600 h ">
              <MdEmail size={30} />
              <a
                href="mailto:madupusainikhil@gmail.com"
                className="hover:text-red-500"
              >
                <h1 className="text-wrap text-start lg:hidden md:hidden flex">
                  madupusainikhil <br /> @gmail.com
                </h1>
                <h1 className="text-wrap text-start lg:flex md:flex hidden">
                  madupusainikhil@gmail.com
                </h1>
              </a>
            </div>
            <div className="flex items-center gap-5  font-semibold text-gray-600 hover:text-green-600 ">
              <IoCall size={30} />
              <a href="tel:9346765689">
                <h1 className=" text-start lg:hidden md:hidden flex">
                  +91 9346765689 <br /> +91 9948093173
                </h1>
                <h1 className=" text-start lg:flex md:flex hidden">
                  +91 9346765689 / +91 9948093173
                </h1>
              </a>
            </div>
            <div className="flex items-center gap-5  font-semibold text-gray-600 hover:text-blue-600 cursor-pointer">
              <FaLinkedin size={30} />
              <Link
                to={"https://www.linkedin.com/in/madupu-sainikhil-151928275/"}
                target="_blank"
              >
                Madupu Sai Nikhil
              </Link>
            </div>

            <div className="flex items-center gap-5 font-semibold text-gray-600 hover:text-black">
              <FaAddressBook size={30} />
              <h1>Karimnagar, Telangana, India</h1>
            </div>
          </div>
        </div>
      </div>
      {/* //!Contact section Start */}
    </div>
  );
};

export default Footer;

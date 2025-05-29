import { Link } from "react-router-dom";
import { certifications } from "../utils/internshipsComp";

const Certifications = () => {
  return (
    <div className="w-full h-full p-5 mt-20">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Latest Certifications</h1>
      </div>

      <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-8 pb-7">
        <div className=" flex flex-col ">
          {certifications.map((certificate, index) => (
            <div key={index} className="flex lg:flex-row md:flex-row flex-col ">
              <div className="lg:w-1/6 md:w-1/6 w-full flex justify-center">
                <img
                  src={certificate.icon}
                  alt={certificate.company}
                  className="w-20 h-20 rounded-xl object-contain"
                />
              </div>
              <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                <div className="flex justify-between w-full flex-row items-center">
                  <Link
                    to="https://trainings.internshala.com/s/v/2105648/342ced0b"
                    className="w-full"
                  >
                    <p className="text-xl font-bold text-center w-full lg:w-fit md:w-fit mt-3 mb-3 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0 text-gray-700 hover:text-blue-500">
                      {certificate.certificateName}
                    </p>
                  </Link>
                </div>
                <p className="font-semibold text-gray-500 text-center w-full lg:w-fit md:w-fit mt-1 mb-1 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0">
                  {certificate.company}
                </p>
                <p className="font-normal text-sm text-gray-500 lg:w-3/5 md:w-3/5 text-center w-full mt-1 mb-1 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0 lg:text-start md:text-start">
                  {certificate.desc}
                </p>

                <hr className="mt-5 mb-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

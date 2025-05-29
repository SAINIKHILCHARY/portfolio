import { internshipOpp } from "../utils/internshipsComp";

const Internships = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="flex justify-between">
        <h1 className="text-3xl w-full lg:text-start md:text-start text-center font-semibold">
          Latest Experience
        </h1>
      </div>

      <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-8 pb-7">
        <div className=" flex flex-col ">
          {internshipOpp.map((internship, index) => (
            <div key={index} className="flex lg:flex-row md:flex-row flex-col ">
              <div className="lg:w-1/6 md:w-1/6 w-full flex justify-center">
                <img
                  src={internship.icon}
                  alt={internship.company}
                  className="w-20 h-11 object-contain"
                />
              </div>
              <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                <div className="flex justify-between w-full flex-row items-center">
                  <p className="text-xl font-bold text-center w-full lg:w-fit md:w-fit mt-3 mb-3 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0">
                    {internship.company}
                  </p>
                </div>

                <p className="font-semibold text-gray-500 text-center w-full lg:w-fit md:w-fit mt-1 mb-1 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0">
                  {internship.title}
                </p>
                <p className="font-normal text-sm text-gray-500 lg:w-3/5 md:w-3/5 text-center w-full mt-1 mb-1 lg:mb-0 lg:mt-0 md:mb-0 md:mt-0 lg:text-start md:text-start">
                  {internship.desc}
                </p>

                <hr className="lg:mt-5 md:mt-5 mt-8 lg:mb-5 md:mb-5 mb-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;

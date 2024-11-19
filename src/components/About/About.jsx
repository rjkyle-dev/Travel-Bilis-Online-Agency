/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Masamayor from "../../assets/team/2.jpg";
import Juniville from "../../assets/team/1.jpg";
import duh from "../../assets/team/3.jpg";


const About = () => {
  return (
    <>
      <section
        id="features"
        className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-screen h-auto relative mb-56">
        {/* Intro Section */}
        <div className="flex mt-28">
          <div className="container pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <div className="text-center">
              <h1 className="text-blue-600 font-bold tracking-[0.10em] leading-tight text-3xl sm:text-6xl md:text-7xl lg:text-6xl lg:absolute lg:top-[10px] lg:left-[4em]">
                About Our Company
              </h1>
            </div>
            <div className="container sm:w-[500px] md:w-3/4 lg:w-[70%] mx-auto mt-4 lg:mt-3 lg:ml-[10px]">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-[0.02em] text-justify">
                Plan your next vacation with us and explore different tourist
                destinations. We offer private and custom tours every day.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-24 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 lg:ml-52 w-full sm:ml-26">
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-sky-400 h-[270px] lg:h-[250px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg">
                  CEO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  JUNIEVILLE Q. TORINO
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  src={Juniville}
                  alt="Concha"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-blue-400 h-[270px] lg:h-[250px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg">
                  COO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  APPLE GRACE G. FORMENTERA
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-3">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8 ">
                <img
                  src={duh}
                  alt="Nigas"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>
            
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-sky-400 h-[270px] lg:h-[250px]  rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg">
                  CMO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  LOUAVEL MASAMAYOR
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  src={Masamayor}
                  alt="Selle"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* <div className="relative w-full h-96 flex flex-col items-center">
              <div className="absolute top-32 inset-8 bg-indigo-300 h-[260px] lg:h-[250px] lg:h-[250px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg px-5">
                <h1 className="text-2xl font-bold text-white mt-16 tracking-widest bg-sky-700 py-2 ml-10 w-[120px] rounded-lg">
                  CTO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  RJ Kyle G. Labrador
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  Bachelor of Science Information Systems
                </h3>
              </div>
              <div className="relative z-10 flex justify-center items-center mt-8">
                <img
                  // src={Kyle}
                  alt="Kyle"
                  className="w-36 h-36 object-cover rounded-full border-2 border-blue-600 hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default About;

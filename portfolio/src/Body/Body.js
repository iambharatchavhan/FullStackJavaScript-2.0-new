import React from "react";
import heroProfile from "./profile.png"
import {Link} from "react-router-dom"

const Body = () => {
  return (
    <div className=" w-[100vw] flex flex-col justify-center items-center  text-center lg:flex-row lg:justify-around lg:gap-0">
     <div className="w-full h-[50%]  p-5 md:flex justify-center md:items-center lg:h-[100%]">
      <img src={heroProfile} alt=""  className="md:w-1/2 lg:w-[60%]" />
     </div>
     <div className="w-full h-[50%] p-3 lg:h-[100%] lg:">
      <div className="flex flex-col justify-center items-center lg:items-start lg:text-left lg:w-[80%]">
        <div>
        <h1 className="text-xl font-semibold  lg:text-3xl">Hello , I am Bharat</h1>
        <p className="text-lg text-gray-800 mb-4 lg:text-xl">Front-end developer</p>
        </div>
        <div className="w-full ">
          <p className=" text-sm text-justify lg:text-lg">As a front-end developer, I like to create high-quality web applications that are scalable, user-friendly and performance-optimized. My expertise lies in creating custom solutions that meet the unique needs of businesses in a variety of industries. I excel at designing interactive user interfaces and developing seamless user experiences that drive engagement and conversion.</p>
        </div>
      

      </div>
      <div className=" w-full flex justify-center items-center my-4 p-1 md:gap-5 lg:items-start lg:w-1/2 lg:gap-4">
      <Link to="resume" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RESUME</Link>
      <Link to="projects"  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">PROJECTS</Link>
      <Link to="contact" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">CONTACT</Link>
              
      </div>
     </div>
    </div>

  )
};

export default Body;

import React from "react";
import edTech from "./2.png"
import toss from "./1.png"
import vsapp from "./3.png"
import { Link } from "react-router-dom";

const Project = () => {
   console.log(edTech);
    return(
       <div className="flex flex-col justify-center items-center w-full gap-5 my-10">
         <div className="lg:flex lg:justify-center  lg:ml-[10%]">
            <div className="w-full p-4 "><img src={edTech} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-4">
                <h1 className="text-xl">ED TECH FULLSTACK PROJECT(Coming soon) </h1>
                <p className="text-justify mb-4 lg:w-[70%]">
                  
"Revolutionizing Education with a Full-Stack EdTech Project. Powered by React and styled with Tailwind CSS for a modern and intuitive user experience."
Secure user accounts and profiles for students, teachers, and administrators.
Engaging multimedia lessons and quizzes to enhance the learning experience.
Access to a vast repository of educational materials, including textbooks, videos, and articles.

                </p>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 ">Source code</button>

                </div>
         </div>
         <div className="flex flex-col-reverse  lg:flex  lg:flex-row lg:justify-center lg:ml-[10%] lg:mr-[10%]">
            <div className="p-4">
                <h1 className="text-xl">FOOD ORDERING APP </h1>
                <p className="text-justify mb-4 lg:w-[70%]">
                Experience hassle-free food ordering, developed with the power of React JS and styled elegantly using Vanilla CSS.
Quickly find your favorite meals with our dynamic search feature, enhancing efficiency in your search for the perfect meal.
Engage in enriching culinary discussions with our platform's nested comments, promoting interactive conversations with fellow food enthusiasts.
Immerse yourself in a seamless food ordering experience, complete with optimized search functionalities and engaging features, making every meal an unforgettable delight.

                </p>
  <Link to="https://github.com/iambharatchavhan/React-Js/tree/main/tosstaste">   <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 ">Source code</button></Link> 

                </div>
            <div className=" p-4 lg:w-[130%] lg:-ml-[10%] "><img src={toss} alt="" className="lg:w-full lg:h-full lg:object-fill" /></div>

         </div>
         <div className="lg:flex lg:justify-center  lg:ml-[10%]">
            <div className="p-4 lg:w-full  "><img src={vsapp} alt="" className="w-full h-full object-cover" /></div>
            <div className="p-4">
                <h1 className="text-xl lg:ml-10">VIDEO STREAMING PROJECT</h1>
                <p className="text-justify mb-4 lg:w-[70%] lg:ml-10">
                Seamless video streaming powered by React JS and styled with Tailwind CSS.
Discover a world of content through infinite scrolling for uninterrupted exploration.
Effortlessly find favorites with dynamic search and smart debouncing for
efficiency.
Engage in rich discussions with nested comments for interactive conversations.
Immerse yourself in a seamless streaming experience with optimized search and
engagement.

                </p>
 <Link to="https://github.com/iambharatchavhan/video-streaming-app"><button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 lg:ml-10 ">Source code</button>
</Link>     
                </div>
         </div>
         
       </div>
    )
}
export default Project;
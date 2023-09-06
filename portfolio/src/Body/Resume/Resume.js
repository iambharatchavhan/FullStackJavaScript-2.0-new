import React from "react";
import heroProfile from "./profile.png";
import {Link} from "react-router-dom"
import {FaGithub ,FaLinkedin,FaEnvelope,FaPhoneAlt,FaHome,FaBaby,FaMale} from "react-icons/fa"

const Resume = () => {
  return (
    <div className="p-2 min-h-screen">
      <div className="bg-white shadow-xl rounded grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
        {/* Left section */}
        <div className="row-span-1 col-span-1 space-y-4 pt-20 bg-gradient-to-b from-green-100 to-blue-100 dark:from-gray-200 dark:to-gray-400">
          {/* Image and name */}
          <div className="flex flex-col justify-start items-center pb-8">
            <div>
              <img
                className="inline-block w-52 h-52 xl:h-72 xl:w-72 rounded-full ring-2 ring-white object-cover mb-4"
                src={heroProfile}
                alt="me"
              />
            </div>
            <div>
              <h1 className="text-gray-800 text-3xl font-semibold mb-2">
                Bharat Chavhan
              </h1>
            </div>
            <div>
              <h2 className="text-gray-700">Front-end developer</h2>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold">Contact</h1>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
               <FaEnvelope/>
              </div>
              <div>
                <h4 className="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  bharat.chavhan.1026@gmail.com
                </h4>
              </div>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
               <FaPhoneAlt/>
              </div>
              <div>
                <h4 className="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  +91 90 2818 1744
                </h4>
              </div>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
               <FaHome/>
              </div>
              <div>
                <h4 className="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  Mahagaon, Washim, Maharashtra-444506
                </h4>
              </div>
            </div>
          </div>
          {/* Personal */}
          <div className="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold">Personal</h1>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
               <FaBaby/>
              </div>
              <div>
                <h4 className="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  Born on 26th Oct 1995
                </h4>
              </div>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
               <FaMale/>
              </div>
              <div>
                <h4 className="sm:text-base 2xl:text-xl text-gray-700 lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  Single
                </h4>
              </div>
            </div>
          </div>
          {/* Web */}
          <div className="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold">Web</h1>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
                <FaLinkedin/>
              </div>
              <div>
                <Link to="https://www.linkedin.com/in/bharat-chavhan-563a881ba">LinkedIn</Link>
              </div>
            </div>
            <div className="flex justify-around items-center space-x-4">
              <div>
               <FaGithub/>
              </div>
              <div>
                <Link to="https://github.com/iambharatchavhan">Github</Link>
              </div>
            </div>
          </div>
          {/* Languages */}
          <div className="flex flex-col justify-start items-start pl-8 md:pl-2 xl:pl-12 py-4">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Languages</h1>
            </div>
            <div className="flex mb-3">
              <div>
                <h2 className="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  English
                </h2>
              </div>
              
            </div>
            <div className="flex mb-3">
              <div>
                <h2 className="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  Hindi
                </h2>
              </div>
              
            </div>
            <div className="flex mb-3">
              <div>
                <h2 className="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">
                  Marathi :
                </h2>
              </div>
              <div className="text-gray-700 lg:text-lg ml-2">Native</div>
            </div>
          </div>
        </div>
        {/* Right section */}
        <div className="row-span-1 lg:col-span-2 bg-white dark:bg-gray-700 dark:text-gray-300 flex flex-col p-4 sm:p-12 border-r">
          {/* Profile */}
          <div className="space-y-4">
            <h1 className="text-3xl border-l-8 mb-8 border-green-200">
              Profile
            </h1>
            <p className="sm:text-base 2xl:text-xl text-gray-500 dark:text-gray-300 leading-loose sm:tracking-relaxed">
            As a front-end developer🧑‍💻, I like to create high-quality web applications that are scalable, user-friendly and performance-optimized. My expertise lies in creating custom solutions that meet the unique needs of businesses in a variety of industries. I excel at designing interactive user interfaces and developing seamless user experiences that drive engagement and conversion⚡.
            </p>
            <hr className="border-gray-200" />
          </div>
          {/* Experience */}
          <div className="space-y-4 mt-8">
            <h1 className="text-3xl border-l-8 border-green-200">Experience</h1>
            <div className="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div>
                <h2
                  style={{ maxWidth: 50 }}
                  className="text-sm sm:text-base md:text-xl"
                >
                  2021-2023
                </h2>
              </div>
              <div className="border border-gray-400" />
              <div>
                <h2 className="text-gray-800 dark:text-gray-300">
                  Process Associate
                </h2>
                <h2 className="text-gray-600 dark:text-gray-400">
                Tata consultancy services
                </h2>
              </div>
            </div>
            {/* <div className="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div>
                <h2
                  style={{ maxWidth: 50 }}
                  className="text-sm sm:text-base md:text-xl"
                >
                  2018-2020
                </h2>
              </div>
              <div className="border border-gray-400" />
              <div>
                <h2 className="text-gray-800 dark:text-gray-300">Job</h2>
                <h2 className="text-gray-600 dark:text-gray-400">
                  Company name
                </h2>
              </div>
            </div> */}
            <hr className="border-gray-200" />
          </div>
          {/* Formation */}
          <div className="space-y-4 mt-8">
            <h1 className="text-3xl border-l-8 border-green-200">Education</h1>
            <div className="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div className="flex space-x-4">
                <h2
                  style={{ maxWidth: 50 }}
                  className="text-sm sm:text-base md:text-xl dark:text-gray-300"
                >
                  2017-2020
                </h2>
              </div>
              <div className="border border-gray-400" />
              <div>
                <h2 className="text-gray-800 dark:text-gray-300">
                  BSc(Computer Science)
                </h2>
                <h2 className="text-gray-600 dark:text-gray-400">Dr. Babasaheb Ambedkar Marathwada University (65%)</h2>
              </div>
            </div>
            <div className="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div className="flex space-x-4">
                <h2
                  style={{ maxWidth: 50 }}
                  className="text-sm sm:text-base md:text-xl dark:text-gray-300"
                >
                  2015-2017
                </h2>
              </div>
              <div className="border border-gray-400" />
              <div>
                <h2 className="text-gray-800 dark:text-gray-300">
                  HSC
                </h2>
                <h2 className="text-gray-600 dark:text-gray-400">Maharashtra State Board (69.23%)</h2>
              </div>
            </div>
            <hr className="border-gray-200" />
          </div>
          {/* Projects */}
          <div className="space-y-4 mt-8">
            <h1 className="text-3xl border-l-8 border-green-200">Skills</h1>
            <div className="relative pt-8">
              <div className="flex justify-start space-x-12 mb-4 items-center">
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                    Javascript
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "70%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                   React JS
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "80%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start space-x-12 mb-4 items-center">
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                    Tailwind CSS
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "90%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                    HTML
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "80%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start space-x-12 mb-4 items-center">
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                CSS
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "65%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                    React Formik
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "85%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-start space-x-12 mb-4 items-center">
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                    React Query
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "60%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">
                  Responsive Web Design
                  </h2>
                  <div className="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div
                      style={{ width: "50%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;

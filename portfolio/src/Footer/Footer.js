import React from "react";
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <footer className="border-t border-solid border-gray-300 flex flex-col justify-center items-center gap-4 bg-gray-100 md:flex-row md:p-4 md:gap-8 md:flex-wrap lg:justify-between lg:p-10 lg:mt-3 ">
      <div className="text-center">
        <h3 className="lg:font-semibold">Bharat Chavhan</h3>
        <h4>Front-end Developer</h4>
      </div>
      <div className="text-center ">
        <h3 className="lg:font-semibold">Email</h3>
        <h4>bharat.chavhan.1026@gmail.com</h4>
      </div>
      <div className="text-center ">
        <h3 className="lg:font-semibold">Follow me</h3>
        <h4>
          <Link to="https://www.linkedin.com/in/bharat-chavhan-563a881ba">Linkedin</Link> | <Link to="https://github.com/iambharatchavhan">Github</Link>
        </h4>
      </div>
      <div className="text-center">
        <p>❤️© 2023 By Bharat Chavhan.😊</p>
        <p>Powered and secured by ReactJS</p>
      </div>
    </footer>
  );
};

export default Footer;

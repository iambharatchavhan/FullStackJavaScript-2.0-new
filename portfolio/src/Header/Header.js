import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return(
        <header className="border-b border-solid flex flex-col justify-center items-center shadow-[rgba(0,_0,_0,_0.09)_0px_25px_50px_-12px] md:flex 
         lg:flex-row lg:justify-between lg:p-4">
        <div className="site-identity p-4 md:p-2">
          <NavLink to="/" className="text-lg font-semibold text-[#7458DA] md:text-2xl ">Bharat Chavhan <span className="text-sm text-stone-700">(Developer)</span></NavLink>
        </div>  
        <nav className="p-4">
          <ul className="flex gap-4 md:gap-[4rem] lg:gap-[6rem]">
            <li><NavLink to="/" className="hover:text-[#7458DA] md:text-lg md:font-semibold">Home</NavLink></li> 
            <li><NavLink to="projects" className="hover:text-[#7458DA] md:text-lg md:font-semibold">Projects</NavLink></li> 
            <li><NavLink to="resume" className="hover:text-[#7458DA] md:text-lg md:font-semibold">Resume</NavLink></li> 
            <li><NavLink to="contact" className="hover:text-[#7458DA] md:text-lg md:font-semibold">Contact</NavLink></li> 
          </ul>
        </nav>
      </header>
    );
}

export default Header;
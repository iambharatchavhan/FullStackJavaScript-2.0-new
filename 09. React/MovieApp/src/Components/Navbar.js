import React from 'react'

import img from '../Assets/Movie-Logo.png';
import SearchBox from './SearchBox';
import './FontFamily.css';


const Navbar = () => {
  return (
    <div className="navbar  flex md:gap-10 gap-5 justify-center bg-zinc-950 sticky top-0 z-20">

      <div className="h-10 ">
        <img src={img} alt='Logo img'  className='h-[100%] rounded-md animate-shake shadow-sm shadow-white'/>
      </div>

      <SearchBox />
    </div>
  )
}

export default Navbar
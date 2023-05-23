import React, { useContext } from 'react'

import './FontFamily.css'; 
import { context } from '../App';


const SearchBox = () => {
  const {input , setInput,setOnhangeValue} = useContext(context);
  
  // console.log(input);
  
  return (
    <>
      <div >
        <form onSubmit={(e)=> {
         setOnhangeValue(input);
         setInput('');
          e.preventDefault();
        }} 
        className="input-group min-w-fit max-w-[40vw] rounded-lg border-2 border-slate-900 focus-within:border-green-400 "
        >
          <input 
            type="text"   
            placeholder="Search…" 
            value={input}
            onChange={(e)=> {
              setInput(e.target.value)
            }}
            className="outline-none p-2 bg-slate-900 text-white w-[40vw] quattrocento placeholder:text-green-200" 
          />
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>
      </div>
    </>
)}


export default SearchBox
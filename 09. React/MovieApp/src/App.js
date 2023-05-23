import { createContext,useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";



export const context = createContext(null);

function App() {
  const [input , setInput] = useState();
  const [onchangeValue,setOnhangeValue] = useState('avengers');

  
  return (
    <context.Provider value={{input,onchangeValue , setInput,setOnhangeValue}}>
      <Navbar />
      <Home />
    </context.Provider>
  );
}

export default App;

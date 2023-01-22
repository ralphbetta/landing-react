import React from "react";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <div className="bg-[#f2f2f2] p-6">   
      <div className="p-4 bg-white max-w-sm rounded-md shadow-md flex">
      <div>
        <img src="./icon.png" alt="just icon"></img>
      </div>
      <div></div>
      </div>
      </div>

    </div>
  );
}

export default App;

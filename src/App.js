import React from "react";
import { Analytics } from "./components/Analytics";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>

    <div className="bg-[#f2f2f2] p-6">   
      <div className="p-4 bg-white max-w-sm rounded-md shadow-md flex">
      <div>
        <img src="" alt="just icon"></img>
      </div>
      <div></div>
      </div>
      </div>

    </div>
  );
}

export default App;

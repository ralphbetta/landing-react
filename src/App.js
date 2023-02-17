import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Including App bar for global purpose */}
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;

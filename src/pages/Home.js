import React from 'react'
//import Navbar form "./pages/components"
// import { Analytics } from "./pages/components/Analytics";
// import Cards from "./pages/components/Cards";
// import Footer from "./pages/components/Footer";
// import { Hero } from "./pages/components/Hero";
import Navbar from '../components/Navbar';
import Hero from "./../components/Hero";
import Analytics from "./../components/Analytics";
import Newsletter from "./../components/Newsletter";
import Cards from "./../components/Cards";
import Footer from "./../components/Footer";
// import { Newsletter } from "./pages/components/Newsletter";


function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    <Cards />
    <Footer />
    </div>
  )
}

export default Home
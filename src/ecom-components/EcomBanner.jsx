import React from 'react'

 import banner from "../ecom-assets/banner-bg.jpg"

// import ad from '../public/ecom-assets/banner-bg.jpg'

const EcomBanner = () => {

  return (
    // bg-no-repeat bg-cover bg-center bg-fixed style={{backgroundImage: `url(${banner})`}}
    <div className=' w-full h-[20rem] bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${banner})`}}>
      <div className='w-[65%] md:w-[40%] ml-10'>
      <div className=' font-semibold text-4xl pt-5 md:pt-16 font-roboto mb-1'>
        Best Collect For Home Decoration
      </div>
      <p>
      New JavaScript versions enforce the security for coding practices by employing the use strict directive. To state the functions.   
      </p>
      <button className='bg-primary hover:bg-primary_shade transition text-white p-3 rounded-md mt-3'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default EcomBanner
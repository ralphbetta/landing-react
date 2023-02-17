import React from 'react'
import Typed from 'react-typed'

 const Hero = () => {
  return (
    <div className=' text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className=' text-[#00df9a] font-bold p-2'> GROW WITH DATA ANALYTICS</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data. </h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible finance for
        </p>
        <Typed 
        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a] '
         strings={['BTB', 'BTC', 'SASS']}
         typeSpeed={200}
         backSpeed={140}
         loop
        />

      </div>
      <p className=' px-2 md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <button className=' bg-[#00df9a] py-3 mx-auto font-medium w-[200px] rounded-md my-6 '>Get Started</button>
    </div>
   </div>
  )
}


export default Hero
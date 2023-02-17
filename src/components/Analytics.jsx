import React from 'react'
 import Icon from '../assets/icon.png'

 const Analytics = () => {
  return (
    <div className=' w-full bg-white py-1 px-4 mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Icon} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className=' text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className=' text-[#00df9a] py-3 mx-auto font-medium w-[200px] rounded-md my-6 bg-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Analytics
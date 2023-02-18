import React from 'react'
import {
    AiOutlineMenu,
    
} from 'react-icons/ai'

const EcomMenu = () => {
  return (
    <div className=' w-full flex justify-between items-center bg-[#451922] text-white px-3'>
        {/* Left axis */}
        <div className='flex items-center'>
            <a href='#' className=' flex items-center py-4 bg-primary px-4'>
                <AiOutlineMenu className='mr-3'/>
                <span>All Categories</span>
            </a>
            <ul className='flex space-x-3 ml-6'>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">Shop</a> </li>
                <li> <a href="#">About Us</a></li>
                <li> <a href="#">Contact Us</a></li>
            </ul>
        </div>

        {/* right axis */}
        <div>
            <a href="">Login/Register</a>
        </div>
    </div>
  )
}

export default EcomMenu
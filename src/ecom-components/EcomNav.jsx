import React from 'react'
import logo from './../ecom-assets/logo.svg'
import {
    AiOutlineSearch,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineShopping,
    
} from 'react-icons/ai'
const EcomNav = () => {
  return (
    <div className=' w-full mx-auto py-4 flex justify-between items-center px-5'>

        {/* Logo */}

        <a href=""><img src={logo} alt="" /></a>

         {/* Search Section */}
         {/* Relative container with absolut child save as stack */}
         <div className='flex relative w-full max-w-xl mx-auto '>
         <AiOutlineSearch className=' absolute  top-3.5 left-4 text-gray-400'/>
         <input className=' border border-primary rounded-l-lg pl-10 py-2 w-full focus:outline-none  ' type="text" placeholder='Enter your search' />
         <button className=' bg-primary text-white px-5 rounded-r-lg'>Search</button>

         </div>
         {/* Icons section */}
        <div className='flex space-x-4 items-center'>  
           <Todo title={"Wish List"} icon={<AiOutlineHeart className='mx-auto mt-1 text-2xl'/>} count={5} />
           <Todo title={"Cart"} icon={<AiOutlineShopping className='mx-auto mt-1 text-2xl'/>} count={5} />
           <Todo title={"Account"} icon={<AiOutlineUser className='mx-auto mt-1 text-2xl'/>} count={0} />
     
        </div>


    </div>
  )
}

export default EcomNav




function Todo({title, icon, count }) {
    return (
    <a className='relative text-center transition text-gray-500 hover:text-primary' href="">
         {icon}
        <div className='text-xs leading-3'>{title}</div>
        <span className={count <= 0 ?" hidden":'bg-primary w-4 h-4 text-xs justify-center items-center text-white rounded-full absolute top-0  right-1'}>{count}</span>
    </a>
    )
  }
  
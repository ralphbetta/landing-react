import React, {useState} from 'react'
import {
    AiOutlineMenu,
    AiOutlineCoffee,
    AiOutlineTeam,
    AiOutlineApartment,
    AiOutlineGift,
    AiOutlineWallet,
    AiOutlineMobile,
    AiOutlineTags

    
} from 'react-icons/ai'

const EcomMenu = () => {

    const [drop, setDrop] = useState(false);

    const toggle=()=>{
        setDrop(!drop);
    }

  return (
    <div className=' w-full flex justify-between items-center bg-gray-800 text-white px-3'>
        {/* Left axis */}
        <div className='flex items-center'>
            <div className=' flex items-center py-4 bg-primary px-4 relative cursor-pointer'>
                <AiOutlineMenu className='mr-3'/>
                <span onClick={toggle}>All Categories</span>
                <ul className={drop?'absolute bg-white top-full right-0 ease-in-out duration-500 divide-y-2 divide-dashed divide-gray-600':'hidden'}>
                    <li> <a href="#" className='flex items-center gap-4 text-gray-700 bg-white py-3 px-5'><AiOutlineCoffee className='text-primary'/>Snacks</a></li>
                    <li> <a href="#" className='flex items-center gap-4 text-gray-700 bg-white py-3 px-5'><AiOutlineTeam className='text-primary'/>Teams</a></li>
                    <li> <a href="#" className='flex items-center gap-4 text-gray-700 bg-white py-3 px-5'><AiOutlineApartment className='text-primary'/>Appartment</a></li>
                    <li> <a href="#" className='flex items-center gap-4 text-gray-700 bg-white py-3 px-5'><AiOutlineWallet className='text-primary'/>Wallet</a> </li>
                    <li> <a href="#" className='flex items-center gap-4 text-gray-700 bg-white py-3 px-5'><AiOutlineMobile className='text-primary'/>Mobile</a></li>
                    <li> <a href="#" className='flex items-center gap-4 text-gray-700 bg-white py-3 px-5'><AiOutlineTags className='text-primary'/>Tags</a></li>
                </ul>
            </div>
            <ul className='hidden md:flex space-x-3 ml-6'>
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
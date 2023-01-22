import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {

    // initialize usestate
    const [nav, setNav] = useState(false);

    //function to toggle state
    const handleNav = ()=>{
        setNav(!nav);
    };

  return (
    <div className='h-24 max-w=[1240px] text-white mx-auto px-4 flex justify-between items-center'>
        <h1 className='font-bold'>React.</h1>
        {/* mobile first: hidden else flex */}
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        {/* mobile first: block else hidden */}
        <div className=' block md:hidden ease-in-out duration-500' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
        </div>

        <div className= {nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500 ': 'fixed md:hidden left-[-100%]'} >
        <h1 className='mt-9 mx-4 font-bold text-[#00df9a]'>React.</h1>
            <ul className=''>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar



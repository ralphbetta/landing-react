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
    <div className='text-white flex-'>
        <h1>React.</h1>
        <div onClick={handleNav}>
            {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
        </div>
    </div>
  )
}

export default Navbar



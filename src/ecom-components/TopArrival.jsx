import React from 'react'

import product12 from '../ecom-assets/products/product12.jpg'
import product11 from '../ecom-assets/products/product11.jpg'
import product10 from '../ecom-assets/products/product10.jpg'
import product9 from '../ecom-assets/products/product9.jpg'
import product8 from '../ecom-assets/products/product8.jpg'
import product7 from '../ecom-assets/products/product7.jpg'
import product6 from '../ecom-assets/products/product6.jpg'
import product5 from '../ecom-assets/products/product1.jpg'

import {
    AiFillStar,
    AiOutlineSearch,
    AiOutlineHeart,
} from 'react-icons/ai'

const TopArrival = () => {
  return (
    <div className='p-5'>
        <h3 className=" uppercase font-semibold mb-3">Top New Arrival</h3>
        <div className="md:grid grid-cols-4 gap-8">
            {/* Each Card */}

            <NewArivalCards image={product12}/>
            <NewArivalCards  image={product11}/>
            <NewArivalCards  image={product10}/>
            <NewArivalCards  image={product9}/>
            
        </div>
    </div>
  )
}

export default TopArrival




function NewArivalCards({image}){
    return(
        <div className=" shadow-md">
        <div className="relative mb-2">
            <img src={image} alt="" />
             {/* mask */}
            <div className='bg-black bg-opacity-10 gap-2 transition absolute inset-0 group hover:flex hover:bg-opacity-40  items-center justify-center'>
                <a href=""><AiOutlineSearch className='text-white bg-primary hidden group-hover:block w-5 h-5 rounded-full p-1'/></a>
                <a href=''> <AiOutlineHeart className='text-white bg-primary hidden group-hover:block w-5 h-5 rounded-full p-1'/></a>                   </div>
        </div>
        <h3 className=" uppercase font-semibold ml-2">Guyer Chair</h3>
        <div className="flex items-baseline ml-2">
            <h4 className="font-semibold text-primary">$45.00</h4>
            <p className='ml-2 line-through text-gray-400 text-xs font-semibold'>75.00</p>
        </div>
        <div className="flex items-center mt-1 ml-2">
           <AiFillStar className=' text-yellow-400'/>
           <AiFillStar className=' text-yellow-400'/>
           <AiFillStar className=' text-yellow-400'/>
           <AiFillStar className=' text-yellow-400'/>
           <AiFillStar className=' text-yellow-400'/>
            <p className='ml-2 text-gray-400 text-[10px] font-semibold'>(214)</p>
        </div>
        <button className='bg-primary border-2 border-primary hover:bg-white hover:text-primary w-full rounded-sm py-1 mt-2 text-white'>Add to Cart</button>
    </div>
    )
}
import React from 'react'
import cat1 from '../ecom-assets/category/category-1.jpg'
import cat2 from '../ecom-assets/category/category-2.jpg'
import cat3 from '../ecom-assets/category/category-3.jpg'
import cat4 from '../ecom-assets/category/category-4.jpg'
import cat5 from '../ecom-assets/category/category-5.jpg'
import cat6 from '../ecom-assets/category/category-6.jpg'

const EcomShopCat = () => {
  return (
    <div className='px-5 py-5'>
        <h2 className=" text-gray-900 mb-2 uppercase text-xl font-medium">Shop By Category</h2>
        <div className="grid md:grid-cols-3 gap-4">
            {/* categories card */}
            <div className="relative rounded-m group">
                <img src={cat1} alt=""  className='w-full'/>
                <a href="#" className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition">Bedroom</a>
            </div>
            {/* categories card */}
                <div className="relative rounded-m group">
                <img src={cat2} alt=""  className='w-full'/>
                <a href="#" className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition">Sofa</a>
            </div>
            {/* categories card */}
            <div className="relative rounded-m group">
                <img src={cat3} alt=""  className='w-full'/>
                <a href="#" className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition">Office</a>
            </div>
            {/* categories card */}
            <div className="relative rounded-m group">
                <img src={cat4} alt=""  className='w-full'/>
                <a href="#" className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition">Outdoor</a>
            </div>
                {/* categories card */}
                <div className="relative rounded-m group">
                <img src={cat5} alt=""  className='w-full'/>
                <a href="#" className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition">Mattress</a>
            </div>
                {/* categories card */}
                <div className="relative rounded-m group">
                <img src={cat6} alt=""  className='w-full'/>
                <a href="#" className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition">Dinings</a>
            </div>
            
        </div>
    </div>
  )
}

export default EcomShopCat
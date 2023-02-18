import React from 'react'
import EcomBanner from '../ecom-components/EcomBanner'
import EcomMenu from '../ecom-components/EcomMenu'
import EcomNav from '../ecom-components/EcomNav'

const Ecommerce = () => {
  return (
    <div className='bg-white h-full w-full'>
       <EcomNav/>
       <EcomMenu/>
       <EcomBanner/>
    </div>
  )
}

export default Ecommerce
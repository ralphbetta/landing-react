import React from 'react'
import EcomBanner from '../ecom-components/EcomBanner'
import EcomCategories from '../ecom-components/EcomCategories'
import EcomMenu from '../ecom-components/EcomMenu'
import EcomNav from '../ecom-components/EcomNav'
import EcomShopCat from '../ecom-components/EcomShopCat'

const Ecommerce = () => {
  return (
    <div className='bg-white h-full w-full'>
       <EcomNav/>
       <EcomMenu/>
       <EcomBanner/>
       <EcomCategories/>
       <EcomShopCat/>
    </div>
  )
}

export default Ecommerce
import React from 'react'
import EcomBanner from '../ecom-components/EcomBanner'
import EcomCategories from '../ecom-components/EcomCategories'
import EcomMenu from '../ecom-components/EcomMenu'
import EcomNav from '../ecom-components/EcomNav'
import EcomShopCat from '../ecom-components/EcomShopCat'
import TopArrival from '../ecom-components/TopArrival'
import SecondBanner from '../ecom-components/SecondBanner'
import Counter from '../ecom-components/Counter'

const Ecommerce = () => {
  return (
    <div className='bg-white h-full w-full'>
       <EcomNav/>
       <EcomMenu/>
       <EcomBanner/>
       <EcomCategories/>
       <EcomShopCat/>
       <TopArrival/>
       <SecondBanner/>
    </div>
  )
}

export default Ecommerce



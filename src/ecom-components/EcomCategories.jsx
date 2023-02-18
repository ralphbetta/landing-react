import React from 'react'
import {
    AiOutlineTransaction,
    AiOutlineInsurance,
    AiOutlineShopping,
    AiOutlineCustomerService
} from 'react-icons/ai'

const EcomCategories = () => {
  return (
    <div className='md:flex justify-center py-5 gap-5 space-y-5 md:space-y-0'>
    {/* <div className=' w-10/12 grid md:grid-cols-3 gap-5 px-5 mx-auto justify-center '> */}
        <div className='border border-primary p-3 m:w-[21%] flex items-center justify-center'>
            <AiOutlineTransaction className=' text-4xl text-primary'/>
            <div className='ml-4'>
                <h2 className='font-bold text-xl'>Safe Transactions</h2>
                <p className='text-xs'>Completed Transaction $30M</p>
            </div>
        </div>
        <div className='border border-primary p-3 m:w-[21%] flex items-center justify-center'>
            <AiOutlineInsurance className=' text-4xl text-primary'/>
            <div className='ml-4'>
                <h2 className='font-bold text-xl'>99% Insurance</h2>
                <p className='text-xs'>For all purchased Items</p>
            </div>
        </div>
        <div className='border border-primary p-3 m:w-[21%] flex items-center justify-center'>
            <AiOutlineCustomerService className=' text-4xl text-primary'/>
            <div className='ml-4'>
                <h2 className='font-bold text-xl'>24/7 Support</h2>
                <p className='text-xs'>Live Customer Support</p>
            </div>
        </div>
    </div>
  )
}

export default EcomCategories
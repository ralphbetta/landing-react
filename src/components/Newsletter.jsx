import React from 'react'

export const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>
                    Want tips and tricks to optimize your flow?
                </h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'> 
                <div className='flex flex-col sm:flex-row item-center justify-between w-full'>
                    <input
                    className='p-3 flex w-fill rounded-md text-black' type='email' placeholder='Enter Email'
                    />
                    <button className=' bg-[#00df9a] text-black rounded-md font-medium my-6 md:my-0  w-[200px] ml-0 md:ml-4 px-6 py-3'>
                        Notify Me
                    </button>
                </div>
                <p>We care the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

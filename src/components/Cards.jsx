import React from 'react'
import card1 from '../assets/user.png'
import card2 from '../assets/programmer.png'
import card3 from '../assets/user-experience.png'

const Cards = () => {
  return (
   
        <div className=' w-full py-[10rem] px-4 mx-auto grid md:grid-cols-3 gap-8 bg-white '>
           {/* this is the card body */}
            <div className=' w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem]' src= {card1} alt="user" />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className=' text-center text-4xl font-bold'>$149</p>
                <div className=' text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#06c98d] hover:text-white'>Start Trial</button>
            </div>
            <div className=' w-full shadow-lg bg-gray-100 flex flex-col p-4 my-8  md:my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-2xl' src= {card2} alt="user" />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className=' text-center text-4xl font-bold'>$149</p>
                <div className=' text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#06c98d] hover:text-white'>Start Trial</button>
            </div>
            <div className=' w-full shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem]' src= {card3} alt="user" />
                <h1 className='text-2xl font-bold text-center py-8'>Single User</h1>
                <p className=' text-center text-4xl font-bold'>$149</p>
                <div className=' text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#06c98d] hover:text-white'>Start Trial</button>
            </div>
            
        </div>
  
  )
}

export default Cards
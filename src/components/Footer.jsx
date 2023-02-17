import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
}from 'react-icons/fa'

const Footer = () => {
  return (
    // max allowed screen  with, spread across at the center, display grid and grid-col-3 from lg
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className='font-bold text-[#00df9a] text-3xl'>React.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
        <div className='flex justify-between lg:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
        </div>
        <div className='flex lg:col-span-2 justify-between mt-6'>
                <div>
                    <h6 className=' font-medium text-gray-400'>Solution</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                   
                    </ul>
                </div>
                <div>
                    <h6 className=' font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Docuementation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                   
                    </ul>
                </div>
                <div>
                    <h6 className=' font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>careers</li>
                   
                    </ul>
                </div>
                <div>
                    <h6 className=' font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>                   
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default Footer
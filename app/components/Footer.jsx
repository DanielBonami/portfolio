import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        {/* Replace logo image with responsive text */}
        <h1 className='text-3xl font-bold mb-2 text-gray-800 dark:text-white'>
          Daniel
        </h1>

        <div className='w-max flex items-center gap-2 mx-auto text-sm sm:text-base'>
          <Image 
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
            alt='email icon' 
            className='w-5 sm:w-6' 
          />
          <span className='text-gray-700 dark:text-gray-300'>
            bonamidaniel4@gmail.com
          </span>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='text-gray-700 dark:text-gray-400 text-sm sm:text-base'>
          © 2025 Daniel Bonami. All rights reserved.
        </p>
        <ul className='flex items-center gap-6 sm:gap-10 justify-center mt-4 sm:mt-0 text-sm sm:text-base'>
          <li>
            <a target='_blank' href="https://github.com/DanielBonami" className='hover:underline'>Github</a>
          </li>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/daniel-bonami-900b1a311/" className='hover:underline'>LinkedIn</a>
          </li>
          <li>
            <a target='_blank' href="https://x.com/DanielBonami" className='hover:underline'>Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

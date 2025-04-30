import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sideMenuRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(100%)'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Background color behind logo for dark mode */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 flex items-center justify-between transition-all duration-300 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>

        {/* Text Logo */}
        <a href="#top" className="text-xl md:text-2xl font-bold font-Ovo tracking-wide text-black dark:text-white mr-14">
          Daniel
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3
          ${!isScroll ? "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent" : ""}`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        {/* Right side buttons */}
        <div className='flex items-center gap-4'>

          {/* Theme toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className='w-6' />
          </button>

          {/* Contact button (large screens) */}
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo dark:border-white/50'>
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow" className='w-3' />
          </a>

          {/* Mobile menu icon */}
          <button className='block md:hidden ml-2' onClick={() => setIsMenuOpen(true)}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className='w-6' />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-rose-50 dark:bg-darkHover dark:text-white z-50 transition-transform duration-300 transform translate-x-full'>

          {/* Close icon */}
          <div className='absolute right-6 top-6 cursor-pointer' onClick={() => setIsMenuOpen(false)}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className='w-5' />
          </div>

          {/* Mobile links */}
          <li><a className='font-Ovo' href="#top" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a className='font-Ovo' href="#about" onClick={() => setIsMenuOpen(false)}>About me</a></li>
          <li><a className='font-Ovo' href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a className='font-Ovo' href="#work" onClick={() => setIsMenuOpen(false)}>My Work</a></li>
          <li><a className='font-Ovo' href="#contact" onClick={() => setIsMenuOpen(false)}>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar














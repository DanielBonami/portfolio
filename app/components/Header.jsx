import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion" // fixed typo from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="profile" className="rounded-full w-24 sm:w-32 md:w-36" />
      </motion.div>

      {/* Heading */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-Ovo text-black dark:text-white"
      >
        Hi! I'm Daniel Bonami
        <Image src={assets.hand_icon} alt="wave" className="w-5 sm:w-6" />
      </motion.h3>

      {/* Subheading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-Ovo text-black dark:text-white leading-snug"
      >
        Web developer based in Lewisville, TX.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl font-ovo text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300"
      >
        I am a Web developer from Lewisville, TX with 1.5 years of experience.
        As a web developer, I have hands-on experience in designing, developing, and maintaining
        dynamic websites and applications.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-8 py-3 rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black hover:opacity-90 transition"
        >
          contact me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-8 py-3 rounded-full border border-gray-500 bg-white text-black dark:bg-black dark:text-white flex items-center gap-2 hover:opacity-90 transition"
        >
          my resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header

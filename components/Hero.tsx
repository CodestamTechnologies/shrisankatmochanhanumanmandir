'use client';

import React from 'react'
import Navbar from './Navbar'
import StarCanvas from './StarBackground'
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Hero = () => {
  return (
<<<<<<< HEAD
    
    <div className='p-10 min-h-screen flex justify-left items-top bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 space-x-10'>
      <StarCanvas/>
=======
    <div className='min-h-screen flex justify-left items-top bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 px-6'>
      <StarCanvas />
>>>>>>> 74edbfc2b1c4f594ad891c5900fa02de603b7117
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-center md:justify-evenly h-screen w-full "
      >
        <div className="h-full sm:mt-44 w-fit flex flex-col  justify-center text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col font-bold text-white max-w-[600px] w-auto h-auto drop-shadow-2xl"
          >
            <p className='leading-normal'>
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                श्री संकट मोचन हनुमान मंदिर{" "}
              </span>
              के पवित्र माहौल को अपनाएं, और दिव्य आशीर्वाद और शांति की तलाश में हमारे साथ जुड़ें।
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className=""
        >
          <Image
            src="/NavLogo.png"
            alt="work icons"
            height={650}
            width={650}
            className='drop-shadow-2xl'
          />
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Hero
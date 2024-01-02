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
    
    <div className='p-10 min-h-screen flex justify-left items-top bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 space-x-10'>
      <StarCanvas/>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                श्री संकट मोचन हनुमान मंदिर{" "}
              </span>
              के पवित्र माहौल को अपनाएं, और दिव्य आशीर्वाद और शांति की तलाश में हमारे साथ जुड़ें।
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Hero
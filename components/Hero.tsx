import React from 'react'
import Navbar from './Navbar'
import StarCanvas from './StarBackground'

const Hero = () => {
  return (
    <div className='p-10 min-h-screen flex justify-left items-top bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 space-x-10'>
      <StarCanvas/>
    </div>
  )
}

export default Hero
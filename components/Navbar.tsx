import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417 backdrop-blur-md z-50 px-20]'>
        <div className='w-full h-full flex flex-row items-center  justify-between m-auto px-[45px]'>
            <a href='#about-us' className='h-auto w-auto flex flex-row items-center'>
                <Image
                      src="/NavLogo.png" alt={'logo'} width={70} height={70} className='cursor-pointer hover:animate-slowspin'/>
                      <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        श्री संकट मोचन हनुमान मंदिर
                      </span>
            </a>
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[5px] px-[20px] py-[10px] rounded-full text-gray-200'>
                     <a href='#services' className='cursor-pointer'>Gallery</a>
                     <a href='#solutions' className='cursor-pointer'>Address</a>
                     <a href='#built-by' className='cursor-pointer'>Built by</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
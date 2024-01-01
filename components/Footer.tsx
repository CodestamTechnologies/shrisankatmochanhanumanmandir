import React from "react";
import Link from "next/link";
import Image from 'next/image'


const Footer = () => {
  return (
    <div id="about" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">

            <div className='font-bold text-3xl md:text-4xl pb-10'>
                <div className='font-bold text-3xl md:text-4xl '>
                    क्या हमसे कुछ छूट गया है।
                    <a href="https://www.codestam.com/">हमें यहां बताएं</a>
                </div>
            </div>

            <div className={`bg-cswhite container h-full mx-auto pb-8 px-8 md:px-14 md:text-3xl`}>
                Codestam Technologies द्वारा सटीकता के साथ तैयार किया गया। हम गतिशील वेबसाइट बनाने और 
                <span className=" bg-clip-text font-extrabold">
                {" "}
                websites{" "}
              </span>
                और उद्यमों के लिए मजबूत तकनीकी पारिस्थितिकी तंत्र बनाने में विशेषज्ञ हैं। हमारी विशेषज्ञता के साथ अपनी डिजिटल उपस्थिति को बढ़ाएं।
            </div>

            <div className={`bg-cswhite container h-full mx-auto pb-8 px-8 md:px-14 md:text-3xl`}>
                Crafted with precision by Codestam Technologies. We specialize in building dynamic 
                <span className=" bg-clip-text font-extrabold">
                {" "}
                websites{" "}
              </span>
                and creating robust tech ecosystems for businesses and enterprises. Elevate your digital presence with our expertise.
            </div>
            
            <div className='h-full w-screen  px-6 sm:px-8 md:px-16 xl:px-24 '>
            <div className={`bg-cswhite container h-full mx-auto pb-8 px-8 md:px-14`}>
                <div className='font-bold text-3xl md:text-4xl '>
                    DEVELOPED BY CODESTAM TECHNOLOGIES
                </div>
                <div className='h-fit flex flex-col md:flex-row space-x-4 items-center justify-between  py-8'>

                    <div className='w-full md:w-[45%] flex flex-col  space-y-4  pb-8 md:pb-0'>
                    <Link title='Phone Number Codestam Technologies' href={'https://www.codestam.com/'} className='flex flex-col sm:flex-row   justify-start sm:space-x-4 items-start sm:items-center whitespace-nowrap'>
                            <span className={` font-semibold text-2xl md:text-3xl`} > Website : </span>
                            <span className={`text-base md:text-xl `}>Codestam.com</span>
                        </Link>
                        <Link title='Email Codestam Technologies' href={'mailto:contact@codestam.com'} className='flex flex-col sm:flex-row   justify-start sm:space-x-4 items-start sm:items-center whitespace-nowrap'>
                            <span className={` font-semibold text-2xl md:text-3xl`} > Contact : </span>
                            <span className={`text-base md:text-xl  `}>contact@codestam.com</span>
                        </Link>
                        <Link title='Phone Number Codestam Technologies' href={'tel:+918797969991'} className='flex flex-col sm:flex-row   justify-start sm:space-x-4 items-start sm:items-center whitespace-nowrap'>
                            <span className={` font-semibold text-2xl md:text-3xl`} > Phone : </span>
                            <span className={`text-base md:text-xl `}>+91 8228840065</span>
                        </Link>
                    </div>

                    <div className='w-full md:w-[45%] flex flex-col  space-y-4 text-2xl md:text-3xl'>
                        <div className={` font-semibold`}>
                            Socials
                        </div>
                        <div className='flex space-x-4'>
                            <Link
                                target='_blank'
                                href={'https://instagram.com/codestam_technologies'} >
                                <Image src={'/instagram.svg'} width={25} height={25} alt='Instagram of Codestam' />
                            </Link>
                            <Link
                                target='_blank'
                                href={'https://x.com/codestam_com'} >
                                <Image src={'/twitter.svg'} width={25} height={25} alt='Twitter of Codestam' />
                            </Link>
                            <Link
                                target='_blank'
                                href={'https://www.linkedin.com/company/codestam-technologies/'} >
                                <Image src={'/linkedin.svg'} width={25} height={25} alt='Linkedin of Codestam Technologies' />
                            </Link>



                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl px-4  mx-auto  overflow-hidden sm:px-6 lg:px-8">
                    <p className="mt-8 text-base leading-6 text-center text-gradient-radial from-yellow-500 to-red-500">
                        © Codestam Technologies. All Rights Reserved
                    </p>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
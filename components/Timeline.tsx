import React from 'react'

const timelineData = [
    {
        "title": "स्थापना",
        "description": "इसकी स्थापना 27 मार्च 2020 को की गई थी।"
    },
    {
        "title": "सार्वजनिक भंडारा",
        "description": "हर वर्ष स्थापना के दिन सार्वजनिक भंडारा का आयोजन किया जाता है।"
    },
    {
        "title": "सूचना दें",
        "description": "हमें यहां दिनांकित समारोहों के बारे में सूचित करें"
    }
]



const Timeline = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">

        <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 rounded-md p-6 md:pl-8">
                <h1 className="text-white text-xl text-bold font-medium py-2">स्थापना</h1>
                <p className="text-gray-100 sm:text-sm text-xs">इसकी स्थापना <b>27 मार्च 2020</b> को की गई थी।</p>
            </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 z-10 text-white text-center"></div>
        </div>
        <div className="col-span-4 w-full h-full"></div>


        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 z-10 text-white text-center"></div>
        </div>
        <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 rounded-md p-6 md:pl-8">
                <h1 className="text-white text-xl font-medium py-2">सार्वजनिक भंडारा</h1>
                <p className="text-gray-100 sm:text-sm text-xs">हर वर्ष स्थापना के दिन सार्वजनिक भंडारा का आयोजन किया जाता है।</p>
            </div>
        </div>


        <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 rounded-md p-6 md:pl-8">
                <h1 className="text-white text-xl font-medium py-2">सूचना दें</h1>
                <p className="text-gray-100 sm:text-sm text-xs">हमें यहां दिनांकित समारोहों के बारे में सूचित करें</p>
            </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500 z-10 text-white text-center"></div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
    </div>
    </div>
  )
}

export default Timeline
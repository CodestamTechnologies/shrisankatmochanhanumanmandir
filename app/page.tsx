
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='h-full w-screen bg-gradient-radial bg-center bg-cover from-yellow-500 to-red-500'>
      <div className='flex flex-col gap-20'>
        <Navbar/>
        <Hero/>
        <Timeline/>
        <Footer/>
      </div>
    </main>
  )
}
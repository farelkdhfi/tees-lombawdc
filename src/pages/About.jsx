import React from 'react'
import Logo from '../assets/tees.png'

const About = () => {
  return (
    <section className='pt-20 md:pt-30 px-3 lg:px-15 bg-white flex justify-center items-center min-h-screen'>
        <div className='flex flex-col space-y-2 justify-center items-center'>
            <img src={Logo} alt="" className='w-20 h-auto' />
            <p className='text-xs text-pretty max-w-3xs text-center'>Presented for WDC competition 2025</p>
        </div>
    </section>
  )
}

export default About
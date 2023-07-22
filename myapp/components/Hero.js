import React from 'react'
import hero from "../public/hero.png"
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='pt-3 pb-10'>
        <div className='flex flex-col text-center w-full mb-20'>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-400">Welcome To The Donut Shop</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Home of the voted number one fresh from scratch donuts. Where you can have a donut any way you like it. Need more? Join our social community to network and get to know other donut enthuasic. While you are here browse around for a few.</p>

        </div>
    </section>
  )
}

export default Hero
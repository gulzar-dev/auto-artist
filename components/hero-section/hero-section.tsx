import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.jpg" alt="Car Interior" fill className="object-cover brightness-75" priority />
        </div>

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
          <p className="text-white text-lg md:text-xl mb-2 md:mb-4">Welcome to Auto Artist</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            YOUR CAR DESERVES THE
            <br />
            <span className="inline-block bg-[#3af7f8] text-black px-4 py-1 my-2 md:my-4">PERFECTION</span> INAUGURAL
          </h1>
        </div>
      </section>
  )
}

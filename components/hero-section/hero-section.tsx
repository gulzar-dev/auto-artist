"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image with fade-in animation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <Image 
          src="/hero-bg.jpg" 
          alt="Car Interior" 
          fill 
          className="object-cover brightness-75" 
          priority 
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        {/* Welcome Text */}
        <motion.p 
          className="text-white text-lg md:text-xl mb-2 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          Welcome to Auto Artist
        </motion.p>

        {/* Main Heading */}
        <motion.h1 
          className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          YOUR CAR DESERVES THE
          <br />
          {/* Highlighted Text with Spring Animation */}
          <motion.span 
            className="inline-block bg-[#3af7f8] text-black px-4 py-1 my-2 md:my-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: 0.6,
              scale: {
                type: "spring",
                damping: 12,
                stiffness: 100
              }
            }}
          >
            PERFECTION
          </motion.span> INAUGURAL
        </motion.h1>
      </div>
    </section>
  )
}

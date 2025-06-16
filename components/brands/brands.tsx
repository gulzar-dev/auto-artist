"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Brands() {
  const brandLogos = [ 
    { src: "/brands/toyota.png", alt: "Toyota" },
    { src: "/brands/VW.png", alt: "VW" },
    { src: "/brands/suzuki.png", alt: "Suzuki" },
    { src: "/brands/HONDA.png", alt: "HONDA" },
    { src: "/brands/BMW.png", alt: "BMW" },
    { src: "/brands/Audi.png", alt: "Audi" },
    { src: "/brands/Lamborghini.png", alt: "Lamborghini" },
    { src: "/brands/Lexus.png", alt: "Lexus" },
    { src: "/brands/Jaguar.png", alt: "Jaguar" },
    { src: "/brands/Porsche.png", alt: "Porsche" },
    { src: "/brands/Mercedes.png", alt: "Mercedes" },
    { src: "/brands/Bentley.png", alt: "Bentley" }
  ];

  return (
    <section className="py-16 md:py-32 bg-black">
        <motion.h2 
          className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          We work with all types of brands
        </motion.h2>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {brandLogos.map((brand, index) => (
                <motion.div
                  key={brand.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.1 * index
                  }}
                >
                  <Image 
                    src={brand.src} 
                    alt={brand.alt} 
                    width={150} 
                    height={60} 
                    className="h-[100px] w-auto object-contain transition-transform duration-300 hover:scale-105" 
                  />
                </motion.div>
              ))}
            </div>
        </div>
    </section>
  )
}

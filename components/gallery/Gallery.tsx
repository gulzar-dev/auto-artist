<<<<<<< HEAD
import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
    <section id="follow-us" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
        <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16">Follow <span className='text-white'>Us</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/gallery/gallery-1.jpg"
                alt="Car Detailing"
=======
"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {
  const galleryImages = [
    { src: "/gallery/gallery-1.jpg", alt: "Car Detailing 1" },
    { src: "/gallery/gallery-2.jpg", alt: "Car Detailing 2" },
    { src: "/gallery/gallery-3.jpg", alt: "Car Detailing 3" },
    { src: "/gallery/gallery-4.jpg", alt: "Car Detailing 4" }
  ];

  return (
    <section id="follow-us" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Follow <span className='text-white'>Us</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={image.alt}
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: 0.15 * index 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
<<<<<<< HEAD
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/gallery/gallery-2.jpg"
                alt="Car Detailing"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/gallery/gallery-3.jpg"
                alt="Car Detailing"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/gallery/gallery-4.jpg"
                alt="Car Detailing"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
=======
            </motion.div>
          ))}
        </div>
      </div>
    </section>
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)
  )
}

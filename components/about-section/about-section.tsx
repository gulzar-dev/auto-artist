<<<<<<< HEAD
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
  return (
    <section id='about-us' className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 text-white space-y-4">
                  <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16">About <span className='text-white'>Us</span></h2>
                  <p>
                  At Auto Artist, we are your trusted one-stop shop for all your vehicle enhancement and protection needs. From expert custom wraps and precision window tinting to high-performance paint protection film (PPF), advanced ceramic coatings, and flawless paint correction, we deliver unmatched quality and professionalism. We also specialize in luxurious starlight headliner installations, transforming your vehicle’s interior into a masterpiece.What sets us apart is our commitment to excellence, personalized service, and use of top-tier materials to ensure every project exceeds expectations. Whether you're looking to protect your investment, elevate your vehicle's style, or create a custom look that stands out, our skilled team is here to make your vision a reality.Choose Auto Artist for the ultimate combination of style, protection, and precision. Your vehicle deserves nothing less.
                  </p>
                  <Link href="/quote" className="inline-block bg-[#3af7f8] text-black px-6 py-3 font-medium">
                    Get Quote
                  </Link>
                </div>
                <div className="w-full md:w-1/2">
                  <Image
                    src="/auto artist logo.png"
                    alt="Auto Artist - From Dusty To Dazzling"
                    width={400}
                    height={150}
                    className="h-auto m-auto"
                  />
                </div>
              </div>
            </div>
          </section>
=======
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from '../contact/contact'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function AboutSection() {
  const paragraphs = [
    "At Auto Artist, we are your trusted one-stop shop for all your vehicle enhancement and protection needs. From expert custom wraps and precision window tinting to high-performance paint protection film (PPF), advanced ceramic coatings, and flawless paint correction, we deliver unmatched quality and professionalism.",
    "We also specialize in luxurious starlight headliner installations, transforming your vehicle's interior into a masterpiece. What sets us apart is our commitment to excellence, personalized service, and use of top-tier materials to ensure every project exceeds expectations.",
    "Whether you're looking to protect your investment, elevate your vehicle's style, or create a custom look that stands out, our skilled team is here to make your vision a reality. Choose Auto Artist for the ultimate combination of style, protection, and precision. Your vehicle deserves nothing less."
  ];

  return (
    <section id='about-us' className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-white space-y-6">
            <motion.h2 
              className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center md:text-left mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About <span className='text-white'>Us</span>
            </motion.h2>
            
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#3af7f8] text-black px-8 py-8 md:px-8 md:py-4 font-semibold lg:text-base hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-black border-gray-800 sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-[#3af7f8] text-2xl text-center">Contact Us</DialogTitle>
                    <DialogDescription className="text-center text-gray-400">
                      Fill out the form below and we'll get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>

          <motion.div 
            className="w-full md:w-1/2 relative h-[400px] md:h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/auto artist logo.png"
              alt="Auto Artist Logo"
              fill
              className="object-contain rounded-lg p-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)
  )
}

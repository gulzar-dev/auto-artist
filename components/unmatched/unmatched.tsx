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

const trustIcons = [
  { src: "/trusts icons/premium quality service.png", alt: "premium quality service", text: "premium quality service" },
  { src: "/trusts icons/Elite Surface Specialist.png", alt: "Elite Surface Specialist", text: "Elite Surface Specialist" },
  { src: "/trusts icons/Licensed and insured.png", alt: "Licensed and insured", text: "Licensed and insured" },
  { src: "/trusts icons/Family and Veteran owned.png", alt: "Family and Veteran owned", text: "Family and Veteran owned" },
  { src: "/trusts icons/Quality Products.png", alt: "Quality Products", text: "Quality Products" },
  { src: "/trusts icons/Elite level service promised.png", alt: "Elite level service promised", text: "Elite level service promised" }
];

export default function UnMatched() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-white">
            <motion.h2 
              className="text-[#3af7f8] text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              UNMATCHED
              <br />
              ATTENTION <span className='text-white'>TO DETAIL</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Auto Artist, every vehicle we work on is a reflection of our dedication to excellence. Whether applying custom wraps for a flawless finish, installing precise window tints for style and UV protection, or enhancing paint with PPF, ceramic coatings, or expert paint correction, we focus on every detail to achieve perfection. Our meticulous approach extends to starlight headliner installations, where we craft stunning, seamless designs that transform your vehicle's interior into something extraordinary. From preparation to final touches, we ensure every project showcases our passion for precision and quality. Experience the Auto Artist difference—where attention to detail sets us apart and makes every ride exceptional.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#3af7f8] text-black px-8 mt-8 py-8 md:px-8 md:py-4 font-semibold lg:text-base hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
                    Get a Call
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
          <div className="w-full md:w-1/2 grid grid-cols-2 justify-center justify-items-center gap-5 text-white text-base md:text-lg uppercase font-semibold px-2">
            {trustIcons.map((icon, index) => (
              <motion.div 
                key={icon.alt}
                className='flex flex-col justify-center items-center gap-4 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * index
                }}
              >
                <Image src={icon.src} alt={icon.alt} width={100} height={100} />
                <p>{icon.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

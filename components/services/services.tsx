<<<<<<< HEAD
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
=======
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact/contact"

const serviceCards = [
  { 
    image: "/services/Deep cleaning.jpg", 
    alt: "Deep Cleaning",
    description: "Professional interior and exterior deep cleaning to restore your vehicle's pristine condition"
  },
  { 
    image: "/services/Ceramic & Graphene Coating.jpg", 
    alt: "Ceramic & Graphene Coating",
    description: "Premium coating solutions for long-lasting protection and brilliant shine"
  },
  { 
    image: "/services/PPF.webp", 
    alt: "Paint Protection Film",
    description: "Advanced PPF installation to protect your vehicle from scratches and damage"
  },
  { 
    image: "/services/Warp.png", 
    alt: "Vehicle Wrapping",
    description: "Custom vehicle wrapping to transform your car's appearance with style"
  }
];
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-black">
<<<<<<< HEAD
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16"><span className='text-white'>OUR</span> SERVICES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image src="/service-1.jpg" alt="Interior Cleaning" fill className="object-cover" />
              </div>
              <div className="p-6 h-40">{/* Content can be added here */}</div>
            </div>

            {/* Service Card 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image src="/service-2.jpg" alt="Leather Cleaning" fill className="object-cover" />
              </div>
              <div className="p-6 h-40">{/* Content can be added here */}</div>
            </div>

            {/* Service Card 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image src="/service-3.jpg" alt="Coating Products" fill className="object-cover" />
              </div>
              <div className="p-6 h-40">{/* Content can be added here */}</div>
            </div>

            {/* Service Card 4 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image src="/service-4.jpg" alt="Polishing" fill className="object-cover" />
              </div>
              <div className="p-6 h-40">{/* Content can be added here */}</div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/services" className="bg-[#3af7f8] text-black px-6 py-3 font-medium">
              Discover all our services
            </Link>
          </div>
        </div>
      </section>
=======
      <div className="container mx-auto px-4 text-white">
        <motion.h2 
          className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-white'>OUR</span> SERVICES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, index) => (
            <motion.div 
              key={service.alt}
              className="relative group overflow-hidden rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 // Faster stagger for better performance
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-64">
                <Image 
                  src={service.image} 
                  alt={service.alt} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 bg-black">
                <h3 className="text-xl font-semibold mb-2 text-[#3af7f8]">{service.alt}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#3af7f8]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="bg-[#3af7f8] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95"
              >
                Book a Service
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-[#3af7f8] text-2xl text-center">Book a Service</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)
  )
}

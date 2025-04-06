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
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
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
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-black">
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
  )
}

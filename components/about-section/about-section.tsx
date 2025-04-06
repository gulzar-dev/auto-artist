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
  )
}

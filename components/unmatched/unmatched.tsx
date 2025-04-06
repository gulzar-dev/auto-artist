import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UnMatched() {
  return (
    <section className="py-16 md:py-24 bg-black">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 text-white">
                  <h2 className="text-[#3af7f8] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    UNMATCHED
                    <br />
                    ATTENTION <span className='text-white'>TO DETAIL</span>
                  </h2>
                  <p >
                  At Auto Artist, every vehicle we work on is a reflection of our dedication to excellence. Whether applying custom wraps for a flawless finish, installing precise window tints for style and UV protection, or enhancing paint with PPF, ceramic coatings, or expert paint correction, we focus on every detail to achieve perfection. Our meticulous approach extends to starlight headliner installations, where we craft stunning, seamless designs that transform your vehicle's interior into something extraordinary. From preparation to final touches, we ensure every project showcases our passion for precision and quality. Experience the Auto Artist difference—where attention to detail sets us apart and makes every ride exceptional.
                  </p>
                  <Link href="/contact" className="inline-block bg-[#3af7f8] text-black px-6 py-3 font-medium mt-8">
                    Get A Call & Call Now
                  </Link>
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-2 justify-center justify-items-center gap-5 text-white text-base md:text-lg uppercase font-semibold px-2">
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <Image src="/trusts icons/premium quality service.png" alt="premium quality service" width={100} height={100} />
                        <p>premium quality service</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <Image src="/trusts icons/Elite Surface Specialist.png" alt="Elite Surface Specialist" width={100} height={100} />
                        <p>Elite Surface Specialist</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <Image src="/trusts icons/Licensed and insured.png" alt="Licensed and insured" width={100} height={100} />
                        <p>Licensed and insured</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <Image src="/trusts icons/Family and Veteran owned.png" alt="Family and Veteran owned" width={100} height={100} />
                        <p>Family and Veteran owned</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <Image src="/trusts icons/Quality Products.png" alt="Quality Products" width={100} height={100} />
                        <p>Quality Products</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <Image src="/trusts icons/Elite level service promised.png" alt="Elite level service promised" width={100} height={100} />
                        <p>Elite level service promised</p>
                    </div>                   
                </div>
              </div>
            </div>
          </section>
  )
}

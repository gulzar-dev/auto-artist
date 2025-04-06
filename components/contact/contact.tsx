import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="contact" className="relative h-3/4 py-16 md:py-24 bg-black/80 bg-blend-multiply bg-[url(/contact-bg.jpg)] bg-center bg-cover">
        <div className="container mx-auto px-4 text-white z-999">
          <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16">CONTACT <span className='text-white'>US</span></h2>
          <div className="flex flex-col items-center justify-center space-y-5 ">
            <p className='text-xl'>Get Start And Discuss with us we will Help you to enhance your Vehicle</p>
            <Link href="#" className="bg-[#3af7f8] text-black px-6 py-3 font-medium">
                Call Now
            </Link>
          </div>
        </div>
    {/* <div className=' inset-0 absolute z-0' /> */}
    </section>
    </>
  )
}

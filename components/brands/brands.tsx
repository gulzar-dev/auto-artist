import Image from 'next/image'
import React from 'react'

export default function Brands() {
  return (
    <section className="py-16 md:py-32 bg-black">
        <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16">We work with all types of brands</h2>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <Image src="/brands/cupra.png" alt="Cupra" width={150} height={60} className="h-auto" />
            <Image src="/brands/jaguar.png" alt="Jaguar" width={150} height={60} className="h-auto" />
            <Image src="/brands/seat.png" alt="SEAT" width={150} height={60} className="h-auto" />
            <Image src="/brands/bmw.png" alt="BMW" width={150} height={60} className="h-auto" />
            <Image src="/brands/honda.png" alt="HONDA" width={150} height={60} className="h-auto" />
            <Image src="/brands/audi.png" alt="Audi" width={150} height={60} className="h-auto" />
            <Image src="/brands/lamborghini.png" alt="Lamborghini" width={150} height={60} className="h-auto" />
            <Image src="/brands/lexus.png" alt="Lexus" width={150} height={60} className="h-auto" />
            <Image src="/brands/vw.png" alt="VW" width={150} height={60} className="h-auto" />
            <Image src="/brands/porsche.png" alt="Porsche" width={150} height={60} className="h-auto" />
            <Image src="/brands/mercedes.png" alt="Mercedes" width={150} height={60} className="h-auto" />
            <Image src="/brands/bentley.png" alt="Bentley" width={150} height={60} className="h-auto" />
            </div>
        </div>
    </section>
  )
}

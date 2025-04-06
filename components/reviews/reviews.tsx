import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Reviewcard from '../global/review-card'

  
export default function Reviews() {
    
  return (
    <section id="review" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16 uppercase"><span className='text-white'>What our </span>clients say</h2>

          <div className="flex flex-wrap justify-center items-start flex-row gap-6 ">
            <Reviewcard  />
          </div>
        </div>
    </section>
  )
}

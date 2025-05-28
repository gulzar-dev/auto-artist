"use client"
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
import { motion } from 'framer-motion'
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Exceptional service! They transformed my car into a masterpiece. The attention to detail is remarkable.',
      rating: 5,
      image: '/reviews/review1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      review: 'Professional team, outstanding results. My car looks better than when it was new.',
      rating: 5,
      image: '/reviews/review2.jpg'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      review: 'Top-notch service and incredible attention to detail. Highly recommended!',
      rating: 5,
      image: '/reviews/review3.jpg'
    }
  ];

  return (
    <section id="review" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 text-white">
        <motion.h2 
          className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-white'>What our </span>clients say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gray-900 rounded-lg p-6 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 // Faster stagger
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-[#3af7f8] text-6xl opacity-20">"</div>
              
              {/* Review Text */}
              <motion.p 
                className="text-gray-300 mb-4 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {review.review}
              </motion.p>

              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span 
                    key={i}
                    className="text-[#3af7f8]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.2,
                      delay: index * 0.1 + i * 0.05 + 0.3
                    }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Author Info */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
              >
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-400">Verified Customer</p>
                </div>
              </motion.div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#3af7f8]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

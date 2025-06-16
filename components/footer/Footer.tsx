import { Mail, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="py-16 bg-black border-t border-[#222222]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/auto artist logo.png"
                alt="Auto Artist - From Dusty To Dazzling"
                width={250}
                height={100}
                className="h-auto mb-6"
              />
            </div>

            <div className='text-white flex flex-col space-y-4 text-md font-extralight'>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Quick Links</h3>
              <Link href='#services'>Our Services</Link>
              <Link href='#about-us'>About Us</Link>
              <Link href='#review'>Reviews From Customers</Link>
              <Link href='#follow-us'>Follow Us</Link>
            </div>

            <div className='text-white flex flex-col space-y-4 text-md font-extralight'>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Contact Us</h3>
              <p>Address: Opp. D-mart Ambegaon, Near Rajyog Toyata, Katraj, Pune-411046</p>
              <p>Hours: Open 9:00 am - Closes 10:00 pm</p>
              <p>Phone: 070288 01216</p>
              <Link href="https://g.co/kgs/TkJYZZ5" target='_blank' className="bg-[#3af7f8] text-black px-6 py-3 font-medium mt-6 md:mt-0">
                Locate to Shop
              </Link>
            </div>
          </div>

        </div>
          <div className="flex flex-row justify-center items-center gap-5 mt-12 text-gray-400">
            <p className='text-sm '>Auto Artist © 2025</p>
            <Link href="mailto:autoartist007@gmail.com" className="bg-[#3af7f8] text-black px-3 py-3 font-medium mt-6 md:mt-0 hover:bg-[#2de6e7] transition-colors">
                <Mail />
            </Link>
            <Link href="https://www.instagram.com/auto_artist_7/" target="_blank" rel="noopener noreferrer" className="bg-[#3af7f8] text-black px-3 py-3 font-medium mt-6 md:mt-0 hover:bg-[#2de6e7] transition-colors">
                <Instagram />
            </Link>
          </div>
    </footer>
  )
}

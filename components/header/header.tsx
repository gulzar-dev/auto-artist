import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MobileMenu } from '../mobile-menu'
<<<<<<< HEAD
=======
import { Button } from '../ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from '../contact/contact'
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)

export default function Header() {
  return (
    <header className="bg-black w-full">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <Image src="/auto artist logo.png" alt="Auto Artist Logo" width={180} height={50} className="h-auto" />
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link href="#about-us" className="text-white hover:text-[#3af7f8] transition-colors text-sm lg:text-base">
            About us
          </Link>
          <Link href="#services" className="text-white hover:text-[#3af7f8] transition-colors text-sm lg:text-base">
            Our services
          </Link>
          <Link href="#follow-us" className="text-white hover:text-[#3af7f8] transition-colors text-sm lg:text-base">
            Follow Us
          </Link>
          <Link href="#review" className="text-white hover:text-[#3af7f8] transition-colors text-sm lg:text-base">
            Client Reviews
          </Link>
        </nav>

<<<<<<< HEAD
        <Link href="https://wa.me/" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-whatsapp"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9 13a5 5 0 0 0 6 0" />
          </svg>
        </Link>

        <Link
          href="/contact"
          className="bg-[#3af7f8] text-black px-4 py-2 md:px-6 md:py-3 font-medium text-sm lg:text-base"
        >
          Contact Us
        </Link>
=======
        <Link 
          href="https://wa.me/917028801216" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] hover:text-[#128C7E] transition-colors"
        >
          <FaWhatsapp size={24} />
        </Link>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#3af7f8] text-black px-4 py-2 md:px-6 md:py-3 font-medium text-sm lg:text-base hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95">
              Contact Us
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black border-gray-800 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-[#3af7f8] text-2xl text-center">Contact Us</DialogTitle>
              <DialogDescription className="text-center text-gray-400">
                Fill out the form below and we'll get back to you soon.
              </DialogDescription>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)

        <MobileMenu />
      </div>
    </div>
  </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
<<<<<<< HEAD
=======
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from './contact/contact'
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black z-50 p-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="#about-us"
              className="text-white hover:text-[#3af7f8] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-[#3af7f8] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Our services
            </Link>
            <Link
              href="#follow-us"
              className="text-white hover:text-[#3af7f8] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Follow Us
            </Link>
            <Link
              href="#review"
              className="text-white hover:text-[#3af7f8] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Client Reviews
            </Link>
<<<<<<< HEAD
            <Link
              href="#contact"
              className="bg-[#3af7f8] text-black px-6 py-3 font-medium text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
=======
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-[#3af7f8] text-black px-6 py-3 font-medium text-center mt-2 hover:bg-opacity-90 transition-all"
                  onClick={() => setIsOpen(false)}
                >
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
          </nav>
        </div>
      )}
    </div>
  )
}


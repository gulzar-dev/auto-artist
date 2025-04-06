"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

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
            <Link
              href="#contact"
              className="bg-[#3af7f8] text-black px-6 py-3 font-medium text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}


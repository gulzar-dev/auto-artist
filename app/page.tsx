import Brands from "@/components/brands/brands"
import Footer from "@/components/footer/Footer"
import Gallery from "@/components/gallery/Gallery"
import Header from "@/components/header/header"
import HeroSection from "@/components/hero-section/hero-section"
import AboutSection from "@/components/about-section/about-section"
import Services from "@/components/services/services"
import UnMatched from "@/components/unmatched/unmatched"
import Image from "next/image"
import Link from "next/link"
import Reviews from "@/components/reviews/reviews"
import Contact from "@/components/contact/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Quote Section */}
      <AboutSection />

      {/* Brands Section */}
      <Brands />

      {/* Services Section */}
      <Services />

      {/* Gallery Section */}
      <Gallery />

      {/* Unmatched Attention Section */}
      <UnMatched />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Us Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  )
}


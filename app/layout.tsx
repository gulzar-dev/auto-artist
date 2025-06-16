import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auto Artist",
  description: "Professional car detailing services",
  icons: {
    icon: [
      {
        url: "/auto artist logo.png",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/auto artist logo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black min-h-screen`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'
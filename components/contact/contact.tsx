"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from 'sonner'
import { sendEmail } from '@/app/actions'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendEmail(formData)
      toast.success('Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-gray-200">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-200">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-gray-200">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 text-white"
          required
        />
      </div>

      <div>
        <Label htmlFor="service" className="text-gray-200">Service</Label>
        <Select onValueChange={handleServiceChange} value={formData.service}>
          <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            <SelectItem value="ppf">Paint Protection Film (PPF)</SelectItem>
            <SelectItem value="ceramic">Ceramic Coating</SelectItem>
            <SelectItem value="wrap">Vehicle Wrap</SelectItem>
            <SelectItem value="window">Window Tinting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-200">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-900 border-gray-700 text-white"
          required
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#3af7f8] text-black hover:bg-opacity-90"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-black/80 bg-blend-multiply bg-[url(/contact-bg.jpg)] bg-center bg-cover">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold mb-4">Contact <span className="text-white">Us</span></h2>
          <p className="text-lg text-gray-300 mb-8">We'd love to hear from you. Get in touch with us for a consultation or quote.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              className="flex flex-col items-center p-6 rounded-lg bg-black/50 backdrop-blur-sm h-full min-h-[200px] justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-[#3af7f8] mb-4 p-3 rounded-full bg-black/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10l.165-.155C6.024 7.124 9.402 5 13 5c3.598 0 6.976 2.124 9.835 4.845L23 10"/> 
                    <path d="M13 19h0"/> <circle cx="13" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <p className="text-gray-300 text-center text-sm sm:text-base">Opp. D-mart Ambegaon,<br />Near Rajyog Toyata,<br />Katraj, Pune-411046</p>
              </div>
              <a 
                href="https://g.co/kgs/TkJYZZ5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 text-sm text-[#3af7f8] hover:text-[#3af7f8]/80 transition-colors"
              >
                View on Map →
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 rounded-lg bg-black/50 backdrop-blur-sm h-full min-h-[200px] justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-[#3af7f8] mb-4 p-3 rounded-full bg-black/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <a href="tel:+917028801216" className="text-gray-300 hover:text-[#3af7f8] transition-colors text-sm sm:text-base">+91 70288 01216</a>
              </div>
              <p className="mt-4 text-sm text-gray-400">Available 24/7</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 rounded-lg bg-black/50 backdrop-blur-sm h-full min-h-[200px] justify-between sm:col-span-2 md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-[#3af7f8] mb-4 p-3 rounded-full bg-black/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <a href="mailto:info@autoartistnc.com" className="text-gray-300 hover:text-[#3af7f8] transition-colors text-sm sm:text-base">info@autoartistnc.com</a>
              </div>
              <p className="mt-4 text-sm text-gray-400">We'll respond within 24 hours</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-md mx-auto bg-black/90 p-6 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}

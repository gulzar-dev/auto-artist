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
          <p className="text-lg text-gray-300">We'd love to hear from you. Get in touch with us for a consultation or quote.</p>
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

<<<<<<< HEAD
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="contact" className="relative h-3/4 py-16 md:py-24 bg-black/80 bg-blend-multiply bg-[url(/contact-bg.jpg)] bg-center bg-cover">
        <div className="container mx-auto px-4 text-white z-999">
          <h2 className="text-[#3af7f8] text-4xl md:text-5xl font-bold text-center mb-16">CONTACT <span className='text-white'>US</span></h2>
          <div className="flex flex-col items-center justify-center space-y-5 ">
            <p className='text-xl'>Get Start And Discuss with us we will Help you to enhance your Vehicle</p>
            <Link href="#" className="bg-[#3af7f8] text-black px-6 py-3 font-medium">
                Call Now
            </Link>
          </div>
        </div>
    {/* <div className=' inset-0 absolute z-0' /> */}
    </section>
    </>
=======
"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { sendEmail } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone, Mail, MapPin, Calendar, Send } from 'lucide-react'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const loadingToast = toast.loading('Sending your message...');
      
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast.success('Thank you for contacting us! We will get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Sorry, there was a problem sending your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-white bg-opacity-10 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Input
        type="email"
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-white bg-opacity-10 border-gray-700 text-white placeholder:text-gray-400"
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="bg-white bg-opacity-10 border-gray-700 text-white placeholder:text-gray-400"
      />
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 bg-black bg-opacity-95 border border-gray-700 rounded-md text-white placeholder:text-gray-400"
      >
        <option value="" className="bg-black">Select Service</option>
        <option value="Paint Protection Film" className="bg-black">Paint Protection Film</option>
        <option value="Ceramic & Graphene Coating" className="bg-black">Ceramic & Graphene Coating</option>
        <option value="Vehicle Wrapping" className="bg-black">Vehicle Wrapping</option>
        <option value="Deep Cleaning" className="bg-black">Deep Cleaning</option>
        <option value="Paint Job" className="bg-black">Paint Job</option>
        <option value="Full Car Custom & Modification" className="bg-black">Full Car Custom & Modification</option>
      </select>
      <Textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="bg-white bg-opacity-10 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px]"
      />
      <Button
        type="submit"
        className="w-full bg-[#3af7f8] text-black hover:bg-[#2de6e7] font-semibold"
      >
        Send Message
      </Button>
    </form>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#3af7f8] text-4xl md:text-5xl font-bold mb-8"
          >
            Contact <span className="text-white">Us</span>
          </motion.h2>
          
          <motion.p
            className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            Get Started And Discuss with us we will Help you to enhance your Vehicle
          </motion.p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📞', title: 'Call Us', info: '+91 70288 01216', delay: 0.3 },
              { icon: '✉️', title: 'Email', info: 'autoartist007@gmail.com', delay: 0.4 },
              { icon: '📍', title: 'Visit Us', info: 'Opp. D-mart Ambegaon, Near Rajyog Toyata, Katraj, Pune-411043', delay: 0.5 }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-black border border-gray-800 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: item.delay,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: '#3af7f8',
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.info}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="tel:+917028801216" 
              className="bg-[#3af7f8] text-black px-8 py-2 rounded-lg font-semibold text-lg hover:bg-opacity-90 transform transition-all hover:scale-105 active:scale-95"
            >
              Call Now
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#3af7f8] text-black px-8 py-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transform transition-all hover:scale-105 active:scale-95"
                >
                  Send Message
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black border-gray-800 sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-[#3af7f8] text-2xl text-center">Send us a Message</DialogTitle>
                  <DialogDescription className="text-center text-gray-400">
                    Fill out the form below and we'll get back to you soon.
                  </DialogDescription>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* Book Service Form Dialog */}
        <Dialog>
          <DialogContent className="bg-black border-gray-800 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-[#3af7f8] text-2xl text-center">Book a Service</DialogTitle>
              <DialogDescription className="text-center text-gray-400">
                Let us know what service you're interested in.
              </DialogDescription>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
>>>>>>> f12431e (Initial commit: Auto Artist website with Next.js and Tailwind)
  )
}

'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Particles from './Particles'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

interface ContactMethod {
  name: string
  icon: any
  url: string
  label: string
}

// Static contact information
const contactInfo = {
  email: 'asmaam.eshrah@protonmail.com',
  social: {
    github: 'https://github.com/asmaamohsendev',
    linkedin: '',
    phone: '+20 106 296 7243'
  }
}

const contactMethods: ContactMethod[] = [
  {
    name: 'email',
    icon: FaEnvelope,
    url: `mailto:${contactInfo.email}`,
    label: 'Email Me'
  },
  {
    name: 'github',
    icon: FaGithub,
    url: contactInfo.social.github,
    label: 'GitHub Profile'
  },
  {
    name: 'linkedin',
    icon: FaLinkedin,
    url: contactInfo.social.linkedin,
    label: 'LinkedIn Profile'
  },
  {
    name: 'phone',
    icon: FaPhoneAlt,
    url: contactInfo.social.phone,
    label: 'Phone Number'
  }
]

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-start justify-start bg-black text-white p-8 md:p-16 relative overflow-hidden">
      {/* Particles background */}
      <Particles particleCount={isMobile ? 25 : 50} />

      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(193, 18, 31, 0.2) 0%, transparent 50%)`
        }}
        aria-hidden="true"
      />

      {/* Tech-inspired decorative elements with royal red */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        {/* Large gradient circle top right */}
        <motion.div 
          className="absolute top-20 right-20 w-[500px] h-[500px]"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.6, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent rounded-full blur-[100px]" />
        </motion.div>

        {/* Medium gradient circle bottom left */}
        <motion.div 
          className="absolute bottom-20 left-20 w-[400px] h-[400px]"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            repeatType: "loop"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent rounded-full blur-[100px]" />
        </motion.div>
      </div>

      <div className="flex flex-col h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white leading-none font-space-grotesk mb-8 sm:mb-12">
            <span className="block font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">GET IN</span>
            <span className="block font-light mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">TOUCH</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl text-gray-300 italic font-space-grotesk mb-6">
                &quot;Let&ldquo;s create something amazing together&quot;
              </p>
              <p className="text-gray-400 font-space-grotesk mb-6">
                I&ldquo;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <p className="text-gray-400 font-space-grotesk">
                Feel free to reach out through any of the following channels.
              </p>
            </div>
            <div className="space-y-6">
              <motion.div 
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium">Location</h4>
                    <p className="text-gray-400">Based in Egypt</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">Availability</h4>
                    <p className="text-gray-400">Available for freelance work</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {contactMethods.map((method) => (
                    <motion.a
                      key={method.name}
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <method.icon className="w-5 h-5" />
                      <span className="text-sm">{method.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 

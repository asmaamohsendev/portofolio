'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Particles from './Particles'

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Working with Asmaa was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule."
  },
  {
    name: "Omar",
    role: "Mechanical Engineer",
    company: "S3f",
    content: "Asmaa is a great developer. He is very dedicated and hardworking. He is also very good at problem-solving and communication. He is a great asset to any team."
  }
]

export default function Testimonials() {
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
            <span className="block font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">WHAT</span>
            <span className="block font-light mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">THEY SAY</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl md:text-2xl text-gray-300 italic font-space-grotesk mb-6">
                "Feedback from clients and colleagues"
              </p>
              <p className="text-gray-400 font-space-grotesk mb-6">
                Here's what people I've worked with have to say about our collaboration. 
                Each testimonial represents a unique project and partnership.
              </p>
              <p className="text-gray-400 font-space-grotesk">
                These experiences have shaped my approach to development and client relationships.
              </p>
            </div>
            <div className="space-y-6">
              <motion.div 
                className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Client Satisfaction</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium">Projects Completed</h4>
                    <p className="text-gray-400">20+ successful deliveries</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">Client Retention</h4>
                    <p className="text-gray-400">85% repeat business rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
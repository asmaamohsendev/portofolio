'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

// Particles component (simplified version)
const Particles = ({ particleCount = 50 }) => {
  const shouldReduceMotion = useReducedMotion()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])
  
  if (shouldReduceMotion || dimensions.width === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Floating Code Block Component
interface FloatingCodeBlockProps {
  code: string;
  language: string;
  delay?: number;
  position: string;
}

const FloatingCodeBlock = ({ code, language, delay = 0, position }: FloatingCodeBlockProps) => {
  const shouldReduceMotion = useReducedMotion()
  
  const codeLines = useMemo(() => code.split('\n'), [code])

  return (
    <motion.div
      className={`absolute ${position} backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-4 shadow-2xl max-w-sm
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:rounded-lg before:-z-10
        after:absolute after:inset-0 after:bg-gradient-to-tr after:from-[#c1121f]/5 after:to-transparent after:rounded-lg after:-z-10`}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { 
        opacity: [0, 1, 1, 0],
        y: [20, 0, -10, -30],
        scale: [0.8, 1, 1, 0.9]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut"
      }}
    >
      {/* Code block header */}
      <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500/70 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500/70 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500/70 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-300 font-mono">{language}</span>
      </div>
      
      {/* Code content */}
      <div className="font-mono text-sm leading-relaxed">
        {codeLines.map((line: string, index: number) => (
          <motion.div
            key={index}
            className="whitespace-pre"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : delay + 0.5 + index * 0.1 }}
          >
            {line.split('').map((char: string, charIndex: number) => {
              let color = 'text-gray-200'
              
              // Simple syntax highlighting
              if (line.includes('const') || line.includes('function') || line.includes('export')) {
                if (char === 'c' || char === 'f' || char === 'e') color = 'text-purple-300'
              }
              if (char === '{' || char === '}' || char === '(' || char === ')') color = 'text-yellow-300'
              if (char === '"' || char === "'" || char === '`') color = 'text-green-300'
              if (/\d/.test(char)) color = 'text-blue-300'
              if (line.includes('//')) color = 'text-gray-400'
              
              return (
                <span key={charIndex} className={color}>
                  {char}
                </span>
              )
            })}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldReduceMotion) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
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
  }, [shouldReduceMotion])

  // Code snippets for floating blocks
  const codeSnippets = useMemo(() => [
    {
      code: `const developer = {\n  name: 'Asmaa Mohsen',\n  skills: ['React', 'TS'],\n  passion: 'creating'\n}`,
      language: 'JavaScript',
      position: 'top-[15%] right-[15%]'
    },
    {
      code: `interface Project {\n  id: string;\n  title: string;\n  tech: string[];\n}`,
      language: 'TypeScript',
      position: 'top-[35%] right-[25%]'
    },
    {
      code: `.hero {\n  background: linear-gradient(\n    45deg, #DD1155, #000\n  );\n}`,
      language: 'CSS',
      position: 'top-[55%] right-[20%]'
    },
    {
      code: `SELECT * FROM projects \nWHERE status = 'completed'\nORDER BY created_at DESC;`,
      language: 'SQL',
      position: 'top-[75%] right-[30%]'
    },
    {
      code: `export default function Hero() {\n  return (\n    <motion.div>\n      {/* Magic happens */}\n    </motion.div>\n  )\n}`,
      language: 'React',
      position: 'top-[85%] right-[15%]'
    }
  ], [])

  const socialLinks = useMemo(() => [
    { 
      name: 'github', 
      url: 'https://github.com/asmaamohsendev', 
      icon: FaGithub
    },
    { 
      name: 'linkedin', 
      url: '', 
      icon: FaLinkedin
    },
  ], [])

  return (
    <section 
      className="min-h-screen flex items-start justify-start bg-black text-white p-8 md:p-16 relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Particles background */}
      <Particles particleCount={isMobile ? 25 : 50} />

      {/* Animated background gradient */}
      {!shouldReduceMotion && (
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(193, 18, 31, 0.2) 0%, transparent 50%)`
          }}
          aria-hidden="true"
        />
      )}

      {/* Floating Code Blocks - Only show on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {codeSnippets.map((snippet, index) => (
            <FloatingCodeBlock
              key={index}
              code={snippet.code}
              language={snippet.language}
              position={snippet.position}
              delay={index * 2}
            />
          ))}
        </div>
      )}

      {/* Tech-inspired decorative elements with royal red - Reduced opacity when code blocks are present */}
      <div className={`absolute top-0 left-0 w-full h-full pointer-events-none ${!isMobile ? 'opacity-40' : ''}`} aria-hidden="true">
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

        {/* Small gradient circle center */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
          initial={{ scale: 1, opacity: 0.45 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.45, 0.55, 0.45]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
            repeatType: "loop"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent rounded-full blur-[100px]" />
        </motion.div>
      </div>

      <div className="flex flex-col h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white leading-none font-space-grotesk">
              <span className="block font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">ASMAA</span>
              <span className="block font-light mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">MOHSEN</span>
            </h1>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-row md:flex-col gap-4 mt-8 md:mt-4"
              role="navigation"
              aria-label="Social media links"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-full group"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#c1121f]/40 group-hover:bg-[#c1121f]/5 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <social.icon className="w-5 h-5 relative z-10 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mb-12"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic font-space-grotesk mb-4">
            &quot;Crafting digital experiences through clean code and creative design&quot;
          </p>
          <p className="text-base sm:text-lg text-gray-400 font-space-grotesk">
            Full-stack developer with 3+ years of experience, specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.button 
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/20 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              aria-label="View my portfolio work"
            >
              <span className="relative z-10">View My Work ↓</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.button>
            
            <motion.button 
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me"
            >
              Contact Me ↓
            </motion.button>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 text-sm text-gray-400"
            role="status"
            aria-label="Scroll indicator"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-4 h-4 border border-white/20 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-white/40 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Featured Project Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
          whileHover={{ scale: 1.02 }}
          role="button"
          tabIndex={0}
          aria-label="View featured project"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Featured Project</h3>
          <p className="text-gray-400 text-sm">Check out my latest work: A website developed for Saaf Engineering Office and Consultancy,</p>
        </motion.div>

        {/* Tech stack indicators with hover effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400"
          role="list"
          aria-label="Technologies I work with"
        >
          {[
            'React', 'TypeScript', 'Node.js', 'Next.js', 
            'Tailwind CSS', 'MongoDB', 'PostgreSQL'
          ].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full border border-white/10 cursor-default"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              role="listitem"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>


      </div>
    </section>
  )
}

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles from "./Particles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "fullstack";
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects: Project[] = [
  {
    title: "Saf",
    description:
      "A professional website for Saaf Engineering Office and Consultancy that clearly presents the company's mission and services. It highlights key offerings like architectural design, planning, project supervision, and technical consulting. The site includes a clean, elegant design with easy navigation and a contact page featuring phone numbers, email addresses, and the office location for quick client access.",
    technologies: ["NEXT.JS", "TypeScript", "Tailwind CSS", "ShadCN"],
    image: "/saf.png",
    category: "web",
    liveUrl: "https://saf-firm.sa",
    githubUrl: "https://github.com/thyrexdev/saf",
  },
  {
    title: "Chill Time",
    description:
      "A Movie website that show it's details and rating, And it can be transform it to add a streaming service and monetize it",
    technologies: ["NEXT.JS", "TypeScript", "Tailwind CSS"],
    image: "/chill-time.png",
    category: "web",
    liveUrl: "https://chill-time-egy.vercel.app/",
    githubUrl: "https://github.com/thyrexdev/chill-time",
  },
  {
    title: "To do list",
    description:
      "A to do list website that can arrange tasks based on the priority with filters to see what is been done and the res",
    technologies: ["NEXT.JS", "TypeScript", "Tailwind CSS"],
    image: "/to-do-list.png",
    category: "web",
    liveUrl: "https://to-do-list-gray-nu-10.vercel.app/",
    githubUrl: "https://github.com/thyrexdev/to-do-list",
  },
];

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-start justify-start bg-black text-white p-8 md:p-16 relative overflow-hidden">
      {/* Particles background */}
      <Particles particleCount={isMobile ? 25 : 50} />

      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(193, 18, 31, 0.2) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {/* Tech-inspired decorative elements with royal red */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {/* Large gradient circle top right */}
        <motion.div
          className="absolute top-20 right-20 w-[500px] h-[500px]"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
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
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            repeatType: "loop",
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
            <span className="block font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              MY
            </span>
            <span className="block font-light mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">
              WORK
            </span>
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

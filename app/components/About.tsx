import Particles from './Particles'

export default function About() {
  return (
    <section className="min-h-screen flex items-start justify-start bg-black text-white p-8 md:p-16 relative overflow-hidden">
      {/* Particles background */}
      <Particles particleCount={50} />

      {/* Static background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(193, 18, 31, 0.2) 0%, transparent 50%)'
        }}
        aria-hidden="true"
      />

      {/* Tech-inspired decorative elements with royal red */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        {/* Large gradient circle top right */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Medium gradient circle bottom left */}
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Small gradient circle center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent rounded-full blur-[100px]" />
        </div>
      </div>

      <div className="flex flex-col h-full relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white leading-none font-space-grotesk mb-8 sm:mb-12">
            <span className="block font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">ABOUT</span>
            <span className="block font-light mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">ME</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic font-space-grotesk mb-4 sm:mb-6">
                &quot;Passionate about creating digital experiences that make a difference&quot;
              </p>
              <p className="text-base sm:text-lg text-gray-400 font-space-grotesk mb-4 sm:mb-6">
                I&ldquo;m a full-stack developer with over 3 years of experience in creating 
                modern web applications. My journey in tech has been driven by a constant desire 
                to learn and build things that make a difference.
              </p>
              <p className="text-base sm:text-lg text-gray-400 font-space-grotesk">
                I specialize in building scalable, performant applications using the latest 
                technologies. My approach combines technical expertise with a strong focus on 
                user experience and clean code principles.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium">Bachelor of Computer Science</h4>
                    <p className="text-gray-400">Tanta University, 2020-2024</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">Full Stack Development Certification</h4>
                    <p className="text-gray-400">MEC, 2020</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-white">Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-medium">AWS Certified Developer</h4>
                    <p className="text-gray-400">Amazon Web Services, 2022</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">MongoDB Professional Developer</h4>
                    <p className="text-gray-400">MongoDB University, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        {/* <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 font-space-grotesk">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Skills &</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c1121f] rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
} 

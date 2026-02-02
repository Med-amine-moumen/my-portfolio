import { Github, Linkedin, Mail, Twitter, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 transition-colors duration-300">
       <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full border border-blue-500/20 dark:border-blue-500/30">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">✨ Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-zinc-900 dark:text-white tracking-tight transition-colors">
              <span className="text-zinc-800 dark:text-white">Building</span> <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">digital</span>
              </span><br />
              <span className="text-zinc-800 dark:text-white">experiences that</span> <br />
              <span className="relative inline-block group">
                <span className="text-zinc-900 dark:text-white font-bold">matter</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full animate-gradient"></span>
              </span><span className="text-zinc-900 dark:text-white">.</span>
            </h1>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-normal leading-relaxed transition-colors">
              I'm <span className="text-zinc-900 dark:text-white font-bold transition-colors">Mohamed Amine Moumen</span>, a Full-Stack Developer. 
              I craft secure, scalable backends and fluid frontends using modern web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center mb-16">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-transparent border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 group-hover:text-white dark:group-hover:text-zinc-900 transition-colors">Contact Me</span>
                <div className="absolute inset-0 bg-zinc-900 dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="/resume.pdf"
                className="ml-4 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-2 font-medium transition-all"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 text-zinc-600 dark:text-zinc-500">
              <a href="https://github.com/moumen" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1" aria-label="GitHub">
                <Github className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              </a>
              <a href="https://linkedin.com/in/moumen" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animation-delay-100" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              </a>
              <a href="mailto:moumenmohamedamine8@gmail.com" className="group relative p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animation-delay-200" aria-label="Email">
                <Mail className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              </a>
              <a href="https://twitter.com/moumen" target="_blank" rel="noopener noreferrer" className="group relative p-3 rounded-full bg-zinc-100 dark:bg-zinc-800/50 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animation-delay-300" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wider uppercase">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-zinc-400 dark:border-zinc-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full animate-scroll mx-auto"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration - subtle gradients */}
      {/* Moved to App.jsx for global effect */}
    </section>
  )
}

export default Hero

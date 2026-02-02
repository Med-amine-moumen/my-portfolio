import { Code2, Palette, Zap, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Creating beautiful user interfaces"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Focused on delivering results"
    }
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">About Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight transition-colors relative inline-block">
            Behind the Code
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-gradient"></div>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl transition-colors mt-6">
            My approach to development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-5 text-zinc-600 dark:text-zinc-400 text-base md:text-lg transition-colors">
              <p className="leading-relaxed">
                I am a dedicated Full-Stack Developer based in <span className="text-zinc-900 dark:text-white font-bold transition-colors">Agadir, Morocco</span>. 
                Currently dealing with modern web architecture, I have developed a strong foundation in both frontend and backend technologies.
              </p>
              <p className="leading-relaxed">
                My passion lies in architecting secure systems. I don't just write code; I design solutions that are <span className="text-zinc-900 dark:text-white font-semibold">scalable and efficient</span>. 
                Whether it's optimizing API response times or managing complex state, I enjoy technical challenges.
              </p>
              
              <div className="pt-6">
                <h3 className="text-zinc-900 dark:text-white font-semibold mb-3 uppercase tracking-wider text-xs transition-colors">Languages</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Arabic, English (B2), French (B1)</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-8xl mb-4">�‍�💻</div>
                  <p className="text-xl text-gray-300 font-semibold">Mohamed Amine</p>
                  <p className="text-gray-400">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-white mb-3 flex justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 transition-colors">{item.title}</h3>
                <p className="text-zinc-400 text-sm transition-colors">{item.description}</p>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

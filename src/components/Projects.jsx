import { useState } from 'react'
import { ExternalLink, Github, Play } from 'lucide-react'
import DemoModal from '../demos/DemoModal'
import TodoApp from '../demos/TodoApp'
import WeatherApp from '../demos/WeatherApp'
import CalculatorApp from '../demos/CalculatorApp'
import CounterApp from '../demos/CounterApp'

const projects = [
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks with add, delete, and toggle complete features. Built with React hooks for state management.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Lucide Icons"],
    liveUrl: "#",
    githubUrl: "https://github.com/moumen",
    image: "✅",
    demoComponent: TodoApp
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with beautiful UI showing temperature, humidity, and wind speed for Moroccan cities.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Weather API"],
    liveUrl: "#",
    githubUrl: "https://github.com/moumen",
    image: "🌤️",
    demoComponent: WeatherApp
  },
  {
    title: "Calculator App",
    description: "Full-featured calculator with basic arithmetic operations, clean design, and responsive button layout.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Math.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/moumen",
    image: "🔢",
    demoComponent: CalculatorApp
  },
  {
    title: "Counter Application",
    description: "Interactive counter app demonstrating React state management with increment, decrement, and reset functionality.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Hooks"],
    liveUrl: "#",
    githubUrl: "https://github.com/moumen",
    image: "�",
    demoComponent: CounterApp
  }
]

const Projects = () => {
  const [selectedDemo, setSelectedDemo] = useState(null)

  const openDemo = (project) => {
    setSelectedDemo(project)
  }

  const closeDemo = () => {
    setSelectedDemo(null)
  }

  return (
    <section id="projects" className="py-24 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight transition-colors relative inline-block">
            Featured Projects
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-gradient"></div>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl transition-colors mt-6">
            A selection of my recent work in full-stack development and architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-transparent hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
              
              <div className="p-8 flex-1 flex flex-col items-start gap-6 relative z-10">
                 <div className="w-14 h-14 flex items-center justify-center bg-zinc-800 rounded-xl text-3xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm border border-zinc-700">
                    {project.image}
                 </div>

                 <div>
                    <h3 className="text-2xl font-bold text-white mb-3 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed mb-6 transition-colors">
                      {project.description}
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 rounded-full border border-zinc-700 hover:border-blue-500/50 transition-all hover:scale-105 cursor-default">
                        {tech}
                      </span>
                    ))}
                 </div>
                 
                 <div className="flex items-center gap-6 pt-6 mt-2 border-t border-zinc-200 dark:border-zinc-800 w-full">
                    <button 
                      onClick={() => openDemo(project)}
                      className="group/btn flex items-center gap-2 text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm font-semibold tracking-wide"
                    >
                      <Play className="w-4 h-4 group-hover/btn:scale-125 transition-transform" /> 
                      <span className="relative">
                        View Live Demo
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                    </button>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" /> Source Code
                    </a>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDemo && (
        <DemoModal
          isOpen={!!selectedDemo}
          onClose={closeDemo}
          title={selectedDemo.title}
        >
          <selectedDemo.demoComponent />
        </DemoModal>
      )}
    </section>
  )
}

export default Projects

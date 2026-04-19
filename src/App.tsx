import { useState, useEffect } from 'react';
import { Mail, ExternalLink, Play, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DemoModal from './components/demos/DemoModal';
import TodoApp from './components/demos/TodoApp';
import RockPaperScissors from './components/demos/RockPaperScissors';
import CalculatorApp from './components/demos/CalculatorApp';
import CounterApp from './components/demos/CounterApp';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'big-projects', label: 'Big Projects' },
  { id: 'mini-projects', label: 'Mini Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'hire-me', label: 'Hire Me' }
];

const miniProjectsData = [
  {
    id: 1,
    title: "Task Management App",
    description: "A productivity tool for managing tasks with add, delete, and toggle complete features. Built with React hooks for state management.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Lucide Icons"],
    demoComponent: TodoApp
  },
  {
    id: 2,
    title: "Mini-jeu 'Rock-Paper-Scissors' en Python",
    description: "Jeu interactif Pierre-Papier-Ciseaux développé en Python avec interface en ligne de commande. Comprend un système de score, plusieurs modes de jeu et une IA intelligente.",
    technologies: ["Python", "CLI", "Game Development", "Object-Oriented"],
    demoComponent: RockPaperScissors
  },
  {
    id: 3,
    title: "Calculator App",
    description: "Full-featured calculator with basic arithmetic operations, clean design, and responsive button layout.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Math.js"],
    demoComponent: CalculatorApp
  },
  {
    id: 4,
    title: "Counter Application",
    description: "Interactive counter app demonstrating React state management with increment, decrement, and reset functionality.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Hooks"],
    demoComponent: CounterApp
  }
];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "TypeScript", icon: "💙" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Firebase", icon: "🔥" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "Figma", icon: "🎯" },
      { name: "VS Code", icon: "💻" },
      { name: "REST API", icon: "🔌" }
    ]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<any>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${darkMode ? 'dark bg-primary-black text-primary-beige' : 'bg-primary-beige text-primary-black'}`}>
      
      {/* Interactive/Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Lined Grid Pattern */}
        <div className={`absolute inset-0 bg-[size:32px_32px] ${darkMode ? 'bg-[linear-gradient(to_right,#f5f5dc15_1px,transparent_1px),linear-gradient(to_bottom,#f5f5dc15_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#17171715_1px,transparent_1px),linear-gradient(to_bottom,#17171715_1px,transparent_1px)]'}`}></div>
        
        {/* Soft Glow */}
        <div className={`absolute left-0 right-0 top-[20%] -z-10 m-auto h-[400px] w-[600px] rounded-full blur-[120px] pointer-events-none ${darkMode ? 'bg-primary-beige opacity-[0.03]' : 'bg-white opacity-40'}`}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed w-full top-0 left-0 backdrop-blur-xl z-50 border-b transition-colors duration-300 ${darkMode ? 'bg-primary-black/80 border-primary-black-light' : 'bg-primary-beige/80 border-primary-beige-dark'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl">Portfolio</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {sections.map(section => (
                  <a key={section.id} href={`#${section.id}`} className="hover:text-accent-base px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                /* Sun Icon */
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                /* Moon Icon */
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-16">
        
        {/* Home Section */}
        <section id="home" className="min-h-[80vh] flex items-center justify-center pt-16">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-accent-subtle dark:bg-accent-subtle-dark rounded-full">
              <span className="text-sm font-semibold text-accent-base dark:text-accent-light">✨ Available for new opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">Hello, I'm <span className="text-accent-base dark:text-accent-light">Mohamed Amine Moumen</span></h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              A Full-Stack Developer. I craft clean, functional, secure, scalable backends and fluid frontends using modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a href="#mini-projects" className="px-6 py-3 bg-accent-base text-white rounded-lg hover:bg-accent-hover transition font-medium shadow-sm">View Work</a>
              <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium text-gray-800 dark:text-gray-200">Contact Me</a>
              <a href="/Mohamed-Amine-Moumen-CV.pdf" download="Mohamed-Amine-Moumen-CV.pdf" className="flex items-center gap-2 px-2 py-3 text-gray-600 dark:text-gray-300 hover:text-accent-base dark:hover:text-accent-base transition font-medium ml-2">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              
              <div className="flex gap-3 ml-2">
                 <a href="https://github.com/Med-amine-moumen" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-accent-base dark:hover:text-accent-light" />
                 </a>
                 <a href="https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-accent-base dark:hover:text-accent-light" />
                 </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-center border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate developer focusing on creating interactive and accessible web experiences. I constantly strive to improve my skills and deliver top-notch solutions.
          </p>
        </section>

        {/* Big Projects */}
        <section id="big-projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-10">Big Projects</h2>
          <div className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <p className="text-xl">Coming soon...</p>
            <p className="mt-2 text-sm">I will push my main project here soon!</p>
          </div>
        </section>

        {/* Mini Projects */}
        <section id="mini-projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-10 text-center">Mini Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {miniProjectsData.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col h-full hover:shadow-md transition">
                <h3 className="font-bold text-xl mb-3 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedDemo(project)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent-base hover:bg-accent-hover text-white rounded-xl font-medium transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-6 text-center dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map(skill => (
                    <span key={skill.name} className="px-4 py-2 bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light rounded-xl font-medium flex items-center gap-2 transition hover:scale-105 shadow-sm border border-accent-base/20 dark:border-accent-base/50">
                      <span className="text-lg">{skill.icon}</span> {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Feel free to reach out to me for any collaborations, or just a friendly hello!</p>
          <div className="flex flex-col gap-4 max-w-md mx-auto items-center">
            <a href="mailto:moumenmohamedamine8@gmail.com" className="flex items-center justify-center gap-3 w-full px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:opacity-90 transition">
              <Mail className="w-5 h-5" />
              moumenmohamedamine8@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full px-8 py-3 bg-accent-base text-white font-medium rounded-lg hover:bg-accent-hover transition">
              <FaLinkedin className="w-5 h-5" />
              Message me on LinkedIn
            </a>
          </div>
        </section>

        {/* Hire Me */}
        <section id="hire-me" className="py-20 px-4 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 text-center bg-accent-subtle dark:bg-accent-subtle-dark/50 rounded-3xl mt-10">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together (Coming Soon)</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I am currently open for new opportunities. Whether it's a freelance gig, a full-time position, or a cool project, let's discuss how we can make it happen.
          </p>
          <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-base" placeholder="full name" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-base" placeholder="How can I help you?" disabled></textarea>
            </div>
            <button type="button" className="w-full py-3 mt-2 bg-gray-400 text-white font-medium rounded-lg cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </form>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mohamed Amine Moumen. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Med-amine-moumen" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-base transition-colors" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-base transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:moumenmohamedamine8@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-base transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal 
        isOpen={!!selectedDemo} 
        onClose={() => setSelectedDemo(null)}
        title={selectedDemo?.title || ''}
      >
        {selectedDemo && selectedDemo.demoComponent && <selectedDemo.demoComponent />}
      </DemoModal>
      </div>
    </div>
  );
}

export default App;

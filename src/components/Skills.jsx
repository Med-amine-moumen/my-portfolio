
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 90, icon: "⚡" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "TypeScript", level: 75, icon: "💙" },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express", level: 75, icon: "🚀" },
      { name: "MongoDB", level: 70, icon: "🍃" },
      { name: "Firebase", level: 80, icon: "🔥" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "📦" },
      { name: "Figma", level: 80, icon: "🎯" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "REST API", level: 80, icon: "🔌" },
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight transition-colors relative inline-block">
            Technical Arsenal
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-gradient"></div>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl transition-colors mt-6">
            The languages, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-1 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="group/skill relative px-4 py-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-transparent transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover/skill:from-blue-500/10 group-hover/skill:via-purple-500/10 group-hover/skill:to-pink-500/10 transition-all duration-300 rounded-xl"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl opacity-0 group-hover/skill:opacity-30 blur-lg transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-2.5">
                      <span className="text-lg group-hover/skill:scale-125 transition-transform duration-300">{skill.icon}</span>
                      <span className="text-zinc-300 font-semibold text-sm group-hover/skill:text-white">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

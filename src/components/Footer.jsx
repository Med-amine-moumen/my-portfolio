import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm transition-colors">
              © 2026 Mohamed Amine Moumen.
            </p>
            <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-1 transition-colors">
              Designed with a focus on details.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/moumen" target="_blank" rel="noopener noreferrer"
               className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:moumenmohamedamine8@gmail.com"
               className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

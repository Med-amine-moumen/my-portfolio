import { useState, useEffect, useRef, useCallback } from 'react';
import { Mail, ExternalLink, Play, Download, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DemoModal from './components/demos/DemoModal';
import TodoApp from './components/demos/TodoApp';
import RockPaperScissors from './components/demos/RockPaperScissors';
import CalculatorApp from './components/demos/CalculatorApp';
import CounterApp from './components/demos/CounterApp';

const sections = [
  { id: 'home',          label: 'Home'          },
  { id: 'about',         label: 'About'         },
  { id: 'big-projects',  label: 'Projects'      },
  { id: 'mini-projects', label: 'Mini Projects' },
  { id: 'skills',        label: 'Skills'        },
  { id: 'contact',       label: 'Contact'       },
  { id: 'hire-me',       label: 'Hire Me'       },
];

const miniProjectsData = [
  { id: 1, title: 'Task Management App',           description: 'A productivity tool for managing tasks with add, delete, and toggle complete features. Built with React hooks for state management.',                                                           technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Lucide Icons'], demoComponent: TodoApp           },
  { id: 2, title: "Rock-Paper-Scissors (Python)",  description: "Jeu interactif Pierre-Papier-Ciseaux développé en Python avec interface en ligne de commande. Comprend un système de score, plusieurs modes de jeu et une IA intelligente.",              technologies: ['Python', 'CLI', 'Game Dev', 'OOP'],                    demoComponent: RockPaperScissors  },
  { id: 3, title: 'Calculator App',                description: 'Full-featured calculator with basic arithmetic operations, clean design, and responsive button layout.',                                                                                       technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Math.js'],      demoComponent: CalculatorApp      },
  { id: 4, title: 'Counter Application',           description: 'Interactive counter demonstrating React state management with increment, decrement, and reset functionality.',                                                                                  technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Hooks'],        demoComponent: CounterApp         },
];

const skillCategories = [
  { title: 'Frontend', icon: '🖥️',  skills: [{ name: 'HTML5', icon: '🌐' }, { name: 'CSS3', icon: '🎨' }, { name: 'JavaScript', icon: '⚡' }, { name: 'React', icon: '⚛️' }, { name: 'Tailwind CSS', icon: '💨' }, { name: 'TypeScript', icon: '💙' }] },
  { title: 'Backend',  icon: '⚙️',  skills: [{ name: 'Node.js', icon: '🟢' }, { name: 'Express', icon: '🚀' }, { name: 'MongoDB', icon: '🍃' }, { name: 'Firebase', icon: '🔥' }] },
  { title: 'Tools',    icon: '🛠️', skills: [{ name: 'Git', icon: '📦' }, { name: 'Figma', icon: '🎯' }, { name: 'VS Code', icon: '💻' }, { name: 'REST API', icon: '🔌' }] },
];

/* ── 3-D card tilt hook ─────────────────────────────────────────────── */
function useTilt() {
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateY(-6px) scale(1.01)`;
  }, []);
  const onLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
  }, []);
  return { onMouseMove: onMove, onMouseLeave: onLeave };
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDemo, setSelectedDemo]     = useState<any>(null);
  const [iconKey, setIconKey]               = useState(0);
  const [showScrollTop, setShowScrollTop]   = useState(false);

  /* sync dark class + persist */
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDark = () => { setDarkMode(p => !p); setIconKey(k => k + 1); };

  /* scroll-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* scroll-reveal — removes in-view on exit so animation replays each scroll */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
        } else {
          e.target.classList.remove('in-view');
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const tilt = useTilt();

  const cardBase =
    'tilt-card rounded-2xl border bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border';

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${darkMode ? 'dark bg-primary-black text-white' : 'bg-primary-beige text-gray-900'}`}>

      {/* ── Background ──────────────────────────────────────────────── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* grid */}
        <div className={`absolute inset-0 bg-[size:28px_28px] ${darkMode
          ? 'bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]'}`}
        />
        {/* glow orbs */}
        <div className={`float-glow absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] ${darkMode ? 'bg-accent-base opacity-[0.06]' : 'bg-accent-subtle opacity-60'}`} />
        <div className={`float-glow absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-[100px] ${darkMode ? 'bg-accent-base opacity-[0.04]' : 'bg-accent-subtle opacity-40'}`} style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="relative z-10">

        {/* ── Navigation ────────────────────────────────────────────── */}
        <nav className={`fixed w-full top-0 left-0 backdrop-blur-xl z-50 border-b transition-colors duration-300 ${darkMode ? 'bg-primary-black/85 border-dark-border' : 'bg-primary-beige/85 border-primary-beige-dark'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

              <span className="font-mono font-bold text-lg tracking-tight">
                <span className="text-accent-base">&lt;</span>
                Portfolio
                <span className="text-accent-base"> /&gt;</span>
              </span>

              <div className="hidden md:flex items-center space-x-1">
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`}
                    className="nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent-base dark:hover:text-accent-light text-gray-600 dark:text-gray-300"
                  >{s.label}</a>
                ))}
              </div>

              <button onClick={toggleDark}
                className={`p-2.5 rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 ${darkMode ? 'bg-dark-card border border-dark-border-soft text-accent-light hover:border-accent-base' : 'bg-white border border-gray-200 text-accent-dark hover:border-accent-base shadow-sm'}`}
                aria-label="Toggle Dark Mode"
              >
                <span key={iconKey} className="theme-icon-enter block w-5 h-5">
                  {darkMode
                    ? <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" className="text-yellow-400" /></svg>
                    : <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  }
                </span>
              </button>
            </div>
          </div>
        </nav>

        <main className="pt-20 pb-16">

          {/* ── Hero ──────────────────────────────────────────────────── */}
          <section id="home" className="min-h-[85vh] flex items-center justify-center pt-16 px-4">
            <div className="text-center max-w-3xl mx-auto" data-animate>

              {/* terminal badge */}
              <div className="inline-flex items-center gap-2 font-mono text-xs mb-6 px-4 py-2 rounded-lg border bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border text-gray-500 dark:text-gray-400 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
                <span><span className="text-accent-base dark:text-accent-light">const</span> developer = <span className="text-green-500 dark:text-green-400">"Mohamed Amine"</span>;<span className="blink ml-0.5 text-accent-base">|</span></span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5 leading-tight">
                Hello, I'm{' '}
                <span className="text-accent-base dark:text-accent-light">
                  Mohamed Amine
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Full-Stack Developer — I craft clean, scalable backends and fluid frontends using modern web technologies.
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <a href="#big-projects"
                  className="px-7 py-3 bg-accent-base text-white rounded-xl font-semibold hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(192,123,62,0.4)] active:scale-95 transition-all duration-200 shadow-sm"
                >View Work</a>
                <a href="#contact"
                  className="px-7 py-3 border border-gray-300 dark:border-dark-border-soft rounded-xl font-semibold hover:border-accent-base dark:hover:border-accent-base hover:text-accent-base dark:hover:text-accent-light hover:scale-105 active:scale-95 transition-all duration-200 text-gray-700 dark:text-gray-200"
                >Contact Me</a>
                <a href="/Mohamed-Amine-Moumen-CV.pdf" download
                  className="flex items-center gap-2 px-4 py-3 text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-105 active:scale-95 transition-all duration-200 font-medium"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
                <div className="flex gap-3">
                  <a href="https://github.com/Med-amine-moumen" target="_blank" rel="noreferrer"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-accent-base dark:hover:border-accent-base hover:scale-110 hover:-rotate-6 active:scale-95 transition-all duration-200"
                  ><FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" /></a>
                  <a href="https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/" target="_blank" rel="noreferrer"
                    className="p-3 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-accent-base dark:hover:border-accent-base hover:scale-110 hover:rotate-6 active:scale-95 transition-all duration-200"
                  ><FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" /></a>
                </div>
              </div>
            </div>
          </section>

          {/* ── About ─────────────────────────────────────────────────── */}
          <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-center border-t border-gray-200 dark:border-dark-border">
            <h2 className="text-3xl font-bold mb-6" data-animate>About Me</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto" data-animate data-animate-delay="1">
              I'm a passionate developer focusing on creating interactive and accessible web experiences. I constantly strive to improve my skills and deliver top-notch solutions.
            </p>
          </section>

          {/* ── Big Projects ──────────────────────────────────────────── */}
          <section id="big-projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-12" data-animate>Big Projects</h2>

            <div className="flex flex-col gap-8 w-full">

              {/* E-Commerce */}
              <div className={`${cardBase} p-8 flex flex-col lg:flex-row items-center gap-8`} data-animate {...tilt}>
                <div className="flex-1 w-full order-2 lg:order-1 relative rounded-xl overflow-hidden border border-gray-200 dark:border-dark-border flex flex-col bg-gray-50 dark:bg-primary-black-light group shadow-inner">
                  <div className="h-8 bg-gray-200 dark:bg-dark-card w-full flex items-center px-4 gap-1.5 border-b border-gray-200 dark:border-dark-border">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="relative aspect-video overflow-hidden">
                    <a href="https://ecommerce-amine.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                        alt="E-Commerce Platform"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <h3 className="font-bold text-2xl mb-3">Full-Stack E-Commerce Platform</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                    A modern e-commerce application featuring product browsing, shopping cart, and a seamless checkout experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'React', 'Tailwind CSS', 'MongoDB'].map(t => (
                      <span key={t} className="px-3 py-1 font-mono text-xs rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30 hover:border-accent-base transition-colors duration-150">{t}</span>
                    ))}
                  </div>
                  <a href="https://ecommerce-amine.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-base hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_18px_rgba(192,123,62,0.35)] active:scale-95 text-white rounded-xl font-medium transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Live Site
                  </a>
                </div>
              </div>

              {/* Surf Camp SaaS */}
              <div className={`${cardBase} p-8 flex flex-col lg:flex-row-reverse items-center gap-8 overflow-hidden relative`} data-animate data-animate-delay="1" {...tilt}>
                <div className="absolute top-5 -right-10 bg-accent-base text-white px-10 py-1 rotate-45 text-[10px] font-bold tracking-widest z-10 uppercase">
                  Coming Soon
                </div>
                <div className="flex-1 w-full relative rounded-xl overflow-hidden border border-gray-200 dark:border-dark-border flex flex-col bg-gray-50 dark:bg-primary-black-light group shadow-inner">
                  <div className="h-8 bg-gray-200 dark:bg-dark-card w-full flex items-center px-4 gap-1.5 border-b border-gray-200 dark:border-dark-border opacity-70">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="relative aspect-video overflow-hidden flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Surf Camp SaaS"
                      className="object-cover w-full h-full opacity-35 blur-[2px] transform group-hover:scale-105 transition-transform duration-700 grayscale"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm p-5 rounded-xl border border-gray-200 dark:border-dark-border shadow-sm text-center">
                        <svg className="w-10 h-10 mx-auto text-accent-base mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span className="font-bold text-sm text-gray-700 dark:text-gray-200">In Development</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl mb-3 flex items-center gap-3">
                    Surf Camp SaaS
                    <span className="font-mono px-2 py-0.5 text-xs rounded bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/30">WIP</span>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm leading-relaxed">
                    A comprehensive management platform for surf camps. Booking management, equipment tracking, student progress, and scheduling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'].map(t => (
                      <span key={t} className="px-3 py-1 font-mono text-xs rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30">{t}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-dark-card-hover text-gray-400 dark:text-gray-500 rounded-xl font-medium cursor-not-allowed border border-gray-200 dark:border-dark-border">
                    <ExternalLink className="w-4 h-4 opacity-40" /> Coming Soon
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ── Mini Projects ─────────────────────────────────────────── */}
          <section id="mini-projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border">
            <h2 className="text-3xl font-bold mb-12 text-center" data-animate>Mini Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {miniProjectsData.map((project, i) => (
                <div key={project.id}
                  className={`${cardBase} p-6 flex flex-col h-full`}
                  data-animate data-animate-delay={String(i + 1) as any}
                  {...tilt}
                >
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map(tech => (
                      <span key={tech} className="font-mono px-2.5 py-1 text-xs rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/15 dark:border-accent-base/25 hover:border-accent-base transition-colors duration-150">{tech}</span>
                    ))}
                  </div>
                  <button onClick={() => setSelectedDemo(project)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-accent-base hover:bg-accent-hover hover:shadow-[0_0_16px_rgba(192,123,62,0.3)] hover:scale-[1.02] active:scale-95 text-white rounded-xl font-medium transition-all duration-200"
                  >
                    <Play className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* ── Skills ────────────────────────────────────────────────── */}
          <section id="skills" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border">
            <h2 className="text-3xl font-bold mb-12 text-center" data-animate>Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat, i) => (
                <div key={cat.title}
                  className={`${cardBase} p-6`}
                  data-animate data-animate-delay={String(i + 1) as any}
                  {...tilt}
                >
                  <h3 className="text-lg font-bold mb-5 text-center border-b border-gray-100 dark:border-dark-border pb-3">
                    <span className="mr-2">{cat.icon}</span>{cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    {cat.skills.map(skill => (
                      <span key={skill.name}
                        className="px-3 py-1.5 font-mono text-xs rounded-lg flex items-center gap-1.5 bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30 hover:scale-110 hover:-translate-y-0.5 hover:bg-accent-base hover:text-white dark:hover:bg-accent-base dark:hover:text-white hover:border-accent-base hover:shadow-[0_4px_12px_rgba(192,123,62,0.35)] transition-all duration-200 cursor-default"
                      >
                        <span>{skill.icon}</span>{skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Contact ───────────────────────────────────────────────── */}
          <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center border-t border-gray-200 dark:border-dark-border">
            <h2 className="text-3xl font-bold mb-4" data-animate>Contact</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10" data-animate data-animate-delay="1">
              Feel free to reach out for collaborations, opportunities, or just a hello!
            </p>
            <div className="flex flex-col gap-4 max-w-sm mx-auto" data-animate data-animate-delay="2">
              <a href="mailto:moumenmohamedamine8@gmail.com"
                className="flex items-center justify-center gap-3 w-full px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:scale-[1.03] hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                <Mail className="w-4 h-4" /> moumenmohamedamine8@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full px-8 py-3.5 bg-accent-base hover:bg-accent-hover text-white font-medium rounded-xl hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(192,123,62,0.35)] active:scale-95 transition-all duration-200"
              >
                <FaLinkedin className="w-4 h-4" /> Message me on LinkedIn
              </a>
            </div>
          </section>

          {/* ── Hire Me ───────────────────────────────────────────────── */}
          <section id="hire-me"
            className="py-20 px-4 max-w-4xl mx-auto border-t border-gray-200 dark:border-dark-border text-center mt-10"
            data-animate
          >
            <div className={`${cardBase} p-10`}>
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                Open for freelance gigs, full-time roles, or just a cool project. Let's discuss.
              </p>
              <form className="max-w-md mx-auto flex flex-col gap-4 text-left">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-600 dark:text-gray-400">Name</label>
                  <input type="text" disabled placeholder="Full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-primary-black text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-base cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-gray-600 dark:text-gray-400">Message</label>
                  <textarea rows={4} disabled placeholder="How can I help you?"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-primary-black text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-base cursor-not-allowed resize-none" />
                </div>
                <button type="button" disabled
                  className="w-full py-3 bg-gray-200 dark:bg-dark-card text-gray-400 font-medium rounded-xl cursor-not-allowed border border-gray-200 dark:border-dark-border"
                >Coming Soon</button>
              </form>
            </div>
          </section>

        </main>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <footer className="py-8 border-t border-gray-200 dark:border-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-sm text-gray-400">
              &copy; {new Date().getFullYear()} <span className="text-accent-base">Mohamed Amine</span> — All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="https://github.com/Med-amine-moumen" target="_blank" rel="noreferrer"
                className="text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-125 hover:-rotate-6 transition-all duration-200" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-amine-moumen-2681702a6/" target="_blank" rel="noreferrer"
                className="text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-125 hover:rotate-6 transition-all duration-200" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:moumenmohamedamine8@gmail.com"
                className="text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:scale-125 transition-all duration-200" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* ── Scroll-to-top button ──────────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-top-btn p-3 rounded-xl bg-accent-base hover:bg-accent-hover text-white shadow-lg hover:shadow-[0_0_20px_rgba(192,123,62,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Demo Modal */}
      <DemoModal isOpen={!!selectedDemo} onClose={() => setSelectedDemo(null)} title={selectedDemo?.title || ''}>
        {selectedDemo?.demoComponent && <selectedDemo.demoComponent />}
      </DemoModal>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef, useCallback } from 'react';
import { Mail, ExternalLink, Play, Download, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DemoModal from './components/demos/DemoModal';
import TodoApp from './components/demos/TodoApp';
import RockPaperScissors from './components/demos/RockPaperScissors';
import CalculatorApp from './components/demos/CalculatorApp';
import CounterApp from './components/demos/CounterApp';
import { ParticleBackground } from './components/ParticleBackground';

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
  const [scrolled, setScrolled]             = useState(false);

  /* sync dark class + persist */
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDark = () => { setDarkMode(p => !p); setIconKey(k => k + 1); };

  /* scroll-to-top visibility + floating nav */
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 420);
      setScrolled(window.scrollY > 60);
    };
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
          ? 'bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]'
          : 'bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)]'}`}
        />
        {/* subtle corner glows */}
        <div className={`float-glow absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] ${darkMode ? 'bg-accent-base opacity-[0.05]' : 'bg-accent-subtle opacity-50'}`} />
        <div className={`float-glow absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[120px] ${darkMode ? 'bg-accent-base opacity-[0.03]' : 'bg-accent-subtle opacity-30'}`} style={{ animationDelay: '2.5s' }} />
      </div>
      {/* ── Interactive particles ────────────────────────────────────── */}
      <ParticleBackground darkMode={darkMode} />

      <div className="relative z-10">

        {/* ── Navigation ────────────────────────────────────────────── */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
          <div className={`flex items-center justify-between h-12 px-4 rounded-2xl border backdrop-blur-xl shadow-lg transition-colors duration-300 ${
            darkMode
              ? 'bg-primary-black/95 border-dark-border shadow-black/60'
              : 'bg-white/95 border-gray-200 shadow-gray-200/80'
          }`}>

            <span className="font-mono font-bold text-sm tracking-tight shrink-0">
              <span className="text-accent-base">&lt;</span>
              Portfolio
              <span className="text-accent-base"> /&gt;</span>
            </span>

            <div className="hidden md:flex items-center gap-0.5">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`}
                  className="nav-link relative px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 hover:text-accent-base dark:hover:text-accent-light text-gray-600 dark:text-gray-300 rounded-lg hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark"
                >{s.label}</a>
              ))}
            </div>

            <button onClick={toggleDark}
              className={`p-1.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 shrink-0 ${darkMode ? 'bg-dark-card border border-dark-border-soft text-accent-light hover:border-accent-base' : 'bg-gray-100 border border-gray-200 text-accent-dark hover:border-accent-base'}`}
              aria-label="Toggle Dark Mode"
            >
              <span key={iconKey} className="theme-icon-enter block w-4 h-4">
                {darkMode
                  ? <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" className="text-yellow-400" /></svg>
                  : <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                }
              </span>
            </button>
          </div>
        </nav>

        <main className="pt-24 pb-16">

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
          <section id="big-projects" className="py-20 px-4 max-w-5xl mx-auto border-t border-gray-200 dark:border-dark-border">
            <h2 className="text-3xl font-bold mb-2 text-center" data-animate>My Projects</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase mb-12 font-medium" data-animate data-animate-delay="1">Things I've Built</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* E-Commerce */}
              <div className={`${cardBase} flex flex-col overflow-hidden group`} data-animate {...tilt}>
                {/* browser chrome */}
                <div className="bg-gray-100 dark:bg-dark-card border-b border-gray-200 dark:border-dark-border flex flex-col">
                  <div className="h-7 flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 font-mono text-[9px] text-gray-400 dark:text-gray-500 truncate">ecommerce-amine.vercel.app</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-primary-black-light">
                    <img src="https://api.microlink.io/?url=https://ecommerce-amine.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
                      alt="E-Commerce Platform"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80'; }}
                    />
                  </div>
                </div>
                {/* content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1.5">Clothing E-Commerce Website</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                    Full-stack e-commerce website for clothing, featuring product browsing, cart functionality, user auth, and Stripe checkout.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'].map(t => (
                      <span key={t} className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-dark-border">
                    <a href="https://ecommerce-amine.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark transition-all duration-200"
                      title="Visit Live Site"
                    ><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>

              {/* Recipe App */}
              <div className={`${cardBase} flex flex-col overflow-hidden group`} data-animate data-animate-delay="1" {...tilt}>
                <div className="bg-gray-100 dark:bg-dark-card border-b border-gray-200 dark:border-dark-border flex flex-col">
                  <div className="h-7 flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 font-mono text-[9px] text-gray-400 dark:text-gray-500 truncate">recipe-app-moumen.vercel.app</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-primary-black-light">
                    <img src="https://api.microlink.io/?url=https://recipe-app-moumen.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
                      alt="Recipe App"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&q=80'; }}
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1.5">StudyFlow Website</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                    Study management web app with task organization and a built-in Pomodoro timer to improve focus and productivity.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['React', 'Node.js', 'MongoDB', 'Express.js'].map(t => (
                      <span key={t} className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-dark-border">
                    <a href="https://recipe-app-moumen.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark transition-all duration-200"
                      title="Visit Live Site"
                    ><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>

              {/* Surf Camp SaaS */}
              <div className={`${cardBase} flex flex-col overflow-hidden group relative`} data-animate data-animate-delay="2" {...tilt}>
                <div className="absolute top-4 right-4 z-10 font-mono px-2 py-0.5 text-[10px] rounded bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/30 font-bold uppercase tracking-wider">WIP</div>
                <div className="bg-gray-100 dark:bg-dark-card border-b border-gray-200 dark:border-dark-border flex flex-col">
                  <div className="h-7 flex items-center px-3 gap-1.5 opacity-60">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 font-mono text-[9px] text-gray-400 dark:text-gray-500">surf-camp.vercel.app</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-primary-black-light flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Surf Camp SaaS"
                      className="object-cover w-full h-full opacity-30 blur-[1px] grayscale group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200 dark:border-dark-border text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm">In Development</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-1.5">Surf Camp SaaS</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                    Comprehensive management platform for surf camps — bookings, session scheduling, equipment tracking, and instructor management.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'].map(t => (
                      <span key={t} className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-dark-border">
                    <span className="p-2 rounded-lg text-gray-300 dark:text-gray-600 cursor-not-allowed" title="Coming Soon">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* PoolHomies */}
              <div className={`${cardBase} flex flex-col overflow-hidden group`} data-animate data-animate-delay="3" {...tilt}>
                <div className="bg-gray-100 dark:bg-dark-card border-b border-gray-200 dark:border-dark-border flex flex-col">
                  <div className="h-7 flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 font-mono text-[9px] text-gray-400 dark:text-gray-500 truncate">poolhomies.vercel.app</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden bg-gray-50 dark:bg-primary-black-light">
                    <img
                      src="https://api.microlink.io/?url=https://poolhomies.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
                      alt="PoolHomies"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611095970980-20f304cfe37b?w=1200&q=80'; }}
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-lg">PoolHomies</h3>
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 uppercase tracking-wide">Live</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                    Real-time pool match tracker for friend groups — live animated leaderboard, streak tracking, head-to-head stats, and instant match logging via Supabase subscriptions.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'].map(t => (
                      <span key={t} className="px-2.5 py-1 font-mono text-[10px] rounded-md bg-accent-subtle dark:bg-accent-subtle-dark text-accent-dark dark:text-accent-light border border-accent-base/20 dark:border-accent-base/30">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-dark-border">
                    <a href="https://poolhomies.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-accent-base dark:hover:text-accent-light hover:bg-accent-subtle dark:hover:bg-accent-subtle-dark transition-all duration-200"
                      title="Visit Live Site"
                    ><ExternalLink className="w-4 h-4" /></a>
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

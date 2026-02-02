import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

function App() {
  return (
    <>
      <Loader />
      {/* Global Background Animation - Subtle Gradient Mesh with Confetti */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs with slower, smoother animation */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/[0.08] via-purple-500/[0.05] to-transparent dark:from-blue-500/[0.03] dark:via-purple-500/[0.02] dark:to-transparent rounded-full blur-3xl animate-blob opacity-60 dark:opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/[0.06] via-pink-500/[0.04] to-transparent dark:from-purple-500/[0.025] dark:via-pink-500/[0.015] dark:to-transparent rounded-full blur-3xl animate-blob animation-delay-2000 opacity-50 dark:opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-cyan-500/[0.05] via-blue-500/[0.03] to-transparent dark:from-cyan-500/[0.02] dark:via-blue-500/[0.01] dark:to-transparent rounded-full blur-3xl animate-blob animation-delay-4000 opacity-40 dark:opacity-25"></div>
        
        {/* Floating Confetti Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const floatX = (Math.random() - 0.5) * 2; // -1 to 1
            const rotate = Math.random();
            return (
              <div
                key={i}
                className="absolute animate-float-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: '-10px',
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${12 + Math.random() * 8}s`,
                  '--float-x': floatX,
                  '--rotate': rotate,
                }}
              >
                <div
                  className="w-[20px] h-[2px] rounded-full"
                  style={{
                    backgroundColor: [
                      'rgba(59, 130, 246, 0.4)',   // blue
                      'rgba(139, 92, 246, 0.4)',   // purple
                      'rgba(236, 72, 153, 0.4)',   // pink
                      'rgba(34, 197, 94, 0.4)',    // green
                      'rgba(6, 182, 212, 0.4)',    // cyan
                    ][i % 5],
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              </div>
            );
          })}
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] opacity-30"></div>
      </div>

      <div className="min-h-screen relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App

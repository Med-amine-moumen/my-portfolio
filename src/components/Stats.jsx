import { useState, useEffect } from 'react'
import { Award, Code, Coffee, Users } from 'lucide-react'

const Stats = () => {
  const stats = [
    { icon: <Code className="w-8 h-8" />, end: 50, label: "Projects Completed", suffix: "+" },
    { icon: <Coffee className="w-8 h-8" />, end: 1000, label: "Cups of Coffee", suffix: "+" },
    { icon: <Users className="w-8 h-8" />, end: 20, label: "Happy Clients", suffix: "+" },
    { icon: <Award className="w-8 h-8" />, end: 5, label: "Awards Won", suffix: "" }
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increments = stats.map(stat => stat.end / steps)
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setCounts(prevCounts =>
        prevCounts.map((count, i) => {
          const newCount = increments[i] * currentStep
          return newCount >= stats[i].end ? stats[i].end : Math.floor(newCount)
        })
      )

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 text-center group"
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

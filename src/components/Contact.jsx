import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., email service, backend API)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight transition-colors relative inline-block">
            Let's work together.
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-gradient"></div>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl transition-colors mt-6">
            I'm currently looking for new opportunities. Whether you have a specific project or just want to discuss ideas, feel free to reach out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-8 text-zinc-900 dark:text-white transition-colors">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="p-3 bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform shadow-sm border border-zinc-700">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white text-sm transition-colors">Email</h4>
                  <a href="mailto:moumenmohamedamine8@gmail.com" 
                     className="text-zinc-400 hover:text-blue-400 transition-colors text-sm">
                    moumenmohamedamine8@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-transparent hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="p-3 bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform shadow-sm border border-zinc-700">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white text-sm transition-colors">Phone</h4>
                  <a href="tel:+212688510193" 
                     className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
                    +212 688 510 193
                  </a>
                </div>
              </div>
              
              <div className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-transparent hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-red-500/10 transition-all duration-300 backdrop-blur-sm">
                <div className="p-3 bg-zinc-800 rounded-xl group-hover:scale-110 transition-transform shadow-sm border border-zinc-700">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white text-sm transition-colors">Location</h4>
                  <p className="text-zinc-400 transition-colors text-sm">Agadir, Morocco</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold mb-2 text-zinc-700 dark:text-zinc-300 uppercase tracking-wider transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/50 text-zinc-900 dark:text-white transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold mb-2 text-zinc-700 dark:text-zinc-300 uppercase tracking-wider transition-colors">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/50 text-zinc-900 dark:text-white transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold mb-2 text-zinc-700 dark:text-zinc-300 uppercase tracking-wider transition-colors">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-800 rounded-xl focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/50 text-zinc-900 dark:text-white transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group relative w-full px-6 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm overflow-hidden hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

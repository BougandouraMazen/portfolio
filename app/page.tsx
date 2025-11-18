import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Facebook, Mail, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Mazen</h1>
          <nav className="flex gap-8 items-center">
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900 transition">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              System Architect & Senior Developer
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              I design and build complex projects from scratch with AI. Computer Science student dedicated to creating scalable, innovative solutions.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline">
                <a href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/images/mazen.jpg"
                alt="Mazen Achraf"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h3>
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-slate-200">
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            I'm <span className="font-semibold text-slate-900">Bougandoura Mazen Achraf</span>, a senior developer with 6 months of professional experience and a Computer Science student. I specialize in designing and building complex projects from scratch, leveraging AI and modern technologies to create scalable and innovative solutions.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            My expertise spans system architecture, full-stack development, and AI integration. I'm passionate about solving real-world problems through technology and continuously learning new approaches to software design.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">Featured Project</h3>
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm h-64">
                <Image
                  src="/images/storie.png"
                  alt="Dorossi Teacher"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-4">Dorossi Teacher</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Dorossi Teacher helps private teachers and tutors manage groups, sessions, attendance, and payments—fast and reliably. Get in-app help anytime by asking the Dorossi Agent.
              </p>
              
              <div className="space-y-3 mb-8">
                <h5 className="font-semibold text-slate-900">Key Features:</h5>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    Students & groups management
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    Sessions & attendance tracking
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    Payment tracking in DZD
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    Progress monitoring & insights
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    Multilingual support (EN, FR, AR)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    Built-in AI Agent assistance
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://dorossi.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://play.google.com/store/apps/details?id=com.dorossi.teacher&pcampaignid=web_share&pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Play Store
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center">Let's Connect</h3>
        <div className="bg-white rounded-xl p-12 shadow-lg border border-slate-200">
          <p className="text-center text-slate-600 mb-8 text-lg">
            Interested in working together or just want to say hello? Reach out through any of these channels.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/BougandouraMazen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 rounded-lg transition flex items-center gap-2"
            >
              <Github className="w-6 h-6" />
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="https://www.facebook.com/share/1DG1NFq3i6/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 rounded-lg transition flex items-center gap-2"
            >
              <Facebook className="w-6 h-6" />
              <span className="font-semibold">Facebook</span>
            </a>
            <a
              href="mailto:support@dorossi.app"
              className="p-4 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 rounded-lg transition flex items-center gap-2"
            >
              <Mail className="w-6 h-6" />
              <span className="font-semibold">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2025 Bougandoura Mazen Achraf. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

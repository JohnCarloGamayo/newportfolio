'use client'

import { Mail, MapPin, ExternalLink, Github, Linkedin, FileText, Star, Code2, Globe, MessageCircle, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Certificates from '@/components/Certificates'
import ParticlesBackground from '@/components/ParticlesBackground'
import AIChatbot from '@/components/AIChatbot'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />
      
      {/* Gradient Accent Overlays */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-5" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-5" />

      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="transform transition-all hover:scale-[1.01]">
              <About />
            </div>
            <div className="transform transition-all hover:scale-[1.01] animation-delay-100">
              <Projects />
            </div>
            <div className="transform transition-all hover:scale-[1.01] animation-delay-200">
              <TechStack />
            </div>
            <div className="transform transition-all hover:scale-[1.01] animation-delay-300">
              <Skills />
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-4 lg:self-start animate-in fade-in slide-in-from-right duration-700">
            <div className="transform transition-all hover:scale-[1.02]">
              <Experience />
            </div>
            <div className="transform transition-all hover:scale-[1.02] animation-delay-100">
              <Education />
            </div>
            <div className="transform transition-all hover:scale-[1.02] animation-delay-200">
              <Certificates />
            </div>
            <div className="transform transition-all hover:scale-[1.02] animation-delay-300">
              <Contact />
            </div>
          </div>
        </div>
      </main>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="relative z-10 mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="py-8 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
            <p className="animate-in fade-in duration-1000">© 2025 John Carlo Gamayo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

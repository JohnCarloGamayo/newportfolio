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
import ParticlesBackground from '@/components/ParticlesBackground'
import AIChatbot from '@/components/AIChatbot'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Animated Particles Background */}
      <ParticlesBackground />

      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <About />
            <TechStack />
            <Projects />
            <Skills />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Experience />
            <Education />
            <Contact />
          </div>
        </div>
      </main>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© 2025 John Carlo Gamayo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

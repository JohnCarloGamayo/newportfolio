'use client'

import { User } from 'lucide-react'

export default function About() {
  return (
    <section className="fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <User size={20} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About</h2>
      </div>
      
      <div className="space-y-4 text-foreground leading-relaxed bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
        <p>
          I'm a full-stack AI developer focused on building practical, production-ready systems from frontend to backend.
          I design and ship web applications that combine great user experience with reliable APIs, security controls,
          and deployment workflows.
        </p>
        
        <p>
          My current work is centered on AI-powered products using LLM integrations, RAG pipelines, OCR-based document
          processing, and structured data workflows. I actively build and maintain CI/CD-ready systems using React,
          Next.js, Vite, FastAPI, and modern cloud deployment platforms.
        </p>
        
        <p>
          I enjoy solving real-world problems by turning complex requirements into clean architecture and usable products.
          My focus is scalable full-stack engineering with AI, secure API design, and continuous improvement from idea to
          live deployment.
        </p>
      </div>
    </section>
  )
}

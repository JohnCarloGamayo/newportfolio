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
          I'm a full-stack developer with hands-on experience in building end-to-end web systems, 
          e-commerce platforms, and mobile applications. Proficient in modern web and mobile technologies, 
          system architecture, and deployment. I work on projects including building modern web applications, 
          mobile apps, and optimizing user experiences across platforms.
        </p>
        
        <p>
          Currently an intern at Lightweight Global Tech Solution Corp, I develop and maintain full-stack 
          web applications using TypeScript (frontend & backend) and Python. I integrate third-party APIs, 
          implement OCR solutions, and collaborate on AI feature integration including chatbots and 
          recommendation systems.
        </p>
        
        <p>
          I focus on strong problem-solving skills, scalable application design, and delivering production-ready 
          solutions. Experienced in UI/UX design, database management, and system architecture. I'm passionate 
          about continuous learning and building solutions that make a real impact.
        </p>
      </div>
    </section>
  )
}

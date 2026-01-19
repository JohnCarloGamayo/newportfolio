'use client'

import { Code2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function TechStack() {
  const techStacks = [
    {
      category: "Frontend",
      tech: ["JavaScript", "TypeScript", "React", "Bootstrap 5"]
    },
    {
      category: "Backend",
      tech: ["Node.js", "Python", "Django", "REST API"]
    },
    {
      category: "Mobile & Tools",
      tech: ["Unity (C#)", "Android", "Git", "Figma"]
    },
    {
      category: "Deployment & Cloud",
      tech: ["Cloudflare", "Reverse Proxy", "Server Management"]
    }
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Code2 size={20} />
          <h2 className="text-2xl font-bold">Tech Stack</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {techStacks.map((stack, idx) => (
          <Card key={idx} className="p-4 interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50">
            <h3 className="font-bold text-foreground mb-3">{stack.category}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.tech.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

'use client'

import { Code2 } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function TechStack() {
  const techStacks = [
    {
      category: "Frontend",
      tech: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "Bootstrap 5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      category: "Backend",
      tech: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
      ]
    },
    {
      category: "Database & Services",
      tech: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }
      ]
    },
    {
      category: "Deployment & Tools",
      tech: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "Render", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg" },
        { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    }
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <Code2 size={20} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Stack</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {techStacks.map((stack, idx) => (
          <Card key={idx} className="p-6 interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors">{stack.category}</h3>
            <div className="flex flex-wrap gap-4">
              {stack.tech.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-primary/20 cursor-pointer group/item"
                  title={item.name}
                >
                  <img 
                    src={item.logo} 
                    alt={item.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-xs font-medium text-foreground group-hover/item:text-primary">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

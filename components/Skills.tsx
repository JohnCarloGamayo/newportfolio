'use client'

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Skills() {
  const skills = [
    {
      category: "Languages & Frameworks",
      items: ["JavaScript", "TypeScript", "Python", "SQL", "Node.js", "React", "Django"]
    },
    {
      category: "Web & Mobile Development",
      items: ["REST API", "HTML5", "CSS3", "Bootstrap 5", "Android Development", "Mobile UI/UX"]
    },
    {
      category: "Tools & Version Control",
      items: ["Git", "GitHub", "Figma", "Canva", "VS Code", "Postman"]
    },
    {
      category: "Specializations",
      items: ["System Architecture", "API Integration", "OCR", "AI Integration", "Debugging & Testing", "UI/UX Design"]
    }
  ]

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <Star size={20} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
      </div>
      
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <Card key={idx} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-lg text-foreground mb-4 group-hover:text-primary transition-colors">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full font-medium"
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

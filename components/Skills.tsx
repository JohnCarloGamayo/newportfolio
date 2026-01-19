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
      <div className="flex items-center gap-2 mb-4">
        <Star size={20} />
        <h2 className="text-2xl font-bold">Skills</h2>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <Card key={idx} className="p-4">
            <h3 className="font-bold text-foreground mb-3 text-sm">{skill.category}</h3>
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

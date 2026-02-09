'use client'

import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const skills = [
    {
      category: "Languages & Frameworks",
      items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL", "Node.js", "React", "Django", "FastAPI", "Vite"]
    },
    {
      category: "Web & Mobile Development",
      items: ["REST API", "HTML5", "CSS3", "Bootstrap 5", "Vanilla PHP", "Android Development", "Mobile UI/UX"]
    },
    {
      category: "Database & Cloud Services",
      items: ["MySQL", "PostgreSQL", "SQLite", "Supabase", "MongoDB"]
    },
    {
      category: "Tools & Deployment",
      items: ["Git", "GitHub", "Vercel", "Railway", "Render", "Figma", "Canva", "VS Code", "Postman"]
    },
    {
      category: "Specializations",
      items: ["System Architecture", "API Integration", "OCR", "AI Integration", "Google AdSense", "Debugging & Testing", "UI/UX Design"]
    }
  ]

  const allItems = skills.flatMap(skill => skill.items)
  const displayItems = selectedCategory === "All" 
    ? allItems 
    : skills.find(s => s.category === selectedCategory)?.items || []

  return (
    <section>
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <Star size={20} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</h2>
        </div>
        
        {/* Dropdown Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm font-medium cursor-pointer hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="All">All</option>
          {skills.map((skill, idx) => (
            <option key={idx} value={skill.category}>
              {skill.category}
            </option>
          ))}
        </select>
      </div>
      
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 rounded-xl">
        <div className="flex flex-wrap gap-2">
          {displayItems.map((item, i) => (
            <span 
              key={i}
              className="px-4 py-2 bg-accent text-accent-foreground text-sm rounded-lg font-medium hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>
    </section>
  )
}

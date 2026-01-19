'use client'

import { Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Lightweight Global Tech Solution Corp.",
      date: "2025 - Present",
      description: "Develop and maintain full-stack web applications using TypeScript and Python. Integrate third-party APIs and implement OCR solutions."
    },
    {
      title: "Bachelor of Science in Information Technology",
      company: "Bulacan State University",
      date: "4th Year (Ongoing)",
      description: "With honor. Best Capstone project award."
    },
  ]

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <Briefcase size={20} />
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>
      
      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <Card key={idx} className="p-4">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-grow">
                <h3 className="font-bold text-foreground">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                {exp.date}
              </span>
            </div>
            <p className="text-sm text-foreground mt-2">{exp.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

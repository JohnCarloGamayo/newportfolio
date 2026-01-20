'use client'

import { Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Experience() {
  const experiences = [
    {
      title: "Network Administrator",
      company: "RMCJJ-ZapConnect (Converge Subcontractor)",
      date: "2025",
      description: "Configured and maintained routers and network equipment. Managed customer connections through the RMCJJ ISP management system, handled user provisioning, monitored network status, and performed basic troubleshooting."
    },
    {
      title: "Software Developer Intern",
      company: "Lightweight Global Tech Solution Corp.",
      date: "2025 - Present",
      description: "Develop and maintain full-stack web applications using TypeScript and Python. Integrate third-party APIs and implement OCR solutions."
    },
  ]

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <Briefcase size={20} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
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

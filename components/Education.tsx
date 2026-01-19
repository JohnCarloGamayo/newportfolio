'use client'

import { BookOpen } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Bulacan State University",
      period: "4th Year, Ongoing",
      details: ""
    },
    {
      degree: "Information and Communication Technology",
      school: "Immaculate Conception Polytechnic",
      period: "Completed 2022",
      details: "Best Capstone Project Award, with honor"
    }
  ]

  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <BookOpen size={20} />
        <h2 className="text-2xl font-bold">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <Card key={idx} className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-foreground text-sm">{edu.degree}</h3>
            <p className="text-xs text-muted-foreground mt-1">{edu.school}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-foreground font-medium">{edu.details}</p>
              <span className="text-xs text-muted-foreground">{edu.period}</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

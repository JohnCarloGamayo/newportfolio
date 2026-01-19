'use client'

import { FolderOpen, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      title: "CyberZone E-commerce Website",
      description: "Designed modern UI for product management, order tracking, and inventory updates. Implemented dynamic frontend components for smooth user experience.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "PC Bulacan E-commerce System",
      description: "Developed full shopping cart and checkout system with deals engine. Integrated AI chat support for customer assistance.",
      technologies: ["TypeScript", "Python", "Django"],
      link: "#"
    },
    {
      title: "DriveWise Gamified Learning App",
      description: "Created a driving simulation mobile app to teach practical driving skills. Implemented interactive gameplay with realistic vehicle physics. Published on Google Play Store.",
      technologies: ["Unity", "C#", "Android"],
      link: "#"
    },
    {
      title: "Bigbrew Online Coffee Management System",
      description: "Developed system to manage orders, products, and inventory with modern UI. Built backend order tracking and reporting features for admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    }
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FolderOpen size={20} />
          <h2 className="text-2xl font-bold">Recent Projects</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-4 flex flex-col interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50">
            <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-foreground mb-3 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              className="justify-start gap-2 p-0 hover:bg-transparent"
            >
              View Project
              <ExternalLink size={14} />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}

'use client'

import { FolderOpen, ExternalLink, X } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "CyberZone E-commerce Website",
      description: "Designed modern UI for product management, order tracking, and inventory updates. Implemented dynamic frontend components for smooth user experience.",
      image: "/project-images/cyberzone.jpg",
      link: "#"
    },
    {
      title: "PC Bulacan E-commerce System",
      description: "Developed full shopping cart and checkout system with deals engine. Integrated AI chat support for customer assistance.",
      image: "/project-images/pcbulacan.png",
      link: "#"
    },
    {
      title: "DriveWise Gamified Learning App",
      description: "Created a driving simulation mobile app to teach practical driving skills. Implemented interactive gameplay with realistic vehicle physics. Published on Google Play Store.",
      image: "/project-images/drivewise.png",
      link: "#"
    },
    {
      title: "Bigbrew Online Coffee Management System",
      description: "Developed system to manage orders, products, and inventory with modern UI. Built backend order tracking and reporting features for admin dashboard.",
      image: "/project-images/bigbrew.jpg",
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
            <Button 
              variant="ghost" 
              size="sm"
              className="justify-start gap-2 p-0 hover:bg-transparent mt-2"
              onClick={() => setSelectedProject(idx)}
            >
              View Project
              <ExternalLink size={14} />
            </Button>
          </Card>
        ))}
      </div>

      {/* Project Image Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold">
              {selectedProject !== null && projects[selectedProject].title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject !== null && (
            <div className="p-6 overflow-auto">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted">
                <Image
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-4 text-foreground">
                {projects[selectedProject].description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

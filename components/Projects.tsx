'use client'

import { FolderOpen, ExternalLink, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import ImageViewer from '@/components/ImageViewer'
import { useState } from 'react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'image' | 'video'>('image')
  const [imageViewerOpen, setImageViewerOpen] = useState(false)
  const [viewerImage, setViewerImage] = useState({ src: '', alt: '' })

  const handleImageClick = (src: string, alt: string) => {
    setViewerImage({ src, alt })
    setImageViewerOpen(true)
  }

  const projects = [
    {
      title: "TikTok Video Downloader",
      description: "A full-stack web application built with React + Vite on the frontend and Python FastAPI on the backend. The frontend is deployed on Vercel, while the backend API is hosted on Render. Designed for fast, simple, and user-friendly TikTok video downloading, with Google AdSense integration for monetization.",
      image: null,
      video: null,
      link: "https://tiktok-downloader-byjcg.vercel.app/",
      isLive: true
    },
    {
      title: "WebP Image Converter",
      description: "A high-performance WebP Image Converter built using React + Vite. The application allows users to convert up to 20 images simultaneously with minimal quality loss, significantly improving image optimization workflows. Converted images can be downloaded individually or bundled into a ZIP file for convenience. Focused on speed, simplicity, and real-world usability compared to typical online converters.",
      image: null,
      video: null,
      link: "https://webp-coverter-byjcg.vercel.app/",
      isLive: true
    },
    {
      title: "CyberZone E-commerce Website",
      description: "Designed modern UI for product management, order tracking, and inventory updates. Implemented dynamic frontend components for smooth user experience.",
      image: "/project-images/cyberzone.jpg",
      video: "/project-videos/cyberzone-admin.mp4",
      link: "#",
      isLive: false
    },
    {
      title: "PC Bulacan E-commerce System",
      description: "Developed full shopping cart and checkout system with deals engine. Integrated AI chat support for customer assistance.",
      image: "/project-images/pcbulacan.png",
      video: "/project-videos/pcbulacan.mp4",
      link: "#",
      isLive: false
    },
    {
      title: "DriveWise Gamified Learning App",
      description: "Created a driving simulation mobile app to teach practical driving skills. Implemented interactive gameplay with realistic vehicle physics. Published on Google Play Store.",
      image: "/project-images/drivewise.png",
      video: "/project-videos/drivewise.mp4",
      link: "#",
      isLive: false
    },
    {
      title: "Bigbrew Online Coffee Management System",
      description: "Developed system to manage orders, products, and inventory with modern UI. Built backend order tracking and reporting features for admin dashboard.",
      image: "/project-images/bigbrew.jpg",
      video: "/project-videos/bigbrew.mp4",
      link: "#",
      isLive: false
    }
  ]

  const handleNext = () => {
    if (viewMode === 'image') {
      setViewMode('video')
    } else {
      setViewMode('image')
      setSelectedProject(prev => prev === null ? null : (prev + 1) % projects.length)
    }
  }

  const handlePrevious = () => {
    if (viewMode === 'video') {
      setViewMode('image')
    } else {
      setSelectedProject(prev => prev === null ? null : (prev - 1 + projects.length) % projects.length)
      setViewMode('video')
    }
  }

  const handleOpenProject = (idx: number) => {
    setSelectedProject(idx)
    setViewMode('image')
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <FolderOpen size={20} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recent Projects</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-6 flex flex-col interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl hover:shadow-xl hover:shadow-primary/5 group">
            <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{project.description}</p>
            {project.isLive ? (
              <Button 
                variant="default" 
                size="sm"
                className="justify-start gap-2 mt-2"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live
                  <ExternalLink size={14} />
                </a>
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                className="justify-start gap-2 p-0 hover:bg-transparent mt-2"
                onClick={() => handleOpenProject(idx)}
              >
                View Project
                <ExternalLink size={14} />
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* Project Modal - Large Single View */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[85vh] p-0 flex flex-col">
          <DialogHeader className="p-4 pb-3 border-b shrink-0">
            <DialogTitle className="text-xl font-bold">
              {selectedProject !== null && projects[selectedProject].title}
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {viewMode === 'image' ? 'Screenshot' : 'Demo Video'}
            </p>
          </DialogHeader>
          {selectedProject !== null && (
            <>
              {/* Main Content Area - Landscape */}
              <div className="relative flex-1 p-6 pb-0">
                {projects[selectedProject].image || projects[selectedProject].video ? (
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-muted border border-border group">
                    {viewMode === 'image' ? (
                      <>
                        <Image
                          src={projects[selectedProject].image!}
                          alt={projects[selectedProject].title}
                          fill
                          className="object-contain cursor-pointer"
                          priority
                          onClick={() => handleImageClick(projects[selectedProject].image!, projects[selectedProject].title)}
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleImageClick(projects[selectedProject].image!, projects[selectedProject].title)}
                        >
                          <Maximize2 size={20} />
                        </Button>
                      </>
                    ) : (
                      <video 
                        controls 
                        className="w-full h-full object-contain"
                        autoPlay
                        preload="metadata"
                      >
                        <source src={projects[selectedProject].video!} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* Navigation Arrows */}
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg"
                      onClick={handlePrevious}
                    >
                      <ChevronLeft size={24} />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-lg"
                      onClick={handleNext}
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </div>
                ) : (
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-muted border border-border flex flex-col items-center justify-center p-8 text-center">
                    <FolderOpen size={64} className="text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Live Project</h3>
                    <p className="text-muted-foreground mb-6 max-w-md">This project is deployed and available online. Click the button below to view it.</p>
                    <Button 
                      variant="default" 
                      size="lg"
                      className="gap-2"
                      asChild
                    >
                      <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                )}
              </div>

              {/* Description - Always Visible */}
              <div className="p-6 pt-4 bg-muted/30 border-t shrink-0">
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Description</h3>
                <p className="text-foreground text-base">
                  {projects[selectedProject].description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Viewer */}
      <ImageViewer
        isOpen={imageViewerOpen}
        onClose={() => setImageViewerOpen(false)}
        imageSrc={viewerImage.src}
        imageAlt={viewerImage.alt}
      />
    </section>
  )
}

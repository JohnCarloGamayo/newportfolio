'use client'

import { FolderOpen, ExternalLink, ChevronLeft, ChevronRight, Maximize2, ArrowLeft } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import ImageViewer from '@/components/ImageViewer'
import { useState } from 'react'
import { projectsData } from '@/lib/projectsData'
import Link from 'next/link'

export default function AllProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'image' | 'video'>('image')
  const [imageViewerOpen, setImageViewerOpen] = useState(false)
  const [viewerImage, setViewerImage] = useState({ src: '', alt: '' })

  const handleImageClick = (src: string, alt: string) => {
    setViewerImage({ src, alt })
    setImageViewerOpen(true)
  }

  const handleNext = () => {
    if (viewMode === 'image') {
      setViewMode('video')
    } else {
      setViewMode('image')
      setSelectedProject(prev => prev === null ? null : (prev + 1) % projectsData.length)
    }
  }

  const handlePrevious = () => {
    if (viewMode === 'video') {
      setViewMode('image')
    } else {
      setViewMode('video')
      setSelectedProject(prev => prev === null ? null : (prev - 1 + projectsData.length) % projectsData.length)
    }
  }

  const handleOpenProject = (index: number) => {
    setSelectedProject(index)
    if (projectsData[index].image) {
      setViewMode('image')
    } else if (projectsData[index].video) {
      setViewMode('video')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-muted-foreground mt-2">
              Explore my complete portfolio of web applications and systems
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-blue-500/50">
              <div className="flex items-start justify-between mb-4">
                <FolderOpen className="h-8 w-8 text-blue-500 group-hover:text-purple-500 transition-colors" />
                {project.isLive && (
                  <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full font-medium">
                    Live
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              {project.domain && (
                <p className="text-sm text-muted-foreground font-mono mb-3">{project.domain}</p>
              )}
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.isLive ? (
                  <Button asChild className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                ) : (
                  <Button onClick={() => handleOpenProject(idx)} className="w-full">
                    View Project
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{projectsData[selectedProject ?? 0]?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject !== null && (
            <div className="space-y-4">
              {projectsData[selectedProject].image || projectsData[selectedProject].video ? (
                <div className="relative">
                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mb-4">
                    <Button onClick={handlePrevious} variant="outline" size="sm">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {viewMode === 'image' ? 'Image' : 'Video'}
                    </span>
                    <Button onClick={handleNext} variant="outline" size="sm">
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {/* Media Display */}
                  {viewMode === 'image' && projectsData[selectedProject].image ? (
                    <div className="relative w-full h-[500px] bg-muted rounded-lg overflow-hidden group cursor-pointer"
                         onClick={() => handleImageClick(projectsData[selectedProject].image!, projectsData[selectedProject].title)}>
                      <Image
                        src={projectsData[selectedProject].image!}
                        alt={projectsData[selectedProject].title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ) : viewMode === 'video' && projectsData[selectedProject].video ? (
                    <div className="relative w-full h-[500px] bg-muted rounded-lg overflow-hidden">
                      <video
                        src={projectsData[selectedProject].video!}
                        controls
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 bg-muted rounded-lg">
                      <ExternalLink className="h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-4">This is a live project</p>
                      <Button asChild>
                        <a href={projectsData[selectedProject].link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Live Site
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-muted rounded-lg">
                  <ExternalLink className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">This is a live project</p>
                  <Button asChild>
                    <a href={projectsData[selectedProject].link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-muted-foreground">{projectsData[selectedProject].description}</p>
              </div>

              {/* Link */}
              {projectsData[selectedProject].link !== '#' && (
                <div>
                  <h4 className="font-semibold mb-2">Link</h4>
                  <a 
                    href={projectsData[selectedProject].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center gap-2"
                  >
                    {projectsData[selectedProject].link}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
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
    </div>
  )
}

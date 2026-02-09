'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ImageViewerProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export default function ImageViewer({ isOpen, onClose, imageSrc, imageAlt }: ImageViewerProps) {
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5))
  }

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = imageAlt || 'image'
    link.click()
  }

  const handleClose = () => {
    setZoom(1)
    setRotation(0)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-black/95 border-none">
        <DialogTitle className="sr-only">{imageAlt}</DialogTitle>
        {/* Toolbar */}
        <div className="absolute top-4 right-4 z-50 flex gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomOut}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <ZoomOut size={20} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomIn}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <ZoomIn size={20} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleRotate}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <RotateCw size={20} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleDownload}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <Download size={20} />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleClose}
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center p-4 overflow-auto">
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: `scale(${zoom}) rotate(${rotation}deg)`,
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1920}
              height={1080}
              className="max-w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
          {Math.round(zoom * 100)}%
        </div>
      </DialogContent>
    </Dialog>
  )
}

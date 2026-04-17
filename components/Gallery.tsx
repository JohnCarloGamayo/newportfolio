'use client'

import { Camera, Expand } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'
import ImageViewer from '@/components/ImageViewer'

const galleryImages = [
  {
    src: '/images/Gallery/googledevgroupmanila.jpg',
    alt: 'Google Dev Group Manila Event'
  },
  {
    src: '/images/Gallery/googledevgroupmanila2.jpg',
    alt: 'Google Dev Group Manila Session'
  },
  {
    src: '/images/Gallery/itsummit.jpg',
    alt: 'IT Summit'
  },
  {
    src: '/images/Gallery/townhallmeeting.jpg',
    alt: 'Town Hall Meeting'
  }
]

export default function Gallery() {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' })

  const handleOpenImage = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
    setViewerOpen(true)
  }

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <Camera size={20} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</h2>
      </div>

      <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 rounded-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleOpenImage(image.src, image.alt)}
              className="group relative overflow-hidden rounded-lg border border-border/60 hover:border-primary/60 transition-all"
            >
              <div className="relative h-24 sm:h-28 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                <Expand className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </Card>

      <ImageViewer
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
      />
    </section>
  )
}

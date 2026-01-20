'use client'

import { Award, Eye } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certificates = [
    {
      title: "ASICS Summit - ReimAgine Tomorrow",
      description: "Certificate of participation in the one-day seminar at the second ASICS summit titled 'ReimAgine Tomorrow: Decoding the Future of Technology through AI'",
      institution: "Bulacan State University",
      image: "/certificates/Cert-1.jpg"
    },
    {
      title: "Azure AI Foundry & RAG Seminar",
      description: "Certificate of participation in the seminar about Fallacies of Azure AI Foundry and Retrieval Augmented Generation using Azure",
      institution: "Bulacan State University",
      image: "/certificates/Cert-2.jpg"
    },
    {
      title: "Introduction to Packet Tracer",
      description: "Certificate of completion in Introduction to Packet Tracer",
      institution: "Cisco Network Academy",
      image: "/certificates/Cert-3.png"
    },
    {
      title: "Hour of Code - AI Ready ASEAN",
      description: "Certificate of participation to the 'Hour of Code' under the AI ready ASEAN implementation in the Philippines",
      institution: "AI Ready ASEAN",
      image: "/certificates/Cert-4.png"
    }
  ]

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <Award size={20} className="text-primary" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {certificates.map((cert, idx) => (
          <Card 
            key={idx} 
            className="p-4 interactive-card bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl hover:shadow-xl hover:shadow-primary/5 group transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-1 line-clamp-2">{cert.description}</p>
                <p className="text-xs text-primary font-medium">{cert.institution}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 shrink-0"
                onClick={() => setSelectedCert(idx)}
              >
                <Eye size={14} />
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Certificate Modal - Landscape */}
      <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-[90vw] w-full max-h-[90vh] p-0">
          <DialogHeader className="p-4 pb-2 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold">
                {selectedCert !== null && certificates[selectedCert].title}
              </DialogTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCert(prev => prev === null ? null : (prev - 1 + certificates.length) % certificates.length)}
                  disabled={selectedCert === null}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCert(prev => prev === null ? null : (prev + 1) % certificates.length)}
                  disabled={selectedCert === null}
                >
                  Next
                </Button>
              </div>
            </div>
          </DialogHeader>
          {selectedCert !== null && (
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted border border-border mb-4">
                <Image
                  src={certificates[selectedCert].image}
                  alt={certificates[selectedCert].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Details</h3>
                <p className="text-foreground mb-2">
                  {certificates[selectedCert].description}
                </p>
                <p className="text-sm text-muted-foreground">
                  Issued by: <span className="text-primary font-medium">{certificates[selectedCert].institution}</span>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

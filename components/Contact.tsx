'use client'

import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section className="space-y-6">
      {/* Contact Card */}
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
            <Mail size={20} className="text-primary" />
          </div>
          <h3 className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get in Touch</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Email</p>
            <a 
              href="mailto:johncarlogamayo@gmail.com"
              className="text-sm text-foreground hover:text-primary transition break-all"
            >
              johncarlogamayo@gmail.com
            </a>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-2">Phone</p>
            <a 
              href="tel:+6391135290"
              className="text-sm text-foreground hover:text-primary transition"
            >
              +63 911 352 90
            </a>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-2">Website</p>
            <a 
              href="https://johncarlogamayo.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary transition"
            >
              johncarlogamayo.netlify.app
            </a>
          </div>
        </div>
      </Card>

      {/* Social Links Card */}
      <Card className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <MessageCircle size={20} />
          <h3 className="font-bold text-foreground">Social Links</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2 h-9 bg-transparent"
            asChild
          >
            <a 
              href="https://github.com/JohnCarloGamayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2 h-9 bg-transparent"
            asChild
          >
            <a 
              href="https://www.linkedin.com/in/john-carlo-gamayo-2726ba39a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2 h-9 bg-transparent"
            asChild
          >
            <a 
              href="https://www.facebook.com/johncarlo.gamayo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="gap-2 h-9 bg-transparent"
            asChild
          >
            <a 
              href="https://www.tiktok.com/@jcg.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              TikTok
            </a>
          </Button>
        </div>
      </Card>
    </section>
  )
}

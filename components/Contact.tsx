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
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 gap-2 h-9 bg-transparent"
            asChild
          >
            <a 
              href="https://github.com"
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
            className="flex-1 gap-2 h-9 bg-transparent"
            asChild
          >
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </Button>
        </div>
      </Card>

      {/* Call to Action Card */}
      <Card className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <p className="text-sm font-semibold mb-3">Ready to collaborate?</p>
        <p className="text-xs mb-4 text-slate-200">
          Let's connect and explore opportunities to work together.
        </p>
        <Button 
          className="w-full bg-white text-slate-900 hover:bg-slate-100"
          size="sm"
          asChild
        >
          <a href="mailto:johncarlogamayo@gmail.com">Schedule a Call</a>
        </Button>
      </Card>
    </section>
  )
}

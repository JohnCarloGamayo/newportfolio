'use client'

import { Mail, MapPin, Calendar, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Header() {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getProfileImage = () => {
    if (!mounted) return '/images/newprofile.jpg'
    
    const isDark = theme === 'dark'
    
    if (isDark) {
      return isHovered ? '/images/nightnewprofile-laugh.png' : '/images/nightnewprofile.png'
    } else {
      return isHovered ? '/images/morningnewprofile-laugh.png' : '/images/newprofile.jpg'
    }
  }

  return (
    <header className="border-b border-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Theme Toggle - Top Right */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div 
              className="w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-slate-300 to-slate-400 shadow-lg ring-2 ring-primary/20 transition-transform duration-300 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={getProfileImage()}
                alt="John Carlo Gamayo"
                width={96}
                height={96}
                className="w-full h-full object-cover transition-opacity duration-300"
                priority
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-grow">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-bold">John Carlo Gamayo</h1>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin size={16} />
                  Pandi, Bulacan, Philippines
                </p>
                <p className="text-lg text-foreground mt-2">Full-Stack Developer</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Button 
                variant="default" 
                size="sm"
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open('/johncarlo-resume.pdf', '_blank')}
              >
                <Download size={16} />
                Download Resume
              </Button>
              <Button 
                variant="default" 
                size="sm"
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="mailto:johncarlogamayo@gmail.com">
                  <Calendar size={16} />
                  Schedule a Call
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 bg-transparent transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:johncarlogamayo@gmail.com">
                  <Mail size={16} />
                  Send Email
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <a href="mailto:johncarlogamayo@gmail.com" className="hover:text-foreground transition">
                johncarlogamayo@gmail.com
              </a>
              <span>•</span>
              <a href="tel:+6391135290" className="hover:text-foreground transition">
                +63 911 352 90
              </a>
              <span>•</span>
              <a href="https://johncarlogamayo.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">
                Portfolio Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

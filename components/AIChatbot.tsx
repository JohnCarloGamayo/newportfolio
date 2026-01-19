'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  text: string
  isBot: boolean
  timestamp: Date
}

// Knowledge base about John Carlo Gamayo
const knowledgeBase: { [key: string]: string } = {
  name: "I'm John Carlo Gamayo, a Full-Stack Developer based in Pandi, Bulacan, Philippines.",
  skills: "I specialize in TypeScript, React, Next.js, Node.js, Python, and various web technologies. I'm proficient in both frontend and backend development.",
  location: "I'm based in Pandi, Bulacan, Philippines.",
  contact: "You can reach me at johncarlogamayo@gmail.com or call +63 911 352 90. Visit my portfolio at https://johncarlogamayo.netlify.app",
  experience: "I'm a Full-Stack Developer with experience in building modern web applications using cutting-edge technologies.",
  education: "I have a strong educational background in computer science and software development.",
  projects: "I've worked on various projects including web applications, APIs, and full-stack solutions using React, Next.js, and Node.js.",
  tech: "I work with technologies like TypeScript, React, Next.js, Node.js, Python, TailwindCSS, PostgreSQL, MongoDB, and more.",
  availability: "I'm available for freelance work and full-time opportunities. Feel free to schedule a call or send me an email!",
  resume: "You can download my resume using the 'Download Resume' button at the top of the page.",
  default: "I'm John Carlo Gamayo, a Full-Stack Developer. I can answer questions about my skills, experience, projects, and contact information. Feel free to ask me anything!",
}

function findBestMatch(input: string): string {
  const lowerInput = input.toLowerCase()
  
  // Keywords mapping
  const keywords: { [key: string]: string[] } = {
    name: ['name', 'who are you', 'introduce', 'about you'],
    skills: ['skill', 'technology', 'tech stack', 'programming', 'code', 'development'],
    location: ['location', 'where', 'live', 'based'],
    contact: ['contact', 'email', 'phone', 'reach', 'call'],
    experience: ['experience', 'work', 'job', 'career'],
    education: ['education', 'school', 'study', 'degree'],
    projects: ['project', 'portfolio', 'work', 'built', 'created'],
    tech: ['technology', 'tools', 'framework', 'language'],
    availability: ['available', 'hire', 'hiring', 'freelance', 'work'],
    resume: ['resume', 'cv', 'download'],
  }

  for (const [key, words] of Object.entries(keywords)) {
    if (words.some(word => lowerInput.includes(word))) {
      return knowledgeBase[key]
    }
  }

  return knowledgeBase.default
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! 👋 I'm an AI assistant that can answer questions about John Carlo Gamayo. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Simulate thinking time
    setTimeout(() => {
      const response = findBestMatch(input)
      const botMessage: Message = {
        text: response,
        isBot: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-background border border-border rounded-lg shadow-2xl z-50 flex flex-col animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me about John Carlo</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 scroll-smooth" ref={scrollRef} style={{ scrollBehavior: 'smooth' }}>
            <div className="space-y-4 pb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? 'bg-primary/10 text-foreground'
                        : 'bg-primary text-primary-foreground'
                    } transition-all duration-300 hover:scale-105`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-50 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="transition-all duration-300 hover:scale-110"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

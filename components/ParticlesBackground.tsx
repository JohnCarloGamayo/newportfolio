'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, Engine } from '@tsparticles/engine'
import { useTheme } from 'next-themes'

export default function ParticlesBackground() {
  const { theme } = useTheme()
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded callback
  }, [])

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: ['grab', 'repulse'],
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 8,
            },
            grab: {
              distance: 200,
              links: {
                opacity: 0.5,
              },
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8'],
          },
          links: {
            color: '#60a5fa',
            distance: 150,
            enable: true,
            opacity: 0.9,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 60,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}

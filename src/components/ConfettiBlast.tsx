import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

interface ConfettiProps {
  /** Fire once on mount if true */
  autoFire?: boolean
  /** Less confetti for confirmations */
  mini?: boolean
}

/**
 * ConfettiBlast
 * Fires a confetti burst using canvas-confetti.
 * Exposes a `fire()` method via ref if you want manual control.
 */
export default function ConfettiBlast({ autoFire = true, mini = false }: ConfettiProps) {
  const firedRef = useRef(false)

  const fire = () => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const options: confetti.Options = {
      particleCount: mini ? 60 : 150,
      spread: mini ? 60 : 100,
      origin: { y: 0.5 },
      colors: ['#FF4D8D', '#FFB3CC', '#FF79A8', '#4A1D3F', '#FFF0F5', '#FF006E'],
      scalar: 1.2,
    }

    // Main burst from center
    confetti({ ...options, origin: { x: 0.5, y: 0.5 } })

    if (!mini) {
      // Side bursts
      setTimeout(() => {
        confetti({ ...options, angle: 60, origin: { x: 0, y: 0.6 } })
        confetti({ ...options, angle: 120, origin: { x: 1, y: 0.6 } })
      }, 150)

      // Emoji hearts floating up
      setTimeout(() => {
        confetti({
          particleCount: 30,
          spread: 80,
          origin: { x: 0.5, y: 0.8 },
          shapes: ['circle'],
          colors: ['#FF4D8D', '#FFB3CC'],
          scalar: 1.5,
          ticks: 200,
        })
      }, 300)
    }
  }

  useEffect(() => {
    if (autoFire && !firedRef.current) {
      firedRef.current = true
      // Small delay so page has rendered
      const t = setTimeout(fire, 200)
      return () => clearTimeout(t)
    }
  }, [autoFire])

  return null
}

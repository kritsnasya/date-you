import { useEffect, useRef } from 'react'

interface Heart {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  emoji: string
}

const HEART_EMOJIS = ['💕', '💗', '💖', '💝', '🌸', '✨']

/**
 * FloatingHearts
 * Renders decorative hearts that float upwards in the background.
 * Respects `prefers-reduced-motion` — disables when set.
 */
export default function FloatingHearts() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heartsRef = useRef<Heart[]>([])
  const counterRef = useRef(0)

  // Check reduced motion preference
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReduced) return

    const container = containerRef.current
    if (!container) return

    // Generate 12 background hearts on mount
    heartsRef.current = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,       // % from left
      size: 16 + Math.random() * 20, // px
      duration: 6 + Math.random() * 8, // seconds
      delay: Math.random() * 6,       // seconds
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    }))

    counterRef.current = heartsRef.current.length

    // Render hearts into DOM
    heartsRef.current.forEach((h) => {
      const el = document.createElement('span')
      el.textContent = h.emoji
      el.className = 'heart-bg'
      el.style.cssText = `
        left: ${h.x}%;
        font-size: ${h.size}px;
        animation-duration: ${h.duration}s;
        animation-delay: ${h.delay}s;
        opacity: 0;
      `
      container.appendChild(el)
    })

    return () => {
      // Cleanup
      while (container.firstChild) container.removeChild(container.firstChild)
    }
  }, [prefersReduced])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    />
  )
}

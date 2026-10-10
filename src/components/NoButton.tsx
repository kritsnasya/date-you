import { useCallback, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'
import { useAppState } from '../context/AppStateContext'

const { noButtonMessages } = config

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val))
}

function getRandomPosition(
  btnW: number,
  btnH: number,
  yesRect: DOMRect | null,
  margin = 16,
): { x: number; y: number } {
  const vw = window.innerWidth
  const vh = window.innerHeight

  const maxX = vw - btnW - margin
  const maxY = vh - btnH - margin

  for (let attempt = 0; attempt < 50; attempt++) {
    const x = clamp(Math.random() * maxX, margin, maxX)
    const y = clamp(Math.random() * maxY, margin, maxY)

    if (yesRect) {
      const overlap =
        x < yesRect.right + 20 &&
        x + btnW > yesRect.left - 20 &&
        y < yesRect.bottom + 20 &&
        y + btnH > yesRect.top - 20

      if (overlap) continue
    }

    return { x, y }
  }
  return { x: maxX, y: margin }
}

interface NoButtonProps {
  yesRef: React.RefObject<HTMLButtonElement | null>
}

export default function NoButton({ yesRef }: NoButtonProps) {
  const { incrementNoAttempts } = useAppState()
  const btnRef = useRef<HTMLButtonElement>(null)

  const [isDodging, setIsDodging] = useState(false)
  const [initialPos, setInitialPos] = useState<{ x: number; y: number } | null>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [messageIdx, setMessageIdx] = useState(0)

  const dodge = useCallback(() => {
    let currentW = 100
    let currentH = 48
    let startX = 0
    let startY = 0

    // Capture dimensions and starting position
    if (!isDodging && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect()
      startX = rect.left
      startY = rect.top
      currentW = rect.width
      currentH = rect.height
    } else {
      const activeEl = document.querySelector('.btn-no-active') as HTMLButtonElement
      const elToMeasure = activeEl || btnRef.current
      if (elToMeasure) {
        currentW = elToMeasure.offsetWidth
        currentH = elToMeasure.offsetHeight
      }
    }

    const yesRect = yesRef.current?.getBoundingClientRect() ?? null
    const newPos = getRandomPosition(currentW, currentH, yesRect)

    if (!isDodging) {
      // Set the initial physical position so it seamlessly animates from its current relative layout spot
      setInitialPos({ x: startX, y: startY })
      setIsDodging(true)
    }

    setPos(newPos)
    incrementNoAttempts()

    setMessageIdx((i) => {
      if (i >= noButtonMessages.length - 1) return noButtonMessages.length - 2
      return i + 1
    })
  }, [yesRef, incrementNoAttempts, isDodging])

  if (!isDodging) {
    return (
      <button
        ref={btnRef}
        className="btn-no"
        onMouseEnter={dodge}
        onClick={dodge}
        onTouchStart={(e) => {
          e.preventDefault()
          dodge()
        }}
        aria-label="No (this button avoids you)"
      >
        {noButtonMessages[0]}
      </button>
    )
  }

  if (pos === null) return null

  return (
    <AnimatePresence>
      <motion.button
        className="btn-no btn-no-active"
        style={{ position: 'fixed', left: 0, top: 0, zIndex: 50 }}
        initial={initialPos ? { x: initialPos.x, y: initialPos.y } : false}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        onMouseEnter={dodge}
        onClick={dodge}
        onTouchStart={(e) => {
          e.preventDefault()
          dodge()
        }}
      >
        {noButtonMessages[messageIdx]}
      </motion.button>
    </AnimatePresence>
  )
}

import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'
import { useAppState } from '../context/AppStateContext'

const noLabel = config.noButtonMessages[0]
const DODGE_DISTANCE = 120
const VIEWPORT_MARGIN = 16

interface NoButtonProps {
  yesRef: React.RefObject<HTMLButtonElement | null>
}

export default function NoButton({ yesRef }: NoButtonProps) {
  const { incrementNoAttempts } = useAppState()
  const btnRef = useRef<HTMLButtonElement>(null)
  const [isDodging, setIsDodging] = useState(false)
  const [initialPos, setInitialPos] = useState<{
    x: number
    y: number
    width: number
    height: number
  } | null>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const dodge = useCallback(
    (pointerX: number, pointerY: number) => {
      const button = btnRef.current
      if (!button) return

      const rect = button.getBoundingClientRect()
      const yesRect = yesRef.current?.getBoundingClientRect() ?? null

      let dx = rect.left + rect.width / 2 - pointerX
      let dy = rect.top + rect.height / 2 - pointerY
      const length = Math.hypot(dx, dy)

      if (length < 4) {
        const angle = Math.random() * Math.PI * 2
        dx = Math.cos(angle)
        dy = Math.sin(angle)
      } else {
        dx /= length
        dy /= length
      }

      const maxX = Math.max(VIEWPORT_MARGIN, window.innerWidth - rect.width - VIEWPORT_MARGIN)
      const maxY = Math.max(VIEWPORT_MARGIN, window.innerHeight - rect.height - VIEWPORT_MARGIN)
      let nextX = Math.max(VIEWPORT_MARGIN, Math.min(maxX, rect.left + dx * DODGE_DISTANCE))
      let nextY = Math.max(VIEWPORT_MARGIN, Math.min(maxY, rect.top + dy * DODGE_DISTANCE))

      if (
        yesRect &&
        nextX < yesRect.right + 12 &&
        nextX + rect.width > yesRect.left - 12 &&
        nextY < yesRect.bottom + 12 &&
        nextY + rect.height > yesRect.top - 12
      ) {
        nextX = Math.max(VIEWPORT_MARGIN, Math.min(maxX, rect.left - dx * DODGE_DISTANCE))
        nextY = Math.max(VIEWPORT_MARGIN, Math.min(maxY, rect.top - dy * DODGE_DISTANCE))
      }

      if (!isDodging) {
        setInitialPos({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
        })
        setIsDodging(true)
      }

      setPos({ x: nextX, y: nextY })
      incrementNoAttempts()
    },
    [incrementNoAttempts, isDodging, yesRef],
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    const rect = event.currentTarget.getBoundingClientRect()
    dodge(rect.left + rect.width / 2, rect.top + rect.height / 2)
  }

  if (!isDodging) {
    return (
      <button
        ref={btnRef}
        className="btn-no"
        onPointerDown={(event) => dodge(event.clientX, event.clientY)}
        onKeyDown={handleKeyDown}
        aria-label="No (this button avoids you)"
      >
        {noLabel}
      </button>
    )
  }

  if (pos === null) return null

  return (
    <span
      style={{
        display: 'inline-flex',
        width: initialPos?.width,
        height: initialPos?.height,
      }}
    >
      <motion.button
        ref={btnRef}
        className="btn-no btn-no-active"
        style={{ position: 'fixed', left: 0, top: 0, zIndex: 50 }}
        initial={initialPos ? { x: initialPos.x, y: initialPos.y } : false}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        onPointerDown={(event) => dodge(event.clientX, event.clientY)}
        onKeyDown={handleKeyDown}
        aria-label="No (this button avoids you)"
      >
        {noLabel}
      </motion.button>
    </span>
  )
}

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

/**
 * PageWrapper
 * Wraps every page with a fade+slide-up entrance animation.
 */
export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`relative z-10 min-h-screen flex flex-col items-center justify-start ${className}`}
    >
      {children}
    </motion.div>
  )
}

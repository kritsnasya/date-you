import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

/**
 * NotFoundPage (Screen 6)
 * Displayed for any unknown routes.
 */
export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <div className="w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center justify-center text-center gap-6 min-h-screen">
        <motion.div
          initial={{ scale: 0, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="text-8xl mb-2"
        >
          🏃💨
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-extrabold text-[#FF4D8D] text-4xl text-[#4A1D3F]"
        >
          Oops, this page ran away
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#4A1D3F] opacity-70"
        >
          Kind of like that No button.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="btn-yes mt-4"
          onClick={() => navigate('/')}
        >
          Take me back 💕
        </motion.button>
      </div>
    </PageWrapper>
  )
}

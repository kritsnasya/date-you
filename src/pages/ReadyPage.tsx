import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useAppState } from '../context/AppStateContext'

export default function ReadyPage() {
  const navigate = useNavigate()
  const { timeChoice } = useAppState()
  return (
    <PageWrapper>
      <div className="w-full max-w-md mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen gap-8">
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-extrabold text-[#FF4D8D] text-3xl px-4"
        >
          glad you didn't say no.<br/>
          be ready by {timeChoice}, I'm coming to get you 🚗
        </motion.h1>

        {/* Horizontal floating hearts below text */}
        <div className="flex flex-row gap-6 justify-center mt-2 h-12 items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 0.5 + i * 0.1 },
                scale: { delay: 0.5 + i * 0.1 },
                y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 },
              }}
              className="text-2xl text-[#FF4D8D]"
            >
              ♥
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={() => navigate('/fee')}
          className="btn-yes mt-8"
        >
          ok I accept 💝
        </motion.button>
      </div>
    </PageWrapper>
  )
}

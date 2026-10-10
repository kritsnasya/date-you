import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useAppState } from '../context/AppStateContext'

const vibes = [
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🍔', label: 'Burgers' },
  { emoji: '🥟', label: 'momos' },
  { emoji: '🍛', label: 'shahi paneer+ naan' },
  { emoji: '🍦', label: 'icecream date' },
  { emoji: '🍷', label: 'Alcohol' },
]

export default function VibePage() {
  const navigate = useNavigate()
  const { vibeChoice, setVibeChoice } = useAppState()

  const handleSelect = (vibe: string) => {
    setVibeChoice(vibe)
    // small delay then auto-navigate
    setTimeout(() => {
      navigate('/ready')
    }, 400)
  }

  return (
    <PageWrapper>
      <div className="w-full max-w-md mx-auto px-4 flex flex-col items-center justify-center min-h-screen gap-6 py-12">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-extrabold text-[#FF4D8D] text-3xl mb-2"
          >
            What are we feeling? 🍽✨
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#4A1D3F] opacity-70"
          >
            pick your vibe
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mt-4">
          {vibes.map((v, i) => (
            <motion.button
              key={v.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => handleSelect(v.label)}
              className={`date-type-card ${vibeChoice === v.label ? 'selected' : ''}`}
            >
              <span className="text-4xl mb-2">{v.emoji}</span>
              <span className="text-sm px-1 flex flex-col items-center">
                {v.label}
                {v.label === 'shahi paneer+ naan' && (
                  <span className="text-[10px] text-[#FF4D8D] font-bold mt-0.5">(my fav)</span>
                )}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

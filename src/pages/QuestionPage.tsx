import { useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import NoButton from '../components/NoButton'
import { config } from '../config'
import { useAppState } from '../context/AppStateContext'

const { yesLabel, noAttemptHeadlines, reactionEmojis } = config

export default function QuestionPage() {
  const navigate = useNavigate()
  const { noAttempts } = useAppState()
  const yesRef = useRef<HTMLButtonElement>(null)

  const dynamicHeadline = useMemo(() => {
    let text = "🌸 Will you go on a date with me? 🌸"
    for (const h of noAttemptHeadlines) {
      if (noAttempts >= h.after) text = h.text
    }
    return text
  }, [noAttempts])

  const emojiStage = Math.min(
    Math.floor(noAttempts / 2),
    reactionEmojis.length - 1,
  )

  return (
    <PageWrapper>
      <div className="w-full max-w-md mx-auto px-4 py-8 flex flex-col items-center text-center gap-4 min-h-screen justify-center">

        <motion.div
          key={emojiStage}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl select-none"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(255,77,141,0.3))' }}
        >
          {reactionEmojis[emojiStage]}
        </motion.div>

        <motion.h1
          key={dynamicHeadline}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-extrabold text-[#FF4D8D] text-3xl sm:text-4xl leading-tight text-[#4A1D3F] mt-4"
        >
          {dynamicHeadline}
        </motion.h1>

        {/* Buttons container (side-by-side) */}
        <div className="flex flex-row items-center justify-center gap-4 mt-8 w-full min-h-[80px]">
          <motion.button
            ref={yesRef}
            className="btn-yes question-yes-button relative z-20"
            animate={{
              boxShadow: [
                '0 4px 20px rgba(255,77,141,0.4)',
                '0 4px 32px rgba(255,77,141,0.7)',
                '0 4px 20px rgba(255,77,141,0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => navigate('/surprise')}
          >
            {yesLabel}
          </motion.button>
          
          <NoButton yesRef={yesRef} />
        </div>
      </div>
    </PageWrapper>
  )
}

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { useAppState } from '../context/AppStateContext'

export default function DatePage() {
  const navigate = useNavigate()
  const { dateChoice, setDateChoice, timeChoice, setTimeChoice } = useAppState()

  const isReady = dateChoice && timeChoice

  return (
    <PageWrapper>
      <div className="w-full max-w-sm mx-auto px-4 flex flex-col items-center justify-center min-h-screen gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-extrabold text-[#FF4D8D] text-3xl text-center text-[#4A1D3F]"
        >
          📅🐾<br/>So... when are you free?
        </motion.h1>

        <div className="w-full flex flex-col gap-6 bg-white/50 p-6 rounded-3xl shadow-sm backdrop-blur-sm">
          <div>
            <label className="input-label">Pick a Day 📅</label>
            <input
              type="date"
              className="input-field"
              value={dateChoice}
              onChange={(e) => setDateChoice(e.target.value)}
            />
          </div>

          <div>
            <label className="input-label">What Time? ⏰</label>
            <select
              className="input-field"
              value={timeChoice}
              onChange={(e) => setTimeChoice(e.target.value)}
            >
              <option value="" disabled>Select a time...</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
              <option value="10:00 PM">10:00 PM</option>
              <option value="11:00 PM">11:00 PM</option>
            </select>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="btn-yes w-full"
          disabled={!isReady}
          onClick={() => navigate('/vibe')}
        >
          set the date! ♥
        </motion.button>
      </div>
    </PageWrapper>
  )
}

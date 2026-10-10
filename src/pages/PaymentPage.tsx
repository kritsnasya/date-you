import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import ConfettiBlast from '../components/ConfettiBlast'

export default function PaymentPage() {
  const navigate = useNavigate()
  const [paid, setPaid] = useState(false)

  const handlePay = () => {
    setPaid(true)
  }

  return (
    <PageWrapper>
      <div className="w-full max-w-sm mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen gap-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-extrabold text-[#FF4D8D] text-3xl"
        >
          one small fee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#4A1D3F] opacity-80 text-sm"
        >
          to confirm your acceptance of this date, please complete the following transaction. totally normal. everyone does this.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-white rounded-2xl p-6 shadow-xl border-2 border-[#FFB3CC] flex flex-col gap-4 mt-2 relative overflow-hidden"
        >
          <div className="font-bold text-lg text-[#4A1D3F]">Date Agreement™</div>
          <div className="text-3xl font-black text-[#FF4D8D]">₹999</div>
          <div className="text-xs text-[#4A1D3F] opacity-60">
            (for you only, for others its ₹1000)
          </div>
          
          <div className="h-px bg-[#FFE4EC] w-full my-2"></div>
          
          <div className="text-xs text-[#4A1D3F] flex flex-col gap-1 font-semibold">
            <p>✓ one-time fee</p>
            <p>✓ non-refundable</p>
            <p>✓ absolutely worth it</p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!paid ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full flex flex-col gap-3 mt-4"
            >
              <button onClick={handlePay} className="btn-yes w-full py-4 text-sm sm:text-base">
                pay 999 rupees & confirm 💝
              </button>
              
              <button
                onClick={() => navigate(-1)}
                className="text-[#4A1D3F] opacity-50 hover:opacity-100 text-sm font-bold transition-opacity"
              >
                go back
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 flex flex-col items-center"
            >
              <ConfettiBlast autoFire />
              <div className="text-5xl mb-4">🤣</div>
              <h2 className="font-extrabold text-[#FF4D8D] text-2xl text-[#FF4D8D]">Just kidding!</h2>
              <p className="text-[#4A1D3F] font-bold mt-2">See you on our date! 💕</p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  )
}

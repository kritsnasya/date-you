import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import ConfettiBlast from "../components/ConfettiBlast";
import { useAppState } from "../context/AppStateContext";

export default function SurprisePage() {
  const navigate = useNavigate();
  const { noAttempts } = useAppState();

  return (
    <PageWrapper>
      <ConfettiBlast autoFire />
      <div className="w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center justify-center text-center gap-6 min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-extrabold text-[#FF4D8D] text-4xl sm:text-5xl text-[#4A1D3F]"
        >
          WAIT YOU ACTUALLY SAID YES?? 😭
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-[#4A1D3F] opacity-80"
        >
          I was so ready for you to say no 😅
        </motion.p>

        {noAttempts > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm text-[#FF4D8D] font-bold bg-[#FFF0F5] px-4 py-2 rounded-full mt-2"
          ></motion.p>
        )}

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/when")}
          className="btn-yes text-lg px-8 py-4 mt-4"
        >
          okay okay! -&gt;
        </motion.button>
      </div>
    </PageWrapper>
  );
}

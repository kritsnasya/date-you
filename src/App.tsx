import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionPage from './pages/QuestionPage'
import SurprisePage from './pages/SurprisePage'
import DatePage from './pages/DatePage'
import VibePage from './pages/VibePage'
import ReadyPage from './pages/ReadyPage'
import PaymentPage from './pages/PaymentPage'
import NotFoundPage from './pages/NotFoundPage'
import FloatingHearts from './components/FloatingHearts'

import BackgroundMusic from './components/BackgroundMusic'
import { AppStateProvider } from './context/AppStateContext'

function AnimatedRoutes() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // If it's the very first time this tab is loading the app, force it to start at '/'
    if (!sessionStorage.getItem('app_started')) {
      sessionStorage.setItem('app_started', 'true')
      if (location.pathname !== '/') {
        navigate('/', { replace: true })
      }
    }
  }, [location.pathname, navigate])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
        <Route path="/when" element={<DatePage />} />
        <Route path="/vibe" element={<VibePage />} />
        <Route path="/ready" element={<ReadyPage />} />
        <Route path="/fee" element={<PaymentPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <FloatingHearts />
        <BackgroundMusic />
        <AnimatedRoutes />
      </HashRouter>
    </AppStateProvider>
  )
}

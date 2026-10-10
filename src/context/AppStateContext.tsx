import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'

export interface AppState {
  noAttempts: number
  incrementNoAttempts: () => void
  dateChoice: string
  setDateChoice: (d: string) => void
  timeChoice: string
  setTimeChoice: (t: string) => void
  vibeChoice: string
  setVibeChoice: (v: string) => void
}

const AppStateContext = createContext<AppState | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [noAttempts, setNoAttempts] = useState(0)
  const [dateChoice, setDateChoice] = useState('')
  const [timeChoice, setTimeChoice] = useState('')
  const [vibeChoice, setVibeChoice] = useState('')

  const incrementNoAttempts = useCallback(
    () => setNoAttempts((n) => n + 1),
    [],
  )

  return (
    <AppStateContext.Provider
      value={{
        noAttempts,
        incrementNoAttempts,
        dateChoice,
        setDateChoice,
        timeChoice,
        setTimeChoice,
        vibeChoice,
        setVibeChoice,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext)
  if (!ctx) throw new Error('useAppState must be used inside AppStateProvider')
  return ctx
}

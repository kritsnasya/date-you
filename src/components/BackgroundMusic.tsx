import { useEffect, useRef } from 'react'
import { config } from '../config'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!config.backgroundMusicEnabled) return

    const audio = audioRef.current
    if (!audio) return

    let listeningForInteraction = true

    const stopListening = () => {
      document.removeEventListener('pointerdown', startAfterInteraction)
      document.removeEventListener('keydown', startAfterInteraction)
      listeningForInteraction = false
    }

    const startPlayback = () => {
      // Browsers may block autoplay until the visitor interacts with the page.
      void audio.play().catch(() => undefined)
    }

    const handleError = () => {
      console.error('Background music failed to load:', audio.currentSrc)
      stopListening()
    }

    const startAfterInteraction = () => {
      stopListening()
      startPlayback()
    }

    audio.addEventListener('error', handleError)

    document.addEventListener('pointerdown', startAfterInteraction)
    document.addEventListener('keydown', startAfterInteraction)
    startPlayback()

    return () => {
      if (listeningForInteraction) stopListening()
      audio.removeEventListener('error', handleError)
      audio.pause()
    }
  }, [])

  if (!config.backgroundMusicEnabled) return null

  return (
    <audio
      ref={audioRef}
      src={`${import.meta.env.BASE_URL}background-music.mp3`}
      loop
      preload="auto"
    />
  )
}

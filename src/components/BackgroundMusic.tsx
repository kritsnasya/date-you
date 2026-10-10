import { useEffect, useRef, useState } from 'react'

type MusicStatus = 'loading' | 'playing' | 'paused' | 'unavailable'

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [status, setStatus] = useState<MusicStatus>('loading')

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let active = true
    let listeningForInteraction = true

    const stopListening = () => {
      document.removeEventListener('pointerdown', startAfterInteraction)
      document.removeEventListener('keydown', startAfterInteraction)
      listeningForInteraction = false
    }

    const startPlayback = () => {
      void audio.play().catch(() => {
        if (active) setStatus(audio.error ? 'unavailable' : 'paused')
      })
    }

    const handlePlay = () => setStatus('playing')
    const handlePause = () => setStatus('paused')
    const handleError = () => {
      setStatus('unavailable')
      stopListening()
    }

    const startAfterInteraction = (event: Event) => {
      if (
        event.target instanceof Element &&
        event.target.closest('[data-music-control]')
      ) {
        return
      }

      stopListening()
      startPlayback()
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)

    document.addEventListener('pointerdown', startAfterInteraction)
    document.addEventListener('keydown', startAfterInteraction)
    startPlayback()

    return () => {
      active = false
      if (listeningForInteraction) stopListening()
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
      audio.pause()
    }
  }, [])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio || status === 'unavailable') return

    if (audio.paused) {
      void audio.play().catch(() => {
        setStatus(audio.error ? 'unavailable' : 'paused')
      })
    } else {
      audio.pause()
    }
  }

  const label =
    status === 'playing'
      ? 'Music on'
      : status === 'unavailable'
        ? 'Music unavailable'
        : 'Music off'

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}background-music.mp3`}
        loop
        preload="auto"
      />
      <button
        type="button"
        data-music-control
        className="music-toggle"
        onClick={togglePlayback}
        disabled={status === 'unavailable'}
        aria-label={
          status === 'playing' ? 'Turn background music off' : 'Turn background music on'
        }
        aria-pressed={status === 'playing'}
      >
        <span aria-hidden="true">{status === 'playing' ? '♫' : '♪'}</span>
        {label}
      </button>
    </>
  )
}

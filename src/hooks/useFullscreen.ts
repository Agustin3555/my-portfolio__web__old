import { useEffect, useRef, useState } from 'react'

export const useFullscreen = <T extends HTMLElement>() => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const elementRef = useRef<T | null>(null)

  const enterFullscreen = async () => {
    if (elementRef.current) await elementRef.current.requestFullscreen()
  }

  const exitFullscreen = async () => {
    await document.exitFullscreen()
  }

  const toggleFullscreen = async () => {
    if (document.fullscreenElement === elementRef.current) await exitFullscreen()
    else await enterFullscreen()
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === elementRef.current)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [elementRef])

  return { elementRef, isFullscreen, toggleFullscreen }
}

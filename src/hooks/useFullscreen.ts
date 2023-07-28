import { useEffect, useRef, useState } from 'react'

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  const enterFullscreen = async () => {
    if (elementRef.current) {
      if (elementRef.current.requestFullscreen) {
        await elementRef.current.requestFullscreen()
      } else if (elementRef.current.mozRequestFullScreen) {
        /* Firefox */
        await elementRef.current.mozRequestFullScreen()
      } else if (elementRef.current.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        await elementRef.current.webkitRequestFullscreen()
      } else if (elementRef.current.msRequestFullscreen) {
        /* IE/Edge */
        await elementRef.current.msRequestFullscreen()
      }
    }
  }

  const exitFullscreen = async () => {
    if (document.exitFullscreen) {
      await document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      await document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari & Opera */
      await document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      await document.msExitFullscreen()
    }
  }

  const toggleFullscreen = async () => {
    if (document.fullscreenElement === elementRef.current) {
      await exitFullscreen()
    } else {
      await enterFullscreen()
    }
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

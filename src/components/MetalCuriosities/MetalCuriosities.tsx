import { useDarkMode, useData } from '@/hooks'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from '@/components'
import {
  metalCuriositiesStyleAdapter,
  StylizedMetalCuriosities,
} from './MetalCuriosities.styled'
import { sleep } from '@/tools'

export const MetalCuriosities = () => {
  const darkMode = useDarkMode()
  const { interval, volume, curiosities, meows } = useData().metalCuriosities
  const [curiosity, setCuriosity] = useState(0)
  const [hidden, setHidden] = useState(true)
  const mixedCuriosities = useMemo(() => [...curiosities].sort(() => Math.random() - 0.5), [])
  const audioRef = useRef<HTMLAudioElement>(null)
  const [meow, setMeow] = useState(0)

  useEffect(() => {
    setHidden(false)
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play()
      setMeow(Math.floor(Math.random() * (meows.length - 1 + 1) + 1))
    }, 1500)

    const animationInterval = setInterval(async () => {
      setHidden(true)
      await sleep(2000)
      setCuriosity(prevCuriosity => (prevCuriosity + 1) % mixedCuriosities.length)
      setHidden(false)
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play()
        setMeow(Math.floor(Math.random() * (meows.length - 1 + 1) + 1))
      }, 1500)
    }, interval * 1000 * 60)

    return () => clearInterval(animationInterval)
  }, [])

  const checkHandlerClick = useCallback(() => setHidden(true), [])

  return (
    <StylizedMetalCuriosities p={metalCuriositiesStyleAdapter(darkMode, hidden)}>
      <audio
        ref={audioRef}
        src={`/src/assets/${meows[meow]}`}
        onLoadedData={() => {
          if (audioRef.current) audioRef.current.volume = volume
        }}
      />
      <div className="metal-container">
        <div className="metal" />
      </div>
      <div className="call">
        <svg
          className="svg"
          width="110"
          height="42"
          viewBox="0 0 110 42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M110 42L110 26H78C72.4771 26 68 21.5228 68 16V14.5296C68 7.52015 60.9758 2.68571 54.4286 5.18903L6.42863 23.542C2.55706 25.0223 7.62939e-06 28.7376 7.62939e-06 32.8825V42H110Z" />
        </svg>
        <aside className="text">{mixedCuriosities[curiosity]}</aside>
        <button className="check" onClick={checkHandlerClick}>
          <Icon iconName="fa-solid fa-thumbs-up" />
        </button>
      </div>
    </StylizedMetalCuriosities>
  )
}

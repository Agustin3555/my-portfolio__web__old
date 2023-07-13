import { useEffect, useState } from 'react'
import { BarMenu, HamburgerMenu } from './components'

const Menu = () => {
  const [scrollDirection, setScrollDirection] = useState(false)

  useEffect(() => {
    let lastScrollY = 0
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      setScrollDirection(scrollY > lastScrollY)
      lastScrollY = scrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <BarMenu scrollDirection={scrollDirection} />
      <HamburgerMenu scrollDirection={scrollDirection} />
    </>
  )
}

export default Menu

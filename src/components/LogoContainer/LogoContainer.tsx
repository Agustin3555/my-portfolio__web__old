import { useData } from '@/hooks'
import * as LogoContainerStyled from './LogoContainer.styled'
import logo from '@/assets/logo.png'
import { useMemo } from 'react'

export const LogoContainer = () => {
  const { sections } = useData().pages.home

  const href = useMemo(() => {
    const sectionKey: keyof typeof sections = 'about'

    return `#${sectionKey}`
  }, [])

  return (
    <LogoContainerStyled.Component href={href}>
      <img className="logo" src={logo} alt="" />
    </LogoContainerStyled.Component>
  )
}

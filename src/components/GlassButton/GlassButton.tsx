import { HandlingClass, asClassName } from '@/tools'
import * as GlassButtonStyled from './GlassButton.styled'
import { ReactElement } from 'react'

const GlassButton = ({
  title,
  handleClick,
  handlingClass,
  children,
}: {
  title: string
  handleClick?: () => void | Promise<void>
  handlingClass?: HandlingClass
  children: ReactElement
}) => {
  return (
    <GlassButtonStyled.Component
      className={asClassName(handlingClass)}
      onClick={handleClick}
      title={title}
    >
      <div className="glass-button__glass-refleccion" />
      <div className="glass-button__content">{children}</div>
    </GlassButtonStyled.Component>
  )
}

export default GlassButton

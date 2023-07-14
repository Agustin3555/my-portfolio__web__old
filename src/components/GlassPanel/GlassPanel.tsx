import { ReactNode } from 'react'
import * as GlassPanelStyled from './GlassPanel.styled'
import { HandlingClass, asClassName } from '@/tools'

const GlassPanel = ({
  handlingClass,
  style = {},
  children,
}: {
  handlingClass?: HandlingClass
  style?: GlassPanelStyled.Props
  children?: ReactNode
}) => (
  <GlassPanelStyled.Component
    className={asClassName(handlingClass)}
    p={GlassPanelStyled.adapter(style)}
  >
    <div className="glass-refleccion" />
    <div className="content">{children}</div>
  </GlassPanelStyled.Component>
)

export default GlassPanel

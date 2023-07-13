import { ReactNode } from 'react'
import * as GlassPanelStyled from './GlassPanel.styled'

const GlassPanel = ({
  style = {},
  children,
}: {
  style?: GlassPanelStyled.Props
  children?: ReactNode
}) => (
  <GlassPanelStyled.Component p={GlassPanelStyled.adapter(style)}>
    <div className="glass-refleccion" />
    <div className="content">{children}</div>
  </GlassPanelStyled.Component>
)

export default GlassPanel

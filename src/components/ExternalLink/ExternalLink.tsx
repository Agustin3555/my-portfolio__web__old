import * as ExternalLinkStyled from './ExternalLink.styled'
import { Icon } from '@/components'
import { FONT_SIZE } from '@/styles'
import { HandlingClass, asClassName } from '@/tools'

const ExternalLink = ({
  url,
  iconName,
  title,
  text,
  handlingClass,
  style = {},
}: {
  url: string
  iconName: string
  title: string
  text?: string
  handlingClass?: HandlingClass
  style?: ExternalLinkStyled.Props
}) => {
  return (
    <ExternalLinkStyled.Component
      className={asClassName(handlingClass)}
      title={title}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      p={ExternalLinkStyled.adapter(style)}
    >
      <div className="external-network__glass-refleccion" />
      <div className="external-network__content">
        <Icon iconName={iconName} style={{ size: FONT_SIZE.m }} />
        {text}
      </div>
    </ExternalLinkStyled.Component>
  )
}

export default ExternalLink

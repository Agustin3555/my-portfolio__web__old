import * as ExternalNetworkStyled from './ExternalNetwork.styled'
import { Icon } from '@/components'
import { FONT_SIZE } from '@/styles'

const ExternalNetwork = ({
  url,
  iconName,
  title,
  style = {},
}: {
  url: string
  iconName: string
  title: string
  style?: ExternalNetworkStyled.Props
}) => {
  return (
    <ExternalNetworkStyled.Component
      title={title}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      p={ExternalNetworkStyled.adapter(style)}
    >
      <div className="external-network__glass-refleccion" />
      <div className="external-network__content">
        <Icon iconName={iconName} style={{ size: FONT_SIZE.m }} />
      </div>
    </ExternalNetworkStyled.Component>
  )
}

export default ExternalNetwork

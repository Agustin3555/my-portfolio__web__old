import { HandlingClass, asClassName } from '@/tools'
import * as IconStyled from './Icon.styled'

const Icon = ({
  handlingClass,
  iconName,
  style,
}: {
  handlingClass?: HandlingClass
  iconName: string
  style?: IconStyled.Props
}) => {
  return (
    <IconStyled.Component
      className={asClassName(handlingClass)}
      p={IconStyled.adapter(style)}
    >
      <i className={`icon ${iconName}`} />
    </IconStyled.Component>
  )
}

export default Icon

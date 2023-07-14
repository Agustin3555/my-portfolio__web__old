import { HandlingClass, asClassName } from '@/tools'
import * as LBoxStyled from './LBox.styled'

const LBox = ({
  handlingClass,
  style,
}: {
  handlingClass?: HandlingClass
  style?: LBoxStyled.Props
}) => {
  return (
    <LBoxStyled.Component
      className={asClassName(handlingClass)}
      p={LBoxStyled.adapter(style)}
    />
  )
}

export default LBox

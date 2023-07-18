import { HandlingClass, asClassName } from '@/tools'
import * as LBoxStyled from './LBox.styled'
import { useRef } from 'react'

const LBox = ({
  handlingClass,
  style,
}: {
  handlingClass?: HandlingClass
  style?: LBoxStyled.Props
}) => {
  const p = useRef(LBoxStyled.adapter(style))

  return (
    <LBoxStyled.Component className={asClassName(handlingClass)} p={p.current} />
  )
}

export default LBox

import { HandlingClass, asClassName } from '@/tools'
import * as ButtonSectionStyled from './ButtonSection.styled'

export interface ButtonSectionProps {
  sectionKey: string
  title: string
  handlingClass?: HandlingClass
}

const ButtonSection = ({ sectionKey, title, handlingClass }: ButtonSectionProps) => {
  return (
    <ButtonSectionStyled.Component
      href={`/#${sectionKey}`}
      className={asClassName(handlingClass)}
    >
      {title}
    </ButtonSectionStyled.Component>
  )
}

export default ButtonSection

import * as ButtonSectionStyled from './ButtonSection.styled'

export interface ButtonSectionProps {
  sectionKey: string
  title: string
}

const ButtonSection = ({ sectionKey, title }: ButtonSectionProps) => {
  return (
    <ButtonSectionStyled.Component href={`/#${sectionKey}`}>
      {title}
    </ButtonSectionStyled.Component>
  )
}

export default ButtonSection

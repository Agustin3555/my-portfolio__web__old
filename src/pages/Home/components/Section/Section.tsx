import * as SectionStyled from './Section.styled'

const Section = ({
  sectionKey,
  title,
  children,
}: {
  sectionKey: string
  title?: string
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <SectionStyled.Component id={sectionKey}>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </SectionStyled.Component>
  )
}

export default Section

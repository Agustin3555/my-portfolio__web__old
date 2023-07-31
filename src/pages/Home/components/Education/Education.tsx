import { useData } from '@/hooks'
import { useMemo } from 'react'
import Section from '../Section/Section'
import { EducationItem } from './components'
import * as EducationStyled from './Education.styled'

const Education = () => {
  const { pages } = useData()

  const { sectionKey, title, items } = useMemo(() => {
    const { sections } = pages.home
    const sectionKey: keyof typeof sections = 'education'
    const { education } = sections

    const { title } = education
    const { items } = education.data

    return { sectionKey, title, items }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      <EducationStyled.Component>
        <ul className="items">
          {items.map((item, index) => (
            <EducationItem
              {...item}
              firstItem={index === 0}
              lastItem={index === items.length - 1}
              key={item.title}
            />
          ))}
        </ul>
      </EducationStyled.Component>
    </Section>
  )
}

export default Education

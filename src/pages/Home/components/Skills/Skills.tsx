import * as SkillsStyled from './Skills.styled'
import { useData } from '@/hooks'
import { LevelDescs, Treeview } from './components'
import { useMemo } from 'react'
import Section from '../Section/Section'

const Skills = () => {
  const { pages } = useData()

  const { sectionKey, title } = useMemo(() => {
    const { home } = pages
    const sectionKey: keyof typeof home.sections = 'skills'

    const { title } = home.sections.skills

    return { sectionKey, title }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      <SkillsStyled.Component>
        <Treeview />
        <LevelDescs />
      </SkillsStyled.Component>
    </Section>
  )
}

export default Skills

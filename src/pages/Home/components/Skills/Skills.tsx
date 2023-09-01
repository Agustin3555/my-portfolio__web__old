import * as SkillsStyled from './Skills.styled'
import { useData } from '@/hooks'
import { LevelDescs, Treeview, Treeview2 } from './components'
import { GlassPanel } from '@/components'
import { useMemo } from 'react'
import { NOT_FONT_SIZE } from '@/styles'
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
        {/* <GlassPanel
          style={{
            padding: NOT_FONT_SIZE.s,
            borderRadius: NOT_FONT_SIZE.xs,
            elevation: 2,
          }}
        >
          <Treeview />
        </GlassPanel> */}
        <GlassPanel
          style={{
            padding: NOT_FONT_SIZE.s,
            borderRadius: NOT_FONT_SIZE.xs,
            elevation: 2,
          }}
          handlingClass="tech"
        >
          <Treeview2 />
        </GlassPanel>
        <LevelDescs />
      </SkillsStyled.Component>
    </Section>
  )
}

export default Skills

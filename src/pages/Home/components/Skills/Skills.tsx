import { skillsStyleAdapter, StylizedSkills } from './Skills.styled'
import { useDarkMode, useData } from '@/hooks'
import { LevelBar, Treeview } from './components'
import { GlassPanel, Paragraph } from '@/components'
import { useMemo, useRef, useState } from 'react'
import { NOT_FONT_SIZE } from '@/styles'
import Section from '../Section/Section'

const LEVEL_SELECTED_INIT = 0

export const Skills = () => {
  const darkMode = useDarkMode()
  const [levelSelected, setLevelSelected] = useState(LEVEL_SELECTED_INIT)
  const skillsRef = useRef<HTMLDivElement>(null)
  const { home } = useData().pages

  const { sectionKey, title, data } = useMemo(() => {
    const sectionKey: keyof typeof home.sections = 'skills'
    const { title, subsections } = home.sections.skills
    const { data } = subsections.levels

    return { sectionKey, title, data }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      <StylizedSkills
        p={skillsStyleAdapter(darkMode, levelSelected)}
        ref={skillsRef}
      >
        <div className="content">
          <div className="group">
            <div className="floating-box">
              <GlassPanel
                style={{
                  padding: NOT_FONT_SIZE.s,
                  borderRadius: NOT_FONT_SIZE.xs,
                  elevation: 2,
                }}
              >
                <div className="floating-box-glass-container">
                  <LevelBar segments={data.length} value={levelSelected} showLevel />
                  <div className="fake-selectors">
                    {data.map((item, index) => (
                      <div
                        className="selector"
                        key={index}
                        onClick={() => setLevelSelected(index + 1)}
                        onMouseEnter={() => setLevelSelected(index + 1)}
                        onMouseLeave={() => setLevelSelected(LEVEL_SELECTED_INIT)}
                      />
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </div>
            <GlassPanel
              style={{
                padding: NOT_FONT_SIZE.s,
                borderRadius: NOT_FONT_SIZE.xs,
                elevation: 2,
              }}
            >
              <Treeview />
            </GlassPanel>
          </div>
          <div className="description">
            {/* <Subtitle text="Niveles" /> */}
            Niveles
            <ol className="levels">
              {data.map((item, index) => (
                <li
                  className="item"
                  key={index}
                  onClick={() => setLevelSelected(index + 1)}
                  onMouseEnter={() => setLevelSelected(index + 1)}
                  onMouseLeave={() => setLevelSelected(LEVEL_SELECTED_INIT)}
                >
                  <span className="level-title">{item.level}</span>
                  <Paragraph text={item.description} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </StylizedSkills>
    </Section>
  )
}

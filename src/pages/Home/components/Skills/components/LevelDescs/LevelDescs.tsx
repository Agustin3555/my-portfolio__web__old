import * as LevelDescsStyled from './LevelDescs.styled'
import { useData } from '@/hooks'
import { useAppStore } from '@/store'
import { useMemo } from 'react'

const LevelDescs = () => {
  const skillLevelToggle = useAppStore(store => store.skillLevelToggle)
  const selectedSkillLevels = useAppStore(store => store.selectedSkillLevels)

  const { pages } = useData()

  const { levels } = useMemo(() => {
    const { levels } = pages.home.sections.skills.subsections

    return { levels }
  }, [])

  return (
    <LevelDescsStyled.Component>
      {levels.map((item, index) => (
        <li className="item" data-selected={selectedSkillLevels[index]} key={index}>
          <div className="toggle" onClick={() => skillLevelToggle(index)}>
            <div className="toggle-ui" />
            <span className="level-title">{item.level}</span>
          </div>
          <p className="desc text">{item.description}</p>
        </li>
      ))}
    </LevelDescsStyled.Component>
  )
}

export default LevelDescs

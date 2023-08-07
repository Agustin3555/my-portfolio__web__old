import * as LevelDescsStyled from './LevelDescs.styled'
import { useData } from '@/hooks'
import { useAppStore } from '@/store'
import { useMemo } from 'react'

const LevelDescs = () => {
  const setSelectedSkillLevel = useAppStore(store => store.setSelectedSkillLevel)
  const { pages } = useData()

  const { levels } = useMemo(() => {
    const { levels } = pages.home.sections.skills.subsections

    return { levels }
  }, [])

  return (
    <LevelDescsStyled.Component>
      {levels.map((item, index) => (
        <li
          className="item"
          key={index}
          onClick={() => setSelectedSkillLevel(index)}
          onMouseEnter={() => setSelectedSkillLevel(index)}
          onMouseLeave={() => setSelectedSkillLevel(undefined)}
        >
          <span className="level-title">{item.level}</span>
          <p className="text">{item.description}</p>
        </li>
      ))}
    </LevelDescsStyled.Component>
  )
}

export default LevelDescs

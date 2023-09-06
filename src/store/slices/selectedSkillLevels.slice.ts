import { Slice } from '../slice'

export interface SelectedSkillLevelsSlice {
  selectedSkillLevels: boolean[]
  skillLevelToggle: (level: number) => void
}

export const createSelectedSkillLevelsSlice: Slice<
  SelectedSkillLevelsSlice
> = set => ({
  selectedSkillLevels: [true, true, true],
  skillLevelToggle: level =>
    set(store => {
      const currentState = store.selectedSkillLevels

      const newState = [...currentState]
      const newValue = !currentState[level]

      newState[level] = newValue

      return { selectedSkillLevels: newState }
    }),
})

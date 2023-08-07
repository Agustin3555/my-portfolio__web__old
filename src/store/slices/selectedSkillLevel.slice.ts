import { Slice } from '../slice'

export interface SelectedSkillLevelSlice {
  selectedSkillLevel?: number
  setSelectedSkillLevel: (level?: number) => void
}

export const createSelectedSkillLevelSlice: Slice<
  SelectedSkillLevelSlice
> = set => ({
  selectedSkillLevel: undefined,
  setSelectedSkillLevel: level => set(() => ({ selectedSkillLevel: level })),
})

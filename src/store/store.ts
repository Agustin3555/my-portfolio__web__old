import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createDarkModeSlice,
  createExternalLinkLocationSlice,
  createFocusedSectionSlice,
  createSelectedSkillLevelsSlice,
} from './slices'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createDarkModeSlice(...a),
  ...createExternalLinkLocationSlice(...a),
  ...createFocusedSectionSlice(...a),
  ...createSelectedSkillLevelsSlice(...a),
}))

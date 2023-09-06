import { create } from 'zustand'
import { AppStore } from './slice'
import {
  createDarkModeSlice,
  createExternalNetworkLocationSlice,
  createFocusedSectionSlice,
  createSelectedSkillLevelsSlice,
} from './slices'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createDarkModeSlice(...a),
  ...createExternalNetworkLocationSlice(...a),
  ...createFocusedSectionSlice(...a),
  ...createSelectedSkillLevelsSlice(...a),
}))

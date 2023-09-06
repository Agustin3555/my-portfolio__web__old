import { StateCreator } from 'zustand'
import {
  DarkModeSlice,
  ExternalNetworkLocationSlice,
  FocusedSectionSlice,
  SelectedSkillLevelsSlice,
} from './slices'

export type AppStore = DarkModeSlice &
  ExternalNetworkLocationSlice &
  FocusedSectionSlice &
  SelectedSkillLevelsSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>

import { StateCreator } from 'zustand'
import {
  DarkModeSlice,
  ExternalNetworkLocationSlice,
  FocusedSectionSlice,
  SelectedSkillLevelSlice,
} from './slices'

export type AppStore = DarkModeSlice &
  ExternalNetworkLocationSlice &
  FocusedSectionSlice &
  SelectedSkillLevelSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>

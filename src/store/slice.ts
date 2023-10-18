import { StateCreator } from 'zustand'
import {
  DarkModeSlice,
  ExternalLinkLocationSlice,
  FocusedSectionSlice,
  SelectedSkillLevelsSlice,
} from './slices'

export type AppStore = DarkModeSlice &
  ExternalLinkLocationSlice &
  FocusedSectionSlice &
  SelectedSkillLevelsSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>

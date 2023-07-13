import { StateCreator } from 'zustand'
import {
  DarkModeSlice,
  ExternalNetworkLocationSlice,
  FocusedSectionSlice,
} from './slices'

export type AppStore = DarkModeSlice &
  ExternalNetworkLocationSlice &
  FocusedSectionSlice

export type Slice<T> = StateCreator<AppStore, [], [], T>

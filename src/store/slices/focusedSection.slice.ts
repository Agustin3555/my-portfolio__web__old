import { Slice } from '../slice'

export interface FocusedSectionSlice {
  focusedSection: string
  setFocusedSection: (sectionKey: string) => void
}

export const createFocusedSectionSlice: Slice<FocusedSectionSlice> = set => ({
  focusedSection: '',
  setFocusedSection: sectionKey => set(() => ({ focusedSection: sectionKey })),
})

import { darkModeEntity } from '@/services'
import { Slice } from '../slice'

const DEFAULT_STATE_INIT = true

export interface DarkModeSlice {
  darkMode: boolean
  toggleDarkMode: () => void
}

const darkModeInit = () => {
  // Si existe la entidad en local storage, se la utiliza
  const darkModeValue = darkModeEntity.get()
  if (darkModeValue !== null) return darkModeValue

  // Si existe la media del usuario, se la utiliza
  if (window.matchMedia)
    return window.matchMedia('(prefers-color-scheme: dark)').matches

  // Si no, se crea la entidad en local storage y se la utiliza
  darkModeEntity.set(DEFAULT_STATE_INIT)
  return DEFAULT_STATE_INIT
}

export const createDarkModeSlice: Slice<DarkModeSlice> = set => ({
  darkMode: darkModeInit(),
  toggleDarkMode: () => {
    set(state => {
      darkModeEntity.set(!state.darkMode)

      return { darkMode: !state.darkMode }
    })
  },
})

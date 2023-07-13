import { useAppStore } from '@/store'

export const useDarkMode = () => {
  const darkMode = useAppStore(store => store.darkMode)

  return darkMode
}

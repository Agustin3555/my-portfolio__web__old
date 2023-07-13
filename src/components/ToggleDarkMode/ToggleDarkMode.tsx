import { Icon } from '@/components'
import { FONT_SIZE } from '@/styles'
import * as ToggleDarkModeStyled from './ToggleDarkMode.styled'
import { useDarkMode } from '@/hooks'
import { useAppStore } from '@/store'

const ToggleDarkMode = () => {
  const darkMode = useDarkMode()

  const handleChange = useAppStore(store => store.toggleDarkMode)

  return (
    <ToggleDarkModeStyled.Component>
      <div className="fake-button">
        <div className="sun">
          <Icon iconName="fa-solid fa-sun" style={{ size: FONT_SIZE.s }} />
        </div>
        <div className="moon">
          <Icon iconName="fa-solid fa-moon" style={{ size: FONT_SIZE.s }} />
        </div>
      </div>
      <label htmlFor="darkMode" />
      <input
        className="input"
        onChange={handleChange}
        type="checkbox"
        id="toggleDarkMode"
        title="Alternar tema"
        checked={darkMode}
      />
    </ToggleDarkModeStyled.Component>
  )
}

export default ToggleDarkMode

import { COLOR_BRIGHT_A, COLOR_DARK_A } from '@/styles'
import * as LeftNavStyled from './LeftNav.styled'
import { useData } from '@/hooks'
import Separator from '../Separator/Separator'
import ToggleDarkMode from '../ToggleDarkMode/ToggleDarkMode'
import ExternalLink from '../ExternalLink/ExternalLink'
import { LOCATION, useAppStore } from '@/store'
import { css } from '@emotion/react'

const LeftNav = () => {
  const { externalNetwork } = useData()
  const location = useAppStore(store => store.externalNetworkLocation)

  return (
    <LeftNavStyled.Component>
      <nav className="nav" data-show={location === LOCATION.leftNav}>
        {externalNetwork.map((item, index) => (
          <ExternalLink
            key={item.title}
            iconName={item.iconName}
            url={item.url}
            title={item.title}
            style={{
              styled: css`
                --i: ${externalNetwork.length - index};
              `,
            }}
          />
        ))}
        <Separator
          style={{
            invert: true,
            backgroundColor: { dark: COLOR_DARK_A, bright: COLOR_BRIGHT_A },
          }}
        />
      </nav>
      <ToggleDarkMode />
    </LeftNavStyled.Component>
  )
}

export default LeftNav

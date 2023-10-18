import * as HamburgerMenuStyled from './HamburgerMenu.styled'
import { ButtonSection, ExternalLink, Separator, ToggleDarkMode } from '@/components'
import { useChildAdjustment, useData } from '@/hooks'
import { COLOR_BRIGHT_A, COLOR_DARK_A } from '@/styles'
import { useCallback, useState } from 'react'
import { Hamburger } from './components'
import { useMenu } from '../../hooks'

const HamburgerMenu = ({ scrollDirection }: { scrollDirection: boolean }) => {
  const [expanded, setExpanded] = useState(false)
  const { externalNetwork } = useData()
  const { homeSections, resume } = useMenu()
  const { childRef, childWidth, childHeight } = useChildAdjustment()

  const handleToggleExpandClick = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])

  return (
    <HamburgerMenuStyled.Component
      p={HamburgerMenuStyled.adapter(childWidth, childHeight)}
      data-show={scrollDirection && !expanded}
      data-expanded={expanded}
    >
      <div className="deep-touch" onClick={handleToggleExpandClick} />
      <div className="glass-menu">
        <div className="glass-refleccion" />
        <div className="content">
          <div className="MC">
            <div className="C" ref={childRef}>
              <Hamburger expanded={expanded} handleClick={handleToggleExpandClick} />
              <div className="group">
                <Separator
                  style={{
                    invert: true,
                    backgroundColor: {
                      dark: COLOR_DARK_A,
                      bright: COLOR_BRIGHT_A,
                    },
                  }}
                />
                <nav className="nav">
                  {homeSections.map(item => (
                    <ButtonSection key={item.sectionKey} {...item} />
                  ))}
                  <Separator
                    style={{
                      invert: true,
                      backgroundColor: {
                        dark: COLOR_DARK_A,
                        bright: COLOR_BRIGHT_A,
                      },
                    }}
                  />
                  <ButtonSection {...resume} />
                </nav>
                <Separator
                  style={{
                    invert: true,
                    backgroundColor: {
                      dark: COLOR_DARK_A,
                      bright: COLOR_BRIGHT_A,
                    },
                  }}
                />
                <nav className="nav nav--external-network">
                  {externalNetwork.map(item => (
                    <ExternalLink
                      key={item.title}
                      iconName={item.iconName}
                      url={item.url}
                      title={item.title}
                    />
                  ))}
                </nav>
                <Separator
                  style={{
                    invert: true,
                    backgroundColor: {
                      dark: COLOR_DARK_A,
                      bright: COLOR_BRIGHT_A,
                    },
                  }}
                />
                <ToggleDarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HamburgerMenuStyled.Component>
  )
}

export default HamburgerMenu

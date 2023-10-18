import * as AboutStyled from './About.styled'
import { useData, useOnScreen } from '@/hooks'
import { Slider } from './components'
import { useMemo } from 'react'
import Section from '../Section/Section'
import { ExternalLink } from '@/components'
import { LOCATION, useAppStore } from '@/store'
import { css } from '@emotion/react'
import { NOT_FONT_SIZE, getCSSVarValue } from '@/styles'

const ROOT_MARGIN = NOT_FONT_SIZE.m

const About = () => {
  const { externalNetwork, pages } = useData()

  const { sectionKey, presentation } = useMemo(() => {
    const { sections } = pages.home
    const sectionKey: keyof typeof sections = 'about'
    const { presentation } = sections.about.data

    return { sectionKey, presentation }
  }, [])

  const location = useAppStore(store => store.externalNetworkLocation)
  const setLocation = useAppStore(store => store.setExternalLinkLocation)

  const rootMargin = useMemo(() => {
    let value = getCSSVarValue(ROOT_MARGIN)

    value = value.slice(0, -3)

    value = `-${parseFloat(value) * 16}px`

    return value
  }, [])

  const [navRef] = useOnScreen({
    options: { rootMargin },
    onIntersectionChange: isIntersecting => {
      setLocation(isIntersecting ? LOCATION.about : LOCATION.leftNav)
    },
  })

  return (
    <Section sectionKey={sectionKey}>
      <AboutStyled.Component>
        <div className="description">
          <p className="hello --movable">{presentation[0]}</p>
          <div className="title-group">
            <h1 className="name --movable">{presentation[1]}</h1>
            <h2 className="rol --movable">{presentation[2]}</h2>
          </div>
          <p className="summary text --movable">{presentation[3]}</p>
          {/*
            TODO: hacer que destaque mi nivel cambiando de color la palabra.
            Ej: ...actualmente las empresas me consideran **junior**...
          */}
          <nav className="nav" ref={navRef} data-show={location === LOCATION.about}>
            {externalNetwork
              .slice()
              .reverse()
              .map((item, index) => (
                <ExternalLink
                  key={item.title}
                  iconName={item.iconName}
                  url={item.url}
                  title={item.title}
                  style={{
                    styled: css`
                      --i: ${index};
                    `,
                  }}
                />
              ))}
          </nav>
        </div>
        <Slider />
      </AboutStyled.Component>
    </Section>
  )
}

export default About

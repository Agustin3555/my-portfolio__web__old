import { ExternalLink, GlassPanel, Separator } from '@/components'
import * as WorkItemStyled from './WorkItem.styled'
import { COLOR, NOT_FONT_SIZE } from '@/styles'
import { Slider } from '../../..'
import { useMemo } from 'react'

const WorkItem = ({
  title,
  types,
  desc,
  technologies,
  imgs,
  sliderAspectRatio,
  links,
}: {
  title: string
  types: string[]
  desc: string
  technologies: string[]
  imgs: { src: string; alt: string }[]
  sliderAspectRatio?: number[]
  links?: { srcCodeUrl?: string; others?: { title: string; url: string }[] }
}) => {
  const externalLinks = useMemo(() => {
    let value: { url: string; iconName: string; title: string }[] = []

    if (links) {
      const { srcCodeUrl, others } = links

      if (srcCodeUrl)
        value = [
          ...value,
          { url: srcCodeUrl, title: 'Código fuente', iconName: 'fa-solid fa-code' },
        ]

      if (others)
        value = [
          ...value,
          ...others.map(item => ({
            url: item.url,
            title: item.title,
            iconName: 'fa-solid fa-square-arrow-up-right',
          })),
        ]
    }

    return value
  }, [])

  return (
    <WorkItemStyled.Component>
      <Slider
        imgs={imgs}
        handlingClass="slider"
        style={{ aspectRatio: sliderAspectRatio }}
      />
      <GlassPanel
        style={{
          padding: NOT_FONT_SIZE.s,
          borderRadius: NOT_FONT_SIZE['2xs'],
          elevation: 2,
        }}
        handlingClass="header-glass"
      >
        <div className="header">
          <h4 className="title">{title}</h4>
          <ul className="types">
            {types.map((item, index) => (
              <li className="item-C" key={item}>
                <h5 className="item">{item}</h5>
                {index !== types.length - 1 && (
                  <Separator
                    style={{
                      long: NOT_FONT_SIZE['2xs'],
                      backgroundColor: { dark: COLOR.g_10 },
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </GlassPanel>
      <p className="desc text">{desc}</p>
      <div className="footer">
        <ul className="technologies">
          {technologies.map(item => (
            <li className="item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <ul className="links">
          {externalLinks.map(item => (
            <li key={item.title}>
              <ExternalLink {...item} />
            </li>
          ))}
        </ul>
      </div>
    </WorkItemStyled.Component>
  )
}

export default WorkItem

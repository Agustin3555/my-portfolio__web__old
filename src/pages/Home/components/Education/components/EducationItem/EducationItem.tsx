import { ExternalLink, GlassPanel } from '@/components'
import * as EducationItemStyled from './EducationItem.styled'
import { useMemo } from 'react'
import { NOT_FONT_SIZE } from '@/styles'

const EducationItem = ({
  title,
  startDate,
  endDate,
  eduInstitutionName,
  eduInstitutionLogoFile,
  url,
  desc,
  firstItem = false,
  lastItem = false,
}: {
  title: string
  startDate: string
  endDate: string
  eduInstitutionName: string
  eduInstitutionLogoFile: string
  url: string
  desc: string[]
  firstItem?: boolean
  lastItem?: boolean
}) => {
  const time = useMemo(() => {
    const value = new Date(`${startDate}T00:00`)

    return value.toLocaleDateString().replace(/\//g, '·')
  }, [])

  return (
    <EducationItemStyled.Component>
      <div className="item">
        <div className="pointer">
          {!firstItem && <div className="pointer-line line top" />}
          <div className="point-3">
            <GlassPanel
              style={{
                padding: EducationItemStyled.POINT_2_PADDING,
                borderRadius: NOT_FONT_SIZE['6xl'],
                elevation: 2,
              }}
              handlingClass="glass-point"
            >
              <div className="point-1" />
            </GlassPanel>
          </div>
          <div className="pointer-line line bot" />
        </div>
        <div className="extension-line line" />
        <span className="date">{time}</span>
        <GlassPanel
          style={{
            padding: NOT_FONT_SIZE.s,
            borderRadius: NOT_FONT_SIZE['2xs'],
            elevation: 2,
          }}
          handlingClass="heading"
        >
          <div className="heading-content">
            <h4 className="title">{title}</h4>
            <h5 className="subtitle text">{eduInstitutionName}</h5>
          </div>
        </GlassPanel>
        <div className="desc">
          {desc.map((item, index) => (
            <p className="text" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="links">
          <ExternalLink
            url={url}
            title="Más información"
            iconName="fa-solid fa-square-arrow-up-right"
          />
        </div>
      </div>
      {!lastItem && (
        <div className="item-gap">
          <div className="gap-line line" />
        </div>
      )}
    </EducationItemStyled.Component>
  )
}

export default EducationItem

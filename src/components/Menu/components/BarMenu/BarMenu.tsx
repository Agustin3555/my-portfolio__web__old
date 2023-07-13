import * as BarMenuStyled from './BarMenu.styled'
import { GlassPanel, Separator } from '@/components'
import { COLOR_BRIGHT_A, COLOR_DARK_A, NOT_FONT_SIZE } from '@/styles'
import ButtonSection from '../ButtonSection/ButtonSection'
import { useMenu } from '../../hooks'
import { css } from '@emotion/react'

const BarMenu = ({ scrollDirection }: { scrollDirection: boolean }) => {
  const { homeSections, resume } = useMenu()

  return (
    <BarMenuStyled.Component data-hidden={scrollDirection}>
      <GlassPanel
        style={{
          padding: NOT_FONT_SIZE.s,
          borderRadius: NOT_FONT_SIZE['2xs'],
          elevation: 2,
          styled: css`
            &,
            .glass-refleccion,
            .content {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }

            .content {
              border-top-width: 0;
            }
          `,
        }}
      >
        <div className="container">
          <nav className="nav">
            {homeSections.map(item => (
              <ButtonSection key={item.sectionKey} {...item} />
            ))}
            <Separator
              style={{
                backgroundColor: { dark: COLOR_DARK_A, bright: COLOR_BRIGHT_A },
              }}
            />
            <ButtonSection {...resume} />
          </nav>
        </div>
      </GlassPanel>
    </BarMenuStyled.Component>
  )
}

export default BarMenu

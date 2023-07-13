import { AnimateState } from '@/components'
import * as HamburgerStyled from './Hamburger.styled'

const Hamburger = ({
  expanded,
  handleClick,
}: {
  expanded: boolean
  handleClick: () => void
}) => {
  return (
    <HamburgerStyled.Component
      title={expanded ? 'Cerrar menú' : 'Abrir menú'}
      onClick={handleClick}
    >
      <AnimateState state={String(expanded)}>
        <div className="hamburger-AC">
          {!expanded ? (
            <div className="hamburger-icon">
              <div className="bar top" />
              <div className="bar mid" />
              <div className="bar bot" />
            </div>
          ) : (
            <div className="x-icon">
              <div className="bar x-bar a" />
              <div className="bar x-bar b" />
            </div>
          )}
        </div>
      </AnimateState>
    </HamburgerStyled.Component>
  )
}

export default Hamburger

import { levelBarStyleAdapter, LevelBarStyleProps, StylizedLevelBar } from './LevelBar.styled'
import { useDarkMode } from '@/hooks'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export const LevelBar = ({
  segments,
  value,
  showLevel = false,
  styleProps,
}: {
  segments: number
  value: number
  showLevel?: boolean
  styleProps?: LevelBarStyleProps
}) => {
  const darkMode = useDarkMode()

  return (
    <StylizedLevelBar p={levelBarStyleAdapter(darkMode, segments, value, styleProps)}>
      <div className="separators">
        {Array(segments - 1)
          .fill(undefined)
          .map((item, index) => (
            <div className="separator" key={index} />
          ))}
      </div>
      <div className="bar">
        {showLevel && (
          <div className="level">
            <SwitchTransition>
              <CSSTransition
                key={value}
                classNames="fade"
                addEndListener={(node, done) =>
                  node.addEventListener('transitionend', done, false)
                }
              >
                <span className="value">{value}</span>
              </CSSTransition>
            </SwitchTransition>
          </div>
        )}
      </div>
    </StylizedLevelBar>
  )
}

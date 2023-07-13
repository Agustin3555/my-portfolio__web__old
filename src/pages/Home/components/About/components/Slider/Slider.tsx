import { sliderStyleAdapter, StylizedSlider } from './Slider.styled'
import { useDarkMode, useData } from '@/hooks'
import { GlassPanel, Icon, LBox } from '@/components'
import { useCallback, useMemo, useState } from 'react'
import myself from '@/assets/myself.jpg'
import logo from '@/assets/logo.png'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { sleep } from '@/tools'
import { COLOR, FONT_SIZE, NOT_FONT_SIZE } from '@/styles'

export const Slider = () => {
  const darkMode = useDarkMode()
  const [item, setItem] = useState(0)
  const [changing, setChanging] = useState(false)
  const { extraPresentationSlider } = useData().pages.home.sections.about.data

  const items = useMemo(
    () => [
      {
        element: <img className="item" src={myself} alt="" />,
        description: extraPresentationSlider.myself.description,
      },
      {
        element: <img className="item logo" src={logo} alt="" />,
        description: extraPresentationSlider.logo.description,
      },
      {
        element: <div className="item">C</div>,
        description: extraPresentationSlider.metal.description,
      },
    ],
    []
  )

  const setItemWrapped = useCallback(async (setItem: () => void) => {
    setChanging(true)
    setItem()
    await sleep(1000)
    setChanging(false)
  }, [])

  const navLeftButtonHandlerClick = useCallback(
    () =>
      setItemWrapped(() =>
        setItem(prevItem => (prevItem === 0 ? items.length - 1 : prevItem - 1))
      ),
    []
  )

  const navRightButtonHandlerClick = useCallback(
    () => setItemWrapped(() => setItem(prevItem => (prevItem + 1) % items.length)),
    []
  )

  return (
    <StylizedSlider p={sliderStyleAdapter(darkMode, item)}>
      <div className="box-1">
        <LBox style={{ size: NOT_FONT_SIZE.xl, backgroundColor: COLOR.a }} />
      </div>
      <div className="description">
        <GlassPanel style={{ borderRadius: NOT_FONT_SIZE.s, elevation: 2 }}>
          <SwitchTransition>
            <CSSTransition
              key={item}
              classNames="fade"
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
            >
              <div className="container">{items[item].description}</div>
            </CSSTransition>
          </SwitchTransition>
        </GlassPanel>
      </div>
      <div className="box-2">
        <LBox style={{ size: NOT_FONT_SIZE['2xl'], backgroundColor: COLOR.b }} />
      </div>
      <div className="item-container">
        <SwitchTransition mode="in-out">
          <CSSTransition
            key={item}
            classNames="fade"
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            timeout={{ exit: 0 }}
          >
            {items[item].element}
          </CSSTransition>
        </SwitchTransition>
        <button
          className="hidden-button left"
          onClick={changing ? undefined : navLeftButtonHandlerClick}
        />
        <button
          className="hidden-button right"
          onClick={changing ? undefined : navRightButtonHandlerClick}
        />
      </div>
      <div className="controls">
        <button
          className="nav-button"
          onClick={changing ? undefined : navLeftButtonHandlerClick}
        >
          <Icon iconName="fa-solid fa-chevron-left" style={{ size: FONT_SIZE.s }} />
        </button>
        <div className="nav">
          {items.map((item, index) => (
            <button
              className="indicator-button"
              key={index}
              onClick={
                changing ? undefined : () => setItemWrapped(() => setItem(index))
              }
            />
          ))}
        </div>
        <button
          className="nav-button"
          onClick={changing ? undefined : navRightButtonHandlerClick}
        >
          <Icon iconName="fa-solid fa-chevron-right" style={{ size: FONT_SIZE.s }} />
        </button>
      </div>
    </StylizedSlider>
  )
}

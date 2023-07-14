import * as SliderStyled from './Slider.styled'
import { useDarkMode, useData } from '@/hooks'
import { AnimateState, GlassPanel, Icon, LBox } from '@/components'
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
    <SliderStyled.Component p={SliderStyled.adapter(darkMode)}>
      <LBox
        handlingClass="red-box"
        style={{ size: NOT_FONT_SIZE.xl, backgroundColor: COLOR.a }}
      />
      <GlassPanel
        handlingClass="glass-description"
        style={{
          padding: NOT_FONT_SIZE.s,
          borderRadius: NOT_FONT_SIZE.s,
          elevation: 2,
        }}
      >
        <AnimateState state={String(item)}>
          <p className="description text">{items[item].description}</p>
        </AnimateState>
      </GlassPanel>
      <LBox
        handlingClass="blue-box"
        style={{ size: NOT_FONT_SIZE['2xl'], backgroundColor: COLOR.b }}
      />
      <div className="slider">
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
          className="control-button left"
          title="Retroceder"
          onClick={changing ? undefined : navLeftButtonHandlerClick}
        >
          <Icon
            handlingClass="icon"
            iconName="fa-solid fa-chevron-left"
            style={{ size: FONT_SIZE.m }}
          />
        </button>
        <button
          className="control-button right"
          title="Avanzar"
          onClick={changing ? undefined : navRightButtonHandlerClick}
        >
          <Icon
            handlingClass="icon"
            iconName="fa-solid fa-chevron-right"
            style={{ size: FONT_SIZE.m }}
          />
        </button>
      </div>
      <div className="indicators">
        {items.map((_, index) => (
          <div className="item" key={index} data-activated={index === item} />
        ))}
      </div>
    </SliderStyled.Component>
  )
}

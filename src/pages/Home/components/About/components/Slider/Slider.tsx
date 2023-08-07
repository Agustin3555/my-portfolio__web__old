import * as SliderStyled from './Slider.styled'
import { useData } from '@/hooks'
import { AnimateState, GlassPanel, Icon, Image, LBox } from '@/components'
import { useCallback, useMemo, useRef, useState } from 'react'
import myself from '@/assets/myself.jpg'
import logo from '@/assets/logo.png'
import { sleep } from '@/tools'
import {
  COLOR,
  FONT_SIZE,
  MAIN_GAP,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  getCSSVarValue,
} from '@/styles'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsContainerRef = useRef<HTMLDivElement | null>(null)
  const [changing, setChanging] = useState(false)
  const { pages } = useData()

  const { slider } = useMemo(() => {
    const { slider } = pages.home.sections.about.data

    return { slider }
  }, [])

  const items = useMemo(
    () => [
      {
        element: (
          <Image
            handlingClass="item"
            src={myself}
            alt=""
            key="myself"
            style={{ size: NOT_FONT_SIZE['4xl'] }}
          />
        ),
        desc: slider.myself,
      },
      {
        element: (
          <Image
            handlingClass="item logo"
            src={logo}
            alt=""
            key="logo"
            style={{ size: NOT_FONT_SIZE['4xl'] }}
          />
        ),
        desc: slider.logo,
      },
      {
        element: (
          <div className="item" key="metal">
            C
          </div>
        ),
        desc: slider.metal,
      },
    ],
    []
  )

  const rightButtonHandleClick = useCallback(async () => {
    setChanging(true)

    if (!itemsContainerRef.current) return

    const itemsContainer = itemsContainerRef.current
    const children = itemsContainer.children

    if (children.length < 0) return

    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length)

    itemsContainer.style.transform = `translateX(-${getCSSVarValue(
      SliderStyled.SLIDER_SIZE
    )})`
    itemsContainer.style.transition = `transform ${getCSSVarValue(
      MICROINTERACTION.l
    )} ease-in-out`

    await sleep(1000)

    itemsContainer.style.transform = 'initial'
    itemsContainer.style.transition = 'initial'

    const firstChild = children[0]
    itemsContainer.appendChild(firstChild)

    setChanging(false)
  }, [])

  const leftButtonHandleClick = useCallback(async () => {
    setChanging(true)

    if (!itemsContainerRef.current) return

    const itemsContainer = itemsContainerRef.current
    const children = itemsContainer.children

    if (children.length < 0) return

    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )

    const firstChild = children[0]
    const lastChild = children[children.length - 1]
    itemsContainer.insertBefore(lastChild, firstChild)

    itemsContainer.style.transform = `translateX(-${getCSSVarValue(
      SliderStyled.SLIDER_SIZE
    )})`
    itemsContainer.style.transition = 'initial'

    await sleep(10)

    itemsContainer.style.transform = 'initial'
    itemsContainer.style.transition = `transform ${getCSSVarValue(
      MICROINTERACTION.l
    )} ease-in-out`

    await sleep(1000)

    setChanging(false)
  }, [])

  return (
    <SliderStyled.Component>
      <LBox
        handlingClass="red-box"
        style={{ size: NOT_FONT_SIZE.xl, backgroundColor: COLOR.a }}
      />
      <GlassPanel
        handlingClass="glass-description"
        style={{
          padding: MAIN_GAP,
          borderRadius: NOT_FONT_SIZE.s,
          elevation: 2,
        }}
      >
        <AnimateState state={String(currentIndex)}>
          <p className="description text">{items[currentIndex].desc}</p>
        </AnimateState>
      </GlassPanel>
      <LBox
        handlingClass="blue-box"
        style={{ size: NOT_FONT_SIZE['2xl'], backgroundColor: COLOR.b }}
      />
      <div className="slider">
        <div className="items-container" ref={itemsContainerRef}>
          {items.map(item => item.element)}
        </div>
        <button
          className="control-button left"
          title="Retroceder"
          onClick={changing ? undefined : leftButtonHandleClick}
        >
          <Icon
            handlingClass="button-icon"
            iconName="fa-solid fa-chevron-left"
            style={{ size: FONT_SIZE.m }}
          />
        </button>
        <button
          className="control-button right"
          title="Avanzar"
          onClick={changing ? undefined : rightButtonHandleClick}
        >
          <Icon
            handlingClass="button-icon"
            iconName="fa-solid fa-chevron-right"
            style={{ size: FONT_SIZE.m }}
          />
        </button>
      </div>
      <div className="indicators">
        {items.map((_, index) => (
          <div
            className="item"
            key={index}
            data-activated={index === currentIndex}
          />
        ))}
      </div>
    </SliderStyled.Component>
  )
}

export default Slider

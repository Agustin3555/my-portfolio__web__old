import * as SliderStyled from './Slider.styled'
import { Icon, Image } from '@/components'
import { useCallback, useRef, useState } from 'react'
import { HandlingClass, asClassName, sleep } from '@/tools'
import { FONT_SIZE, MICROINTERACTION, getCSSVarValue } from '@/styles'
import { useFullscreen } from '@/hooks'

const Slider = ({
  imgs,
  style = {},
  handlingClass,
}: {
  imgs: { src: string; alt: string }[]
  style?: SliderStyled.Props
  handlingClass?: HandlingClass
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsContainerRef = useRef<HTMLDivElement | null>(null)
  const [changing, setChanging] = useState(false)

  const rightButtonHandleClick = useCallback(async () => {
    setChanging(true)

    if (!itemsContainerRef.current) return

    const itemsContainer = itemsContainerRef.current
    const children = itemsContainer.children
    const childWidth = children[0].clientWidth

    if (children.length < 0) return

    setCurrentIndex(prevIndex => (prevIndex + 1) % imgs.length)

    itemsContainer.style.transform = `translateX(-${childWidth}px)`
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

    setCurrentIndex(prevIndex => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1))

    const firstChild = children[0]
    const childWidth = firstChild.clientWidth
    const lastChild = children[children.length - 1]

    itemsContainer.insertBefore(lastChild, firstChild)

    itemsContainer.style.transform = `translateX(-${childWidth}px)`
    itemsContainer.style.transition = 'initial'

    await sleep(10)

    itemsContainer.style.transform = 'initial'
    itemsContainer.style.transition = `transform ${getCSSVarValue(
      MICROINTERACTION.l
    )} ease-in-out`

    await sleep(1000)

    setChanging(false)
  }, [])

  const { elementRef, isFullscreen, toggleFullscreen } = useFullscreen()

  return (
    <SliderStyled.Component
      className={asClassName(handlingClass)}
      ref={elementRef}
      p={SliderStyled.adapter(style)}
    >
      <div className="items-C" ref={itemsContainerRef}>
        {imgs.map(item => (
          <Image
            handlingClass="item"
            src={`src/assets/works/${item.src}`}
            alt={item.alt}
            key={item.src}
          />
        ))}
      </div>
      <div className="controls">
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
        <div className="mid">
          <div className="toggle-fullscreen">
            <div className="background" />
            <button
              className="button"
              onClick={async () => await toggleFullscreen()}
            >
              {isFullscreen ? (
                <Icon
                  iconName="fa-solid fa-compress"
                  style={{ size: FONT_SIZE.m }}
                />
              ) : (
                <Icon iconName="fa-solid fa-expand" style={{ size: FONT_SIZE.m }} />
              )}
            </button>
          </div>
          <div className="indicators">
            {imgs.map((_, index) => (
              <div
                className="item"
                key={index}
                data-activated={index === currentIndex}
              />
            ))}
          </div>
        </div>
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
    </SliderStyled.Component>
  )
}

export default Slider

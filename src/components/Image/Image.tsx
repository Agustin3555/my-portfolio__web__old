import * as ImageStyled from './Image.styled'
import { useCallback, useState } from 'react'
import { Loader } from './components'
import { HandlingClass, asClassName } from '@/tools'

const Image = ({
  src,
  alt,
  handlingClass,
  style,
}: {
  src: string
  alt: string
  handlingClass: HandlingClass
  style?: ImageStyled.Props
}) => {
  const [loading, setLoading] = useState(true)

  const handleLoad = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <ImageStyled.Component
      className={asClassName(handlingClass)}
      data-loaded={!loading}
      p={ImageStyled.adapter(style)}
    >
      {loading && (
        <div className="loader-C">
          <Loader />
        </div>
      )}
      <img className="img" loading="lazy" src={src} alt={alt} onLoad={handleLoad} />
    </ImageStyled.Component>
  )
}

export default Image

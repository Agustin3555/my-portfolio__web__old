import * as ImageStyled from './Image.styled'
import { useCallback, useState } from 'react'
import { Loader } from './components'
import { HandlingClass, asClassName } from '@/tools'

const Image = ({
  src,
  alt,
  handlingClass,
}: {
  src: string
  alt: string
  handlingClass: HandlingClass
}) => {
  const [loading, setLoading] = useState(true)

  const handleLoad = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <ImageStyled.Component
      className={asClassName(handlingClass)}
      data-loaded={!loading}
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

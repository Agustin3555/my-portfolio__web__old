import { useRef, useState, useEffect } from 'react'

export const useChildAdjustment = () => {
  const childRef = useRef<HTMLDivElement>(null)
  const [childWidth, setChildWidth] = useState(0)
  const [childHeight, setChildHeight] = useState(0)

  useEffect(() => {
    // Función que se ejecutará cuando cambie el tamaño del elemento hijo
    const handleResize = (entries: ResizeObserverEntry[]) => {
      // Verificar si hay al menos una entrada en el array de entradas
      if (entries.length > 0) {
        const firstEntry = entries[0]

        // Verificar si la entrada se corresponde con el elemento hijo actual
        if (firstEntry.target === childRef.current) {
          // Obtener las dimensiones del contenido rectángulo de la entrada
          const { width, height } = firstEntry.contentRect

          setChildWidth(width)
          setChildHeight(height)
        }
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)

    if (childRef.current) resizeObserver.observe(childRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return { childRef, childWidth, childHeight }
}

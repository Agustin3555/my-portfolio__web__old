import { useState, useEffect, useRef } from 'react'

interface IntersectionOptions {
  // Márgenes adicionales alrededor del root
  rootMargin?: string
  // Umbral de intersección
  threshold?: number | number[]
}

export const useOnScreen = ({
  options,
  onIntersectionChange,
}: {
  options?: IntersectionOptions
  onIntersectionChange?: (isIntersecting: boolean) => void
}) => {
  // Estado que indica si el elemento está en pantalla
  const [isIntersecting, setIsIntersecting] = useState(false)

  // Referencia al elemento que se observará
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Actualiza el estado según la intersección
      const { isIntersecting } = entry

      setIsIntersecting(isIntersecting)

      if (onIntersectionChange) onIntersectionChange(isIntersecting)
    }, options)

    /*
      Aseguramos que el valor utilizado en la función de limpieza sea el mismo que
      se utilizó durante la observación.
    */
    const currentElement = elementRef.current

    // Observa el elemento actual
    if (currentElement) observer.observe(currentElement)

    return () => {
      // Deja de observar el elemento actual
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [options, onIntersectionChange])

  return [elementRef, isIntersecting] as const
}

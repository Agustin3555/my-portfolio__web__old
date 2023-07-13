import { useState, useEffect, ReactNode, ReactElement } from 'react'

export const DelayedComponent = ({
  delay,
  children,
}: {
  delay: number
  children: ReactElement
}) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [delay])

  return show ? children : null
}

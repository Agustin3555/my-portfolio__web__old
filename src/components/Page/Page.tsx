import { useData } from '@/hooks'
import { ReactNode, useMemo } from 'react'
import { Helmet } from 'react-helmet'

const Page = ({
  pageTitle,
  children,
}: {
  pageTitle?: string
  children: ReactNode
}) => {
  const { base, separator } = useData().pageTitle

  const title = useMemo(() => {
    let value = base

    if (pageTitle) value = `${value} ${separator} ${pageTitle}`

    return value
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

export default Page

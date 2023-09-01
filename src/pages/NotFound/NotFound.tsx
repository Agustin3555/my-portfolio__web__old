import { Page } from '@/components'
import { useData } from '@/hooks'
import { useMemo } from 'react'
import * as NotFoundStyled from './NotFound.styled'

const NotFound = () => {
  const { pages } = useData()

  const { pageTitle, desc } = useMemo(() => {
    const { pageTitle, data } = pages.notFound
    const { desc } = data

    return { pageTitle, desc }
  }, [])

  return (
    <Page pageTitle={pageTitle}>
      <NotFoundStyled.Component>
        <h1 className="title">
          {desc[0]}
          <span>,</span>
        </h1>
        <h2 className="subtitle">
          {desc[1]}
          <span>.</span>
        </h2>
        <div className="paragraphs">
          <p className="text">{desc[2]}</p>
          <p className="text">{desc[3]}</p>
        </div>
      </NotFoundStyled.Component>
    </Page>
  )
}

export default NotFound

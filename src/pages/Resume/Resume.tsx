import { Page } from '@/components'
import { useData } from '@/hooks'
import { useMemo, useState } from 'react'
import * as ResumeStyled from './Resume.styled'

const Resume = () => {
  const { pages } = useData()
  const [load, setLoad] = useState(false)

  const { pageTitle, desc } = useMemo(() => {
    const { pageTitle, data } = pages.resume
    const { desc } = data

    return { pageTitle, desc }
  }, [])

  const handleCVLoad = () => {
    setLoad(true)
  }

  return (
    <Page pageTitle={pageTitle}>
      <ResumeStyled.Component>
        <h1 className="title">
          {desc[0]}
          <span>,</span>
        </h1>
        <h2 className="subtitle">
          {desc[1]}
          <span>.</span>
        </h2>
        <embed
          className="cv"
          src="CV - Juan Agustín Lovera.pdf"
          type="application/pdf"
          onLoad={handleCVLoad}
          data-load={load}
        />
      </ResumeStyled.Component>
    </Page>
  )
}

export default Resume

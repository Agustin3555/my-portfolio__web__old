import { Page } from '@/components'
import { useData } from '@/hooks'

const Resume = () => {
  const { pageTitle } = useData().pages.resume

  return (
    <Page pageTitle={pageTitle}>
      <div>Resume</div>
    </Page>
  )
}

export default Resume

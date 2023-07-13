import { Page } from '@/components'
import { useData } from '@/hooks'

const NotFound = () => {
  const { pageTitle } = useData().pages.notFound

  return (
    <Page pageTitle={pageTitle}>
      <div>Not Found</div>
    </Page>
  )
}

export default NotFound

import { MetalCuriosities, Page } from '@/components'
import { About, Contact, Skills, Work } from './components'

const Home = () => {
  return (
    <Page>
      <About />
      <Skills />
      <Work />
      <Contact />
      {/* <MetalCuriosities /> */}
    </Page>
  )
}

export default Home

import { MetalCuriosities, Page } from '@/components'
import { About, Contact, Skills, Works } from './components'

const Home = () => {
  return (
    <Page>
      <About />
      <Skills />
      <Works />
      <Contact />
      {/* <MetalCuriosities /> */}
    </Page>
  )
}

export default Home

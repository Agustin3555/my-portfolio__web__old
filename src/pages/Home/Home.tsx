import { MetalCuriosities, Page } from '@/components'
import { About, Contact, Education, Skills, Works } from './components'

const Home = () => {
  return (
    <Page>
      <About />
      <Skills />
      <Works />
      <Education />
      <Contact />
      {/* <MetalCuriosities /> */}
    </Page>
  )
}

export default Home

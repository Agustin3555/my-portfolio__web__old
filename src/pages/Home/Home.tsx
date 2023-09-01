import { MetalCuriosities, Page } from '@/components'
import { About, Contact, Education, Skills, Works } from './components'

const Home = () => {
  return (
    <Page>
      <About />
      <Works />
      <Skills />
      <Education />
      <Contact />
      {/* <MetalCuriosities /> */}
    </Page>
  )
}

export default Home

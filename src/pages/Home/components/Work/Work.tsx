import { useData } from '@/hooks'
import { useMemo } from 'react'
import Section from '../Section/Section'

const Work = () => {
  const { pages } = useData()

  const { sectionKey, title } = useMemo(() => {
    const { sections } = pages.home
    const sectionKey: keyof typeof sections = 'work'
    const { title } = sections.work

    return { sectionKey, title }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      a
    </Section>
  )
}

export default Work

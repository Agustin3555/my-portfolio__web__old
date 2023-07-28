import { useData } from '@/hooks'
import { useMemo } from 'react'
import Section from '../Section/Section'
import { WorkItem } from './components'

const Works = () => {
  const { pages } = useData()

  const { sectionKey, title, works } = useMemo(() => {
    const { sections } = pages.home
    const sectionKey: keyof typeof sections = 'works'
    const { title } = sections.works
    const { works } = sections.works.data

    return { sectionKey, title, works }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      {works.map(item => (
        <WorkItem {...item} key={item.title} />
      ))}
    </Section>
  )
}

export default Works

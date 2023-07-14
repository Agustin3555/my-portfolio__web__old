import { useData } from '@/hooks'
import { useMemo } from 'react'
import Section from '../Section/Section'

const Contact = () => {
  const { pages } = useData()

  const { sectionKey, title } = useMemo(() => {
    const { sections } = pages.home
    const sectionKey: keyof typeof sections = 'contact'
    const { title } = sections.contact

    return { sectionKey, title }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      a
    </Section>
  )
}

export default Contact

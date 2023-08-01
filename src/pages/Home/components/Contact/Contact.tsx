import { useData } from '@/hooks'
import { useMemo } from 'react'
import Section from '../Section/Section'
import * as ContactStyled from './Contact.styled'
import { LBox } from '@/components'
import { NOT_FONT_SIZE } from '@/styles'

const Contact = () => {
  const { pages } = useData()

  const { sectionKey, title, desc, email } = useMemo(() => {
    const { sections } = pages.home
    const sectionKey: keyof typeof sections = 'contact'
    const { contact } = sections

    const { title } = contact
    const { desc, email } = contact.data

    return { sectionKey, title, desc, email }
  }, [])

  return (
    <Section sectionKey={sectionKey} title={title}>
      <ContactStyled.Component>
        <p className="text">{desc}</p>
        <div className="email-link">
          <a
            className="link"
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctame
          </a>
          <LBox
            style={{ borderRadius: NOT_FONT_SIZE['3xs'], size: NOT_FONT_SIZE.m }}
            handlingClass={'box b-1'}
          />
          <LBox
            style={{ borderRadius: NOT_FONT_SIZE['4xs'], size: NOT_FONT_SIZE.s }}
            handlingClass={'box b-2'}
          />
          <LBox
            style={{ borderRadius: NOT_FONT_SIZE['4xs'], size: NOT_FONT_SIZE.s }}
            handlingClass={'box b-3'}
          />
        </div>
      </ContactStyled.Component>
    </Section>
  )
}

export default Contact

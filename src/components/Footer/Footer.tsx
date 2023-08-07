import { useData } from '@/hooks'
import * as FooterStyled from './Footer.styled'
import { useMemo } from 'react'
import { ButtonSection } from '..'

const Footer = () => {
  const { footer } = useData()

  const { copyright, acknowledgments, othersPages } = useMemo(() => {
    const { copyright, sections } = footer
    const { acknowledgments, othersPages } = sections

    return { copyright, acknowledgments, othersPages }
  }, [])

  return (
    <FooterStyled.Component>
      <ul className="sections">
        <li className="item">
          <p className="title">{acknowledgments.title}</p>
          <div className="separator" />
          <div className="group-text">
            <p className="acknowledgments text">{acknowledgments.data.text}</p>
            <ul>
              {acknowledgments.data.items.map((item, index) => (
                <li className="text" key={index}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="item">
          <p className="title">{othersPages.title}</p>
          <div className="separator" />
          <ButtonSection title="Not found" handlingClass="link-page" />
        </li>
      </ul>
      <div className="separator" />
      <span className="copyright text">{copyright}</span>
    </FooterStyled.Component>
  )
}

export default Footer

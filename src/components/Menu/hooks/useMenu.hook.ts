import { useData } from '@/hooks'
import { useMemo } from 'react'
import { reassemble } from '../tools'
import { ButtonSectionProps } from '@/components/ButtonSection/ButtonSection'

export const useMenu = () => {
  const { pages } = useData()

  const { homeSections, resume } = useMemo(() => {
    const homeSections = reassemble(
      pages.home.sections,
      (sectionKey, current): ButtonSectionProps => ({
        sectionKey,
        title: current.buttonTitle,
      })
    )

    const resume: { sectionKey: keyof typeof pages } & ButtonSectionProps = {
      sectionKey: 'resume',
      title: pages.resume.buttonTitle,
    }

    return { homeSections, resume }
  }, [])

  return { homeSections, resume }
}

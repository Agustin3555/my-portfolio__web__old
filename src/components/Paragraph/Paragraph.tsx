import {
  paragraphStyleAdapter,
  StylizedParagraph,
  ParagraphStyleProps,
} from './Paragraph.styled'
import { useDarkMode } from '@/hooks'

export const Paragraph = ({
  text,
  styleProps,
}: {
  text: string
  styleProps?: ParagraphStyleProps
}) => {
  const darkMode = useDarkMode()

  return (
    <StylizedParagraph p={paragraphStyleAdapter(darkMode, styleProps)}>
      {text}
    </StylizedParagraph>
  )
}

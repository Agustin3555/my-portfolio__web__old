import { COLOR, FONT_SIZE, MICROINTERACTION } from '@/styles'
import styled from 'styled-components'

export interface ParagraphStyleProps {
  marginBottom?: string
}

interface ParagraphNormalizedStyleProps {
  marginBottom: string
}

interface ParagraphStyleProvider {
  marginBottom: string
  color: string
}

export const paragraphStyleAdapter = (
  darkMode: boolean,
  props?: ParagraphStyleProps
): ParagraphStyleProvider => {
  const normalizedProps: ParagraphNormalizedStyleProps = {
    marginBottom: props?.marginBottom || '',
  }

  // #region Auxiliary vars

  // #endregion

  return {
    marginBottom: normalizedProps.marginBottom,
    color: darkMode ? COLOR.g_6 : COLOR.g_10,
  }
}

export const StylizedParagraph = styled.p<{ p: ParagraphStyleProvider }>`
  margin: 0;
  margin-bottom: ${({ p }) => p.marginBottom};
  font-size: ${FONT_SIZE.s};
  line-height: calc(${FONT_SIZE.s} * 1.5);
  color: ${({ p }) => p.color};
  transition: color ${MICROINTERACTION.s} ease-out;
`

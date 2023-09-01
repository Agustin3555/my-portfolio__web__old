import {
  FONT_SIZE,
  MAIN_GAP,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP

export const Component = styled.section`
  .title {
    margin-bottom: ${FONT_SIZE.xs};
  }

  .subtitle {
    margin-bottom: calc(${GAP} * 3);
  }

  .cv {
    width: 100%;
    height: ${NOT_FONT_SIZE['5xl']};
    border-radius: ${NOT_FONT_SIZE['2xs']};
    box-shadow: ${shadowAdapter(2)};
    opacity: 0;
    transition: opacity ${MICROINTERACTION.s} ${MICROINTERACTION.m} ease-out;

    &[data-load='true'] {
      opacity: 1;
    }
  }
`

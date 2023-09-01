import { FONT_SIZE, MAIN_GAP } from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP

export const Component = styled.section`
  .title {
    margin-bottom: ${FONT_SIZE.xs};
  }

  .subtitle {
    margin-bottom: calc(${GAP} * 3);
  }
`

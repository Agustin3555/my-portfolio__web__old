import { MAIN_GAP } from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP

export const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(${GAP} * 2);

  .tech {
    width: 100%;
    min-width: min-content;
  }

  @media (min-width: 75rem) {
    flex-direction: row;
    gap: calc(${GAP} * 1.5);
  }
`

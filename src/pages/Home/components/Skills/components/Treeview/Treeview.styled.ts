import { NOT_FONT_SIZE } from '@/styles'
import styled from '@emotion/styled'

export const Component = styled.div`
  width: 100%;

  .glass-container {
    width: auto;
    min-width: min-content;

    .items {
      display: flex;
      flex-direction: column;
      gap: ${NOT_FONT_SIZE['3xs']};
    }
  }
`

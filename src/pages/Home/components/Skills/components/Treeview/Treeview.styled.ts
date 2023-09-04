import { COLOR, NOT_FONT_SIZE } from '@/styles'
import styled from '@emotion/styled'

export const Component = styled.div`
  width: 100%;
  padding-bottom: 10px;
  overflow-x: auto;
  border-style: solid;
  border-width: 0 ${NOT_FONT_SIZE['6xs']};
  border-color: ${COLOR.g_10};

  .d {
    width: auto;
    min-width: min-content;

    .glass-container {
      width: auto;
      min-width: min-content;

      .items {
        display: flex;
        flex-direction: column;
        gap: ${NOT_FONT_SIZE['3xs']};
      }
    }
  }
`

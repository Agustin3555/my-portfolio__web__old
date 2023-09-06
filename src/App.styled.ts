import styled from '@emotion/styled'
import {
  COLOR_BRIGHT_A,
  COLOR_DARK_A,
  MAIN_GAP,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  STATIC_WIDTH,
} from './styles'

const GAP = MAIN_GAP
const PADDING = `calc(${NOT_FONT_SIZE.l} * 2)`

export const Component = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLOR_BRIGHT_A};
  overflow: hidden;

  .static {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${STATIC_WIDTH};
    min-height: 100vh;
    transition: width ${MICROINTERACTION.m} ease, padding ${MICROINTERACTION.m} ease;

    @media (max-width: ${MEDIA.m}) {
      width: 100%;
      padding-left: ${PADDING};
      padding-right: ${PADDING};
    }

    @media (max-width: ${MEDIA.s}) {
      padding-left: 0;
      padding-right: 0;

      .main {
        padding-left: ${GAP};
        padding-right: ${GAP};
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      gap: calc(${NOT_FONT_SIZE.l} * 2);
      padding-top: ${PADDING};
      padding-bottom: ${PADDING};
      transition: padding ${MICROINTERACTION.m} ease;

      > *:nth-of-type(1) {
        scroll-margin-top: ${PADDING};
      }

      > *:not(:nth-of-type(1)) {
        scroll-margin-top: ${GAP};
      }
    }
  }

  &[data-dark-mode='true'] {
    color: ${COLOR_DARK_A};
  }
`

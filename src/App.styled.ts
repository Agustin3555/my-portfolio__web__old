import styled from '@emotion/styled'
import {
  BGC_BRIGHT_A,
  BGC_DARK_A,
  COLOR_BRIGHT_A,
  COLOR_DARK_A,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
} from './styles'

const PADDING = `calc(${NOT_FONT_SIZE.l} * 2)`

export const Component = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  color: ${COLOR_BRIGHT_A};
  background-color: ${BGC_BRIGHT_A};
  overflow: hidden;
  transition: background-color ${MICROINTERACTION.s} ease-out;

  .main {
    display: flex;
    flex-direction: column;
    gap: ${NOT_FONT_SIZE.xl};
    width: 100rem;
    padding-top: ${PADDING};
    padding-bottom: ${PADDING};
    transition: width ${MICROINTERACTION.m} ease, padding ${MICROINTERACTION.m} ease;

    @media (max-width: ${MEDIA.m}) {
      width: 100%;
      padding-left: ${PADDING};
      padding-right: ${PADDING};
    }

    @media (max-width: ${MEDIA.s}) {
      padding-left: ${NOT_FONT_SIZE.s};
      padding-right: ${NOT_FONT_SIZE.s};
    }

    > *:nth-of-type(1) {
      scroll-margin-top: ${PADDING};
    }

    > *:not(:nth-of-type(1)) {
      scroll-margin-top: ${NOT_FONT_SIZE.s};
    }
  }

  &[data-dark-mode='true'] {
    color: ${COLOR_DARK_A};
    background-color: ${BGC_DARK_A};
  }
`

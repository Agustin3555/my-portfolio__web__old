import { COLOR, FONT_SIZE, MAIN_GAP, MICROINTERACTION } from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP

export const Component = styled.ol`
  display: flex;

  :hover .item:not(:hover) {
    opacity: 0.5;
    transform: scale(0.95);
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: ${GAP};
    padding: 0 calc(${GAP} * 0.5);
    transition: opacity ${MICROINTERACTION.m} ease-out,
      transform ${MICROINTERACTION.m} ease-out;

    .level-title {
      color: ${COLOR.b};
      font-size: ${FONT_SIZE.xs};
    }
  }

  > :first-of-type {
    padding-left: 0;
  }

  > :last-child {
    padding-right: 0;
  }

  @media (max-width: 45.3125rem) {
    flex-direction: column;
    gap: ${GAP};

    .item {
      padding: 0;
    }
  }

  @media (min-width: 75rem) {
    flex-direction: column;
    gap: ${GAP};
    width: 37.5%;

    .item {
      padding: 0;
    }
  }
`

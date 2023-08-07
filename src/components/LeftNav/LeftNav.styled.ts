import { MAIN_GAP, MEDIA, MICROINTERACTION, NOT_FONT_SIZE, Value } from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP

interface ConstProvider {
  left: Value
  bottom: Value
  gap: Value

  nav: {
    gap: Value
  }
}

const cp: ConstProvider = {
  left: GAP,
  bottom: GAP,
  gap: GAP,

  nav: {
    gap: GAP,
  },
}

export const Component = styled.div`
  position: fixed;
  left: ${cp.left};
  bottom: ${cp.bottom};
  display: flex;
  flex-direction: column;
  gap: ${cp.gap};
  transition: left ${MICROINTERACTION.m} ease;

  @media (max-width: ${MEDIA.s}) {
    left: calc(${NOT_FONT_SIZE.m} * -1);
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: ${cp.nav.gap};

    > * {
      opacity: 0;
      transform: translateX(-100%);
      filter: blur(${NOT_FONT_SIZE['5xs']});
      transition: opacity ${MICROINTERACTION.m} ease,
        transform ${MICROINTERACTION.m} ease, filter ${MICROINTERACTION.m} ease;
      transition-delay: calc(${MICROINTERACTION.s} * var(--i));
    }

    &[data-show='true'] > * {
      opacity: 1;
      transform: initial;
      filter: initial;
    }
  }
`

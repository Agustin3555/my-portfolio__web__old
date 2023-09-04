import { MEDIA, MICROINTERACTION, NOT_FONT_SIZE, Value } from '@/styles'
import styled from '@emotion/styled'

interface ConstProvider {
  HIDDEN: {
    top: Value
  }
}

const cp: ConstProvider = {
  HIDDEN: {
    top: `calc((${NOT_FONT_SIZE.l} + ${NOT_FONT_SIZE['6xs']}) * -1)`,
  },
}

export const Component = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  transition: top ${MICROINTERACTION.m} ease;

  @media (max-width: ${MEDIA.s}) {
    display: none;
  }

  .container {
    display: flex;

    .nav {
      display: flex;
      align-items: center;
      gap: calc(${NOT_FONT_SIZE.s} * 1.5);

      > * {
        opacity: 0;
        transform: translateY(calc(${NOT_FONT_SIZE['2xl']} * -1));
        animation: fadeIn ${MICROINTERACTION.l} ease forwards;
        animation-delay: calc(${MICROINTERACTION.xs} * var(--i));

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :nth-of-type(1) {
          --i: 0;
        }

        :nth-of-type(2) {
          --i: 1;
        }

        :nth-of-type(3) {
          --i: 2;
        }

        :nth-of-type(4) {
          --i: 3;
        }

        :nth-of-type(5) {
          --i: 4;
        }

        :nth-of-type(6) {
          --i: 5;
        }
      }
    }
  }

  &[data-hidden='true'] {
    top: ${cp.HIDDEN.top};
  }
`

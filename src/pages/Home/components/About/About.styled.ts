import {
  COLOR,
  COLOR_BRIGHT_B,
  FONT,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
} from '@/styles'
import styled from '@emotion/styled'

interface ConstProvider {
  description: {
    titleGroup: {
      name: {
        color: Value
      }
    }
  }
  DARK_MODE: {
    description: {
      titleGroup: {
        name: {
          color: Value
        }
      }
    }
  }
}

const cp: ConstProvider = {
  description: {
    titleGroup: {
      name: {
        color: COLOR_BRIGHT_B,
      },
    },
  },
  DARK_MODE: {
    description: {
      titleGroup: {
        name: {
          color: COLOR.g_1,
        },
      },
    },
  },
}

export const Component = styled.div`
  display: flex;
  gap: ${NOT_FONT_SIZE.xl};
  align-items: center;

  @media (max-width: 98.4375rem) {
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: ${NOT_FONT_SIZE.l};

    .--movable {
      opacity: 0;
      transform: translateX(calc(${NOT_FONT_SIZE['2xl']} * -1));
      animation: fadeIn ${MICROINTERACTION.l} ease forwards;
      animation-delay: calc(${MICROINTERACTION.l} * var(--movable-i));

      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

    .hello {
      --movable-i: 0;
    }

    .title-group {
      .name {
        --movable-i: 1;

        margin-bottom: ${NOT_FONT_SIZE.xs};
        font-family: ${FONT.s};
        font-size: ${FONT_SIZE['2xl']};
        line-height: 1.25;
        word-spacing: initial;
        color: ${cp.description.titleGroup.name.color};
      }

      .rol {
        --movable-i: 2;

        font-family: ${FONT.s};
        font-size: ${FONT_SIZE.l};
        word-spacing: initial;
        color: ${COLOR.b};
      }
    }

    .summary {
      --movable-i: 3;
    }

    .nav {
      display: flex;
      gap: ${NOT_FONT_SIZE.s};

      > * {
        opacity: 0;
        transform: translateY(100%);
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
  }

  .app[data-dark-mode='true'] & {
    .description .title-group .name {
      color: ${cp.DARK_MODE.description.titleGroup.name.color};
    }
  }
`

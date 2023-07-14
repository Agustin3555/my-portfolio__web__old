import {
  COLOR,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  colorAlphaAdapter,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const SLIDER_SIZE = NOT_FONT_SIZE['4xl']
const INDICATOR_SIZE = NOT_FONT_SIZE['2xs']
const GAP = NOT_FONT_SIZE.s
const MAX_DESC_LINES = 5

interface Provider {
  controls: {
    nav: {
      indicatorButton: {
        backgroundColor: string
        child: {
          backgroundColor: string
        }
      }
    }
  }
}

export const adapter = (darkMode: boolean): Provider => {
  return {
    controls: {
      nav: {
        indicatorButton: {
          backgroundColor: darkMode ? COLOR.g_14 : COLOR.g_10,
          child: {
            backgroundColor: darkMode ? COLOR.g_4 : COLOR.g_10,
          },
        },
      },
    },
  }
}

interface ConstProvider {
  width: Value
  height: Value
  slider: {
    width: Value
    height: Value
  }
  glassDescription: {
    left: Value
    width: Value
    height: Value
  }
  indicators: {
    top: Value
    gap: Value
    width: Value
    item: {
      width: Value
      height: Value
    }
  }
}

const descLineHeight = `calc(${FONT_SIZE.s} * 1.6)`

const cp: ConstProvider = {
  width: `calc(${GAP} * 27)`,
  height: `calc(${SLIDER_SIZE} + ${GAP} * 2 + ${descLineHeight} * ${MAX_DESC_LINES})`,
  slider: {
    width: SLIDER_SIZE,
    height: SLIDER_SIZE,
  },
  glassDescription: {
    left: `calc(${SLIDER_SIZE} * 0.5 - ${GAP} * 2)`,
    width: SLIDER_SIZE,
    height: SLIDER_SIZE,
  },
  indicators: {
    top: `calc(${SLIDER_SIZE} + ${GAP})`,
    gap: INDICATOR_SIZE,
    width: `calc(${SLIDER_SIZE} * 0.5 - ${GAP} * 3)`,
    item: {
      width: INDICATOR_SIZE,
      height: INDICATOR_SIZE,
    },
  },
}

export const Component = styled.div<{ p: Provider }>`
  flex-shrink: 0;
  position: relative;
  width: ${cp.width};
  height: ${cp.height};

  .red-box {
    position: absolute;
    top: ${NOT_FONT_SIZE['3xl']};
    right: 0;
  }

  .blue-box {
    position: absolute;
    top: ${NOT_FONT_SIZE.m};
    left: calc(${NOT_FONT_SIZE['4xl']} - ${NOT_FONT_SIZE.l});
  }

  .slider {
    position: relative;
    top: 0;
    left: 0;
    width: ${cp.slider.width};
    height: ${cp.slider.height};
    border-radius: ${NOT_FONT_SIZE.s};
    box-shadow: ${shadowAdapter(2)};
    overflow: hidden;

    :hover .control-button {
      opacity: 1;
    }

    .item {
      width: 100%;
      height: 100%;
      background-color: white;
      border-radius: ${NOT_FONT_SIZE.s};
      transition: transform ${MICROINTERACTION.l} ease-out;
    }

    .logo {
      background-color: ${COLOR.a};
    }

    .fade-enter {
      transform: translateX(-100%);
    }

    .fade-enter-active {
      transform: translateX(0);
    }

    .control-button {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      padding: 0;
      width: ${NOT_FONT_SIZE.l};
      height: 100%;
      color: ${COLOR.g_4};
      border: none;
      cursor: pointer;
      opacity: 0;
      transition: opacity ${MICROINTERACTION.s} ease-out;

      :hover {
        color: ${COLOR.g_0};
      }

      .icon {
        transition: transform ${MICROINTERACTION.s} ease-out;
      }
    }

    .left {
      left: 0;
      padding-left: ${NOT_FONT_SIZE.xs};
      background: linear-gradient(
        90deg,
        ${colorAlphaAdapter(COLOR.g_19, 0.375)} 0%,
        rgba(0, 0, 0, 0) 100%
      );

      :active .icon {
        transform: translateX(-25%);
      }
    }

    .right {
      justify-content: flex-end;
      right: 0;
      padding-right: ${NOT_FONT_SIZE.xs};
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        ${colorAlphaAdapter(COLOR.g_19, 0.375)} 100%
      );

      :active .icon {
        transform: translateX(25%);
      }
    }
  }

  .glass-description {
    position: absolute;
    left: ${cp.glassDescription.left};
    bottom: 0;
    width: ${cp.glassDescription.width};
    height: ${cp.glassDescription.height};

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;

      .description {
        transition: opacity ${MICROINTERACTION.m} ease-out;
      }

      .fade-enter {
        opacity: 0;
      }

      .fade-exit {
        opacity: 1;
      }

      .fade-enter-active {
        opacity: 1;
      }

      .fade-exit-active {
        opacity: 0;
      }
    }
  }

  .indicators {
    position: absolute;
    top: ${cp.indicators.top};
    display: flex;
    justify-content: flex-end;
    gap: ${cp.indicators.gap};
    width: ${cp.indicators.width};

    .item {
      width: ${cp.indicators.item.width};
      height: ${cp.indicators.item.height};
      border-radius: ${NOT_FONT_SIZE['6xl']};
      background-color: ${({ p }) => p.controls.nav.indicatorButton.backgroundColor};
      transition: width ${MICROINTERACTION.l} ease-out,
        background-color ${MICROINTERACTION.s} ease-out;

      &[data-activated='true'] {
        width: calc(${NOT_FONT_SIZE['2xs']} * 3);
        background-color: ${({ p }) =>
          p.controls.nav.indicatorButton.child.backgroundColor};
      }
    }
  }
`

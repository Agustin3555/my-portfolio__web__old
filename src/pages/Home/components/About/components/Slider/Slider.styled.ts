import {
  BGC_BRIGHT_B,
  BGC_DARK_B,
  COLOR,
  COLOR_BRIGHT_A,
  COLOR_DARK_A,
  FONT_SIZE,
  MAIN_GAP,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  colorAlphaAdapter,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

export const SLIDER_SIZE = NOT_FONT_SIZE['4xl']
const INDICATOR_SIZE = NOT_FONT_SIZE['2xs']
const GAP = MAIN_GAP
const MAX_DESC_LINES = 6

interface ConstProvider {
  width: Value
  height: Value
  glassDescription: {
    left: Value
  }
  indicators: {
    top: Value
    width: Value
  }
}

const descLineHeight = `calc(${FONT_SIZE.s} * 1.6)`

const cp: ConstProvider = {
  width: `calc(${GAP} * 27)`,
  height: `calc(${SLIDER_SIZE} + ${GAP} * 2 + ${descLineHeight} * ${MAX_DESC_LINES})`,
  glassDescription: {
    left: `calc(${SLIDER_SIZE} * 0.5 - ${GAP} * 2)`,
  },
  indicators: {
    top: `calc(${SLIDER_SIZE} + ${GAP})`,
    width: `calc(${SLIDER_SIZE} * 0.5 - ${GAP} * 3)`,
  },
}

export const Component = styled.div`
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
    width: ${SLIDER_SIZE};
    height: ${SLIDER_SIZE};
    border-radius: ${NOT_FONT_SIZE.s};
    box-shadow: ${shadowAdapter(2)};
    overflow: hidden;

    :hover .control-button {
      opacity: 1;
    }

    .items-container {
      display: flex;

      .item {
        flex-shrink: 0;
      }

      .logo {
        background-color: ${COLOR.a};
      }
    }

    .control-button {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      padding: 0;
      width: ${NOT_FONT_SIZE.xl};
      height: 100%;
      color: ${COLOR.g_4};
      border: none;
      cursor: pointer;
      opacity: 0;
      transition: opacity ${MICROINTERACTION.s} ease-out;

      :hover {
        color: ${COLOR.g_0};
      }

      .button-icon {
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

      :active .button-icon {
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

      :active .button-icon {
        transform: translateX(25%);
      }
    }
  }

  .glass-description {
    position: absolute;
    left: ${cp.glassDescription.left};
    bottom: 0;
    width: ${SLIDER_SIZE};
    height: ${SLIDER_SIZE};

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
    gap: ${INDICATOR_SIZE};
    width: ${cp.indicators.width};

    .item {
      width: ${INDICATOR_SIZE};
      height: ${INDICATOR_SIZE};
      border-radius: ${NOT_FONT_SIZE['6xl']};
      background-color: ${BGC_BRIGHT_B};
      transition: width ${MICROINTERACTION.l} ease-in-out,
        background-color ${MICROINTERACTION.s} ease-out;

      &[data-activated='true'] {
        width: calc(${NOT_FONT_SIZE['2xs']} * 3);
        background-color: ${COLOR_BRIGHT_A};
      }
    }

    .app[data-dark-mode='true'] & {
      .item {
        background-color: ${BGC_DARK_B};

        &[data-activated='true'] {
          background-color: ${COLOR_DARK_A};
        }
      }
    }
  }
`

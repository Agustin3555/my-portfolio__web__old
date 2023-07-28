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

const INDICATOR_SIZE = NOT_FONT_SIZE['2xs']
const GAP = NOT_FONT_SIZE.s
const PATTERN_BACKGROUND_GAP = GAP
const PATTERN_DOT_SIZE = NOT_FONT_SIZE['6xs']

export interface Props {
  aspectRatio?: number[]
}

interface Provider {
  aspectRatio: Value

  itemsC: {
    item: {
      aspectRatio: Value
    }
  }
}

interface NormalizedProps {
  aspectRatio: number[]
}

export const adapter = (style?: Props): Provider => {
  const { aspectRatio }: NormalizedProps = {
    aspectRatio: style?.aspectRatio || [16, 9],
  }

  const aspectRatioInCommon = [aspectRatio[0], aspectRatio[1]].join(' / ')

  return {
    aspectRatio: aspectRatioInCommon,

    itemsC: {
      item: {
        aspectRatio: aspectRatioInCommon,
      },
    },
  }
}

interface ConstProvider {
  backgroundImage: Value
  backgroundSize: Value
  backgroundPosition: Value
  controls: {
    indicators: {
      item: {
        ACTIVATED: {
          width: Value
        }
      }
    }
  }
  DARK_MODE: {
    backgroundImage: Value
  }
}

const patternBackgroundBright = `
  radial-gradient(
    ${COLOR.g_6} ${PATTERN_DOT_SIZE}, transparent ${PATTERN_DOT_SIZE}
  )
`

const patternBackgroundDark = `
  radial-gradient(
    ${COLOR.g_12} ${PATTERN_DOT_SIZE}, transparent ${PATTERN_DOT_SIZE}
  )
`

const cp: ConstProvider = {
  backgroundImage: `${patternBackgroundBright}, ${patternBackgroundBright}`,
  backgroundSize: `calc(${PATTERN_BACKGROUND_GAP} * 2) calc(${PATTERN_BACKGROUND_GAP} * 2)`,
  backgroundPosition: `0 0, ${PATTERN_BACKGROUND_GAP} ${PATTERN_BACKGROUND_GAP}`,
  controls: {
    indicators: {
      item: {
        ACTIVATED: {
          width: `calc(${INDICATOR_SIZE} * 3)`,
        },
      },
    },
  },
  DARK_MODE: {
    backgroundImage: `${patternBackgroundDark}, ${patternBackgroundDark}`,
  },
}

export const Component = styled.div<{ p: Provider }>`
  position: relative;
  aspect-ratio: ${({ p }) => p.aspectRatio};
  border-radius: ${NOT_FONT_SIZE.xs};
  background-image: ${cp.backgroundImage};
  background-size: ${cp.backgroundSize};
  background-position: ${cp.backgroundPosition};
  background-color: ${COLOR.g_2};
  box-shadow: ${shadowAdapter(2)};
  overflow: hidden;
  transition: background ${MICROINTERACTION.s} ease-out;

  :hover .controls {
    .control-button {
      opacity: 1;
    }

    .mid .toggle-fullscreen {
      opacity: 1;
    }
  }

  .items-C {
    display: flex;
    height: 100%;

    .item {
      aspect-ratio: ${({ p }) => p.itemsC.item.aspectRatio};
    }
  }

  .controls {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .control-button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 10%;
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
      right: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        ${colorAlphaAdapter(COLOR.g_19, 0.375)} 100%
      );

      :active .button-icon {
        transform: translateX(25%);
      }
    }

    .mid {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding-top: calc(${GAP} - ${NOT_FONT_SIZE['2xs']});
      padding-bottom: ${GAP};

      .toggle-fullscreen {
        position: relative;
        opacity: 0;
        transition: opacity ${MICROINTERACTION.s} ease-out;

        .background {
          position: absolute;
          top: calc(-500% * 0.5 + ${FONT_SIZE.m} * 0.5 + ${NOT_FONT_SIZE['2xs']});
          left: calc(-500% * 0.5 + ${FONT_SIZE.m} * 0.5 + ${NOT_FONT_SIZE['2xs']});
          width: 500%;
          height: 500%;
          background: radial-gradient(
            circle,
            ${colorAlphaAdapter(COLOR.g_19, 0.25)} 0%,
            rgba(0, 0, 0, 0) 62.5%
          );
        }

        .button {
          position: relative;
          padding: ${NOT_FONT_SIZE['2xs']};
          color: ${COLOR.g_4};
          border: none;
          background-color: transparent;
          cursor: pointer;
          transition: color ${MICROINTERACTION.s} ease-out;

          :hover {
            color: ${COLOR.g_0};
          }
        }
      }

      .indicators {
        align-self: flex-end;

        display: flex;
        justify-content: flex-end;
        gap: ${INDICATOR_SIZE};

        .item {
          width: ${INDICATOR_SIZE};
          height: ${INDICATOR_SIZE};
          border-radius: ${NOT_FONT_SIZE['6xl']};
          background-color: ${colorAlphaAdapter(COLOR.g_12, 0.625)};
          box-shadow: ${shadowAdapter(2)};
          backdrop-filter: blur(15px);
          transition: width ${MICROINTERACTION.l} ease-in-out,
            background-color ${MICROINTERACTION.s} ease-out;

          &[data-activated='true'] {
            width: ${cp.controls.indicators.item.ACTIVATED.width};
            background-color: ${colorAlphaAdapter(COLOR.g_0, 0.625)};
          }
        }
      }
    }
  }

  .app[data-dark-mode='true'] & {
    background-image: ${cp.DARK_MODE.backgroundImage};
    background-color: ${COLOR.g_15};
  }
`

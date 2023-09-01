import {
  COLOR,
  MAIN_GAP,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const INDICATOR_SIZE = '0.6875rem'
const GAP = `calc(${MAIN_GAP} * 0.5)`
const PATTERN_BACKGROUND_GAP = MAIN_GAP
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

  :hover .controls-C .controls .control {
    opacity: 1;
  }

  .items-C {
    display: flex;
    height: 100%;

    .item {
      flex-grow: 0;
      flex-shrink: 0;
      aspect-ratio: ${({ p }) => p.itemsC.item.aspectRatio};
    }
  }

  .controls-C {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    color: ${COLOR.g_4};

    .controls {
      display: flex;
      align-items: center;
      gap: ${GAP};
      margin: calc(${GAP} * 2);

      .control {
        opacity: 0;
        transition: box-shadow ${MICROINTERACTION.xs} ease-out,
          opacity ${MICROINTERACTION.s} ease-out;

        @media (hover: none) and (any-hover: none) {
          opacity: 1;
        }
      }

      .indicators {
        display: flex;
        gap: ${INDICATOR_SIZE};

        .item {
          width: ${INDICATOR_SIZE};
          height: ${INDICATOR_SIZE};
          border-radius: ${NOT_FONT_SIZE['6xl']};
          background-color: ${COLOR.g_12};
          box-shadow: ${shadowAdapter(2)};
          transition: width ${MICROINTERACTION.l} ease-out,
            background-color ${MICROINTERACTION.s} ease-out;

          &[data-activated='true'] {
            width: ${cp.controls.indicators.item.ACTIVATED.width};
            background-color: ${COLOR.g_4};
          }
        }
      }
    }
  }

  &[data-fullscreen='true'] {
    border-radius: 0;

    .items-C .item {
      width: 100vw;
      height: 100vh;
    }
  }

  .app[data-dark-mode='true'] & {
    background-image: ${cp.DARK_MODE.backgroundImage};
    background-color: ${COLOR.g_15};
  }
`

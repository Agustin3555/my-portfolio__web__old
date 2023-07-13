import { COLOR, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from '@/styles'
import styled from 'styled-components'

export interface LevelBarStyleProps {
  width?: string
}

interface LevelBarNormalizedStyleProps {
  width: string
}

interface LevelBarStyleProvider {
  width: string
  backgroundColor: string
  bar: {
    width: string
    level: {
      backgroundColor: string
      value: {
        color: string
      }
    }
  }
  separators: {
    separator: {
      backgroundColor: string
    }
  }
}

export const levelBarStyleAdapter = (
  darkMode: boolean,
  segments: number,
  value: number,
  props?: LevelBarStyleProps
): LevelBarStyleProvider => {
  const normalizedProps: LevelBarNormalizedStyleProps = {
    width: props?.width || NOT_FONT_SIZE['3xl'],
  }

  // #region Auxiliary vars

  // #endregion

  return {
    width: normalizedProps.width,
    backgroundColor: darkMode ? COLOR.g_15 : COLOR.g_10,
    bar: {
      width: `${(value / segments) * 100}%`,
      level: {
        backgroundColor: darkMode ? COLOR.g_15 : COLOR.g_10,
        value: {
          color: darkMode ? COLOR.g_6 : COLOR.g_10,
        },
      },
    },
    separators: {
      separator: {
        backgroundColor: darkMode ? COLOR.g_12 : COLOR.g_10,
      },
    },
  }
}

export const StylizedLevelBar = styled.div<{ p: LevelBarStyleProvider }>`
  position: relative;
  width: ${({ p }) => p.width};
  height: ${NOT_FONT_SIZE.s};
  border-radius: calc(${NOT_FONT_SIZE['2xs']} - ${NOT_FONT_SIZE['3xs']});
  background-color: ${({ p }) => p.backgroundColor};

  .separators {
    position: absolute;
    top: 0;
    right: ${NOT_FONT_SIZE['6xs']};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;

    .separator {
      width: ${NOT_FONT_SIZE['6xs']};
      height: ${NOT_FONT_SIZE['2xs']};
      background-color: ${({ p }) => p.separators.separator.backgroundColor};
    }
  }

  .bar {
    position: relative;
    width: ${({ p }) => p.bar.width};
    height: 100%;
    border-radius: calc(${NOT_FONT_SIZE['2xs']} - ${NOT_FONT_SIZE['3xs']});
    background-color: ${COLOR.b};
    transition: width ${MICROINTERACTION.xl} ease-in-out;
    overflow: hidden;

    .level {
      position: absolute;
      top: ${NOT_FONT_SIZE['4xs']};
      right: ${NOT_FONT_SIZE['4xs']};
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(${FONT_SIZE.s} + ${NOT_FONT_SIZE['5xs']});
      height: calc(${FONT_SIZE.s} + ${NOT_FONT_SIZE['5xs']});
      border-radius: ${NOT_FONT_SIZE['6xl']};
      background-color: ${({ p }) => p.bar.level.backgroundColor};

      .value {
        font-size: ${FONT_SIZE.xs};
        line-height: ${FONT_SIZE.xs};
        color: ${({ p }) => p.bar.level.value.color};
        transition: opacity ${MICROINTERACTION.s} ease-out;
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
`

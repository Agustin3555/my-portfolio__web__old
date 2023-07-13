import styled from 'styled-components'
import {
  COLOR,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from '@/styles'

interface ComMetalStyleProvider {
  right: string
  opacity: string
  call: {
    fill: string
  }
  text: {
    color: string
  }
  check: {
    color: string
    hover: {
      backgroundColor: string
    }
  }
}

export const metalCuriositiesStyleAdapter = (
  darkMode: boolean,
  hidden: boolean
): ComMetalStyleProvider => {
  // #region Auxiliary vars

  // #endregion

  return {
    right: hidden
      ? `calc((${NOT_FONT_SIZE['3xl']} + ${NOT_FONT_SIZE.l}) * -1)`
      : NOT_FONT_SIZE.xs,
    opacity: hidden ? '0' : '',
    call: {
      fill: darkMode ? COLOR.g_4 : COLOR.g_1,
    },
    text: {
      color: darkMode ? COLOR.g_14 : COLOR.g_1,
    },
    check: {
      color: darkMode ? COLOR.g_10 : COLOR.g_1,
      hover: {
        backgroundColor: darkMode ? COLOR.g_2 : COLOR.g_1,
      },
    },
  }
}

export const StylizedMetalCuriosities = styled.div<{ p: ComMetalStyleProvider }>`
  position: fixed;
  top: calc(${NOT_FONT_SIZE.l} + ${NOT_FONT_SIZE.m});
  right: ${({ p }) => p.right};
  opacity: ${({ p }) => p.opacity};
  transition: right ${MICROINTERACTION.xl} ease-in-out,
    opacity ${MICROINTERACTION.xl} ease-out,
    transform ${MICROINTERACTION.xl} ease-in-out;

  .metal-container {
    width: 100%;
    height: ${NOT_FONT_SIZE.l};

    .metal {
      position: absolute;
    }
  }

  .call {
    position: relative;

    .svg {
      position: absolute;
      z-index: -1;
      top: calc(${NOT_FONT_SIZE.s} * -1);
      fill: ${({ p }) => p.call.fill};
      transition: fill ${MICROINTERACTION.m} ease-out;
    }

    .text {
      padding: ${NOT_FONT_SIZE.s};
      width: calc(${NOT_FONT_SIZE['3xl']} + ${NOT_FONT_SIZE.l});
      color: ${({ p }) => p.text.color};
      font-size: ${FONT_SIZE.xs};
      line-height: calc(${FONT_SIZE.xs} * 1.5);
      background-color: ${({ p }) => p.call.fill};
      border-radius: ${NOT_FONT_SIZE['2xs']};
      box-shadow: ${shadowAdapter(2)};
      transition: color ${MICROINTERACTION.m} ease-out;
    }

    .check {
      position: absolute;
      right: ${NOT_FONT_SIZE['4xs']};
      bottom: ${NOT_FONT_SIZE['4xs']};
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(${NOT_FONT_SIZE.s} - ${NOT_FONT_SIZE['4xs']});
      height: calc(${NOT_FONT_SIZE.s} - ${NOT_FONT_SIZE['4xs']});
      background-color: transparent;
      border: none;
      border-radius: calc(${NOT_FONT_SIZE['2xs']} - ${NOT_FONT_SIZE['4xs']});
      color: ${({ p }) => p.check.color};
      cursor: pointer;
      transition: background-color ${MICROINTERACTION.s} ease-out,
        transform ${MICROINTERACTION.xs} ease-out;

      :hover {
        background-color: ${({ p }) => p.check.hover.backgroundColor};
      }

      :active {
        transform: scale(0.875);
      }
    }
  }
`

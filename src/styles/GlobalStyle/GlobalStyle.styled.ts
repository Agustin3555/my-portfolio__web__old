import { createGlobalStyle } from 'styled-components'
import { Value } from '../types'
import { COLOR, FONT, FONT_SIZE, NOT_FONT_SIZE } from '../enums'
import {
  BGC_BRIGHT_A,
  BGC_BRIGHT_B,
  BGC_DARK_A,
  BGC_DARK_B,
} from '../globalStyleConsts'

interface Provider {
  scrollbar: {
    backgroundColor: Value
  }
  scrollbarThumb: {
    backgroundColor: Value
    borderWidth: Value
    borderColor: Value
    hover: {
      borderColor: Value
    }
  }
}

const SCROLLBAR_WIDTH = NOT_FONT_SIZE['3xs']
const SCROLLBAR_PADDING = NOT_FONT_SIZE['3xs']

export namespace GlobalStyleStyled {
  export const adapter = (darkMode: boolean): Provider => {
    // #region Auxiliary vars

    const backgroundColor = darkMode ? BGC_DARK_A : BGC_BRIGHT_A

    // #endregion

    return {
      scrollbar: {
        backgroundColor,
      },
      scrollbarThumb: {
        backgroundColor: darkMode ? BGC_DARK_B : BGC_BRIGHT_B,
        borderWidth: SCROLLBAR_PADDING,
        borderColor: backgroundColor,
        hover: {
          borderColor: darkMode ? COLOR.g_12 : COLOR.g_1,
        },
      },
    }
  }

  export const Component = createGlobalStyle<{ p: Provider }>`
    html {
      font-family: ${FONT.p};

      body * {
        font-size: ${FONT_SIZE.s};
        line-height: ${FONT_SIZE.s};
        letter-spacing: calc(${NOT_FONT_SIZE['6xs']} * 0.333);
        word-spacing: ${NOT_FONT_SIZE['6xs']};

        ::selection {
          background-color: ${COLOR.d};
          color: ${COLOR.g_0};
        }
      }
    }

    ::-webkit-scrollbar {
      width: calc(${SCROLLBAR_WIDTH} + ${SCROLLBAR_PADDING} * 2);
      background-color: ${({ p }) => p.scrollbar.backgroundColor};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ p }) => p.scrollbarThumb.backgroundColor};
      border-width: ${({ p }) => p.scrollbarThumb.borderWidth};
      border-style: solid;
      border-color: ${({ p }) => p.scrollbarThumb.borderColor};
      border-radius: ${NOT_FONT_SIZE['6xl']};

      :hover {
        background-color: ${({ p }) => p.scrollbarThumb.hover.borderColor};
      }
    }

    li {
      /* display: inline-block; */
    }
  `
}

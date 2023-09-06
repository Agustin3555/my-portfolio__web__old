import { Global, css } from '@emotion/react'
import { COLOR, FONT, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from '../enums'
import {
  BGC_BRIGHT_A,
  BGC_BRIGHT_B,
  BGC_DARK_A,
  BGC_DARK_B,
} from '../globalStyleConsts'
import { Value } from '../types'

const SCROLLBAR_WIDTH = NOT_FONT_SIZE['3xs']
const SCROLLBAR_PADDING = NOT_FONT_SIZE['3xs']

interface Provider {
  scrollbar: {
    width: Value
    height: Value
  }

  scrollbarThumb: {
    borderWidth: Value
    borderColor: Value
    backgroundColor: Value

    hover: {
      borderColor: Value
    }
  }

  body: {
    backgroundColor: Value
  }
}

const adapter = (darkMode: boolean): Provider => {
  const backgroundColor = darkMode ? BGC_DARK_A : BGC_BRIGHT_A

  const width = `calc(${SCROLLBAR_WIDTH} + ${SCROLLBAR_PADDING} * 2)`

  return {
    scrollbar: {
      width,
      height: width,
    },

    scrollbarThumb: {
      borderWidth: SCROLLBAR_PADDING,
      borderColor: backgroundColor,
      backgroundColor: darkMode ? BGC_DARK_B : BGC_BRIGHT_B,

      hover: {
        borderColor: darkMode ? COLOR.g_12 : COLOR.g_1,
      },
    },

    body: {
      backgroundColor,
    },
  }
}

const GlobalStyle = ({ darkMode }: { darkMode: boolean }) => {
  const p = adapter(darkMode)

  return (
    <Global
      styles={css`
        * {
          font-family: ${FONT.p};
          font-size: ${FONT_SIZE.s};
        }

        ::selection {
          background-color: ${COLOR.d};
          color: ${COLOR.g_0};
        }

        ::-webkit-scrollbar {
          width: ${p.scrollbar.width};
          height: ${p.scrollbar.height};
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          border-width: ${p.scrollbarThumb.borderWidth};
          border-radius: ${NOT_FONT_SIZE['6xl']};
          border-color: ${p.scrollbarThumb.borderColor};
          background-color: ${p.scrollbarThumb.backgroundColor};

          :hover {
            background-color: ${p.scrollbarThumb.hover.borderColor};
          }
        }

        body {
          background-color: ${p.body.backgroundColor};
          transition: background-color ${MICROINTERACTION.s} ease-out;
        }

        :is(h1, h2, h3, h4),
        :is(h1, h2, h3, h4) > * {
          font-family: ${FONT.s};
        }

        h1,
        h1 > * {
          font-size: ${FONT_SIZE['2xl']};
        }

        h2,
        h2 > * {
          font-size: ${FONT_SIZE.l};
        }

        h3,
        h3 > * {
          font-size: ${FONT_SIZE.xl};
        }

        h4,
        h4 > * {
          font-size: ${FONT_SIZE.l};
        }

        h5,
        h5 > * {
          font-size: ${FONT_SIZE.xs};
        }

        :is(h2, h5),
        :is(h2, h5) > * {
          color: ${COLOR.b};
        }
      `}
    />
  )
}

export default GlobalStyle

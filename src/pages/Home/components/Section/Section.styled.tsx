import {
  COLOR_BRIGHT_B,
  COLOR_DARK_B,
  FONT,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
} from '@/styles'
import styled from '@emotion/styled'

interface ConstProvider {
  title: {
    color: Value
  }

  DARK_MODE: {
    title: {
      color: Value
    }
  }
}

const cp: ConstProvider = {
  title: {
    color: COLOR_BRIGHT_B,
  },

  DARK_MODE: {
    title: {
      color: COLOR_DARK_B,
    },
  },
}

export const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${NOT_FONT_SIZE.l};

  .section__title {
    font-family: ${FONT.s};
    font-size: ${FONT_SIZE.xl};
    color: ${cp.title.color};
    transition: color ${MICROINTERACTION.s} ease-out;
  }

  .app[data-dark-mode='true'] & {
    .section__title {
      color: ${cp.DARK_MODE.title.color};
    }
  }
`

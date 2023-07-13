import {
  COLOR,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const DIMENSION = NOT_FONT_SIZE.l

interface ConstProvider {
  width: Value
  height: Value

  mediaS: {
    left: Value
  }
}

const cp: ConstProvider = {
  width: DIMENSION,
  height: DIMENSION,

  mediaS: {
    left: `calc(${DIMENSION} * -1)`,
  },
}

export const Component = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  width: ${cp.width};
  height: ${cp.height};
  border-bottom-right-radius: ${NOT_FONT_SIZE['2xs']};
  background-color: ${COLOR.a};
  box-shadow: ${shadowAdapter(2)};
  cursor: pointer;
  overflow: hidden;
  transition: left ${MICROINTERACTION.m} ease;

  @media (max-width: ${MEDIA.s}) {
    left: ${cp.mediaS.left};
  }

  .logo {
    width: 100%;
  }
`

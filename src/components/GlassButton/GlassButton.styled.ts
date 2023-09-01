import {
  COLOR,
  FONT_SIZE,
  GLASS_SET,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const SIZE = FONT_SIZE.xl
const BORDER_RADIUS = NOT_FONT_SIZE['3xs']

interface ConstProvider {
  width: Value
  height: Value
  borderRadius: Value

  glassRefleccion: {
    borderRadius: Value
  }

  content: {
    borderRadius: Value
  }
}

const cp: ConstProvider = {
  width: SIZE,
  height: SIZE,
  borderRadius: BORDER_RADIUS,

  glassRefleccion: {
    borderRadius: BORDER_RADIUS,
  },

  content: {
    borderRadius: BORDER_RADIUS,
  },
}

export const Component = styled.button`
  position: relative;
  width: ${cp.width};
  height: ${cp.height};
  padding: 0;
  border: none;
  border-radius: ${cp.borderRadius};
  background-color: transparent;
  box-shadow: ${shadowAdapter(2)};
  cursor: pointer;
  transition: box-shadow ${MICROINTERACTION.xs} ease-out;
  ${GLASS_SET.this}

  :hover {
    color: ${COLOR.g_0};
  }

  :active {
    box-shadow: ${shadowAdapter(1)};
  }

  .glass-button__glass-refleccion {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${cp.glassRefleccion.borderRadius};
    ${GLASS_SET.refleccion}
  }

  .glass-button__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${cp.content.borderRadius};
    ${GLASS_SET.content}
  }
`

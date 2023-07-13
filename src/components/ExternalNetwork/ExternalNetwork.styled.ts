import {
  COLOR,
  GLASS_SET,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

const SIZE = NOT_FONT_SIZE.m
const BORDER_RADIUS = NOT_FONT_SIZE['3xs']

export interface Props {
  styled?: SerializedStyles
}

interface Provider {
  styled?: Value
}

export const adapter = ({ styled }: Props): Provider => {
  return {
    styled,
  }
}

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

export const Component = styled.a<{ p: Provider }>`
  position: relative;
  width: ${cp.width};
  height: ${cp.height};
  border-radius: ${cp.borderRadius};
  text-decoration: none;
  box-shadow: ${shadowAdapter(2)};
  transition: box-shadow ${MICROINTERACTION.xs} ease-out,
    transform ${MICROINTERACTION.xs} ease-out;
  ${GLASS_SET.this}

  :hover {
    color: ${COLOR.b};
  }

  :active {
    box-shadow: ${shadowAdapter(1)};
  }

  .external-network__glass-refleccion {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${cp.glassRefleccion.borderRadius};
    ${GLASS_SET.refleccion}
  }

  .external-network__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${cp.content.borderRadius};
    ${GLASS_SET.content}
  }

  ${({ p }) => p.styled};
`

import {
  Elevation,
  shadowAdapter,
  NOT_FONT_SIZE,
  Size,
  Value,
  GLASS_SET,
} from '@/styles'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

interface Provider {
  borderRadius: Value
  boxShadow: Value
  glassRefleccion: {
    borderRadius: Value
  }
  content: {
    padding: Value
    borderRadius: Value
  }
  styled?: Value
}

export interface Props {
  padding?: Size
  borderRadius?: Size
  elevation?: Elevation
  styled?: SerializedStyles
}

export const adapter = ({
  padding = NOT_FONT_SIZE['3xs'],
  borderRadius = NOT_FONT_SIZE['4xs'],
  elevation = 1,
  styled,
}: Props): Provider => {
  return {
    borderRadius,
    boxShadow: shadowAdapter(elevation),

    glassRefleccion: {
      borderRadius,
    },

    content: {
      padding: `calc(${padding} - ${NOT_FONT_SIZE['6xs']})`,
      borderRadius,
    },

    styled,
  }
}

export const Component = styled.div<{ p: Provider }>`
  position: relative;
  width: fit-content;
  height: fit-content;
  border-radius: ${({ p }) => p.borderRadius};
  box-shadow: ${({ p }) => p.boxShadow};
  ${GLASS_SET.this}

  .glass-refleccion {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${({ p }) => p.glassRefleccion.borderRadius};
    ${GLASS_SET.refleccion}
  }

  .content {
    position: relative;
    padding: ${({ p }) => p.content.padding};
    border-radius: ${({ p }) => p.content.borderRadius};
    ${GLASS_SET.content}
  }

  ${({ p }) => p.styled};
`

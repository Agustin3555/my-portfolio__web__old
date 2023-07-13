import { Color, MICROINTERACTION, NOT_FONT_SIZE, Size, Value } from '@/styles'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

type Long = 'expanded' | Size

export interface Props {
  long?: Long
  thickness?: Size
  invert?: boolean
  backgroundColor: {
    dark: Color
    bright?: Color
  }
  styled?: SerializedStyles
}

interface NormalizedProps {
  long: Long
  thickness: Size
  invert: boolean
  backgroundColor: {
    dark: Color
    bright: Color
  }
}

interface Provider {
  width: Value
  height: Value
  backgroundColor: Value

  DARK_MODE: {
    backgroundColor: Value
  }

  styled?: SerializedStyles
}

export const adapter = (style: Props): Provider => {
  const normalizedProps: NormalizedProps = {
    long: style.long || 'expanded',
    thickness: style.thickness || NOT_FONT_SIZE['6xs'],
    invert: style.invert || false,
    backgroundColor: {
      dark: style.backgroundColor.dark,
      bright: style.backgroundColor.bright || style.backgroundColor.dark,
    },
  }

  const long = normalizedProps.long === 'expanded' ? '100%' : normalizedProps.long

  return {
    width: normalizedProps.invert ? long : normalizedProps.thickness,
    height: normalizedProps.invert ? normalizedProps.thickness : long,
    backgroundColor: normalizedProps.backgroundColor.bright,

    DARK_MODE: {
      backgroundColor: normalizedProps.backgroundColor.dark,
    },

    styled: style?.styled,
  }
}

export const Component = styled.div<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: ${NOT_FONT_SIZE['6xl']};
  background-color: ${({ p }) => p.backgroundColor};
  transition: background-color ${MICROINTERACTION.s} ease-out;

  .app[data-dark-mode='true'] & {
    background-color: ${({ p }) => p.DARK_MODE.backgroundColor};
  }

  ${({ p }) => p.styled};
`

import { FONT_SIZE, MICROINTERACTION, Size, Value } from '@/styles'
import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

export interface Props {
  size?: Size
  styled?: SerializedStyles
}

interface Provider {
  width: Value
  height: Value

  icon: {
    fontSize: Value
  }

  styled?: SerializedStyles
}

interface NormalizedProps {
  size: Size
}

export const adapter = (style?: Props): Provider => {
  const normalizedProps: NormalizedProps = {
    size: style?.size || FONT_SIZE.xs,
  }

  const size = normalizedProps.size
  const dimensions = size === FONT_SIZE.xs ? FONT_SIZE['2xs'] : size

  return {
    width: dimensions,
    height: dimensions,

    icon: {
      fontSize: size,
    },

    styled: style?.styled,
  }
}

export const Component = styled.div<{ p: Provider }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};

  .icon {
    font-size: ${({ p }) => p.icon.fontSize};
    transition: color ${MICROINTERACTION.s} ease-out;
  }

  ${({ p }) => p.styled};
`

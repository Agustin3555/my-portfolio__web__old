import { COLOR, NOT_FONT_SIZE, shadowAdapter, Size, Value } from '@/styles'
import { randomInt } from '@/tools'
import styled from '@emotion/styled'

const ANIMATION_DURATION = 8
const ANIMATION_MISMATCH = NOT_FONT_SIZE.xs

type Color = COLOR.a | COLOR.b | COLOR.c | COLOR.d

export interface Props {
  size?: Size
  borderRadius?: Size
  backgroundColor?: Color
}

export interface NormalizedProps {
  size: Size
  borderRadius: Size
  backgroundColor: Color
}

interface Provider {
  width: Value
  height: Value
  borderRadius: Value
  backgroundColor: Value
  animationDelay: Value
}

const colors: Color[] = [COLOR.a, COLOR.b, COLOR.c, COLOR.d]

export const adapter = (style?: Props): Provider => {
  const normalizedProps: NormalizedProps = {
    size: style?.size || NOT_FONT_SIZE.l,
    borderRadius: style?.borderRadius || NOT_FONT_SIZE.xs,
    backgroundColor:
      style?.backgroundColor || colors[randomInt(0, colors.length - 1)],
  }

  const size = normalizedProps.size

  return {
    width: size,
    height: size,
    borderRadius: normalizedProps.borderRadius,
    backgroundColor: normalizedProps.backgroundColor,
    animationDelay: `${randomInt(0, ANIMATION_DURATION)}s`,
  }
}

export const Component = styled.div<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: ${({ p }) => p.borderRadius};
  background-color: ${({ p }) => p.backgroundColor};
  box-shadow: ${shadowAdapter(2)};
  transform: translateY(${ANIMATION_MISMATCH});
  animation: levitation ${ANIMATION_DURATION}s ease-in-out infinite alternate;
  animation-delay: ${({ p }) => p.animationDelay};

  @keyframes levitation {
    from {
      transform: translateY(${ANIMATION_MISMATCH});
    }
    to {
      transform: translateY(calc(${ANIMATION_MISMATCH} * -1));
    }
  }
`

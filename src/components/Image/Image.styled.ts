import { MICROINTERACTION, NOT_FONT_SIZE, Size, Value } from '@/styles'
import styled from '@emotion/styled'

export interface Props {
  size?: Size
}

interface Provider {
  width: Value
  height: Value

  img: {
    width: Value
    height: Value
  }
}

interface NormalizedProps {
  size: Size
}

export const adapter = (style?: Props): Provider => {
  const { size }: NormalizedProps = {
    size: style?.size || NOT_FONT_SIZE.l,
  }

  return {
    width: size,
    height: size,

    img: {
      width: size,
      height: size,
    },
  }
}

export const Component = styled.div<{ p: Provider }>`
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};

  .loader-C {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: opacity ${MICROINTERACTION.s} ease-out;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(${NOT_FONT_SIZE['4xs']});
    opacity: 0;
    transition: filter ${MICROINTERACTION.s} ease-out,
      opacity ${MICROINTERACTION.s} ease-out;
  }

  &[data-loaded='true'] {
    .loader-C {
      opacity: 0;
    }

    .img {
      filter: initial;
      opacity: 1;
    }
  }
`

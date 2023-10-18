import {
  COLOR,
  GLASS_SET,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const BORDER_RADIUS = NOT_FONT_SIZE['3xs']

export interface Props {
  size?: NOT_FONT_SIZE.m | NOT_FONT_SIZE.xs
}

interface Provider {
  width: Value
  height: Value
}

export const adapter = ({ size = NOT_FONT_SIZE.m }: Props): Provider => {
  return {
    width: size,
    height: size,
  }
}

export const Component = styled.a<{ p: Provider }>`
  position: relative;
  width: ${({ p }) => p.width};
  height: ${({ p }) => p.height};
  border-radius: ${BORDER_RADIUS};
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
    border-radius: ${BORDER_RADIUS};
    ${GLASS_SET.refleccion}
  }

  .external-network__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: ${BORDER_RADIUS};
    ${GLASS_SET.content}
  }
`

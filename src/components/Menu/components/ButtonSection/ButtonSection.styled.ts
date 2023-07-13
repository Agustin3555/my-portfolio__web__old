import { COLOR, MICROINTERACTION } from '@/styles'
import styled from '@emotion/styled'

export const Component = styled.a`
  text-decoration: none;
  transition: color ${MICROINTERACTION.s} ease-out;

  :hover {
    color: ${COLOR.g_19};
  }

  .app[data-dark-mode='true'] & {
    :hover {
      color: ${COLOR.g_0};
    }
  }
`

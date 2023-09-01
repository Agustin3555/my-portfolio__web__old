import { MICROINTERACTION, NOT_FONT_SIZE } from '@/styles'
import styled from '@emotion/styled'

export const Component = styled.figure`
  .loader-C {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: display ${MICROINTERACTION.s} linear ${MICROINTERACTION.s},
      opacity ${MICROINTERACTION.s} ease-out;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: blur(${NOT_FONT_SIZE['4xs']});
    opacity: 0;
    transition: filter ${MICROINTERACTION.s} ease-out ${MICROINTERACTION.s},
      opacity ${MICROINTERACTION.s} ease-out ${MICROINTERACTION.s};
  }

  &[data-loaded='true'] {
    .loader-C {
      opacity: 0;
      display: none;
    }

    .img {
      filter: initial;
      opacity: 1;
    }
  }
`

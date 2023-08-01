import {
  COLOR,
  FONT_SIZE,
  GLASS_SET,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${NOT_FONT_SIZE['2xl']};

  .email-link {
    position: relative;

    .link {
      display: inline-block;
      padding: ${FONT_SIZE.s} calc(${FONT_SIZE.s} * 2);
      text-decoration: none;
      color: ${COLOR.g_0};
      ${GLASS_SET.content};
      border-radius: ${NOT_FONT_SIZE['3xs']};
      background-color: ${COLOR.g_14};
      transition: color ${MICROINTERACTION.s} ease-out,
        background-color ${MICROINTERACTION.s} ease-out,
        box-shadow ${MICROINTERACTION.m} ease-out,
        transform ${MICROINTERACTION.m} ease-out;

      :hover {
        box-shadow: ${shadowAdapter(2)};
        transform: scale(1.06);
      }
    }

    :hover {
      .b-1 {
        bottom: -3rem;
        left: -4.5rem;
      }

      .b-2 {
        top: -3rem;
        right: -2rem;
      }

      .b-3 {
        bottom: -5rem;
        left: 60%;
      }
    }

    .box {
      position: absolute;
      transition: top 1.5s ease-in-out, bottom 1.5s ease-in-out,
        left 1.5s ease-in-out, right 1.5s ease-in-out;
    }

    .b-1 {
      bottom: -2rem;
      left: -3.5rem;
    }

    .b-2 {
      top: -2rem;
      right: -1rem;
    }

    .b-3 {
      bottom: -4rem;
      left: 50%;
    }
  }

  .app[data-dark-mode='true'] & {
    .email-link .link {
      color: ${COLOR.g_19};
      background-color: ${COLOR.g_4};
    }
  }
`

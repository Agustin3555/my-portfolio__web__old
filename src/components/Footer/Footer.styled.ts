import {
  COLOR,
  FONT_SIZE,
  MAIN_GAP,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP

export const Component = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(${GAP} * 2);
  padding-bottom: ${GAP};
  color: ${COLOR.g_14};
  border-top-left-radius: ${NOT_FONT_SIZE.xs};
  border-top-right-radius: ${NOT_FONT_SIZE.xs};
  background-color: ${COLOR.g_6};
  box-shadow: ${shadowAdapter(2)};
  transition: color ${MICROINTERACTION.s} ease-out,
    background-color ${MICROINTERACTION.s} ease-out;

  .text {
    font-size: ${FONT_SIZE.xs};
  }

  .separator {
    height: ${NOT_FONT_SIZE['6xs']};
    width: 100%;
    margin-top: ${GAP};
    margin-bottom: ${GAP};
    border-radius: ${NOT_FONT_SIZE['6xl']};
    background-color: ${COLOR.g_14};
    transition: background-color ${MICROINTERACTION.s} ease-out;
  }

  .sections {
    display: flex;
    gap: calc(${GAP} * 2);
    padding-bottom: ${GAP};

    @media (max-width: ${MEDIA.xs}) {
      flex-direction: column;
    }

    .item {
      display: flex;
      flex-direction: column;

      .title {
        width: max-content;
        color: ${COLOR.g_19};
        transition: color ${MICROINTERACTION.s} ease-out;
      }

      .group-text {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: ${FONT_SIZE.xs};

        @media (max-width: 43.75rem) {
          grid-template-columns: 1fr;
        }
      }

      .link-page {
        font-size: ${FONT_SIZE.xs};
        line-height: 1.5;
      }
    }
  }

  .copyright {
    text-align: center;
  }

  .app[data-dark-mode='true'] & {
    color: ${COLOR.g_4};
    background-color: ${COLOR.g_14};

    .sections .item .title {
      color: ${COLOR.g_0};
    }

    .separator {
      background-color: ${COLOR.g_4};
    }
  }
`

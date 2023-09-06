import {
  COLOR,
  FONT_SIZE,
  MAIN_GAP,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const GAP = MAIN_GAP
const TOGGLE_UI_HEIGHT = FONT_SIZE.s

interface ConstProvider {
  item: {
    toggle: {
      toggleUI: {
        width: Value
      }
    }
  }
}

const cp: ConstProvider = {
  item: {
    toggle: {
      toggleUI: {
        width: `calc(${TOGGLE_UI_HEIGHT} * 2)`,
      },
    },
  },
}

export const Component = styled.ol`
  display: flex;
  gap: ${GAP};

  .item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${GAP};

    .toggle {
      display: flex;
      align-items: center;
      gap: ${GAP};
      cursor: pointer;

      .toggle-ui {
        position: relative;
        width: ${cp.item.toggle.toggleUI.width};
        height: ${TOGGLE_UI_HEIGHT};
        border-radius: ${NOT_FONT_SIZE['6xl']};
        background-color: ${COLOR.g_10};
        transition: background-color ${MICROINTERACTION.s} ease-out;

        ::before {
          content: '';
          display: block;
          width: calc(${TOGGLE_UI_HEIGHT} * 0.5);
          height: ${TOGGLE_UI_HEIGHT};
          border-top-left-radius: ${NOT_FONT_SIZE['6xl']};
          border-bottom-left-radius: ${NOT_FONT_SIZE['6xl']};
          background-color: ${COLOR.b};
          transition: width ${MICROINTERACTION.s} ease;
        }

        ::after {
          content: '';
          position: absolute;
          top: calc(${NOT_FONT_SIZE['6xs']} * -1);
          left: calc(${NOT_FONT_SIZE['6xs']} * -1);
          display: block;
          width: ${TOGGLE_UI_HEIGHT};
          height: ${TOGGLE_UI_HEIGHT};
          border-radius: 50%;
          border-width: ${NOT_FONT_SIZE['6xs']};
          border-style: solid;
          border-color: ${COLOR.g_6};
          background-color: ${COLOR.g_2};
          box-shadow: ${shadowAdapter(2)};
          transition: border-color ${MICROINTERACTION.s} ease-out,
            background-color ${MICROINTERACTION.s} ease-out,
            transform ${MICROINTERACTION.s} ease;
        }
      }

      .level-title {
        color: ${COLOR.b};
        font-size: ${FONT_SIZE.xs};
      }
    }

    .desc {
      opacity: 0.25;
      transition: opacity ${MICROINTERACTION.s} ease-out;
    }

    &[data-selected='true'] {
      .toggle .toggle-ui {
        ::before {
          width: calc(${TOGGLE_UI_HEIGHT} * 1.5);
        }

        ::after {
          transform: translateX(${TOGGLE_UI_HEIGHT});
        }
      }

      .desc {
        opacity: 1;
      }
    }
  }

  .app[data-dark-mode='true'] & .item .toggle .toggle-ui {
    background-color: ${COLOR.g_12};

    ::after {
      border-color: ${COLOR.g_10};
      background-color: ${COLOR.g_4};
    }
  }

  @media (min-width: 75rem), (max-width: 45.3125rem) {
    flex-direction: column;
    gap: calc(${GAP} * 2);
  }

  @media (min-width: 75rem) {
    width: 37.5%;
  }
`

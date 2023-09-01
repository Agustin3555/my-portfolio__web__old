import {
  COLOR,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

const GAP = NOT_FONT_SIZE['3xs']
const NAME_FONT_SIZE = FONT_SIZE.xs
const ICON_SIZE = NOT_FONT_SIZE.s

interface ConstProvider {
  technology: {
    paddingLeft: Value
  }
  childTech: {
    item: {
      bulletPoint: {
        width: Value
      }
    }
    extensionContainer: {
      width: Value
    }
  }
}

const bulletPointContainerSize = `calc(${GAP} * 5)`

const cp: ConstProvider = {
  technology: {
    paddingLeft: `calc(${GAP} + (${ICON_SIZE} - ${NAME_FONT_SIZE}) * 0.5)`,
  },
  childTech: {
    item: {
      bulletPoint: {
        width: bulletPointContainerSize,
      },
    },
    extensionContainer: {
      width: bulletPointContainerSize,
    },
  },
}

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GAP};
  width: 100%;

  .technology {
    display: grid;
    grid-template-columns: 1fr ${NOT_FONT_SIZE['3xl']};
    gap: calc(${GAP} * 3);
    padding: ${GAP};
    padding-left: ${cp.technology.paddingLeft};
    border-radius: ${NOT_FONT_SIZE['3xs']};
    transition: background-color ${MICROINTERACTION.s} ease-out,
      box-shadow ${MICROINTERACTION.s} ease-out,
      transform ${MICROINTERACTION.s} ease-out;

    :hover {
      background-color: ${COLOR.g_0};
      box-shadow: ${shadowAdapter(2)};
      transform: scale(1.01);

      .group {
        .icons .icon {
          filter: initial;
        }

        .names {
          color: ${COLOR.g_18};
        }
      }
    }

    .group {
      display: flex;
      align-items: center;
      gap: calc(${GAP} * 3);
      justify-content: space-between;

      .separator {
        width: ${NOT_FONT_SIZE['6xs']};
        height: ${NOT_FONT_SIZE['2xs']};
        border-radius: ${NOT_FONT_SIZE['6xl']};
        background-color: ${COLOR.g_10};
        transition: background-color ${MICROINTERACTION.s} ease-out;
      }

      .names {
        display: flex;
        align-items: center;
        gap: calc(${GAP} * 2);
        transition: color ${MICROINTERACTION.s} ease-out;

        .name {
          font-size: ${NAME_FONT_SIZE};
          line-height: 1;
        }
      }

      .icons {
        display: flex;
        align-items: center;
        gap: ${GAP};

        .icon {
          height: ${ICON_SIZE};
          width: ${ICON_SIZE};
          object-fit: contain;
          filter: grayscale(1) invert(0.25);
          transition: filter ${MICROINTERACTION.s} ease-out;

          &[data-invert-in-bright-mode='true'] {
            filter: grayscale(1) invert(0.75);
          }
        }
      }
    }
  }

  .child-tech {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: column;

      .line {
        width: ${NOT_FONT_SIZE['6xs']};
        background-color: ${COLOR.g_6};
        transition: background-color ${MICROINTERACTION.s} ease-out;
      }

      .child-group {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${GAP};

        .bullet-point-container {
          position: relative;
          width: ${cp.childTech.item.bulletPoint.width};

          > * {
            position: absolute;
            left: 50%;
          }

          .box {
            width: 37.5%;
            height: 50%;
            border-width: 0;
            border-left-width: ${NOT_FONT_SIZE['6xs']};
            border-bottom-width: ${NOT_FONT_SIZE['6xs']};
            border-style: solid;
            border-color: ${COLOR.g_6};
            border-bottom-left-radius: ${NOT_FONT_SIZE['3xs']};
            transition: border-color ${MICROINTERACTION.s} ease-out;
          }

          .next-extension {
            bottom: 0;
            height: calc(50% + ${NOT_FONT_SIZE['3xs']});
          }
        }
      }

      .extension-container {
        width: ${cp.childTech.extensionContainer.width};
        height: ${GAP};

        .extension {
          position: relative;
          left: 50%;
          height: 100%;
        }
      }
    }
  }

  .app[data-dark-mode='true'] & {
    .technology {
      :hover {
        background-color: ${COLOR.g_12};

        .group .names {
          color: ${COLOR.g_0};
        }
      }

      .group {
        .separator {
          background-color: ${COLOR.g_6};
        }

        .icons .icon {
          &[data-invert-in-dark-mode='true'] {
            filter: grayscale(1) invert(0.75);
          }
        }
      }
    }

    .child-tech .item {
      .line {
        background-color: ${COLOR.g_11};
      }

      .child-group .bullet-point-container .box {
        border-color: ${COLOR.g_11};
      }
    }
  }
`

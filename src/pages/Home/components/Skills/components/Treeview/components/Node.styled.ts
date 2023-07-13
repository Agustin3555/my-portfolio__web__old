import {
  COLOR,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from '@/styles'
import styled from 'styled-components'

interface NodeStyleProvider {
  technology: {
    hover: {
      backgroundColor: string
      name: {
        color: string
      }
      indicatorArrow: {
        color: string
      }
    }
    leftGroup: {
      separatePart: {
        indicatorArrow: {
          color: string
        }
        names: {
          name: {
            color: string
          }
          separator: {
            backgroundColor: string
          }
        }
      }
      icons: {
        separator: {
          backgroundColor: string
        }
      }
    }
  }
  childTechnologies: {
    item: {
      bulletPoint: {
        box: {
          borderColor: string
        }
      }
    }
  }
}

export const nodeStyleAdapter = (darkMode: boolean): NodeStyleProvider => {
  // #region Auxiliary vars

  // #endregion

  return {
    technology: {
      hover: {
        backgroundColor: darkMode ? COLOR.g_12 : COLOR.g_10,
        name: {
          color: darkMode ? COLOR.g_0 : COLOR.g_10,
        },
        indicatorArrow: {
          color: darkMode ? COLOR.g_0 : COLOR.g_10,
        },
      },
      leftGroup: {
        separatePart: {
          indicatorArrow: {
            color: darkMode ? COLOR.g_4 : COLOR.g_10,
          },
          names: {
            name: {
              color: darkMode ? COLOR.g_4 : COLOR.g_10,
            },
            separator: {
              backgroundColor: darkMode ? COLOR.g_6 : COLOR.g_10,
            },
          },
        },
        icons: {
          separator: {
            backgroundColor: darkMode ? COLOR.g_6 : COLOR.g_10,
          },
        },
      },
    },
    childTechnologies: {
      item: {
        bulletPoint: {
          box: {
            borderColor: darkMode ? COLOR.g_8 : COLOR.g_10,
          },
        },
      },
    },
  }
}

export const StylizedNode = styled.div<{ p: NodeStyleProvider }>`
  display: flex;
  flex-direction: column;
  gap: ${NOT_FONT_SIZE['3xs']};
  width: 100%;
  border-radius: ${NOT_FONT_SIZE['2xs']};
  transition: height ${MICROINTERACTION.s} ease-out;

  .technology {
    position: relative;
    display: grid;
    grid-template-columns: 1fr ${NOT_FONT_SIZE['3xl']};
    grid-gap: ${NOT_FONT_SIZE.s};
    height: 2.375rem;
    padding: ${NOT_FONT_SIZE['3xs']};
    padding-left: 0.6875rem;
    border-radius: ${NOT_FONT_SIZE['3xs']};
    transition: background-color ${MICROINTERACTION.s} ease-out,
      box-shadow ${MICROINTERACTION.s} ease-out,
      transform ${MICROINTERACTION.s} ease-out;

    :hover {
      background-color: ${({ p }) => p.technology.hover.backgroundColor};
      box-shadow: ${shadowAdapter(2)};
      transform: scale(1.01);

      .left-group .separate-part .names .name {
        color: ${({ p }) => p.technology.hover.name.color};
      }

      .left-group .separate-part .indicator-arrow {
        color: ${({ p }) => p.technology.hover.indicatorArrow.color};
      }
    }

    .toggle {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    .left-group {
      position: relative;
      display: flex;
      align-items: center;
      gap: ${NOT_FONT_SIZE.xs};
      justify-content: space-between;

      .separate-part {
        display: flex;
        gap: calc(0.6875rem + ${NOT_FONT_SIZE['3xs']});

        .indicator-arrow {
          color: ${({ p }) =>
            p.technology.leftGroup.separatePart.indicatorArrow.color};
          transition: color ${MICROINTERACTION.s} ease-out,
            transform ${MICROINTERACTION.s} ease-out;
        }

        .names {
          display: flex;
          align-items: center;
          gap: ${NOT_FONT_SIZE.xs};

          .name {
            font-size: ${FONT_SIZE.xs};
            line-height: ${FONT_SIZE.xs};
            color: ${({ p }) =>
              p.technology.leftGroup.separatePart.names.name.color};
            transition: color ${MICROINTERACTION.s} ease-out;
          }

          .separator {
            width: ${NOT_FONT_SIZE['6xs']};
            height: ${NOT_FONT_SIZE['2xs']};
            background-color: ${({ p }) =>
              p.technology.leftGroup.separatePart.names.separator.backgroundColor};
            border-radius: ${NOT_FONT_SIZE['6xl']};
          }
        }
      }

      .icons {
        display: flex;
        align-items: center;
        gap: ${NOT_FONT_SIZE['2xs']};

        .icon {
          height: ${NOT_FONT_SIZE.s};
          width: ${NOT_FONT_SIZE.s};
          object-fit: contain;
          transition: filter ${MICROINTERACTION.s} ease-out;
        }

        .separator {
          width: ${NOT_FONT_SIZE['6xs']};
          height: ${NOT_FONT_SIZE['2xs']};
          background-color: ${({ p }) =>
            p.technology.leftGroup.icons.separator.backgroundColor};
          border-radius: ${NOT_FONT_SIZE['6xl']};
        }
      }
    }
  }

  .child-technologies {
    display: flex;
    flex-direction: column;
    gap: ${NOT_FONT_SIZE['3xs']};
    transition: opacity ${MICROINTERACTION.s} ease-out;

    .item {
      display: flex;
      gap: ${NOT_FONT_SIZE['3xs']};

      .bullet-point {
        position: relative;
        width: calc(${NOT_FONT_SIZE.xs} + 0.6875rem * 2);
        height: calc(${NOT_FONT_SIZE.xs} + 0.6875rem * 2);

        .box {
          position: absolute;
          bottom: 50%;
          left: 50%;
          width: ${NOT_FONT_SIZE['2xs']};
          height: ${NOT_FONT_SIZE['2xs']};
          border-width: 0;
          border-left-width: ${NOT_FONT_SIZE['6xs']};
          border-bottom-width: ${NOT_FONT_SIZE['6xs']};
          border-style: solid;
          border-color: ${({ p }) =>
            p.childTechnologies.item.bulletPoint.box.borderColor};
          border-bottom-left-radius: ${NOT_FONT_SIZE['4xs']};
        }
      }
    }
  }
`

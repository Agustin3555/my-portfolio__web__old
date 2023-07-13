import {
  COLOR,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  shadowAdapter,
} from '@/styles'
import styled from '@emotion/styled'

interface SliderStyleProvider {
  controls: {
    navButton: {
      color: string
      hover: {
        backgroundColor: string
      }
    }
    nav: {
      indicatorButton: {
        backgroundColor: string
        hover: {
          backgroundColor: string
        }
        child: {
          index: number
          backgroundColor: string
        }
      }
    }
  }
  description: {
    color: string
  }
}

export const sliderStyleAdapter = (
  darkMode: boolean,
  item: number
): SliderStyleProvider => {
  // #region Auxiliary vars

  // #endregion

  return {
    controls: {
      navButton: {
        color: darkMode ? COLOR.g_4 : COLOR.g_10,
        hover: {
          backgroundColor: darkMode ? COLOR.g_14 : COLOR.g_10,
        },
      },
      nav: {
        indicatorButton: {
          backgroundColor: darkMode ? COLOR.g_14 : COLOR.g_10,
          hover: {
            backgroundColor: darkMode ? COLOR.g_10 : COLOR.g_10,
          },
          child: {
            index: item + 1,
            backgroundColor: darkMode ? COLOR.g_4 : COLOR.g_10,
          },
        },
      },
    },
    description: {
      color: darkMode ? COLOR.g_6 : COLOR.g_10,
    },
  }
}

export const StylizedSlider = styled.div<{ p: SliderStyleProvider }>`
  position: relative;
  width: calc(${NOT_FONT_SIZE['5xl']} - ${NOT_FONT_SIZE.s});
  height: calc(
    ${NOT_FONT_SIZE['4xl']} + ${NOT_FONT_SIZE.s} * 2 + ${FONT_SIZE.s} * 1.5 * 4
  );

  .box-1 {
    position: absolute;
    top: ${NOT_FONT_SIZE['3xl']};
    right: 0;
  }

  .box-2 {
    position: absolute;
    top: ${NOT_FONT_SIZE.m};
    left: calc(${NOT_FONT_SIZE['4xl']} - ${NOT_FONT_SIZE.l});
  }

  .item-container {
    position: absolute;
    top: 0;
    left: 0;
    width: ${NOT_FONT_SIZE['4xl']};
    height: ${NOT_FONT_SIZE['4xl']};
    border-radius: ${NOT_FONT_SIZE.s};
    box-shadow: ${shadowAdapter(2)};
    overflow: hidden;

    .item {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      border-radius: ${NOT_FONT_SIZE.s};
      transition: transform ${MICROINTERACTION.l} ease-out;
    }

    .logo {
      background-color: ${COLOR.a};
    }

    .fade-enter {
      transform: translateX(-100%);
    }

    .fade-enter-active {
      transform: translateX(0);
    }

    .hidden-button {
      position: absolute;
      padding: 0;
      width: ${NOT_FONT_SIZE.l};
      cursor: pointer;
      opacity: 0;
    }

    .left {
      left: 0;
      height: 100%;
    }

    .right {
      right: 0;
      bottom: 0;
      height: calc(100% - ${NOT_FONT_SIZE.xl});
    }
  }

  .description {
    position: absolute;
    left: calc(10.875rem + ${NOT_FONT_SIZE.s});
    bottom: 0;
    color: ${({ p }) => p.description.color};

    .container {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: ${NOT_FONT_SIZE['4xl']};
      height: ${NOT_FONT_SIZE['4xl']};
      padding: ${NOT_FONT_SIZE.s};
      line-height: calc(${FONT_SIZE.s} * 1.5);
      transition: opacity ${MICROINTERACTION.m} ease-out;
    }

    .fade-enter {
      opacity: 0;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-enter-active {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0;
    }
  }

  .controls {
    position: absolute;
    top: calc(${NOT_FONT_SIZE['4xl']} + ${NOT_FONT_SIZE.s});
    display: flex;
    align-items: center;
    gap: ${NOT_FONT_SIZE.s};

    .nav-button {
      padding: ${NOT_FONT_SIZE['3xs']};
      border: none;
      border-radius: ${NOT_FONT_SIZE['3xs']};
      color: ${({ p }) => p.controls.navButton.color};
      background-color: transparent;
      cursor: pointer;
      transition: background-color ${MICROINTERACTION.s} ease-out,
        transform ${MICROINTERACTION.xs} ease-out;

      :hover {
        background-color: ${({ p }) => p.controls.navButton.hover.backgroundColor};
      }

      :active {
        transform: scale(0.9);
      }
    }

    .nav {
      display: flex;
      gap: ${NOT_FONT_SIZE['2xs']};

      .indicator-button {
        width: ${NOT_FONT_SIZE['2xs']};
        height: ${NOT_FONT_SIZE['2xs']};
        padding: 0;
        border: none;
        border-radius: ${NOT_FONT_SIZE['6xl']};
        background-color: ${({ p }) =>
          p.controls.nav.indicatorButton.backgroundColor};
        cursor: pointer;
        transition: width ${MICROINTERACTION.l} ease-out,
          background-color ${MICROINTERACTION.s} ease-out;

        :hover {
          background-color: ${({ p }) =>
            p.controls.nav.indicatorButton.hover.backgroundColor};
        }

        :nth-child(${({ p }) => p.controls.nav.indicatorButton.child.index}) {
          width: ${NOT_FONT_SIZE.s};
          background-color: ${({ p }) =>
            p.controls.nav.indicatorButton.child.backgroundColor};
        }
      }
    }
  }
`

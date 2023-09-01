import {
  COLOR,
  COLOR_BRIGHT_B,
  COLOR_DARK_B,
  FONT,
  FONT_SIZE,
  MEDIA,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
} from '@/styles'
import styled from '@emotion/styled'

const GAP = NOT_FONT_SIZE.s

interface ConstProvider {
  headerGlass: {
    transform: Value
    header: {
      types: {
        gap: Value
        itemC: {
          gap: Value
        }
      }
    }
  }
  slider: {
    hover: {
      headerGlass: {
        transform: Value
      }
    }
  }

  title: {
    color: Value
  }

  DARK_MODE: {
    title: {
      color: Value
    }
  }
}

const cp: ConstProvider = {
  headerGlass: {
    transform: `translate(calc(${GAP} * -1), calc(${GAP} * 3))`,
    header: {
      types: {
        gap: `calc(${GAP} * 0.5)`,
        itemC: {
          gap: `calc(${GAP} * 0.5)`,
        },
      },
    },
  },
  slider: {
    hover: {
      headerGlass: {
        transform: `translate(calc(${GAP} * -1), 0)`,
      },
    },
  },

  title: {
    color: COLOR_BRIGHT_B,
  },

  DARK_MODE: {
    title: {
      color: COLOR_DARK_B,
    },
  },
}

export const Component = styled.div`
  display: grid;

  grid-template:
    'header .' auto
    'slider desc' auto
    'footer desc' auto /
    2fr 1fr;

  gap: ${GAP};
  padding-left: ${GAP};

  // TODO: esta medida es segun se rompa el texto en el grid
  @media (max-width: 78.125rem) {
    grid-template:
      'header'
      'slider'
      'footer'
      'desc';
  }

  @media (max-width: ${MEDIA.xs}) {
    padding-left: 0;
  }

  .header-glass {
    grid-area: header;

    transform: ${cp.headerGlass.transform};
    transition: transform ${MICROINTERACTION.l} ease-in-out;

    .header {
      display: flex;
      flex-direction: column;
      gap: ${FONT_SIZE.s};

      .title {
        font-family: ${FONT.s};
        font-size: ${FONT_SIZE.l};
      }

      .types {
        display: flex;
        gap: ${cp.headerGlass.header.types.gap};

        .item-C {
          display: flex;
          gap: ${cp.headerGlass.header.types.itemC.gap};

          .item {
            color: ${COLOR.b};
          }
        }
      }
    }
  }

  .slider {
    grid-area: slider;

    :hover ~ .header-glass {
      transform: ${cp.slider.hover.headerGlass.transform};
    }
  }

  .footer {
    grid-area: footer;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${GAP};

    .technologies {
      display: flex;
      align-content: flex-start;
      gap: ${FONT_SIZE.s};
      flex-wrap: wrap;
      color: ${COLOR.b};

      .item {
        font-size: ${FONT_SIZE.xs};
      }
    }

    .links {
      display: flex;
      gap: ${GAP};
    }
  }

  .desc {
    grid-area: desc;
  }

  .app[data-dark-mode='true'] & {
    .section__title {
      color: ${cp.DARK_MODE.title.color};
    }
  }
`

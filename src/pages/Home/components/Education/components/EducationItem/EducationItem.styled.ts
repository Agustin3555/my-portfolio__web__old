import {
  COLOR,
  FONT,
  FONT_SIZE,
  MICROINTERACTION,
  NOT_FONT_SIZE,
  Value,
} from '@/styles'
import styled from '@emotion/styled'

const GAP = NOT_FONT_SIZE.s
const ITEM_GAP = NOT_FONT_SIZE.l
const DATE_WIDTH = '4.875rem'
const HEADING_MIN_WIDTH = `calc(${GAP} * 12)`
const DESC_MIN_WIDTH = `calc(${GAP} * 15)`
const POINT_3_PADDING = `calc(${NOT_FONT_SIZE['2xs']} - ${NOT_FONT_SIZE['6xs']})`
export const POINT_2_PADDING = NOT_FONT_SIZE['3xs']
const POINT_1_SIZE = NOT_FONT_SIZE['2xs']
const LINE_WIDTH = NOT_FONT_SIZE['6xs']

interface ConstProvider {
  item: {
    pointer: {
      pointerLine: {
        left: Value
        height: Value
      }
    }
  }

  itemGap: {
    paddingLeft: Value
  }

  MEDIA_74: {
    itemGap: {
      paddingLeft: Value
    }
  }
}

const pointRadius = `calc(${POINT_3_PADDING} + ${POINT_2_PADDING} + ${POINT_1_SIZE} * 0.5)`
const halfLineWidth = `calc(${LINE_WIDTH} * 0.5)`

const cp: ConstProvider = {
  item: {
    pointer: {
      pointerLine: {
        left: `calc(50% - ${halfLineWidth})`,
        height: `calc(50% - ${pointRadius})`,
      },
    },
  },

  itemGap: {
    paddingLeft: `calc(${DATE_WIDTH} + ${GAP} + ${pointRadius} + ${halfLineWidth})`,
  },

  MEDIA_74: {
    itemGap: {
      paddingLeft: `calc(${pointRadius} + ${halfLineWidth})`,
    },
  },
}

enum ITEM_L {
  pointer = 'pointer',
  line = 'line',
  date = 'date',
  heading = 'heading',
  desc = 'desc',
  links = 'links',
}

export const Component = styled.li`
  display: flex;
  flex-direction: column;

  .item {
    display: grid;

    grid-template:
      '${ITEM_L.date} ${ITEM_L.pointer} ${ITEM_L.heading} ${ITEM_L.desc}' auto
      '.              ${ITEM_L.line}    ${ITEM_L.links}   ${ITEM_L.desc}' 1fr /
      ${DATE_WIDTH} auto auto 1fr;

    column-gap: ${GAP};

    .pointer {
      grid-area: ${ITEM_L.pointer};

      position: relative;
      display: flex;
      justify-items: center;
      align-items: center;

      .point-3 {
        padding: ${POINT_3_PADDING};
        border-width: ${LINE_WIDTH};
        border-style: dashed;
        border-color: ${COLOR.g_6};
        border-radius: ${NOT_FONT_SIZE['6xl']};
        transition: border-color ${MICROINTERACTION.s} ease-out;

        .point-1 {
          width: ${POINT_1_SIZE};
          height: ${POINT_1_SIZE};
          border-radius: ${NOT_FONT_SIZE['6xl']};
          background-color: ${COLOR.b};
        }
      }

      .pointer-line {
        position: absolute;
        left: ${cp.item.pointer.pointerLine.left};
        height: ${cp.item.pointer.pointerLine.height};
      }

      .top {
        top: 0;
      }

      .bot {
        bottom: 0;
      }
    }

    .extension-line {
      grid-area: ${ITEM_L.line};

      justify-self: center;
    }

    .date {
      grid-area: ${ITEM_L.date};

      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: ${FONT_SIZE.xs};
    }

    .heading {
      grid-area: ${ITEM_L.heading};

      min-width: ${HEADING_MIN_WIDTH};
      margin-bottom: ${GAP};

      .heading-content {
        display: flex;
        flex-direction: column;
        gap: ${GAP};

        .title {
          font-family: ${FONT.s};
          font-size: ${FONT_SIZE.l};
          line-height: 1.25;
        }

        .subtitle {
          color: ${COLOR.b};
          font-size: ${FONT_SIZE.xs};
        }
      }
    }

    .desc {
      grid-area: ${ITEM_L.desc};

      min-width: ${DESC_MIN_WIDTH};
    }

    .links {
      grid-area: ${ITEM_L.links};

      display: flex;
    }
  }

  .item-gap {
    height: ${ITEM_GAP};
    padding-left: ${cp.itemGap.paddingLeft};

    .gap-line {
      height: 100%;
    }
  }

  .line {
    width: ${LINE_WIDTH};
    background-color: ${COLOR.g_6};
    transition: background-color ${MICROINTERACTION.s} ease-out;
  }

  @media (max-width: 74.375rem) {
    .item {
      grid-template:
        '${ITEM_L.pointer}  ${ITEM_L.date}' auto
        '${ITEM_L.line}     ${ITEM_L.heading}' auto
        '${ITEM_L.line}     ${ITEM_L.desc}' auto
        '${ITEM_L.line}     ${ITEM_L.links}' auto /
        auto auto;

      .date {
        justify-self: flex-start;
      }

      .heading {
        min-width: initial;
        margin-top: calc(${GAP} * 0.5);
      }

      .desc {
        min-width: initial;
        margin-bottom: ${GAP};
      }
    }

    .item-gap {
      padding-left: ${cp.MEDIA_74.itemGap.paddingLeft};
    }
  }

  .app[data-dark-mode='true'] & {
    .item .pointer .point-3 {
      border-color: ${COLOR.g_10};
    }

    .line {
      background-color: ${COLOR.g_10};
    }
  }
`

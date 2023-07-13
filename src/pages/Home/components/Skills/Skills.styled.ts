import { COLOR, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from '@/styles'
import styled from 'styled-components'

interface SkillsStyleProvider {
  description: {
    levels: {
      item: {
        child: {
          index?: number
        }
      }
    }
  }
}

export const skillsStyleAdapter = (
  darkMode: boolean,
  levelSelected: number
): SkillsStyleProvider => {
  // #region Auxiliary vars

  // #endregion

  return {
    description: {
      levels: {
        item: {
          child: {
            index: levelSelected !== 0 ? levelSelected : undefined,
          },
        },
      },
    },
  }
}

export const StylizedSkills = styled.section<{ p: SkillsStyleProvider }>`
  .content {
    display: flex;
    flex-direction: column;
    gap: ${NOT_FONT_SIZE.l};

    .group {
      position: relative;

      .list-container {
        display: flex;
        flex-direction: column;
        gap: ${NOT_FONT_SIZE['3xs']};
      }

      .floating-box {
        position: absolute;
        right: calc((${NOT_FONT_SIZE.l} - ${NOT_FONT_SIZE['3xs']}) * -1);
        bottom: calc(${NOT_FONT_SIZE.s} * 3 * -1);

        .floating-box-glass-container {
          position: relative;
          padding-top: ${NOT_FONT_SIZE.l};
          padding-right: ${NOT_FONT_SIZE.l};

          .fake-selectors {
            position: absolute;
            bottom: 0;
            display: flex;
            width: ${NOT_FONT_SIZE['3xl']};
            height: ${NOT_FONT_SIZE.s};

            .selector {
              width: 100%;
            }
          }
        }
      }
    }

    .description {
      .levels {
        display: flex;
        gap: ${NOT_FONT_SIZE.s};
        padding: 0;
        list-style: none;

        .item {
          display: flex;
          flex-direction: column;
          gap: ${NOT_FONT_SIZE.s};
          transition: opacity ${MICROINTERACTION.m} ease-out,
            transform ${MICROINTERACTION.m} ease-out;

          .level-title {
            color: ${COLOR.b};
            line-height: ${FONT_SIZE.s};
          }
        }

        .item:not(:nth-child(${({ p }) => p.description.levels.item.child.index})) {
          opacity: 0.5;
          transform: scale(0.95);
        }
      }
    }
  }
`

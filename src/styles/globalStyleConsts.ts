import { css } from '@emotion/react'
import { COLOR, NOT_FONT_SIZE } from './enums'

export const BGC_DARK_A = COLOR.g_16
export const BGC_BRIGHT_A = COLOR.g_1

export const BGC_DARK_B = COLOR.g_14
export const BGC_BRIGHT_B = COLOR.g_5

export const COLOR_DARK_A = COLOR.g_4
export const COLOR_BRIGHT_A = COLOR.g_12

export const COLOR_DARK_B = COLOR.g_2
export const COLOR_BRIGHT_B = COLOR.g_14

export enum MEDIA {
  s = '56.25rem',
  m = 'calc(100rem + 4.25rem * 4 + 0.375rem * 3)',
}

export const GLASS_SET = {
  this: css`
    backdrop-filter: blur(15px);
  `,
  refleccion: css`
    background: linear-gradient(
      330deg,
      rgba(160, 160, 160, 0.01875) 25%,
      rgba(160, 160, 160, 0.0375) 75%,
      rgba(160, 160, 160, 0.125) 100%
    );
  `,
  content: css`
    border-width: ${NOT_FONT_SIZE['6xs']};
    border-style: solid;
    border-color: rgba(176, 176, 176, 0.025);
    border-top-color: rgba(176, 176, 176, 0.1);
    border-left-color: rgba(176, 176, 176, 0.05);
  `,
}

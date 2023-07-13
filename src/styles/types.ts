import { COLOR, FONT, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from './enums'
import { SerializedStyles } from '@emotion/react'

export type Font = FONT

export type FontSize = 0 | FONT_SIZE

export type NotFontSize = 0 | NOT_FONT_SIZE

export type Size = FontSize | NotFontSize

export type Color = COLOR

export type Microinteraction = MICROINTERACTION

export type Elevation = 0 | 1 | 2 | 3

export type Knob = 0 | 0.125 | 0.25 | 0.375 | 0.5 | 0.625 | 0.75 | 0.875 | 1

export type Value = number | string | SerializedStyles

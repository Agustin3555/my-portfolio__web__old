import { COLOR, FONT, FONT_SIZE, MICROINTERACTION, NOT_FONT_SIZE } from '..'

export const getCSSVarValue = (
  varKey: string | FONT | FONT_SIZE | NOT_FONT_SIZE | COLOR | MICROINTERACTION
) => {
  // Elimina "var(...)"
  const varName = varKey.slice(4, -1)

  return getComputedStyle(document.documentElement).getPropertyValue(varName)
}

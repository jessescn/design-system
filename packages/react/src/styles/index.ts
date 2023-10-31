import {
  colors,
  radii,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  space,
} from '@jessescn/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    radii,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    space,
  },
})

import { css, CSSObject, SimpleInterpolation } from 'styled-components'

import {
  deviceBreakpoints,
  deviceBreakpointsType,
  mediaQueries,
  Breakpoints,
} from './../types/breakpoints'

const generateMediaQuariesObject = () => {
  const keys = Object.keys(deviceBreakpoints) as deviceBreakpointsType[]

  const queries = keys.reduce((acc, val) => {
    acc[val] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media only screen and (max-width: ${deviceBreakpoints[val].value /
        16}em) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  }, {} as mediaQueries)

  return queries
}

export const breakpoints: Breakpoints = {
  breakpoints: deviceBreakpoints,
  media: generateMediaQuariesObject(),
}

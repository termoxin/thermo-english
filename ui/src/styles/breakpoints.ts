import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'

interface BreakpointData {
  value: number
}

type deviceBreakbointsType = keyof typeof deviceBreakpoints

type mediaQuaries = {
  [key in deviceBreakbointsType]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation
}

interface Breakpoints {
  breakpoints: Record<deviceBreakbointsType, BreakpointData>
  media: mediaQuaries
}

const deviceBreakpoints = {
  mobile: { value: 450 },
  tablet: { value: 600 },
  desktop: { value: 900 },
}

const generateMediaQuariesObject = () => {
  const keys = Object.keys(deviceBreakpoints) as deviceBreakbointsType[]

  const mediaQueries = keys.reduce((acc, val) => {
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
  }, {} as mediaQuaries)

  return mediaQueries
}

export const breakpoints: Breakpoints = {
  breakpoints: deviceBreakpoints,
  media: generateMediaQuariesObject(),
}

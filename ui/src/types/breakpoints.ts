import {
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'

interface BreakpointData {
  value: number
}

export type deviceBreakpointsType = keyof typeof deviceBreakpoints

export type mediaQueries = {
  [key in deviceBreakpointsType]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation
}

export interface Breakpoints {
  breakpoints: Record<deviceBreakpointsType, BreakpointData>
  media: mediaQueries
}

export const deviceBreakpoints = {
  mobile: { value: 450 },
  tablet: { value: 600 },
  desktop: { value: 900 },
}

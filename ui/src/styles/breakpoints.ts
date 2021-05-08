import { css, FlattenSimpleInterpolation } from 'styled-components'

interface BreakpointData {
  value: number
}

interface Breakpoints {
  breakpoints: Record<string, BreakpointData>
  media?: Record<string, (...args: any) => FlattenSimpleInterpolation>
}

export const breakpoints: Breakpoints = {
  breakpoints: { mobile: { value: 450 }, desktop: { value: 900 } },
}

breakpoints.media = {}

Object.keys(breakpoints).map((bp) => {
  if (breakpoints.media) {
    breakpoints.media[bp] = (...args: any) => {
      const styles = css`
        @media only screen and (max-width: ${breakpoints.breakpoints[bp].value /
          16}em) {
          ${css(args[0], ...args.slice(1))}
        }
      `

      return styles
    }
  }
})

export default breakpoints

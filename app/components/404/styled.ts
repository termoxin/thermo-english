import styled, { css } from 'styled-components'

import { Heading, breakpoints } from 'ui'

const positionStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  height: 100%;
  width: 100%;
`

export const NotFoundContainer = styled.div`
  ${positionStyles}
`

export const NotFoundBannerContainer = styled.div`
  ${positionStyles}

  height: 100%;
  width: 100%;

  ${Heading} {
    font-size: 7.2rem;
    font-weight: 400;
    margin: 0;

    ${breakpoints.media.tablet`
      font-size: 5.6rem;
    `}
  }

  ${breakpoints.media.tablet`
      svg {
        transform: scale(0.8);
      }
    `}

  ${breakpoints.media.mobile`
      svg {
        transform: scale(0.6);
      }
    `}
`

export const LogoContainer = styled.div`
  align-self: flex-start;
`

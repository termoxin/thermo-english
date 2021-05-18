import styled, { css } from 'styled-components'
import { Paragraph, breakpoints } from 'ui'

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.media.smallDesktop`
    flex-direction: column;
  `}
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;

  ${Paragraph} {
    font-size: 2.4rem;
    cursor: pointer;
    color: ${({ theme }) => theme.button.background.black};
  }

  button {
    width: 240px;
  }

  ${breakpoints.media.smallDesktop`
    margin-top: 20px;
  `}

  ${breakpoints.media.tablet`
    button:nth-child(2) {
      margin-top: 10px;
    }

    flex-direction: column;
  `}
`

export const Dots = styled.span`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-image: radial-gradient(#000 2px, transparent 2px),
    radial-gradient(#000 2px, transparent 2px),
    radial-gradient(#000 2px, transparent 2px);
  background-position: center -7px, center center, center 7px;

  ${breakpoints.media.tablet`
    display:none;
  `}
`

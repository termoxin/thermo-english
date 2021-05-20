import styled from 'styled-components'
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

  ${Paragraph} {
    font-size: 2.4rem;
    cursor: pointer;
    color: ${({ theme }) => theme.button.background.black};
  }

  button {
    width: 24rem;
    margin-right: 8px;
  }

  ${breakpoints.media.smallDesktop`
    margin-top: 2rem;
  `}

  ${breakpoints.media.tablet`
    button:nth-child(2) {
      margin-top: 1rem;
    }

    flex-direction: column;
  `}
`

export const Dots = styled.span`
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;

  background-image: radial-gradient(#000 2px, transparent 2px),
    radial-gradient(#000 2px, transparent 2px),
    radial-gradient(#000 2px, transparent 2px);
  background-position: center -7px, center center, center 7px;

  ${breakpoints.media.tablet`
    display:none;
  `}
`

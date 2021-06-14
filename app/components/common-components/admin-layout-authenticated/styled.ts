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

  button {
    width: 24rem;
    margin-right: 0.8rem;
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

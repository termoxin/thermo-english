import styled from 'styled-components'
import { Paragraph } from 'ui'

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`

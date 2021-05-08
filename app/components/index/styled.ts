import styled from 'styled-components'
import { Heading, Info, breakpoints } from 'ui'

export const LogoContainer = styled.div``

export const IndexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  ${Heading} {
    ${breakpoints.media.tablet`
      font-size: 24px;
    `}

    span {
      color: ${({ theme }) => theme.logo.color};
    }
  }

  ${LogoContainer} {
    align-self: flex-start;
    margin-top: 20px;
    order: 2;

    svg {
      cursor: pointer;
    }

    ${breakpoints.media.tablet`
      order: 1;
    `}
  }
`

export const Container = styled.form`
  position: relative;
  top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  order: 1;

  ${Info} {
    color: #b5b5b5;
  }

  ${breakpoints.media.tablet`
    order: 2;
    height: 560px;
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
`

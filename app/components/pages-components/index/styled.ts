import styled from 'styled-components'
import { Heading, Info, BaseLabel, breakpoints } from 'ui'

export const LogoContainer = styled.div``

export const IndexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100%;

  ${breakpoints.media.tablet`
    height: auto;
  `}

  ${Heading} {
    ${breakpoints.media.tablet`
      font-size: 2.4rem;
    `}

    span {
      color: ${({ theme }) => theme.logo.color};
    }
  }

  ${LogoContainer} {
    align-self: flex-start;
    margin-top: 2rem;
    order: 2;

    svg {
      cursor: pointer;
    }

    ${breakpoints.media.tablet`
      order: 1;
    `}
  }
`

export const Form = styled.form`
  position: relative;
  top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 55rem;
  order: 1;

  ${Info} {
    color: #b5b5b5;
  }

  ${breakpoints.media.tablet`
    order: 2;
    height: 56rem;
  `}
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 2rem;
  }
`

export const StyledHeading = styled(Heading)`
  &,
  * {
    font-weight: 700;
  }
`

export const FieldError = styled(BaseLabel)`
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
`

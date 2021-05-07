import styled from 'styled-components'
import { Heading, Info, Button } from 'ui'

export const LogoContainer = styled.div``

export const IndexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  ${Heading} {
    font-family: 'Rubik', sans-serif;
    font-weight: bold;

    span {
      color: ${({ theme }) => theme.logo.color};
    }
  }

  ${LogoContainer} {
    align-self: flex-start;
    margin-top: 20px;
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

  ${Info} {
    color: #b5b5b5;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
`

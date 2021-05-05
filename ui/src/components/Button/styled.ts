import styled from 'styled-components'

export const BaseButton = styled.button`
  font-family: 'Amaranth', sans-serif;
  width: 300px;
  height: 70px;
  border: none;
  cursor: pointer;
`

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.button.background.red};
  color: ${({ theme }) => theme.button.color.primary};
  border-radius: 30px;
  font-size: 24px;
`

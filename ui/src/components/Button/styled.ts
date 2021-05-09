import styled from 'styled-components'

export const BaseButton = styled.button`
  font-family: 'Amaranth', sans-serif;
  width: 300px;
  height: 70px;
  border: none;
  cursor: pointer;
`

export const PrimaryButton = styled(BaseButton)`
  border-radius: 30px;
  font-size: 2.4rem;

  background-color: ${({ theme }) => theme.button.background.red};
  color: ${({ theme }) => theme.button.color.primary};
`

export const SquaredButton = styled(BaseButton)`
  font-family: 'Rubik';
  font-size: 2.4rem;
  font-weight: 700;
  height: 52px;
  padding: 12px 40px;

  border-radius: 8px;

  background: ${({ theme }) => theme.button.background.green};
  color: ${({ theme }) => theme.button.color.primary};
`

import styled from 'styled-components'

export const BaseButton = styled.button`
  font-family: 'Amaranth', sans-serif;
  width: 30rem;
  height: 7rem;
  border: none;
  cursor: pointer;
`

export const PrimaryButton = styled(BaseButton)`
  border-radius: 3rem;
  font-size: 2.4rem;

  background-color: ${({ theme }) => theme.button.background.red};
  color: ${({ theme }) => theme.button.color.primary};
`

export const SquaredButton = styled(BaseButton)`
  font-family: 'Rubik';
  font-size: 2.4rem;
  font-weight: 700;
  height: 5.2rem;
  padding: 1.2rem 4rem;

  border-radius: 0.8rem;

  background: ${({ theme }) => theme.button.background.green};
  color: ${({ theme }) => theme.button.color.primary};
`

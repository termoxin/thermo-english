import styled from 'styled-components'

export const BaseInput = styled.input`
  font-weight: 400;

  width: 343px;
  height: 53px;
  box-sizing: border-box;
  border-radius: 12px;
  padding-left: 16px;

  background: ${({ theme }) => theme.input.background};
  color: ${({ theme }) => theme.input.color};
  border: 1px solid #bebab3;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: #78746d;
  }

  &:focus {
    outline: none;
  }
`

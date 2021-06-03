import styled from 'styled-components'

import { LabelContainerStyleProps } from './label.types'

export const LabelContainer = styled.div<LabelContainerStyleProps>`
  display: flex;
  align-items: center;
  width: max-content;

  font-size: 1.2rem;
  font-weight: 700;

  padding: 0.3rem 1.6rem;
  height: 2.4rem;
  border-radius: 1.2rem;

  background: ${({ theme, state }) => theme.label.states[state]};
  color: ${({ theme }) => theme.label.color};
`

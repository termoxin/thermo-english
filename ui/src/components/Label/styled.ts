import styled, { css } from 'styled-components'

import { LabelContainerStyleProps } from './label.types'

const baseLabelStyles = css`
  display: flex;
  align-items: center;
  width: max-content;

  font-size: 1.2rem;
  font-weight: 700;

  padding: 0.3rem 1.6rem;
  height: 2.4rem;
  border-radius: 1.2rem;
`

export const BaseLabel = styled.div`
  ${baseLabelStyles}
`

export const LabelContainer = styled.div<LabelContainerStyleProps>`
  ${baseLabelStyles}
  background: ${({ theme, state }) => theme.label.states[state]};
  color: ${({ theme }) => theme.label.color};
`

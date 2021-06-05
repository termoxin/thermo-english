import styled from 'styled-components'
import { Button } from 'ui'

export const SaveButton = styled(Button).attrs({ variant: 'squared' })``

export const CancelButton = styled(Button).attrs({ variant: 'squared' })`
  background: ${({ theme }) => theme.colors.red};
`

export const SaveAsDraftButton = styled(Button).attrs({ variant: 'squared' })`
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.dark};
`

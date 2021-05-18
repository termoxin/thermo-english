import styled from 'styled-components'
import { Button } from 'ui'

export const FilterButton = styled(Button)`
  background: ${({ theme }) => theme.filterButton.background};
  box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.2);
  border-radius: 65px;
  height: 55px;
  width: 150px;
`

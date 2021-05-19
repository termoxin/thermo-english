import styled from 'styled-components'
import { Button, breakpoints } from 'ui'

export const FilterButton = styled(Button)`
  height: 55px;
  width: 150px;

  background: ${({ theme }) => theme.filterButton.background};
  box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.2);
  border-radius: 65px;
`

export const PostsFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${FilterButton} {
    margin-right: 10px;
  }

  ${breakpoints.media.smallDesktop`
    flex-direction: column;

    input {
      margin-top: 10px;
    }
  `}
`

export const FilterButtonsWrapper = styled.div`
  display: flex;

  ${breakpoints.media.tablet`
    justify-content:center;
    flex-wrap: wrap;

    ${FilterButton} {
      margin-top: 10px;
    }
  `}
`

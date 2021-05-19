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

  input {
    margin-top: 10px;
    align-self: flex-start;
  }

  ${FilterButton} {
    margin-right: 10px;
  }

  ${breakpoints.media.smallDesktop`
    flex-direction: column;

    input {
      margin-top: 40px;
      align-self: center;
    }
  `}
`

export const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;

  ${FilterButton} {
    margin-top: 10px;
  }

  ${breakpoints.media.tablet`
    justify-content:center;
    flex-wrap: wrap;
  `}
`

import styled from 'styled-components'
import { Button, breakpoints } from 'ui'

export const FilterButton = styled(Button)`
  height: 5.5rem;
  width: 15rem;

  background: ${({ theme }) => theme.filterButton.background};
  box-shadow: 0px 8px 87px rgba(0, 0, 0, 0.2);
  border-radius: 6.5rem;
`

export const PostsFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    margin-top: 1rem;
    align-self: flex-start;
  }

  ${FilterButton} {
    margin-right: 1rem;
  }

  ${breakpoints.media.smallDesktop`
    flex-direction: column;

    input {
      margin-top: 4rem;
      align-self: center;
    }
  `}
`

export const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 1rem;

  ${FilterButton} {
    margin-top: 1rem;
  }

  ${breakpoints.media.tablet`
    justify-content:center;
    flex-wrap: wrap;
  `}
`

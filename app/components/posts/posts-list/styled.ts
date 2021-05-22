import styled from 'styled-components'
import { breakpoints } from 'ui'

export const PostsListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 37rem);
  justify-content: space-around;
  row-gap: 3rem;
  column-gap: 1rem;

  ${breakpoints.media.desktop`
    justify-content: space-around;
  `}
`

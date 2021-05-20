import styled from 'styled-components'
import { breakpoints } from 'ui'

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const PostsFilterWrapper = styled.div`
  align-self: flex-end;
  margin: 1rem 0 5rem 0;

  ${breakpoints.media.smallDesktop`
    width: 100%;
  `}
`

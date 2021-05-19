import styled from 'styled-components'
import { PostCardContainer, breakpoints } from 'ui'

export const PostsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${PostCardContainer} {
    margin: 20px 0 30px 0;
  }

  ${breakpoints.media.smallDesktop`
    justify-content: center;
  `}

  ${breakpoints.media.tablet`
    justify-content: center;
  `}
`

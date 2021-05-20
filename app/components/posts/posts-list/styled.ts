import styled from 'styled-components'
import { PostCardContainer, breakpoints } from 'ui'

export const PostsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${PostCardContainer} {
    margin: 2rem 0.5rem 3rem 0.5rem;
  }

  ${breakpoints.media.desktop`
    justify-content: space-around;
  `}

  ${breakpoints.media.smallDesktop`
    justify-content: center;
  `}

  ${breakpoints.media.tablet`
    justify-content: center;
  `}
`

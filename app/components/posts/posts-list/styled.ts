import styled from 'styled-components'
import { PostCardContainer, breakpoints } from 'ui'

export const PostsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${PostCardContainer} {
    margin: 20px 5px 30px 5px;
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

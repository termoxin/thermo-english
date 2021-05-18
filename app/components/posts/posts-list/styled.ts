import styled from 'styled-components'
import { PostCardContainer } from 'ui'

export const PostsListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  ${PostCardContainer} {
    margin: 20px 0 30px 0;
  }
`

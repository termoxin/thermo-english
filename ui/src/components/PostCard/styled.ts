import styled from 'styled-components'

import { Card } from '../Card'
import { Overlay, VideoPlayerContainer } from '../VideoPlayer/styled'
import { Content } from '../WordDetails/styled'

export const PostCardContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 37.1rem;
  height: 31rem;

  ${VideoPlayerContainer}, ${Overlay}, video {
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
  }

  ${Content} {
    width: 37rem;
  }
`

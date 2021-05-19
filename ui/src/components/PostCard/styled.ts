import styled from 'styled-components'
import { breakpoints } from 'ui'

import { Card } from '../Card'
import { Info, Heading } from '../Typography'
import { Overlay, VideoPlayerContainer } from '../VideoPlayer/styled'

export const PostCardContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 37.1rem;
  height: 31rem;

  ${VideoPlayerContainer}, ${Overlay}, video {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 37rem;
  padding: 20px 10px 10px 20px;
`

export const Text = styled(Heading)`
  font-size: 2.4rem;

  span {
    font-size: 1.8rem;
    font-weight: 400;
  }
`
export const Meaning = styled(Info)`
  margin-top: 7px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

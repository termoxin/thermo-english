import styled from 'styled-components'

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
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 37rem;
  padding: 2rem 1rem 1rem 2rem;
`

export const Text = styled(Heading)`
  font-size: 2.4rem;

  span {
    font-size: 1.8rem;
    font-weight: 400;
  }
`
export const Meaning = styled(Info)`
  margin-top: 0.7rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

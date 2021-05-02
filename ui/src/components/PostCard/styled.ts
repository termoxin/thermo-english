import styled from 'styled-components'

import { Card } from '../Card'
import { Overlay, VideoPlayerContainer } from '../VideoPlayer/styled'

export const PostContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  font-family: 'Rubik', sans-serif;
  width: 376px;
  height: 312px;

  ${VideoPlayerContainer}, ${Overlay}, video {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`

export const Content = styled.div`
  height: 100%;
  width: 375px;
  padding: 20px 0 0 20px;
`

export const Text = styled.p`
  font-size: 24px;

  span {
    font-size: 18px;
  }
`
export const Meaning = styled.p`
  font-size: 14px;
  color: #78746d;

  margin-top: 7px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

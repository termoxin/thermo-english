import styled from 'styled-components'

import { VideoPlayer, Card, Label } from 'ui'

export const StyledVideoPlayer = styled(VideoPlayer)`
  margin-top: 5rem;
  width: 93rem;
  height: 55rem;

  img {
    height: auto;
  }

  video,
  img {
    border-radius: 0.8rem;
  }
`

export const PostPageContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const StyledLabel = styled(Label)`
  align-self: flex-end;
`

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Transcript = styled(Card)`
  height: 52.5rem;
  width: 66rem;
  background: #f8f8f8;
  font-size: 3rem;
  padding: 2rem;
  margin-top: 5rem;
`

export const TranscriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  svg {
    transition: 0.3s all;
    align-self: flex-end;
    margin-top: 50px;
    cursor: pointer;

    &:hover {
      transition: 0.3s all;
      transform: scale(1.2);
    }
  }
`

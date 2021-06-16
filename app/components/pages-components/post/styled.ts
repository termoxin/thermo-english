import styled from 'styled-components'

import { VideoPlayer, Card, Label, breakpoints } from 'ui'

export const StyledVideoPlayer = styled(VideoPlayer)`
  margin-top: 5rem;
  width: 100%;
  height: auto;

  img {
    height: auto;
  }

  video,
  img {
    border-radius: 0.8rem;
  }
`

export const PostPageContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  column-gap: 6rem;

  ${breakpoints.media.smallDesktop`
    grid-template-columns: repeat(1, 1fr);
  `}
`

export const StyledLabel = styled(Label)`
  align-self: flex-end;
`

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Transcript = styled(Card)`
  width: 100%;
  height: 100%;
  font-size: 3rem;
  padding: 2rem;
  margin-top: 5rem;
`

export const TranscriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`

export const InteractionsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0 5rem 0;
  width: 100%;

  svg {
    transition: 0.3s all;
    align-self: start;
    cursor: pointer;

    &:hover {
      transition: 0.3s all;
      transform: scale(1.2);
    }
  }
`

export const Transcripts = styled.div`
  padding: 2rem 1rem 1rem 2rem;

  pre {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.body.color};
  }

  pre:last-child {
    margin-top: 3rem;
  }
`

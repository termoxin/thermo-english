import styled from 'styled-components'
import { Button, Card, VideoPlayer, Input, breakpoints } from 'ui'

export const SaveButton = styled(Button).attrs({ variant: 'squared' })`
  width: max-content;
`

export const CancelButton = styled(Button).attrs({ variant: 'squared' })`
  width: max-content;
  background: ${({ theme }) => theme.colors.red};
`

export const SaveAsDraftButton = styled(Button).attrs({ variant: 'squared' })`
  width: max-content;
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.dark};
`

export const VideoAndQuestionsBuilderContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 3rem;
  margin-top: 2rem;

  ${breakpoints.media.smallDesktop`
    margin-top: 5rem;
    grid-template-columns: repeat(1, 100%)
  `}
`

export const StyledVideoPlayer = styled(VideoPlayer)`
  height: auto;
  width: 100%;

  img {
    height: 100%;
  }

  video,
  img {
    border-radius: 0.8rem;
  }
`

export const TextareasContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: auto;
  width: 100%;
  margin-top: 2rem;

  textarea {
    padding: 1.5rem;
    width: 100%;
    height: 10rem;
  }

  textarea:last-child {
    margin-top: 2rem;
  }
`

export const QuestionsBuilderContainer = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 8rem 8rem 5rem 8rem;

  ${breakpoints.media.smallDesktop`
    padding: 5rem 5rem 3rem 5rem;
    margin-top: 2rem;
  `}
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    margin: 5rem 1rem 0 0;
  }
`

export const UploadingCard = styled(Card)`
  height: 100%;
  padding: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FileUploaderContainer = styled.div`
  margin-top: 2rem;
`

export const TranscriptAndTextareasContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`

export const WordInput = styled(Input)`
  margin-bottom: 4rem;
`

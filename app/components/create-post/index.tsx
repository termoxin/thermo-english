import React, { FC } from 'react'

import { PostPageProps } from '../post/post.types'
import {
  SaveButton,
  CancelButton,
  SaveAsDraftButton,
  VideoAndQuestionsBuilderContainer,
  TextareasContainer,
  StyledVideoPlayer,
  QuestionsBuilderContainer,
  ActionButtons,
} from './styled'

import { VideoPlayer, QuestionsBuilder, Input, Card } from 'ui'

export const CreatePostPage: FC<PostPageProps> = () => {
  const videoPlayerProps = {
    src: '/videoSample.mp4',
    previewUrl: '/previewSample.jpeg',
  }

  const questionsBuilderProps = {
    questionText: '',
    reactions: [],
  }

  return (
    <VideoAndQuestionsBuilderContainer>
      <div>
        <StyledVideoPlayer {...videoPlayerProps} />
        <TextareasContainer>
          <Input
            as="textarea"
            placeholder="Enter first transcript (e.g. I'm here)"
          />
          <Input
            as="textarea"
            placeholder="Enter second transcript (e.g. Я здесь)"
          />
        </TextareasContainer>
      </div>
      <QuestionsBuilderContainer>
        <QuestionsBuilder {...questionsBuilderProps} />
        <ActionButtons>
          <SaveButton>Save</SaveButton>
          <CancelButton>Cancel</CancelButton>
          <SaveAsDraftButton>Save as draft</SaveAsDraftButton>
        </ActionButtons>
      </QuestionsBuilderContainer>
    </VideoAndQuestionsBuilderContainer>
  )
}

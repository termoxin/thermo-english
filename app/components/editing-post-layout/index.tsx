import React, { FC, useState } from 'react'
import { PostPageProps } from '../post/post.types'
import {
  SaveButton,
  CancelButton,
  SaveAsDraftButton,
  VideoAndQuestionsBuilderContainer,
  TextareasContainer,
  StyledVideoPlayer,
  QuestionsBuilderContainer,
  UploadingCard,
  ActionButtons,
} from './styled'
import { QuestionsBuilder, Input, FileUploader } from 'ui'

export const EditingPostLayout: FC<PostPageProps> = ({ post }) => {
  const [videoPreview, setVideoPreview] = useState('')

  const videoPlayerProps = {
    src: videoPreview || post.videoUrl,
    previewUrl: post.previewUrl,
  }

  const questionsBuilderProps = {
    questionText: post.question.text,
    reactions: post.question.reactions,
  }

  const [firstLanguageTranscript, secondLanguageTranscript] = post.transcript

  const onSubmitVideo = (data: FileList) => {
    const reader = new FileReader()

    console.log(data)

    reader.readAsDataURL(data[0])

    reader.onloadend = (data) => {
      const result = data?.target?.result as string

      if (result) {
        setVideoPreview(result)
      }
    }
  }

  return (
    <VideoAndQuestionsBuilderContainer>
      <div>
        {videoPlayerProps.src ? (
          <StyledVideoPlayer {...videoPlayerProps} autoPlay />
        ) : (
          <UploadingCard>
            <FileUploader onSubmit={onSubmitVideo} acceptFiles="video/mp4" />
          </UploadingCard>
        )}
        <TextareasContainer>
          <Input
            as="textarea"
            placeholder="Enter first transcript (e.g. I'm here)"
            value={firstLanguageTranscript}
          />
          <Input
            as="textarea"
            placeholder="Enter second transcript (e.g. Я здесь)"
            value={secondLanguageTranscript}
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

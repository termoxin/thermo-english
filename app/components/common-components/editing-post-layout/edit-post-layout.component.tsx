import React, { FC, ChangeEventHandler, useState } from 'react'
import { PostPageProps } from '../../pages-components/post/post.types'
import {
  SaveButton,
  CancelButton,
  SaveAsDraftButton,
  VideoAndQuestionsBuilderContainer,
  TextareasContainer,
  StyledVideoPlayer,
  QuestionsBuilderContainer,
  ActionButtons,
  FileUploaderContainer,
  UploadingCard,
  TranscriptAndTextareasContainer,
  WordInput,
} from './styled'
import { QuestionsBuilder, Input, FileUploader } from 'ui'

export const EditingPostLayout: FC<PostPageProps> = ({
  post,
  onChangeWord,
  onChangeQuestion,
  onChangeReactions,
  onDeleteReaction,
  onChangeFirstTranscript,
  onChangeSecondTranscript,
  onUploadVideo,
  onSave,
  onSaveAsDraft,
  onCancel,
}) => {
  const onSubmitVideo = (data: FileList) => {
    const reader = new FileReader()

    reader.readAsDataURL(data[0])

    reader.onloadend = (data) => {
      const result = data?.target?.result as string

      if (onUploadVideo && result) {
        onUploadVideo(result)
      }
    }
  }

  const onChangeFirstTranscriptHandler: ChangeEventHandler<HTMLInputElement> =
    ({ target }) => {
      if (onChangeFirstTranscript) {
        onChangeFirstTranscript(target.value)
      }
    }

  const onChangeSecondTranscriptHandler: ChangeEventHandler<HTMLInputElement> =
    ({ target }) => {
      if (onChangeSecondTranscript) {
        onChangeSecondTranscript(target.value)
      }
    }

  const onChangeWordHandler: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (onChangeWord) {
      onChangeWord(target.value)
    }
  }

  const videoPlayerProps = {
    src: post.videoUrl,
    previewUrl: post.previewUrl,
  }

  const questionsBuilderProps = {
    questionText: post.question.text,
    reactions: post.question.reactions,
    onChangeQuestion,
    onChangeReactions,
    onDeleteReaction,
  }

  const [firstLanguageTranscript, secondLanguageTranscript] = post.transcript

  return (
    <VideoAndQuestionsBuilderContainer>
      <TranscriptAndTextareasContainer>
        {videoPlayerProps.src ? (
          <>
            <StyledVideoPlayer {...videoPlayerProps} autoPlay />
            <FileUploaderContainer>
              <FileUploader onSubmit={onSubmitVideo} acceptFiles="video/mp4" />
            </FileUploaderContainer>
          </>
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
            onChange={onChangeFirstTranscriptHandler}
          />
          <Input
            as="textarea"
            placeholder="Enter second transcript (e.g. ?? ??????????)"
            value={secondLanguageTranscript}
            onChange={onChangeSecondTranscriptHandler}
          />
        </TextareasContainer>
      </TranscriptAndTextareasContainer>
      <QuestionsBuilderContainer>
        <WordInput
          placeholder="Enter word or phrase (e.g. get, look at)"
          value={post.wordText}
          onChange={onChangeWordHandler}
        />
        <QuestionsBuilder {...questionsBuilderProps} />
        <ActionButtons>
          <SaveButton onClick={() => onSave && onSave()}>Save</SaveButton>
          <CancelButton onClick={() => onCancel && onCancel()}>
            Cancel
          </CancelButton>
          <SaveAsDraftButton onClick={() => onSaveAsDraft && onSaveAsDraft()}>
            Save as draft
          </SaveAsDraftButton>
        </ActionButtons>
      </QuestionsBuilderContainer>
    </VideoAndQuestionsBuilderContainer>
  )
}

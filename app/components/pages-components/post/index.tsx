import React, { FC, useState } from 'react'
import { QuestionReactions, labelStates, WordDetails } from 'ui'
import LikeEyeIcon from 'ui/dist/icons/LikeEye'

import { PostPageProps } from './post.types'
import {
  StyledVideoPlayer,
  PostPageContentContainer,
  PostPageContainer,
  Transcript,
  TranscriptContainer,
  StyledLabel as Label,
  InteractionsBlock,
  Transcripts,
} from './styled'

export const PostPage: FC<PostPageProps> = ({ post }) => {
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null)

  const label = post?.state?.toUpperCase()
  const [firstLanguage, secondLanguage] = post.transcript
  const { transcription, wordText, meaning } = post

  return (
    <PostPageContainer>
      {post.state && <Label state={post.state as labelStates}>{label}</Label>}
      <PostPageContentContainer>
        <StyledVideoPlayer src={post.videoUrl} previewUrl={post.previewUrl} />
        <TranscriptContainer>
          <Transcript>
            <WordDetails
              transcription={transcription}
              text={wordText}
              meaning={meaning}
            />
            <Transcripts>
              <pre>{firstLanguage}</pre>
              <pre>{secondLanguage}</pre>
            </Transcripts>
          </Transcript>
        </TranscriptContainer>
      </PostPageContentContainer>
      <InteractionsBlock>
        <QuestionReactions
          question={post.question.text}
          options={post.question.reactions}
          onAnswer={(answer) => setCurrentAnswer(answer.value)}
          currentAnswer={currentAnswer}
        />
        <LikeEyeIcon width="71" height="68" />
      </InteractionsBlock>
    </PostPageContainer>
  )
}

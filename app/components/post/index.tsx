import React, { FC, useState } from 'react'
import { QuestionReactions } from 'ui'
import LikeEyeIcon from 'ui/dist/icons/LikeEye'

import { PostPageProps } from './post.types'
import {
  StyledVideoPlayer,
  PostPageContainer,
  Transcript,
  LeftSection,
  TranscriptContainer,
} from './styled'

export const PostPage: FC<PostPageProps> = ({ post }) => {
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null)

  return (
    <PostPageContainer>
      <LeftSection>
        <StyledVideoPlayer src={post.videoUrl} previewUrl={post.previewUrl} />
        <QuestionReactions
          question={post.question.text}
          options={post.question.reactions}
          onAnswer={(answer) => setCurrentAnswer(answer.value)}
          currentAnswer={currentAnswer}
        />
      </LeftSection>
      <TranscriptContainer>
        <Transcript>
          <p>{post.transcript[0]}</p>
          <p>{post.transcript[1]}</p>
        </Transcript>
        <LikeEyeIcon width="71" height="68" />
      </TranscriptContainer>
    </PostPageContainer>
  )
}

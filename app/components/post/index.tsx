import React, { FC, useState } from 'react'
import { QuestionReactions } from 'ui'
import LikeEyeIcon from 'ui/dist/icons/LikeEye'

import { PostPageProps } from './post.types'
import {
  StyledVideoPlayer,
  PostPageContentContainer,
  PostPageContainer,
  Transcript,
  LeftSection,
  TranscriptContainer,
  StyledLabel as Label,
} from './styled'

export const PostPage: FC<PostPageProps> = ({ post }) => {
  const [currentAnswer, setCurrentAnswer] = useState<string | null>(null)

  const label = post.state.toUpperCase()

  return (
    <PostPageContainer>
      <Label state={post.state}>{label}</Label>
      <PostPageContentContainer>
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
      </PostPageContentContainer>
    </PostPageContainer>
  )
}
